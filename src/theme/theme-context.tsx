import { createContext } from "react";
import { Theme, createStyles, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

import { lightGreen, lime, red } from "@mui/material/colors";
import { AutorenewTwoTone } from "@mui/icons-material";

export const navTheme = createTheme({
  palette: {
    //lightGreen,
    primary: {
      light: "#1e90ff",
      main: "#7986cb",
      dark: "#303f9f",
      contrastText: "#FFF",
    },
    //lime,
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#000",
      contrastText: "#FFF",
    },
  },
});

export const style = () => {
  return makeStyles(
    createStyles({
      root: {
        flexGrow: 1,
      },
      grow: {
        flexGrow: 1,
      },
      toolbar: {
        minHeight: 50,
        color: navTheme.palette.primary.contrastText,
        backgroundColor: navTheme.palette.primary.dark,
        fontSize: navTheme.typography.pxToRem(13),
      },
      navbar: {
        color: "#DDDDDD",
        backgroundColor: "#000",
        fontSize: navTheme.typography.pxToRem(11),
      },
      navButton: {
        //color: '#DDDDDD',
        color: navTheme.palette.primary.contrastText,
        fontSize: navTheme.typography.pxToRem(10),
      },
      navHeader: {
        fontSize: navTheme.typography.pxToRem(10),
        fontWeight: navTheme.typography.fontWeightRegular,
        //color: '#444444', //
        color: navTheme.palette.text.secondary,
        backgroundColor: "#EEEEEE",
        border: "1px solid #DDDDDD",
      },
      navItemText: {
        color: navTheme.palette.primary.dark,
        fontSize: navTheme.typography.pxToRem(10),
        fontWeight: navTheme.typography.fontWeightBold,
      },
      amap_container: {
        width: "100%",
        minHeight: "1200px",
      },
      menuButton: {
        marginRight: navTheme.spacing(2),
        color: "#1e90ff",
      },
      title: {
        display: "none",
        [navTheme.breakpoints.up("sm")]: {
          display: "block",
        },
      },
      search: {
        position: "relative",
        maxHeight: "20px",
        borderRadius: navTheme.shape.borderRadius,
        backgroundColor: navTheme.palette.common.white,
        "&:hover": {
          backgroundColor: navTheme.palette.common.white,
        },
        marginRight: navTheme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [navTheme.breakpoints.up("sm")]: {
          marginLeft: navTheme.spacing(3),
          width: "auto",
        },
      },
      searchIcon: {
        padding: navTheme.spacing(0, 2),
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
        paddingLeft: `calc(1em + ${navTheme.spacing(4)}px)`,
        transition: navTheme.transitions.create("width"),
        width: "100%",
        maxHeight: "20px",
        [navTheme.breakpoints.up("md")]: {
          width: "20ch",
        },
        fontSize: navTheme.typography.pxToRem(11),
      },
      sectionDesktop: {
        display: "none",
        [navTheme.breakpoints.up("md")]: {
          display: "flex",
        },
      },
      sectionMobile: {
        display: "flex",
        [navTheme.breakpoints.up("md")]: {
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
        border: "0px solid orange",
        margin: "auto",
        //maxWidth: 900,
      },
      paper: {
        padding: navTheme.spacing(2),
        textAlign: "center",
        color: navTheme.palette.text.secondary,
      },

      // for card ....
      cardRoot: {
        //maxWidth: 345,
        margin: navTheme.spacing(1),
        border: "0px solid purple",
      },
      cardMedia: {
        height: 0,
        paddingTop: "56.25%", // 16:9
      },
      cardExpand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: navTheme.transitions.create("transform", {
          duration: navTheme.transitions.duration.shortest,
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
        margin: navTheme.spacing(3),
      },
    })
  );
};

export const ThemeContext = createContext({ navTheme, style });
