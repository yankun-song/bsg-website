import {
  Container,
  Fab,
  Fade,
  Grid,
  Paper,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
//import { UserContext } from "../../context/user-context";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./style.scss";
import { Link, useHistory } from "react-router-dom";
import QRCode from "../qrcode";

export default function Footer(props: any) {
  const trigger = useScrollTrigger({ target: window ? window : undefined });
  const { t, i18n } = useTranslation("content");

  const history = useHistory();

  let uri = window.location.href;

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      uri = window.location.href;
    });
  }, []);

  return (
    <Fade in={trigger} timeout={4000}>
      <div className="footer">
        <Container>
          <Grid container spacing={8} justifyContent="flex-start">
            <Grid item xs={12} sm={4}>
              <h2>Boston Downtown</h2>
              <h3>
                One Boston Place
                <br />
                Suite 2600
                <br /> Boston, MA 02108
                <br /> USA
              </h3>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h2>Other Locations</h2>
              <h3>
                Looking for global or local partnership & support?
                <br />
                <a
                  href="#"
                  onClick={() => {
                    history.push("/contact-us");
                  }}
                >
                  Contact us today
                </a>
                .
              </h3>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              alignContent="flex-start"
              justifyContent="flex-start"
            >
              <h2>
                Follow Us
                <br />
                <a
                  href="https://www.linkedin.com/company/boston-software-group"
                  target="_blank"
                >
                  <Fab
                    color="secondary"
                    size="medium"
                    aria-label="Sign Up"
                    style={{ margin: 10 }}
                    onClick={() => {}}
                  >
                    <LinkedInIcon style={{ fontSize: 30 }} />
                  </Fab>
                </a>
              </h2>
            </Grid>

            <Grid item xs={12}>
              <div>
                <QRCode text={uri} />
                <h3 className="center">{t("footer.copyright")}</h3>
                <h4 className="center">All Rights Reserved.</h4>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fade>
  );
}
