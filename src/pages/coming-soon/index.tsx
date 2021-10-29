import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";

import useScrollTrigger from "../../hooks/scroll-trigger";
import { Container, Fade, Grid } from "@mui/material";
import ThemeCard from "../../components/card/theme-card";
import "../../custom.d.ts";
import "./style.scss";
import Banner from "../../components/banner/banner";
import ContactForm from "../../components/form/contact-form";

const ComingSoon = (props: any) => {
  //const { children, window } = props;
  const { t, i18n } = useTranslation("content");

  const context = useContext(UserContext);

  const myRefWe = useRef<HTMLDivElement>(null);

  const getTrigger = useScrollTrigger();

  const [triggerWe, setTriggerWe] = useState(
    getTrigger(myRefWe.current).trigger
  );

  useEffect(() => {
    window.onscroll = () => {
      setTriggerWe(getTrigger(myRefWe.current).trigger);
    };

    document.title = "BSG:Coming Soon!";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ThemeCard
        backgroundImg="https://my-bsg-asset.s3.amazonaws.com/image/theme_ring.jpg"
        opacity={0.9}
        title=""
        description=""
        minHeight={800}
      >
        <Container maxWidth="md">
          <h2 className="center secondary-light">
            Looks like your curiosity has brought you over to this construction
            site ...
          </h2>

          <h1>
            <br />
            <br />
          </h1>
          <h1 className="center secondary-light">
            Please do come back later to check our progress.{" "}
          </h1>
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
                <h1>Contact Us</h1>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <h2>
                  The page you are interested in viewing is currently under
                  rennovation.
                </h2>
                <h2>
                  Please check back later, or send a quick note to us below.{" "}
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

export default ComingSoon;
