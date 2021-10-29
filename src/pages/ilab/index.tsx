import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";

import useScrollTrigger from "../../hooks/scroll-trigger";
import { Container, Fade, Grid } from "@mui/material/";
import "../../custom.d.ts";
import "./style.scss";

import Banner from "../../components/banner/banner";
import VideoThemeCard from "../../components/card/video-theme-card";

import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SpeedIcon from "@mui/icons-material/Speed";

import ContactForm from "../../components/form/contact-form";

const ILab = (props: any) => {
  //const { children, window } = props;
  const { t, i18n } = useTranslation("content");

  const { context, contextUpdate, forceUpdate } = useContext(UserContext);

  const myRefWe = useRef<HTMLDivElement>(null);

  const getTrigger = useScrollTrigger();

  const [triggerWe, setTriggerWe] = useState(
    getTrigger(myRefWe.current).trigger
  );

  useEffect(() => {
    document.title = "BSG:iLab";

    window.onscroll = () => {
      setTriggerWe(getTrigger(myRefWe.current).trigger);
    };

    window.scrollTo(0, 0);

    //myApp.user?.setLinkedInFirstName(myApp.user, "Julian");
  }, []);

  return (
    <div>
      <VideoThemeCard
        backgroundVideo="https://my-bsg-asset.s3.amazonaws.com/video/theme-ilab.mp4"
        opacity={0.9}
        title=""
        description=""
        caption="Boston, MA - USA"
        minHeight={800}
      >
        <Container maxWidth="md">
          <h1 className="center secondary-light">
            Together, let's build great things
          </h1>
          <h1>
            <br />
          </h1>
          <h2 className="center secondary-light">
            Pure iLab is our innovation lab focusing on technology research and
            new product development for solving business problems.
          </h2>
          <h1>
            <br />
          </h1>
        </Container>

        <Container maxWidth="md">
          <h1></h1>
          <Grid
            container
            spacing={6}
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
              lg={4}
              justifyContent="center"
              alignContent="center"
            >
              <h1 className="center secondary-light">
                <LightbulbIcon style={{ fontSize: 60 }} />
                <br />
                Innovation
              </h1>
              <h2 className="center primary-light">
                We bring great ideas and form product concepts.
              </h2>
            </Grid>
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
              lg={4}
              justifyContent="center"
              alignContent="center"
            >
              <h1 className="center secondary-light">
                <SpeedIcon style={{ fontSize: 60 }} />
                <br />
                Protoyping
              </h1>
              <h2 className="center primary-light">
                We build Proo-of-Concept and product prototype for A/B testing,
                angel investment and mature it for market.
              </h2>
            </Grid>
            <Grid
              item
              xs={10}
              sm={6}
              md={4}
              lg={4}
              justifyContent="center"
              alignContent="center"
            >
              <h1 className="center secondary-light">
                <DeveloperModeIcon style={{ fontSize: 60 }} />
                <br />
                Development
              </h1>
              <h2 className="center primary-light">
                We help you bring great ideas to life.
              </h2>
            </Grid>
          </Grid>
        </Container>
      </VideoThemeCard>

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
                <h1>Let's explore</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>
                  We can typically provide the intial draft solution proposal
                  <span className="secondary-light">
                    within 3 business days
                  </span>{" "}
                  after the initial meeting. Depending on technology and
                  application domain, sometimes we can demo a Proof-of-Concept
                  prototype{" "}
                  <span className="secondary-light">within a week</span>.
                </h2>
                <h2>
                  Drop us a quick note and let's explore opportunities together.
                </h2>
                <h2>
                  With NDA signed and we will share with you information about
                  our ongoing innovation projects.
                </h2>
                <h2>We love to hear from you too.</h2>
                <h2 className="secondary-light">Contact us today.</h2>
              </Grid>
            </Grid>
          </Banner>
        </div>
      </Fade>

      <div className="center">
        <ContactForm />
      </div>
    </div>
  );
};

export default ILab;
