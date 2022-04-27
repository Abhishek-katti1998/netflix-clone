import React from "react";

import classes from "./header.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../ui/searchBar/SearchBar";
const HeaderChild = () => {
  console.log("headerrederd");
  return (
    <div className={classes.parentContainer}>
      <div className={classes.parent}>
        <div className={classes.header}>
          <div className={classes.left}>
            <img
              src="https://netflix-clone-9a0b9.firebaseapp.com/f4070143e1f521da82a119eb78b434d0.png"
              alt="logo"
            />
            <Link
              to="/"
              style={{ textDecoration: "none", color: "white" }}
              className={classes.link}
            >
              <div>Home</div>
            </Link>
            <Link
              to="/series"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div>Series</div>
            </Link>
            <Link
              to="/Films"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div>Films</div>
            </Link>
            <div>New&Popular</div>
            <Link to="/list" style={{ textDecoration: "none", color: "white" }}>
              <div>My List</div>
            </Link>
          </div>
          <div className={classes.right}>
            <div className={classes.searchItem}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderChild;
