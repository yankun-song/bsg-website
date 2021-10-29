import {
  Container,
  //useScrollTrigger,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../context/user-context";
import useScrollPosition from "../../hooks/scroll-position";
import useScrollTrigger from "../../hooks/scroll-trigger";
//import useScrollTrigger from "../../hooks/scroll-trigger";
import useWindowSize from "../../hooks/window-size";

import "./style.scss";

export interface IBanner {
  trigger?: boolean;
}

const Banner = (props: React.PropsWithChildren<IBanner>) => {
  const { children } = props;
  const { t, i18n } = useTranslation("content");
  const context = useContext(UserContext);

  //let myRef = useRef<HTMLInputElement>(null);

  //const myRef = useRef<HTMLDivElement>(null);

  /**
  const { x, y } = useScrollPosition();
  const { w, h } = useWindowSize();

  const getPosition = () => {
    const offsetTop = myRef && myRef.current ? myRef.current?.offsetTop : 0;
    const offsetHeight =
      myRef && myRef.current ? myRef.current?.offsetHeight : 0;
    return {
      offsetTop,
      offsetHeight,
    };
  };

  const [position, setPosition] = useState(getPosition());

  const handleResize = () => {
    setPosition(getPosition());
  };

  useEffect(() => {
    handleResize();
  }, [myRef.current]);
 */
  /**
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
 
  console.log("YOffset:" + offset);
 **/

  /**
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
   */

  //const trigger = useScrollTrigger(myRef.current);
  //const trigger = useScrollTrigger();
  //console.log("==> offsetTop:" + position.offsetTop);
  //console.log("offsetHeight:" + myRef.current?.offsetHeight);
  //console.log("{x,y} = " + x + "," + y);
  //console.log("{w,h}=" + w + "," + h);
  //const trigger = myRef.current
  //  ? y > position.offsetTop - h &&
  //    y < position.offsetTop + position.offsetHeight / 4
  //  : false;

  //const [trigger, setTrigger] = useState(props.trigger);

  //console.log("{banner.trigger}}=" + props.trigger);

  return (
    <div className="banner">
      <Container maxWidth="md">
        <div>{props.children}</div>
      </Container>
    </div>
  );
};

export default Banner;
