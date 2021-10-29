import React from "react";

import { useHistory } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./style.scss";
import ICard from "./icard";
import { Hidden } from "@mui/material";

const ThemeCard = (props: React.PropsWithChildren<ICard>) => {
  const history = useHistory();

  const routeTo = (route: string) => {
    history.push(route);
  };

  return (
    <div
      className="theme-card"
      style={{
        minHeight: `${props.minHeight}px`,
        height: "100%",
      }}
    >
      <div className="theme-card-background">
        <div
          style={
            props.backgroundImg
              ? {
                  position: "relative",
                  backgroundImage: `url(${props.backgroundImg})`,
                  backgroundPosition: "center top",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "100%",
                  minHeight: `${props.minHeight}px`,
                  opacity: props.opacity ? props.opacity : 1,
                }
              : {}
          }
        ></div>
        <div className="theme-card-background-buffer"></div>
      </div>

      <Hidden mdDown>
        <div className="theme-card-caption">{props.caption}</div>
      </Hidden>
      <div className="theme-card-content">
        <div>
          {props.image && (
            <CardMedia
              component="img"
              alt={props.title}
              image={props.image}
              title={props.title}
            />
          )}
          <h1 className="primary-light center">{props.title}</h1>
          <div>{props.children}</div>
        </div>
        <div className="action-botton">
          {props.route ? (
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => {
                routeTo(props.route as string);
              }}
            >
              Go
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeCard;
