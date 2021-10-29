import Amplify, { Auth } from "aws-amplify";

import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles, createStyles, Theme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Link } from "react-router-dom";
// You can get the current config object
const currentConfig = Auth.configure();

console.log(JSON.stringify(currentConfig));

const useStyles = () => {
  return makeStyles(
    createStyles({
      root: {
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
      },
      paper: {
        padding: 10,
        textAlign: "center",
        color: "white",
        justifyContent: "center",
      },
      card: {
        minWidth: 275,
        width: 400,
        margin: "auto",
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      },
      right: {
        justifyContent: "top",
        justifyItems: "bottom",
        textAlign: "center",
      },
      left: {
        justifyContent: "bottom",
        justifyItems: "bottom",
        textAlign: "center",
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    })
  );
};

const email: string = "";
const password: string = "";

export default function SignInComponent(props: any) {
  //this.state = { email: this.props.email, password: '' };

  const signIn = () => {
    try {
      /**
            const { user } = await Auth.signUp({
                username: 'sinotar',
                password: '123abcXYZ',
                attributes: {
                    email: 'sinotar@gmail.com'
                }
            });
             */
      console.log("Email: " + email);
      console.log("Password: " + password);
      //console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  const classes: any = () => {
    return useStyles();
  };

  return (
    <>
      <div className={classes.root}>
        <h2> Please Sign In </h2>

        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} className={classes.right}>
                <AccountCircleIcon /> Email:
              </Grid>
              <Grid item xs={12} sm={8} className={classes.left}>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  defaultValue={email}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={4} className={classes.right}>
                <VpnKeyIcon /> Password:
              </Grid>
              <Grid item xs={12} sm={8} className={classes.left}>
                <TextField
                  required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} className={classes.right}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => signIn()}
                >
                  Sign In (Test)
                </Button>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.right}>
                <Link to="/forgot-password">Forgot password? </Link>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.right}>
                <Link to="/signup">Sign Up? </Link>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

/**
 * 
 * 
 * 
 

 CognitoUser {username: "sinotar", pool: CognitoUserPool, Session: null, client: Client, signInUserSession: null, …}

 */
