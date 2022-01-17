import React from "react";
import classes from "./header.module.css";
import HeaderChild from "./headerChild";
function Header() {
  return (
    <div className={classes.container}>
      <HeaderChild />
      {/* <div className={classes.mainTheme}>
        <h1 style={{ fontSize: "60px" }}>Narcos</h1>
        <div className={classes.buttons}>
          <p>Narcos narcos narcos narcos narcos narcos narcos narcos narcos</p>
          <button>Play</button>
          <button>My list</button>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
