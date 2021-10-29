import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext, UserContextProvider } from "../../context/user-context";

import useScrollTrigger from "../../hooks/scroll-trigger";
import { Button, Container, Fade, Grid } from "@mui/material";
import ThemeCard from "../../components/card/theme-card";
import "../../custom.d.ts";
import "./style.scss";
import Banner from "../../components/banner/banner";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Card from "@mui/material/Card";
import { API } from "aws-amplify";
import {
  DEvent,
  DLinkedInCompositeProfile,
  DLinkedInEmailHandler,
  DLinkedInProfile,
} from "../../model";
import EventCard from "../../components/card/event-card";
import ContactForm from "../../components/form/contact-form";
import { ContextService } from "../../context/context-service";
import { useHistory } from "react-router";
import useDynamicRef from "../../hooks/dynamic-ref";

const Events = (props: any) => {
  //const { children, window } = props;
  const { t, i18n } = useTranslation("content");

  const { context, contextUpdate, forceUpdate } = useContext(UserContext);
  const history = useHistory();

  const id = props.match.params.id;
  const action = props.match.params.action;

  const query = new URLSearchParams(props.location.search);

  const [events, setEvents] = useState([] as DEvent[]);

  const [eventId, setEventId] = useState(id);

  const myRefWe = useRef<HTMLDivElement>(null);

  const [getRef, setRef] = useDynamicRef();

  const getTrigger = useScrollTrigger();

  const [triggerWe, setTriggerWe] = useState(
    getTrigger(myRefWe.current).trigger
  );

  async function getEvents() {
    //const apiName = "users";
    const apiName = "events-bsg";
    const path = "";
    const myInit = {
      headers: {
        //"Cache-Control": "No-Cache",
        "Cache-Control": ContextService.CACHE_MAX_AGE,
        Authorization: "", // for public API/json, we set it empty. Otherwise, AWS will use it to valdiate
      },
    };

    API.get(apiName, path, myInit).then((data) => {
      setEvents(data as DEvent[]);

      if (eventId != undefined && eventId != "") {
        (
          getRef(eventId) as React.RefObject<HTMLDivElement>
        ).current?.scrollIntoView();
      }
    });
  }

  const oauthLinkedIn = () => {
    let linkedInState = context.setLinkedInState({
      timestamp: new Date().getTime(),
      redirectLink: {
        external: false,
        uri: "/events",
        //external: true,
        //uri: "https://my.bostonsoftwaregroup.com",
      },
    });

    let oauthLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77lih5m97nz8kj&redirect_uri=${context.urlRoot}/sign-in&state=${linkedInState}&scope=r_liteprofile%20r_emailaddress`;

    window.location.href = oauthLink;
  };

  useEffect(() => {
    window.onscroll = () => {
      setTriggerWe(getTrigger(myRefWe.current).trigger);
    };

    document.title = "BSG:Events";
    window.scrollTo(0, 0);

    getEvents();
  }, []);

  return (
    <div>
      <ThemeCard
        backgroundImg="https://my-bsg-asset.s3.amazonaws.com/image/theme_boston2.jpg"
        opacity={0.9}
        title=""
        description=""
        minHeight={600}
        caption=""
      >
        <Container maxWidth="md">
          <h1 className="center secondary-light">BSG Professional Community</h1>
        </Container>
      </ThemeCard>

      <Fade in={triggerWe} timeout={4000}>
        <div ref={myRefWe}>
          <Banner>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignContent="flex-start"
            >
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h1>BSG Community</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2 className="secondary-light">
                  Learn · Share · Contribute · Lead
                </h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>

      <div className="primary-light">
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignContent="flex-start"
            spacing={6}
          >
            <Grid
              container
              item
              xs={12}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <h1 className="primary-dark">Upcoming Events</h1>

              {id ? (
                <h3>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      history.push("/events");
                    }}
                  >
                    View All Events
                  </Button>
                </h3>
              ) : (
                ""
              )}
            </Grid>

            {events?.map((event, index) => {
              return event.status == "POSTED" &&
                (!eventId || eventId === event.id) ? (
                <Grid
                  container
                  item
                  xs={12}
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <div
                    ref={setRef(eventId) as React.RefObject<HTMLDivElement>}
                  ></div>
                  <EventCard event={event} action={action}></EventCard>
                </Grid>
              ) : (
                ""
              );
            })}
          </Grid>

          <Grid
            container
            item
            xs={12}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <h4 className="primary-dark">
              We only use your contact information for organizing this event.
            </h4>
          </Grid>
        </Container>
      </div>

      <div>
        <h1></h1>
        <h1></h1>
      </div>

      <div>
        <Banner>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignContent="flex-start"
          >
            <Grid
              container
              item
              xs={12}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <h1>Stay Connected</h1>
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <h2>Please feel free to write us a note and say hi.</h2>
              <h2>
                Let's connect and go from there for immediate and/or future
                opportunities.
              </h2>
            </Grid>
          </Grid>
        </Banner>
      </div>

      <div className="center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Events;
