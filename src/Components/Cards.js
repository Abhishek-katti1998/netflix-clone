import { Card } from "@mui/material";
import React from "react";
import classes from "./cards.module.css";
import { useLocation } from "react-router";
const Cards = (props) => {
  const location = useLocation();
  const higlight = (e) => {
    console.log(location.pathname);
    if (location.pathname === "/search") return;
    props.higlighHandler(e);
  };
  const removeHighlightHandler = () => {
    if (location.pathname === "/search") return;
    props.removeHighlight();
  };

  // console.log("opacity", props.styleArr.opacity);
  return (
    <>
      <img
        src={props.src}
        id={props.index}
        alt=""
        className={classes.image}
        key={props.key}
        onMouseEnter={higlight}
        onMouseLeave={removeHighlightHandler}
        style={{ opacity: props.styleArr?.opacity }}
      ></img>
    </>
  );
};
export default Cards;
