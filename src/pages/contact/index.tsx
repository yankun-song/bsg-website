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

const Contact = (props: any) => {
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

    document.title = "BSG:Contact";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ThemeCard
        backgroundImg="https://my-bsg-asset.s3.amazonaws.com/image/theme_note.jpg"
        opacity={0.9}
        title=""
        description=""
        minHeight={400}
      >
        <Container maxWidth="md">
          <h1 className="center secondary-light">Drop us a note.</h1>
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
                  We can typically provide the initial draft solution proposal
                  <span className="secondary-light">
                    within 3 business days
                  </span>{" "}
                  after the initial information gathering meeting.
                </h2>
                <h2>
                  Depending on technology and application domain, sometimes we
                  can demo a Proof-of-Concept or prototype
                  <span className="secondary-light">within a week</span>.
                </h2>
                <h2>
                  Are you a potential partner or professional or student who is
                  interested in working with us?
                </h2>
                <h2>
                  Please provide a little info about your needs, we will get
                  back to you shortly.
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

export default Contact;
