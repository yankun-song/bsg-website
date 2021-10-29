import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Hidden,
  Slide,
  useScrollTrigger,
  useTheme,
} from "@mui/material";

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import clsx from "clsx";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MapIcon from "@mui/icons-material/Map";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PieChartIcon from "@mui/icons-material/PieChart";
import AppsIcon from "@mui/icons-material/Apps";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RoomIcon from "@mui/icons-material/Room";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HearingIcon from "@mui/icons-material/Hearing";

import { useHistory } from "react-router-dom";
import MobileMenu from "./mobile-menu";
import { styles } from "../../theme/Theme";

import "./style.scss";
import logo from "./logo.png";
import logo_lg from "./logo_lg.png";
import { ApplicationContext } from "../../context/application-context";

const anchor: "bottom" | "left" | "right" | "top" = "left";

const useStyles2 = () => {
  return makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  });
};

const Nav = (props: any) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  const { t, i18n } = useTranslation("content");

  const { context, contextUpdate, forceUpdate } = useContext(UserContext);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: any, open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      //if ((event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const routeToDrawer = (anchor: any, route: string) => {
    history.push(route);

    //toggleDrawer(anchor, false);
    setState({ ...state, [anchor]: false });

    handleClose();
  };

  const history = useHistory();

  //const classes = useStyles();
  const classes2: any = useStyles2();

  const theme = useTheme();
  const classes: any = styles(theme);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null);
  const [anchorElTraining, setAnchorElTraining] = useState<null | HTMLElement>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar className="navbar">
        <Toolbar className="toolbar">
          <Hidden lgDown xsUp>
            <IconButton
              edge="start"
              color="primary"
              aria-label="open drawer"
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            <Button
              className="navButton"
              onClick={() => {
                history.push("/home");
              }}
            >
              <img src={logo} alt={"BSG Logo"} style={{ width: 30 }} />
            </Button>
            Boston Software Group
          </Hidden>

          <Hidden mdDown>
            <Button
              className="navButton"
              onClick={() => {
                history.push("/home");
              }}
            >
              <img src={logo_lg} alt={"BSG Logo"} style={{ height: 36 }} />
            </Button>

            <Button className="navButton" component={RouterLink} to="/home">
              Services
            </Button>

            <Button className="navButton" component={RouterLink} to="/iLab">
              iLab
            </Button>

            <Button className="navButton" component={RouterLink} to="/jobs">
              Jobs
            </Button>

            <Button
              className="navButton"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={(e) => {
                history.push("/training");
                setAnchorElTraining(e.currentTarget);
              }}
            >
              Training
            </Button>
            <Menu
              id="menu-training"
              anchorEl={anchorElTraining}
              keepMounted
              open={Boolean(anchorElTraining)}
              onClose={() => {
                setAnchorElTraining(null);
              }}
            >
              <MenuItem
                onClick={() => {
                  history.push("/career-coaching");
                  setAnchorElTraining(null);
                }}
              >
                Career Coaching
              </MenuItem>
              <MenuItem
                onClick={() => {
                  history.push("/coming-soon");
                  setAnchorElTraining(null);
                }}
              >
                Tech Training
              </MenuItem>
            </Menu>
          </Hidden>

          <Hidden lgDown xsUp>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                className={classes.inputInput}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Hidden>
          <div className="grow"></div>
          <div className="mobile-menu">
            <MobileMenu></MobileMenu>
          </div>
        </Toolbar>

        <Drawer
          anchor={anchor}
          open={state["left"]}
          onClose={toggleDrawer(anchor, false)}
        >
          <div
            className={clsx(classes2.list, {
              [classes2.fullList]: false,
            })}
            role="presentation"
            //onClick={toggleDrawer(anchor, false)}
            //onKeyDown={toggleDrawer(anchor, false)}
          >
            <List>
              <Button
                color="primary"
                onClick={() => {
                  setState({ ...state, [anchor]: false });
                }}
              >
                <CloseIcon />
              </Button>

              <Divider light />
              <ListItem
                button
                key="home"
                onClick={() => {
                  routeToDrawer(anchor, "/home");
                }}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.navItemText}
                  primary="管理中心"
                />
              </ListItem>

              <Divider light />

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.navHeader}
                >
                  <b>管理中心</b>
                </AccordionSummary>
                <AccordionDetails>
                  <Divider light />
                  <List>
                    <ListItem
                      button
                      key="test"
                      onClick={() => {
                        routeToDrawer(anchor, "/test");
                      }}
                    >
                      <ListItemIcon>
                        <AssessmentIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="Test"
                      />
                    </ListItem>
                    <ListItem
                      button
                      key="test11"
                      onClick={() => {
                        routeToDrawer(anchor, "/signin");
                      }}
                    >
                      <ListItemIcon>
                        <AccountBalanceIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="账户中心"
                      />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>

              <ListItem
                button
                key="home1"
                onClick={() => {
                  routeToDrawer(anchor, "/table/summary");
                }}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.navItemText}
                  primary="客户资料"
                />
              </ListItem>

              <ListItem
                button
                key="signin"
                onClick={() => {
                  routeToDrawer(anchor, "/signin");
                }}
              >
                <ListItemIcon>
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.navItemText}
                  primary="流量分析"
                />
              </ListItem>

              <ListItem
                button
                key="test1"
                onClick={() => {
                  routeToDrawer(anchor, "/signin");
                }}
              >
                <ListItemIcon>
                  <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.navItemText}
                  primary="账户中心"
                />
              </ListItem>

              <ListItem
                button
                key="应用管理"
                onClick={() => {
                  routeToDrawer(anchor, "/signin");
                }}
              >
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.navItemText}
                  primary="应用管理"
                />
              </ListItem>

              <ListItem
                button
                key="配额管理"
                onClick={() => {
                  routeToDrawer(anchor, "/signin");
                }}
              >
                <ListItemIcon>
                  <PieChartIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.navItemText}
                  primary="配额管理"
                />
              </ListItem>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.navHeader}
                >
                  <b>系统设置</b>
                </AccordionSummary>
                <AccordionDetails>
                  <Divider light />
                  <List>
                    <ListItem
                      button
                      key="QPS详情"
                      onClick={() => {
                        routeToDrawer(anchor, "/signin");
                      }}
                    >
                      <ListItemIcon>
                        <GraphicEqIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="QPS详情"
                      />
                    </ListItem>

                    <ListItem
                      button
                      key="配额申请记录"
                      onClick={() => {
                        routeToDrawer(anchor, "/signin");
                      }}
                    >
                      <ListItemIcon>
                        <PlaylistAddCheckIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="配额申请记录"
                      />
                    </ListItem>

                    <ListItem
                      button
                      key="工单"
                      onClick={() => {
                        routeToDrawer(anchor, "/signin");
                      }}
                    >
                      <ListItemIcon>
                        <AssignmentIndIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="工单"
                      />
                    </ListItem>

                    <ListItem
                      button
                      key="费用"
                      onClick={() => {
                        routeToDrawer(anchor, "/signin");
                      }}
                    >
                      <ListItemIcon>
                        <MonetizationOnIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="费用"
                      />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>

              <ListItem
                button
                key="消息"
                onClick={() => {
                  routeToDrawer(anchor, "/signin");
                }}
              >
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.navItemText}
                  primary="消息通知"
                />
              </ListItem>

              <ListItem
                button
                key="自定义地图"
                onClick={() => {
                  routeToDrawer(anchor, "/signin");
                }}
              >
                <ListItemIcon>
                  <MapIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.navItemText}
                  primary="自定义地图"
                />
              </ListItem>

              <ListItem
                button
                key="数据可视化"
                onClick={() => {
                  routeToDrawer(anchor, "/dashboard");
                }}
              >
                <ListItemIcon>
                  <VisibilityIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.navItemText}
                  primary="数据可视化"
                />
              </ListItem>

              <ListItem
                button
                key="会员管理"
                onClick={() => {
                  routeToDrawer(anchor, "/member/test");
                }}
              >
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText
                  className={classes.navItemText}
                  primary="会员管理"
                />
              </ListItem>

              <Divider light />

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.navHeader}
                >
                  <b>控制中心</b>
                  <Divider light />
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem
                      button
                      key="signin"
                      onClick={() => {
                        routeToDrawer(anchor, "/signin");
                      }}
                    >
                      <ListItemIcon>
                        <AssignmentIndIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="账户中心"
                      />
                    </ListItem>

                    <ListItem
                      button
                      key="signup"
                      onClick={() => {
                        routeToDrawer(anchor, "/signup");
                      }}
                    >
                      <ListItemIcon>
                        <AssignmentIndIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="账户中心"
                      />
                    </ListItem>
                    <ListItem
                      button
                      key="recipe"
                      onClick={() => {
                        routeToDrawer(anchor, "/recipe");
                      }}
                    >
                      <ListItemIcon>
                        <AssignmentIndIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="recipe"
                      />
                    </ListItem>
                    <ListItem
                      button
                      key="media"
                      onClick={() => {
                        routeToDrawer(anchor, "/media");
                      }}
                    >
                      <ListItemIcon>
                        <AssignmentIndIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="media"
                      />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.navHeader}
                >
                  <b>系统展示</b>
                  <Divider light />
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem
                      button
                      key="amap"
                      onClick={() => {
                        routeToDrawer(anchor, "/amap");
                      }}
                    >
                      <ListItemIcon>
                        <RoomIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="室内定位"
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem
                      button
                      key="academy"
                      onClick={() => {
                        routeToDrawer(anchor, "/academy");
                      }}
                    >
                      <ListItemIcon>
                        <SchoolIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="培训主页"
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem
                      button
                      key="user"
                      onClick={() => {
                        routeToDrawer(anchor, "/signin");
                      }}
                    >
                      <ListItemIcon>
                        <VerifiedUserIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="用户管理"
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem
                      button
                      key="user"
                      onClick={() => {
                        routeToDrawer(anchor, "/accessibility");
                      }}
                    >
                      <ListItemIcon>
                        <HearingIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.navItemText}
                        primary="Accessibility"
                      />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </List>
          </div>
        </Drawer>
      </AppBar>
    </Slide>
  );
};

export default Nav;
