import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./style.scss";
import ICard from "./icard";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const CountCard = ({ title, number, unit, description, route }: ICard) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  let [count, setCount] = useState(0);

  let timer: any = null;

  const countUp = () => {
    if (!number) return;

    setCount(count++);
    if (count > number) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        countUp();
      }, 100);
    }
  };

  useEffect(() => {
    //timer = setTimeout(() => countUp(), 10);
    //
    countUp();
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Card className="count-card" raised>
        <CardContent>
          <div>
            <h2 className="center secondary-light">{title}</h2>
            <h1 className="center secondary-light">
              {`${count}`} {unit ? unit : ""}
            </h1>
            <h3>{description}</h3>
          </div>
        </CardContent>

        <CardActions>
          <div className="action-button">
            {route ? (
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
            ) : (
              ""
            )}
          </div>
        </CardActions>
      </Card>
    </>
  );
};

export default CountCard;
