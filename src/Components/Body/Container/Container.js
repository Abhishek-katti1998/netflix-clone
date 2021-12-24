import classes from "./Container.module.css";
import React from "react";
import Main from "../../main/main";
const Container = (props) => (
  <div className={classes.container}>
    <Main />
  </div>
);
export default Container;
