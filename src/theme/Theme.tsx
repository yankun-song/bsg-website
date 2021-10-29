// use Theme style to define and customerize default behavior for
// material UI component

import { green, red } from "@mui/material/colors";
import { createTheme, Theme } from "@mui/material/styles";
import { makeStyles, createStyles } from "@mui/styles";

let myTheme = createTheme({
  palette: {
    //lightGreen,
    primary: {
      light: "#aaa",
      main: "#f5f5f5",
      dark: "#eeeeee",
      contrastText: "#424242",
    },
    //lime,
    secondary: {
      light: "#80d8ff",
      main: "#40c4ff",
      dark: "#00b0ff",
      contrastText: "#fff",
    },
    warning: {
      light: "#e57373",
      main: "#D23369",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
  },
});

export const theme = createTheme(myTheme, {
  //overrides: {
  // Style sheet name ⚛️
  components: {
    MuiButton: {
      // Name of the rule
      styleOverrides: {
        root: {
          boxShadow: "none",
          //textTransform: "uppercase",
          textTransform: "none",
          cursor: "pointer",
          fontSize: 16,
          padding: "6px",
          margin: "6px",
          border: "1px solid",
          lineHeight: 1.5,
          //background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          borderColor: myTheme.palette.secondary.light, //"#0063cc",
          borderRadius: 4,
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
          /**
          "&:hover": {
            color: myTheme.palette.primary.light,
            backgroundColor: myTheme.palette.secondary.main,
            borderColor: "#0062cc",
            boxShadow: "none",
          },
          "&:active": {
            boxShadow: "none",
            backgroundColor: "#0062cc",
            borderColor: "#005cbf",
          }, */
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
          },
        },
        text: {
          // Some CSS
          border: 0,
          fontSize: 12,
          padding: "0 30px",
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        dotActive: { backgroundColor: "#FF0000" }, // example how to override mobile stepper style
      },
    },
  },
});

export const styles = makeStyles((theme: Theme) => {
  //(theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    avatar: {
      backgroundColor: "white",
    },
    toolbar: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.light,
    },
    navbar: {
      color: "#DDDDDD",
      backgroundColor: "#000",
      fontSize: theme.typography.pxToRem(10),
    },
    navButton: {
      //color: "#DDDDDD",
      color: theme.palette.primary.contrastText,
      fontSize: theme.typography.pxToRem(10),
      background: "#fff",
      border: 0,
    },
    navHeader: {
      fontSize: theme.typography.pxToRem(10),
      fontWeight: theme.typography.fontWeightRegular,
      //color: '#444444', //
      color: theme.palette.text.secondary,
      backgroundColor: "#EEEEEE",
      border: "1px solid #DDDDDD",
    },
    navItemText: {
      color: theme.palette.primary.contrastText,
      fontSize: theme.typography.pxToRem(10),
      fontWeight: theme.typography.fontWeightBold,
    },
    amap_container: {
      width: "100%",
      minHeight: "1200px",
    },
    menuButton: {
      marginRight: 2,
      color: "#1e90ff",
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      maxHeight: "20px",
      borderRadius: theme.shape.borderRadius,
      marginRight: 2,
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: 3,
        width: "auto",
      },
    },
    searchIcon: {
      padding: 2,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#DDDDDD",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      //padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon

      transition: theme.transitions.create("width"),
      width: "100%",
      maxHeight: "20px",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
      fontSize: theme.typography.pxToRem(11),
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },

    // container ...
    containerRoot: {
      textAlign: "center",
      flexGrow: 1,
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 30,
      paddingRight: 30,
      border: "2px solid orange",
      margin: "auto",
      //maxWidth: 900,
    },
    paper: {
      padding: 2,
      textAlign: "center",
      color: theme.palette.text.secondary,
    },

    // for card ....
    card: {
      maxWidth: 345,
      margin: 3,
    },
    actions: {
      display: "flex",
      justifyContent: "center",
    },
    cardRoot: {
      //maxWidth: 345,
      margin: 1,
      border: "0px solid purple",
    },
    cardMedia: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    cardExpand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    cardExpandOpen: {
      transform: "rotate(180deg)",
    },
    cardAvatar: {
      backgroundColor: red[500],
    },
    chartCard: {
      maxWidth: 345,
      width: 345,
      height: 500,
      margin: 3,
    },
  });
});

//export default { theme: theme, styles: styles };
