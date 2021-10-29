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

const YouTubeCard = ({ video, title, description, route }: ICard) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  return (
    <Card className="youtube-card">
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${video}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
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

export default YouTubeCard;
