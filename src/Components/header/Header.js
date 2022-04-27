import React from "react";
import classes from "./header.module.css";
import HeaderChild from "./headerChild";
function Header() {
  return (
    <div className={classes.container}>
      <HeaderChild />
    </div>
  );
}

export default Header;
