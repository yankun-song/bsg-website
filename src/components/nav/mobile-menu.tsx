import {
  Badge,
  Button,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Slide,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";

import MenuIcon from "@mui/icons-material/Menu";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import MailIcon from "@mui/icons-material/Mail";
import MoreIcon from "@mui/icons-material/More";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FlareIcon from "@mui/icons-material/Flare";
import { AccountCircle, BusinessCenter } from "@mui/icons-material";
import { styles } from "../../theme/Theme";
import "./style.scss";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SchoolIcon from "@mui/icons-material/School";
import AppsIcon from "@mui/icons-material/Apps";

const MobileMenu = (props: any) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  const { t, i18n } = useTranslation("content");

  const { context, contextUpdate, forceUpdate } = useContext(UserContext);

  const theme = useTheme();
  const classes: any = styles(theme);

  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const routeTo = (route: string) => {
    history.push(route);
    handleMenuClose();
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <>
      <Hidden mdDown>
        <div className="section">
          <IconButton
            className="navButton"
            aria-label="profile"
            aria-haspopup="true"
            color="inherit"
            onClick={handleProfileMenuOpen}
          >
            <AccountCircle /> {context.user?.linkedInFirstname}
          </IconButton>
        </div>
      </Hidden>

      <Hidden mdUp>
        <div className="section">
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MenuIcon color="secondary" style={{ width: 36, height: 36 }} />
          </IconButton>
        </div>
      </Hidden>

      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem
          onClick={() => {
            routeTo("/home");
          }}
        >
          <IconButton aria-label="iLab" color="inherit" className="navButton">
            <AppsIcon /> Services
          </IconButton>
        </MenuItem>

        <MenuItem
          onClick={() => {
            routeTo("/ilab");
          }}
        >
          <IconButton aria-label="iLab" color="inherit" className="navButton">
            <EmojiObjectsIcon /> iLab
          </IconButton>
        </MenuItem>

        <MenuItem
          onClick={() => {
            routeTo("/training");
          }}
        >
          <IconButton
            aria-label="Training"
            color="inherit"
            className="navButton"
          >
            <SchoolIcon /> Training
          </IconButton>
        </MenuItem>

        <MenuItem
          onClick={() => {
            routeTo("/jobs");
          }}
        >
          <IconButton
            aria-label="Training"
            color="inherit"
            className="navButton"
          >
            <BusinessCenterIcon /> Jobs
          </IconButton>
        </MenuItem>

        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            className="navButton"
            aria-label="user profile"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle /> {context.user?.linkedInFirstname}
          </IconButton>
        </MenuItem>
      </Menu>

      <Menu
        elevation={0}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        id={menuId}
        keepMounted={false}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {context.user.authorized ? (
          <MenuItem
            onClick={() => {
              routeTo("/sign-out");
            }}
          >
            Sign out
          </MenuItem>
        ) : (
          <MenuItem
            onClick={() => {
              routeTo("/sign-in");
            }}
          >
            {" "}
            Sign In with LinkedIn
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default MobileMenu;
