import { Container, Button, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./style.scss";
import { Link } from "react-router-dom";
import BSGModal from "../modal/bsg-modal";
//import { ConsoleLogger } from "@aws-amplify/core";

export default function CookieConsent(props: any) {
  const { children, window } = props;
  const { t, i18n } = useTranslation("content");
  const { context, contextUpdate, forceUpdate } = useContext(UserContext);

  const [openPrivacy, setOpenPrivacy] = React.useState(false);

  const [cookieConsent, setCookieConsent] = useState(
    context.user.cookie?.cookiePrivacyConsent
  );

  const [showConsent, setShowConsent] = useState(true);

  const TIMER: number = 5;
  let [countdown, setCountdown] = useState(TIMER);

  useEffect(() => {
    const countDown = () => {
      if (cookieConsent != "Y" && cookieConsent != "N" && showConsent) {
        const timer = setTimeout(() => {
          if (countdown == 0) {
            setShowConsent(false);
          } else {
            setCountdown(countdown--);
            countDown();
          }
        }, 1000);
      }
    };
    countDown();
  }, []);

  return (
    <>
      {cookieConsent != "Y" && cookieConsent != "N" && showConsent ? (
        <div className="cookie-consent">
          <Container maxWidth="md">
            <Grid
              container
              spacing={2}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid
                item
                xs={12}
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <h3 className="center primary-dark">
                  Please accept our{" "}
                  <a
                    href="#"
                    onClick={() => {
                      setOpenPrivacy(true);
                    }}
                  >
                    privacy & cookie policy
                  </a>{" "}
                  to use this site appropriately.
                  <BSGModal
                    title={context.business?.privacyPolicy?.title}
                    open={openPrivacy}
                    onClose={() => {
                      setOpenPrivacy(false);
                    }}
                  >
                    <Container maxWidth="md">
                      {context.business?.privacyPolicy ? (
                        <div>
                          <h3>{context.business?.privacyPolicy.description}</h3>
                          {context.business?.privacyPolicy.content?.map(
                            (keyValue, index) => (
                              <div key={`policy-${index}`}>
                                <h2>{keyValue.key}</h2>
                                <h3>{keyValue.value} </h3>
                              </div>
                            )
                          )}
                        </div>
                      ) : (
                        <div>NO EXIST My name is: {context.user.language}</div>
                      )}
                    </Container>
                  </BSGModal>
                </h3>
              </Grid>

              <Grid
                item
                xs={12}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  onClick={() => {
                    if (!context.user.cookie) {
                      context.user.cookie = {};
                    }
                    context.user.cookie.cookiePrivacyConsent = "Y";
                    context.setBSGCookies();
                    setCookieConsent("Y");
                  }}
                >
                  Accept
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="warning"
                  onClick={() => {
                    setCookieConsent("N");
                  }}
                >
                  Decline :{countdown}
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
