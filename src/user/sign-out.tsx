import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext, UserContextProvider } from "../context/user-context";

import useScrollTrigger from "../hooks/scroll-trigger";
import { Button, Container, Fade, Grid } from "@mui/material";
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

const SignOut = (props: any) => {
  //const { children, window } = props;
  const { t, i18n } = useTranslation("content");

  const { context, contextUpdate, forceUpdate } = useContext(UserContext);
  const history = useHistory();

  const myRefWe = useRef<HTMLDivElement>(null);

  const getTrigger = useScrollTrigger();

  const [triggerWe, setTriggerWe] = useState(
    getTrigger(myRefWe.current).trigger
  );

  useEffect(() => {
    window.onscroll = () => {
      setTriggerWe(getTrigger(myRefWe.current).trigger);
    };

    document.title = "BSG:Sign Out";
    window.scrollTo(0, 0);

    context.signOut();

    forceUpdate();
  }, []);

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
                <h1>Sign Out</h1>
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
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <h1></h1>
              <h2 className="center primary-dark">You have signed out. </h2>
              <h3 className="center primary-dark">
                You may need to visit LinkedIn to completely sign out from
                LinkedIn.{" "}
              </h3>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default SignOut;
