import React from "react";
import { makeStyles, createStyles } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Input, TextField } from "@mui/material";

import "./style.scss";

const useStyles = () => {
  return makeStyles(
    createStyles({
      root: {
        padding: "1px 1px",
        display: "flex",
        alignItems: "center",
        width: 400,
        height: 40,
        border: "0px solid orange",
      },
      inputBox: {
        marginLeft: 4,
        height: 30,
        padding: 4,
        border: "5px solid orange",
      },
      iconButton: {
        padding: 4,
      },
      divider: {
        height: 18,
        margin: 2,
      },
    })
  );
};

export default function SearchBox() {
  const classes: any = () => {
    return useStyles();
  };

  return (
    <>
      <Paper component="form" className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.inputBox}
          placeholder="Search ..."
          margin="none"
          inputProps={{
            "aria-label": "Search",
            style: {
              padding: 0,
              border: 0,
            },
          }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </>
  );
}
