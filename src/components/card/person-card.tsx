import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./style.scss";
import { IPerson } from "./icard";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Avatar, Box, CardHeader, IconButton, useTheme } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styles } from "../../theme/Theme";

const PersonCard = (props: React.PropsWithChildren<IPerson>) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  //const theme = useTheme();
  //const classes = styles(theme);

  return (
    <Card className="testimonial-card" raised>
      <CardHeader
        avatar={
          props.picture ? (
            <Avatar
              alt={`${props.fname} ${props.lname}`}
              src={props.picture}
              className="avatar"
            />
          ) : (
            <Avatar
              aria-label="person"
              className="avatar"
            >{`${props.fname.substr(0, 1)}${props.lname.substr(0, 1)}`}</Avatar>
          )
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${props.fname} ${props.lname}`}
        subheader=""
      />
      <CardActionArea>
        <CardContent>
          <h3 className="center">
            {props.icon} {props.title}
          </h3>
          <h3 className="center secondary-light">{props.subtitle}</h3>

          <h3>{props.children}</h3>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className="action-button">
          {props.route ? (
            <Button
              variant="outlined"
              size="medium"
              color="secondary"
              startIcon={<ArrowForwardIosOutlinedIcon />}
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
      </CardActions>
    </Card>
  );
};

export default PersonCard;
