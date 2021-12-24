import { Card } from "@mui/material";
import React from "react";
import classes from "./cards.module.css";
const Cards = (props) => {
  return (
    <Card className={classes.card} key={props.key}>
      {/* <div className={classes.card}> */}
      <img src={props.src} alt=""></img>
      {/* </div> */}
    </Card>
  );
};
export default Cards;
