import { Container, Fade, Grid, Paper, useScrollTrigger } from "@mui/material";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";

import "./style.scss";

export default function Slide(props: any) {
  const { t, i18n } = useTranslation("content");
  const context = useContext(UserContext);

  return (
    <div className="footer">
      <Container>
        <Grid container spacing={8} justifyContent="center">
          <Grid item xs={12}>
            <div>Slide</div>
            {props.children}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
