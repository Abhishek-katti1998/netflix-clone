import React from "react";
import classes from "./header.module.css";
import { GrNotification } from "react-icons/gr";
// import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
// import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { BiSearch } from "react-icons/bi";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      const dom = document.getElementsByClassName("header_header__2m0Oy");
      if (window.pageYOffset < 2) {
        dom[0].style.backgroundColor = "transparent";
      } else {
        dom[0].style.backgroundColor = "#111";
      }
    });
    // document.addEventListener("mousedown", () => {
    //   console.log("mouse down occured");
    // });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.parent}>
        <div className={classes.header}>
          <div className={classes.left}>
            <img
              src="https://netflix-clone-9a0b9.firebaseapp.com/f4070143e1f521da82a119eb78b434d0.png"
              alt="logo"
            />
            <div>Home</div>
            <div>Series</div>
            <div>Films</div>
            <div>New&Popular</div>
            <div>My List</div>
          </div>
          <div className={classes.right}>
            <div className={classes.searchItem}>
              <input type="text"></input>
              <BiSearch className={classes.search} />
            </div>
            {/* <CircleNotificationsIcon
            className={classes.notification}
            style={{ fontSize: "40px" }}
          />
          <Avatar>H</Avatar> */}
          </div>
        </div>
      </div>

      <div className={classes.mainTheme}>
        <h1 style={{ fontSize: "60px" }}>Narcos</h1>

        <div className={classes.buttons}>
          <p>Narcos narcos narcos narcos narcos narcos narcos narcos narcos</p>
          <button>Play</button>
          <button>My list</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
