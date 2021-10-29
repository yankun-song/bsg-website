import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./style.scss";
import ICard from "./icard";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import { Container, Grid } from "@mui/material";

const ScrollCard = (props: React.PropsWithChildren<ICard>) => {
  const history = useHistory();
  const routeTo = (route: string) => {
    history.push(route);
  };

  const pixelStep: number = 2; // how many pixels to move at one step
  const timeStep: number = props.scrollTimer as number; // how many miliseconds for each step

  const opacityStep = (total: number, step: number): number => {
    return (step * 1.0 * 2) / (total * 1.0);
  };

  let track = useRef({ index: 0, top: 0, left: 0 });

  //console.log("Length: " + props.messages?.length);
  let transitions = useRef(
    Array(props.messages?.length).fill({ opacity: 1.0 })
  );

  //let [count, setCount] = useState(0);

  //let timer: any = null;
  let [timer, setTimer] = useState(null);

  const viewBoxRef = useRef<HTMLDivElement>(null);
  const actualBoxRef = useRef<HTMLDivElement>(null);

  const vertical = props.scrollDirection == "vertical";
  const horizontal = props.scrollDirection == "horizontal";

  const scrollUp = () => {
    if (viewBoxRef.current) {
      track.current.top -= pixelStep;
      track.current.left = viewBoxRef.current!.offsetLeft;
      if (
        track.current.top <
        viewBoxRef.current!.offsetTop - actualBoxRef.current!.offsetHeight
      ) {
        track.current.top =
          viewBoxRef.current!.offsetTop +
          (viewBoxRef.current!.offsetHeight * 1) / 4;
      }

      let x =
        (1.0 *
          transitions.current.length *
          (viewBoxRef.current!.offsetTop -
            track.current.top +
            viewBoxRef.current!.offsetHeight / 2)) /
        (1.0 * actualBoxRef.current!.offsetHeight);

      let m =
        (0.5 * transitions.current.length * viewBoxRef.current!.offsetHeight) /
        actualBoxRef.current!.offsetHeight;

      transitions.current.forEach((item, index) => {
        let opacity =
          Math.abs(x - index) > m + 1
            ? 0.0
            : 1.0 - (1.0 * Math.abs(index - x)) / m;

        transitions.current[index] = {
          opacity: opacity,
        };
      });

      //setCount(count++);
      //if (count == transitions.current.length) setCount(0);

      track.current.index = x;

      if (track.current.index == transitions.current.length - 1) {
        track.current.index = 0;
      }

      let newTimer: any = setTimeout(() => {
        scrollUp();
      }, timeStep);

      setTimer(newTimer);
    }
  };

  // when scroll horizontally
  const scrollLeft = () => {
    if (viewBoxRef.current) {
      track.current.left -= pixelStep;
      track.current.top = viewBoxRef.current!.offsetTop;
      if (
        track.current.left <
        viewBoxRef.current!.offsetLeft - actualBoxRef.current!.offsetWidth
      ) {
        track.current.left =
          viewBoxRef.current!.offsetLeft +
          (viewBoxRef.current!.offsetWidth * 1) / 4;
      }

      let x =
        (1.0 *
          transitions.current.length *
          (viewBoxRef.current!.offsetLeft -
            track.current.left +
            viewBoxRef.current!.offsetWidth / 2)) /
        (1.0 * actualBoxRef.current!.offsetWidth);

      let m =
        (0.5 * transitions.current.length * viewBoxRef.current!.offsetWidth) /
        actualBoxRef.current!.offsetWidth;

      transitions.current.forEach((item, index) => {
        let opacity =
          Math.abs(x - index) > m + 1
            ? 0.0
            : 1.0 - (1.0 * Math.abs(index - x)) / m;

        transitions.current[index] = {
          opacity: opacity,
        };
      });

      //setCount(count++);
      //if (count == transitions.current.length) setCount(0);

      track.current.index = x;

      if (track.current.index == transitions.current.length - 1) {
        track.current.index = 0;
      }

      let newTimer: any = setTimeout(() => {
        scrollLeft();
      }, timeStep);

      setTimer(newTimer);
    }
  };

  useEffect(() => {
    transitions.current = Array(props.messages?.length).fill({
      opacity: 1.0,
    });
    if (vertical) {
      track.current = {
        index: 0,
        top:
          viewBoxRef.current!.offsetTop +
          (viewBoxRef.current!.offsetHeight * 2) / 3,
        left: viewBoxRef.current!.offsetLeft,
      };

      scrollUp();
    } else if (horizontal) {
      track.current = {
        index: 0,
        left:
          viewBoxRef.current!.offsetLeft +
          (viewBoxRef.current!.offsetWidth * 2) / 3,
        top: viewBoxRef.current!.offsetTop,
      };

      scrollLeft();
    }

    return () => {};
  }, [props.messages?.length]);

  return (
    <div className="scroll-card">
      <CardContent>
        <Container maxWidth="lg">
          <h1 className="center secondary-light">{props.title}</h1>
          <h2 className="center secondary-light">{props.description}</h2>

          <div
            className="scroll-card-content"
            ref={viewBoxRef}
            style={{
              position: "relative",
              height: props.minHeight,
              width: "auto",
              alignContent: "center",
              textAlign: "center",
              padding: 0,
              margin: 0,
            }}
          ></div>
          <div
            ref={actualBoxRef}
            style={{
              position: "absolute",
              top: track.current.top,
              left: track.current.left,
              padding: "0px",
              margin: "0px",
              border: "0px solid blue",
              opacity: 1.0,
              width: "auto",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            <Grid
              container
              wrap="nowrap"
              direction={
                props.scrollDirection === "horizontal" ? "row" : "column"
              }
              justifyContent="center"
              alignItems="stretch"
            >
              {transitions.current.map((item, index) => {
                return (
                  <Container maxWidth="lg">
                    <div
                      key={index}
                      style={{
                        position: "relative",
                        opacity: item.opacity,
                        border: "0px solid maroon",
                        padding: 0,
                        marginLeft: -20,
                        marginRight: 20,
                      }}
                    >
                      <h3 className="secondary-light">
                        {props.icon ? props.icon : ""}
                        {props.messages ? props.messages[index] : ""}
                      </h3>
                    </div>
                  </Container>
                );
              })}
            </Grid>
          </div>
        </Container>
      </CardContent>

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
    </div>
  );
};

export default ScrollCard;
