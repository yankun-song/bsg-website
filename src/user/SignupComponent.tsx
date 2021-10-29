import Amplify, { Auth } from "aws-amplify";
import { makeStyles, createStyles, Theme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
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

// You can get the current config object
const currentConfig = Auth.configure();

console.log(JSON.stringify(currentConfig));

const useStyles = () => {
  makeStyles(
    createStyles({
      root: {
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
      },
      paper: {
        padding: 4,
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

var user: any = {};

export function SignupComponent() {
  const classes: any = () => {
    return useStyles();
  };

  const signup = () => {
    (
      Auth.signUp({
        username: "sinotar4",
        password: "123abcXYZ",
        attributes: {
          email: "sinotar@gmail.com",
        },
      }) as Promise<any>
    ).then(
      (user) => {
        /**
                   * Sample success response
                   * 
                   {
                      "user":
                      {
                        "username":"sinotar4",
                        "pool":
                        {
                          "userPoolId":"us-east-1_0EVwHFPm0",
                          "clientId":"7m39ip0e8kdbtvodk1o04vo0jm",
                          "client":
                          {
                            "endpoint":"https://cognito-idp.us-east-1.amazonaws.com/",
                            "fetchOptions":{}
                          },
                          "advancedSecurityDataCollectionFlag":true,"storage":{"CognitoIdentityServiceProvider.5fel06v2t04quptp2ueg3v8413.julian6866.userData":"{\"UserAttributes\":[{\"Name\":\"sub\",\"Value\":\"de4f49e5-d6b8-4e1b-b268-1677c3109bd1\"},{\"Name\":\"email_verified\",\"Value\":\"true\"},{\"Name\":\"phone_number_verified\",\"Value\":\"false\"},{\"Name\":\"phone_number\",\"Value\":\"+16178636274\"},{\"Name\":\"email\",\"Value\":\"julian6866@gmail.com\"}],\"Username\":\"julian6866\"}","_AMap_labelcanvas":
                          ................
                          ................
                          "subkey:\\\"16\\\"},StyleItem:[{$:{level:\\\"15,16,17,18,19,20\\\",desc:\\\"99,0xffdbe8b3,
                          CfzC}}?y?8)}1/1y}},}S}p1}}o_o3})1}}},}S}p1/7p17pCnccbC,l\\\\\\\"dgd(CfC???}?_?wCbCu}d]{(uoau[)Cfypcn\\\"\"}"},
                          "keyPrefix":"CognitoIdentityServiceProvider.7m39ip0e8kdbtvodk1o04vo0jm","userDataKey":"CognitoIdentityServiceProvider.7m39ip0e8kdbtvodk1o04vo0jm.sinotar4.userData"},"userConfirmed":false,"userSub":"d152c72a-b90f-4059-aadc-89256ce6e309","codeDeliveryDetails":{"AttributeName":"email","DeliveryMedium":"EMAIL","Destination":"s***@g***.com"}}
                   */
        console.log(user + JSON.stringify(user));
      },
      (err) => {
        /**
                   * Sample error response
                   {
                      "code":"UsernameExistsException",
                      "name":"UsernameExistsException",
                      "message":"User already exists"
                    }
                   */
        console.log("Error: " + JSON.stringify(err));
      }
    );

    /**
      try {
            user = Auth.signUp({
                username: 'sinotar',
                password: '123abcXYZ',
                attributes: {
                    email: 'sinotar@gmail.com'
                }
                /**
                username,
                password,
                attributes: {
                    email,          // optional
                    phone_number,   // optional - E.164 number convention
                    // other custom attributes 
                }
                **/
    /** 
              });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
        **/
  };

  return (
    <>
      <div className={classes.root}>
        <h2> Please Sign Up </h2>

        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} className={classes.right}>
                <AccountCircleIcon /> Email:
              </Grid>
              <Grid item xs={12} sm={8} className={classes.left}>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  defaultValue=""
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={4} className={classes.right}>
                <VpnKeyIcon /> Password:
              </Grid>
              <Grid item xs={12} sm={8} className={classes.left}>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={12} className={classes.right}>
                <p>提交申请您必须接受本平台使用用户协议</p>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => signup()}
            >
              Sign Up (Test)
            </Button>
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
