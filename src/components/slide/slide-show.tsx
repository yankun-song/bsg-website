import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Fab,
  Fade,
  Grid,
  IconButton,
  Paper,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import "./style.scss";

export default function SlideShow(props: any) {
  const { t, i18n } = useTranslation("content");
  const context = useContext(UserContext);

  return (
    <div className="slide-show">
      <div className="slide-show-top">
        <IconButton color="secondary" aria-label="close">
          <HighlightOffIcon fontSize="medium" /> CLOSE
        </IconButton>
      </div>

      <Box flexGrow={1}>
        <div className="slide-show-content">
          <h1 className="center">Middle</h1>
          <h3>
            Business Domain Focus Health & Medical Highly regulated industry
            requires special attention to security and compliance. Retail The
            innovative way of engaging customer requires solid & flexible
            backend APIs and services. Finance & Insurance Performance without
            compromising security and high availability. Government Services
            Efficient program management is as equally important as innovative
            design and delivery. Technology Consulting Strategy Consulting &
            Solution Architecture From strategy to implementation, we offer
            solutions to meet project needs at all size. Business application
            (off-the-shelf, or custom built) Integration solutions (API Gateway,
            Microservices) Mobile architecture & solution (native, hybrid)
          </h3>
          <h3>
            Business Domain Focus Health & Medical Highly regulated industry
            requires special attention to security and compliance. Retail The
            innovative way of engaging customer requires solid & flexible
            backend APIs and services. Finance & Insurance Performance without
            compromising security and high availability. Government Services
            Efficient program management is as equally important as innovative
            design and delivery. Technology Consulting Strategy Consulting &
            Solution Architecture From strategy to implementation, we offer
            solutions to meet project needs at all size. Business application
            (off-the-shelf, or custom built) Integration solutions (API Gateway,
            Microservices) Mobile architecture & solution (native, hybrid)
          </h3>
          <h3>
            Business Domain Focus Health & Medical Highly regulated industry
            requires special attention to security and compliance. Retail The
            innovative way of engaging customer requires solid & flexible
            backend APIs and services. Finance & Insurance Performance without
            compromising security and high availability. Government Services
            Efficient program management is as equally important as innovative
            design and delivery. Technology Consulting Strategy Consulting &
            Solution Architecture From strategy to implementation, we offer
            solutions to meet project needs at all size. Business application
            (off-the-shelf, or custom built) Integration solutions (API Gateway,
            Microservices) Mobile architecture & solution (native, hybrid)
          </h3>
          <h3>
            Business Domain Focus Health & Medical Highly regulated industry
            requires special attention to security and compliance. Retail The
            innovative way of engaging customer requires solid & flexible
            backend APIs and services. Finance & Insurance Performance without
            compromising security and high availability. Government Services
            Efficient program management is as equally important as innovative
            design and delivery. Technology Consulting Strategy Consulting &
            Solution Architecture From strategy to implementation, we offer
            solutions to meet project needs at all size. Business application
            (off-the-shelf, or custom built) Integration solutions (API Gateway,
            Microservices) Mobile architecture & solution (native, hybrid)
          </h3>
          <h3>
            Business Domain Focus Health & Medical Highly regulated industry
            requires special attention to security and compliance. Retail The
            innovative way of engaging customer requires solid & flexible
            backend APIs and services. Finance & Insurance Performance without
            compromising security and high availability. Government Services
            Efficient program management is as equally important as innovative
            design and delivery. Technology Consulting Strategy Consulting &
            Solution Architecture From strategy to implementation, we offer
            solutions to meet project needs at all size. Business application
            (off-the-shelf, or custom built) Integration solutions (API Gateway,
            Microservices) Mobile architecture & solution (native, hybrid)
          </h3>
        </div>
      </Box>

      <Box alignItems="flex-end">
        <div className="slide-show-bottom">
          <Fab color="primary" size="large" aria-label="close">
            <HighlightOffIcon />
          </Fab>
        </div>
      </Box>
    </div>
  );
}
