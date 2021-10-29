import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./style.scss";
import ICard from "./icard";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import LaunchIcon from "@mui/icons-material/Launch";
import { Hidden } from "@mui/material";

const GoogleSlideCard = ({ src, title, description, route }: ICard) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  const [bestView, setBestView] = useState(false);

  useEffect(() => {
    const keyPressed = (event: any) => {
      if (event.keyCode === 27) {
        //Do whatever when esc is pressed
        console.log("Key pressed");
        //if (bestView) {
        setBestView(false);
        //}
      }
    };
    window.addEventListener("keydown", keyPressed);

    return () => {
      window.removeEventListener("keydown", keyPressed);
    };
  }, []);

  return (
    <Card className="google-slide-card">
      <div
        className={
          bestView
            ? "google-slide-responsive-bestview"
            : "google-slide-responsive"
        }
      >
        <iframe
          src={`https://docs.google.com/presentation/d/e/${src}/embed?start=false&loop=false&delayms=3000`}
          frameBorder="0"
          width="1280"
          height="749"
          allowFullScreen
        ></iframe>{" "}
      </div>

      <div
        className={
          bestView ? "google-slide-control-bestview" : "google-slide-control"
        }
      >
        {bestView ? (
          <Hidden mdDown>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setBestView(!bestView);
              }}
            >
              <FullscreenIcon /> Exit Full Screen
            </Button>
          </Hidden>
        ) : (
          <>
            <Hidden mdDown>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  setBestView(!bestView);
                }}
              >
                <FullscreenIcon /> Enter Full Screen View
              </Button>
            </Hidden>

            <Hidden mdUp>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  window.open(
                    `https://docs.google.com/presentation/d/e/${src}/pub?start=false&loop=false&delayms=3000`,
                    "_blank"
                  );
                }}
              >
                <LaunchIcon /> View Full Screen
              </Button>
            </Hidden>
          </>
        )}
      </div>

      <div>
        <h2 className="center">{title}</h2>
        <h3 className="center">{description}</h3>
      </div>

      {route ? (
        <CardActionArea>
          <CardActions>
            <div className="action-button">
              <Button
                variant="outlined"
                size="medium"
                color="secondary"
                startIcon={<ArrowForwardIosOutlinedIcon />}
                onClick={() => {
                  routeTo(route);
                }}
              >
                Go
              </Button>
            </div>
          </CardActions>
        </CardActionArea>
      ) : (
        ""
      )}
    </Card>
  );
};

export default GoogleSlideCard;
