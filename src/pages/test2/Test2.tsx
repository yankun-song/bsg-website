import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";
import { useTheme } from "@mui/material/styles";
import "./style.scss";
import { Button, Container, Grid, Paper } from "@mui/material";

//import { theme, styles } from "../../theme/Theme";

interface Person {
  firstname: string;
  lastname: string;
}

export interface Props {
  text: string;
  /**
     * 
    ok: boolean;
    id?: number;  // ? optional
    fn: (bob: string) => string;
    person: Person;
     */
}

export default function Test2() {
  const { t, i18n } = useTranslation("content");

  const { context, forceUpdate } = useContext(UserContext);
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <h3>My name is: {context.user.language} </h3>
      <h1>{t("welcome.title")}</h1>
      <div className="navHeader">
        <div>This is a test</div>
        <Button>Test Button Style</Button>
      </div>
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
