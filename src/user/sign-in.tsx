import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext, UserContextProvider } from "../context/user-context";

import useScrollTrigger from "../hooks/scroll-trigger";
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  Fade,
  Grid,
} from "@mui/material";
import ThemeCard from "../components/card/theme-card";
import "../custom.d.ts";
import "./style.scss";
import Banner from "../components/banner/banner";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Card from "@mui/material/Card";
import { API } from "aws-amplify";
import {
  DJob,
  DLinkedInCompositeProfile,
  DLinkedInEmailHandler,
  DLinkedInProfile,
} from "../model";
import { useHistory } from "react-router-dom";

const SignIn = (props: any) => {
  //const { children, window } = props;
  const { t, i18n } = useTranslation("content");

  const { context, contextUpdate, forceUpdate } = useContext(UserContext);
  const history = useHistory();

  const query = new URLSearchParams(props.location.search);

  const myUri = window.location.href;

  let redirectRoute = query.get("route");

  let redirectUri = query.get("redirect-uri")
    ? query.get("redirect-uri")?.split("?")[0] // get URI without parameters
    : myUri.split("?")[0];

  //const [redirectRoute, setRedirectRoute] = useState(redirectUri);

  const [spinner, setSpinner] = useState(false);

  const [lnCode, setLnCode] = useState(query.get("code"));
  const [lnState, setLnState] = useState(query.get("state"));
  const [lnError, setLnError] = useState(query.get("error"));
  const [lnErrorDescription, setLnErrorDescription] = useState(
    query.get("error_description")
  );

  const myRefWe = useRef<HTMLDivElement>(null);

  const getTrigger = useScrollTrigger();

  const [triggerWe, setTriggerWe] = useState(
    getTrigger(myRefWe.current).trigger
  );

  const oauthLinkedIn = () => {
    let linkedInState = context.setLinkedInState({
      timestamp: new Date().getTime(),
      redirectLink: {
        external: false,
        uri: "",
        //external: true,
        //uri: "https://my.bostonsoftwaregroup.com",
      },
    });

    let oauthLink = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77lih5m97nz8kj&redirect_uri=${context.urlRoot}/sign-in&state=${linkedInState}&scope=r_liteprofile%20r_emailaddress`;

    window.location.href = oauthLink;
  };

  async function callOAuthAPI() {
    const path = "";
    const myInit = {
      headers: {
        Authorization: "", // for public API/json, we set it empty. Otherwise, AWS will use it to valdiate
      },
      body: {
        authorization_code: lnCode,
        redirect_uri: redirectUri,
      },
    };
    let response1 = await API.post("oauth-linkedin-profile", path, myInit);
    //response = await response.json();
    //console.log(JSON.stringify(response1));

    if (response1.status == "ok") {
      //console.log("Before: " + contextUpdate);
      context.setLinkedInProfile(response1.data as DLinkedInCompositeProfile);
      //context.setUser(context.user);
      forceUpdate();
      //console.log("After: " + contextUpdate);
    }
  }

  useEffect(() => {
    window.onscroll = () => {
      setTriggerWe(getTrigger(myRefWe.current).trigger);
    };

    document.title = "BSG:Sign In";
    window.scrollTo(0, 0);

    if (lnCode) {
      callOAuthAPI();
    }
  }, []);

  useEffect(() => {
    if (context.user.authorized) {
      setSpinner(true);

      const timer = setTimeout(() => {
        //let redirectLink = context.user.redirectLink;

        let linkedInState = context.decodeLinkedInState(lnState as string);
        let redirectLink = linkedInState.redirectLink;
        //console.log("linkedInState: " + JSON.stringify(linkedInState));
        setSpinner(false);

        if (redirectLink && redirectLink.uri && redirectLink.uri != "")
          if (redirectLink.external) {
            window.location.href = redirectLink.uri;
          } else {
            history.push(redirectLink.uri);
          }
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [context.user.authorized]);

  return (
    <div>
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
                <h1>Sign In</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h1></h1>
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
          >
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
            >
              {spinner ? (
                <h1 className="center secondary-light">
                  <CircularProgress color="secondary" sx={{ fontSize: 80 }} />
                </h1>
              ) : (
                <></>
              )}
            </Grid>

            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
            >
              {context.user.authorized ? (
                <h2 className="center primary-dark">
                  You have successfully signed in with your LinkedIn Profile.{" "}
                </h2>
              ) : (
                <div>
                  <h2 className="center primary-dark">
                    Please sign in with your Linkedin profile.
                  </h2>
                  <h2 className="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={oauthLinkedIn}
                    >
                      <LinkedInIcon />
                      Sign in with LinkedIn
                    </Button>
                  </h2>
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
