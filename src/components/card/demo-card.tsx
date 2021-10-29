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

const DemoCard = ({ image, title, description, route }: ICard) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  return (
    <>
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt={title}
            height="200"
            image={image}
            title={title}
          />
          <CardContent>
            <h2>{title}</h2>
            <span>{description}</span>
          </CardContent>
        </CardActionArea>
        <CardActions className="action">
          {route ? (
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => {
                routeTo(route);
              }}
            >
              Go
            </Button>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default DemoCard;
