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
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Hidden } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const ImageCard = ({ src, title, description, route }: ICard) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  return (
    <Card className="image-card">
      <div className="image-responsive">
        <img src={src} alt={title} />
      </div>

      <Hidden mdUp>
        <div className="image-card-control">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              window.open(`${src}`, "_blank");
            }}
          >
            <LaunchIcon /> View Full Screen
          </Button>
        </div>
      </Hidden>

      <CardContent>
        <h2 className="center">{title}</h2>
        <h3 className="center">{description}</h3>
      </CardContent>
      {route ? (
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
      ) : (
        ""
      )}
    </Card>
  );
};

export default ImageCard;
