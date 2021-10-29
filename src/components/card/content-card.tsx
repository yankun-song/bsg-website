import React, { PropsWithChildren } from "react";
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
import { DContent } from "../../model";
import YouTubeCard from "./youtube-card";
import GoogleSlideCard from "./google-slide-card";
import ImageCard from "./image-card";

const ContentCard = (props: PropsWithChildren<{ content: DContent }>) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  const content = props.content as DContent;

  switch (content.type) {
    case "youtube":
      return (
        <YouTubeCard
          video={content.src}
          title={content.title!}
          description={content.description!}
        />
      );
    case "google-slide":
      return (
        <GoogleSlideCard
          src={content.src}
          title={content.title!}
          description={content.description!}
        />
      );
    case "image":
      return (
        <ImageCard
          src={content.src}
          title={content.title!}
          description={content.description!}
        />
      );
    default:
      return <h1>{content.title}</h1>;
  }
};

export default ContentCard;
