import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./style.scss";
import { IProgram } from "./icard";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Fab, Grid } from "@mui/material";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import PaypalButton from "../paypal";

const ProgramCard = (props: React.PropsWithChildren<IProgram>) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  return (
    <Card className="testimonial-card" raised>
      <CardContent>
        {props.image && (
          <CardMedia
            component="img"
            alt={props.title}
            image={props.image}
            title={props.title}
          />
        )}

        {props.retailPrice && (
          <h3 className="center">Regular Price: ${`${props.retailPrice}`}</h3>
        )}

        {props.promoPrice && (
          <Fab variant="extended" color="secondary">
            <LoyaltyIcon /> <h3>Now ${`${props.promoPrice}`}</h3>
          </Fab>
        )}

        <h3>{props.children}</h3>
      </CardContent>
      <CardActionArea>
        <CardActions>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignContent="flex-end"
            spacing={2}
          >
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
            >
              <PaypalButton />
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
            >
              <h3 className="secondary-light">
                {props.icon} {props.title}
              </h3>
              <h4>{props.subtitle}</h4>
            </Grid>
          </Grid>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProgramCard;
