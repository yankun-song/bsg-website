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
import ThemeCard from "../../components/card/theme-card";
import Three from "../../components/three";
import { useHistory } from "react-router";
import IconCard from "../../components/card/icon-card";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import CodeIcon from "@mui/icons-material/Code";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import SchoolIcon from "@mui/icons-material/School";

const Training = (props: any) => {
  //const { children, window } = props;
  const { t, i18n } = useTranslation("content");

  const history = useHistory();

  const { context, contextUpdate, forceUpdate } = useContext(UserContext);

  const myRefWe = useRef<HTMLDivElement>(null);

  const getTrigger = useScrollTrigger();

  const [triggerWe, setTriggerWe] = useState(
    getTrigger(myRefWe.current).trigger
  );

  useEffect(() => {
    document.title = "BSG:Training";

    window.onscroll = () => {
      setTriggerWe(getTrigger(myRefWe.current).trigger);
    };

    window.scrollTo(0, 0);

    //myApp.user?.setLinkedInFirstName(myApp.user, "Julian");
  }, []);

  return (
    <div>
      <ThemeCard
        backgroundImg="https://my-bsg-asset.s3.amazonaws.com/image/theme_certificate.jpg"
        opacity={1.0}
        title=""
        description=""
        caption="BSG Professional Training Certificate"
        minHeight={1000}
      >
        <Container maxWidth="md">
          <h1 className="center secondary-light">BSG Academy</h1>

          <h2 className="center secondary-light">
            Learn from our real project experience.
          </h2>
          <h1>
            <br />
          </h1>
        </Container>

        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            alignContent="center"
          >
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              justifyContent="center"
            >
              <IconCard
                icon={
                  <CardMembershipIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="Career Coaching"
                description="We accelerate your career development and advancement for professionals at all levels. "
                onClick={() => {
                  history.push("/career-coaching");
                }}
                onClickText="Read more ..."
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              justifyContent="center"
            >
              <IconCard
                icon={<CodeIcon color="secondary" style={{ fontSize: 64 }} />}
                title="SDE Training Camp"
                description="Share our experience to train and develop talents in software development. "
                onClick={() => {
                  history.push("/coming-soon");
                }}
                onClickText="Read more ..."
              />
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              justifyContent="center"
            >
              <IconCard
                icon={
                  <AnalyticsOutlinedIcon
                    color="secondary"
                    style={{ fontSize: 64 }}
                  />
                }
                title="Data Training Camp"
                description="End-to-end hands-on training for data platform, data engineering, data analytics. "
                onClick={() => {
                  history.push("/coming-soon");
                }}
                onClickText="Read more ..."
              />
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              justifyContent="center"
            >
              <IconCard
                icon={<SchoolIcon color="secondary" style={{ fontSize: 64 }} />}
                title="Junior 3D Coding Club"
                description="Club is expected to open for enrollment in January 2022. "
                onClick={() => {
                  history.push("/coming-soon");
                }}
                onClickText="Read more ..."
              />
            </Grid>
          </Grid>
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
                <h1>Learn and Be Curious</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
                alignContent="flex-start"
              >
                <h2 className="secondary-light">
                  ”I was a bit skeptical when I first signed up for this Career
                  Development Bootcamp, wondering how much I could get out of it
                  as I was in my professional career for 7 years. It turned out
                  mind-blowing. The bootcamp was very career driven at all
                  levels, you could find it helpful no matter you are
                  job-seeking, job-changing or trying to level up in your own
                  job. All advice are spot-on and practical. Yujie did a very
                  great job identifying different pain points of every
                  attendees, and assisting everyone with customized solutions.
                  For me, the salary negotiation skills I picked up, definitely
                  helped me to get a higher pay for a new job! ”{" "}
                </h2>

                <h2 className="secondary-light">
                  ― Fan L. (Digital Intelligence Manager)
                </h2>
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

export default Training;
