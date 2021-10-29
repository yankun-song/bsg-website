import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";
import { useTheme } from "@mui/material/styles";
import "./style.scss";
import { Button, Container, Grid, Paper } from "@mui/material";

export default function Test3() {
  const { t, i18n } = useTranslation("content");

  const context = useContext(UserContext);
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <video id="background-video" autoPlay loop muted>
        <source
          src="https://my-bsg-asset.s3.amazonaws.com/video/theme-ilab.mp4"
          type="video/mp4"
        />
      </video>
      <h1>{t("welcome.title")}</h1>
      <div>This is a test</div>
      <Button>Test Button Style</Button>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className="paper">xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className="paper">xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className="paper">xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className="paper">xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className="paper">xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className="paper">xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className="paper">xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
