import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./style.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FmdBadIcon from "@mui/icons-material/FmdBad";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import { Box, Chip, Divider, Grid, Hidden } from "@mui/material";

import { DEvent, DEventRegistration } from "../../model";
import { UserContext } from "../../context/user-context";
import API from "@aws-amplify/api";
import QRCode from "../qrcode";
import useUtils from "../../hooks/utils";

const EventCard = (props: any) => {
  const { context, contextUpdate, forceUpdate } = useContext(UserContext);

  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  const event = props.event as DEvent;
  const action = props.action as string;

  const [registration, setRegistration] = useState<DEventRegistration>({
    firstName: context.user.linkedInFirstname,
    lastName: context.user.linkedInLastname,
    email: context.user.linkedInEmail,
    eventId: event.id,
  });

  const [registrationResponse, setRegistrationResponse] = useState<any>({
    status: "",
  });

  const [daysFromNow] = useUtils();

  async function registerEvent() {
    const api = "event-registration";
    const path = "";
    const myInit = {
      headers: {
        Authorization: "", // for public API/json, we set it empty. Otherwise, AWS will use it to valdiate
      },
      body: {
        data: registration,
      },
    };
    //let data = await API.post(api, path, myInit);
    API.post(api, path, myInit).then((data) => {
      setRegistrationResponse(data);
      setRegistration({});
    });
  }

  const oauthLinkedIn = () => {
    let linkedInState = context.setLinkedInState({
      timestamp: new Date().getTime(),
      redirectLink: {
        external: false,
        uri: `/events/${event.id}/register`,
        //external: true,
        //uri: "https://my.bostonsoftwaregroup.com",
      },
    });

    let oauthLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77lih5m97nz8kj&redirect_uri=${context.urlRoot}/sign-in&state=${linkedInState}&scope=r_liteprofile%20r_emailaddress`;

    window.location.href = oauthLink;
  };

  useEffect(() => {
    if (context.user.authorized && action == "register") {
      registerEvent();
    }
  }, []);

  return (
    <Card className="event-card" raised>
      <div className="event-card-header">
        {event.image && (
          <Box>
            <img src={event.image} width="100%" />
          </Box>
        )}
        <h1></h1>
        <div>
          <QRCode text={`${context.urlRoot}/events/${event.id}`}></QRCode>

          <Chip
            label={event.id}
            size="small"
            onClick={() => {
              history.push(`/events/${event.id}`);
            }}
          />
        </div>
      </div>

      <div className="event-card-content">
        <Hidden mdDown>
          <h1 className="center secondary-light">{event.name}</h1>
          <Divider />
        </Hidden>
        <Hidden mdUp>
          <h2 className="center secondary-light">{event.name}</h2>
          <Divider />
        </Hidden>

        {registrationResponse.status! == "ok" ? (
          <h3 className="center secondary-light">
            <ThumbUpIcon color="secondary" /> Your registration request has been
            submited.
          </h3>
        ) : (
          ""
        )}

        {event.organizer ? (
          <>
            <h2 className="center secondary-light">Organized By</h2>
            <h3 className="center">
              {event.organizer?.map((item, index) => {
                return item.logo ? (
                  <>
                    <img src={item.logo} style={{ height: 40, margin: 0 }} />
                  </>
                ) : (
                  <span key={`organizer-${index}`}>{item.name}</span>
                );
              })}
            </h3>
          </>
        ) : (
          ""
        )}
        {event.sponsor ? (
          <>
            <h2 className="center secondary-light">Sponsored By</h2>
            <h3 className="center">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
              >
                {event.sponsor?.map((item, index) => {
                  return item.logo ? (
                    <div
                      key={index}
                      style={{
                        border: "0px solid maroon",
                        padding: 10,
                      }}
                    >
                      <img src={item.logo} style={{ height: 30, margin: 0 }} />
                    </div>
                  ) : (
                    <span key={`sponsor-${index}`}>{item.name}</span>
                  );
                })}
              </Grid>
            </h3>
          </>
        ) : (
          ""
        )}

        {event.date ? (
          <>
            <h2 className="center secondary-light">Event Date/Time</h2>
            <h3 className="center">
              {event.date} {event.time}
            </h3>
          </>
        ) : (
          ""
        )}
        {event.summary ? (
          <>
            <h2 className="center secondary-light">Event Summary</h2>
            <h3 className="center">
              {event.summary?.map((item, index) => (
                <li key={`summary-${index}`}>{item}</li>
              ))}
            </h3>
          </>
        ) : (
          ""
        )}

        <h3>{props.children}</h3>

        {daysFromNow(new Date(event.date as string)) > 0 ? (
          <h3 className="center info-dark">
            <EventAvailableIcon /> {daysFromNow(new Date(event.date as string))}{" "}
            days from today
          </h3>
        ) : (
          <h3 className="center warning-dark">
            <FmdBadIcon /> This event occurred in the past
          </h3>
        )}

        <h3 className="center">
          {context.user.authorized ? (
            registrationResponse.status! != "ok" ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={registerEvent}
              >
                <LinkedInIcon />
                Register
              </Button>
            ) : (
              <h3 className="center secondary-light">
                <ThumbUpIcon color="secondary" /> Your registration request has
                been submited.
              </h3>
            )
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={oauthLinkedIn}
              disabled={daysFromNow(new Date(event.date as string)) < 0}
            >
              <LinkedInIcon />
              Register with your LinkedIn
            </Button>
          )}
        </h3>
      </div>
    </Card>
  );
};

export default EventCard;
