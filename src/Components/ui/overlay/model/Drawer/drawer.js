import React from "react";
import classes from "./drawer.module.css";
import { useSelector } from "react-redux";

const Drawer = (props) => {
  const showModel = useSelector((sel) => sel.model);

  // console.log("showmodel", showModel);

  const attachClass = showModel
    ? classes.drawerContainerOpen
    : classes.drawerContainerClose;
  return (
    <div
      className={attachClass}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.backDropPath})`,
      }}
    >
      {props.children}
      {/* <h1>Drawer</h1> */}
    </div>
  );
};
export default Drawer;
