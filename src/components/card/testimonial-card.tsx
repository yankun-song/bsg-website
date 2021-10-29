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
import AssistantIcon from "@mui/icons-material/Assistant";
import { Box } from "@mui/material";

const TestimonialCard = (props: React.PropsWithChildren<ICard>) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  return (
    <Card className="testimonial-card" raised>
      <Box>
        <CardActionArea>
          <CardContent>
            {props.image ? (
              <img src={props.image} height={50} alt={props.title}></img>
            ) : (
              <span className="center secondary-light">
                <AssistantIcon style={{ width: 80, height: 80 }} />
              </span>
            )}
          </CardContent>
        </CardActionArea>
      </Box>

      <Box flexGrow={1}>
        <h3>{props.children}</h3>
      </Box>

      <Box alignItems="flex-end">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>
            {props.icon} {props.title}
          </h3>
          <h2 className="secondary-light">{props.subtitle}</h2>
        </div>
      </Box>
    </Card>
  );
};

export default TestimonialCard;
