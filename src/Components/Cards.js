import { Card } from "@mui/material";
import React from "react";
import classes from "./cards.module.css";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  backDropState,
  ModelState,
  clickedIndexState,
} from "../Store/action/action";
import { getVedioApi } from "../API/getVedio";
const Cards = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const movies = useSelector((e) => e.movie);
  const higlight = (e) => {
    if (window.innerWidth < 600) return;
    if (location.pathname === "/search") return;
    props.higlighHandler(e);
  };
  const removeHighlightHandler = () => {
    if (window.innerWidth < 600) return;
    if (location.pathname === "/search") return;
    props.removeHighlight();
  };
  const cardClickListner = (event) => {
    if (window.innerWidth < 600) return;
    let index = Number(event.target.id);
    movies.forEach((element) => {
      if (element.genreName === event.target.alt) {
        let data = element.data;
        const renderDetails = data[index];
      }
    });

    dispatch(clickedIndexState({ index: index, genre: event.target.alt }));
    dispatch(ModelState(true));
    dispatch(backDropState(true));
  };
  return (
    <div className={classes.cards}>
      {/* <Card className={classes.card}> */}
      <img
        alt={props.name}
        src={props.src}
        id={props.index}
        className={classes.image}
        key={props.key}
        onMouseEnter={higlight}
        onMouseLeave={removeHighlightHandler}
        style={{ opacity: props.styleArr?.opacity }}
        onClick={cardClickListner}
      ></img>
      {/* </Card> */}
    </div>
  );
};
export default Cards;
