import React from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./style.scss";
import ICard from "./icard";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Box, Container, Grid } from "@mui/material";

const IconCard = (props: React.PropsWithChildren<ICard>) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  return (
    <Card className="icon-card">
      <Box>{props.icon}</Box>
      <Box>
        <h2 className="center secondary-light">{props.title}</h2>
      </Box>

      <Box flexGrow={1}>
        <h3 className="center">{props.description}</h3>
        {props.children}
      </Box>

      <Box alignItems="flex-end">
        <CardActions>
          <div className="action-button">
            {props.route ? (
              <Button
                variant="contained"
                size="small"
                color="secondary"
                startIcon={<ArrowForwardIosOutlinedIcon />}
                onClick={() => {
                  routeTo(props.route as string);
                }}
              >
                {props.routeText}
              </Button>
            ) : (
              ""
            )}

            {props.onClick ? (
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                onClick={() => {
                  props.onClick();
                }}
              >
                {props.onClickText}
              </Button>
            ) : (
              ""
            )}

            {props.linkUrl ? (
              <a href={props.linkUrl} target="_blank">
                {props.linkText}
              </a>
            ) : (
              ""
            )}
          </div>
        </CardActions>
      </Box>
    </Card>
  );
};

export default IconCard;
