import classes from "./hamburger.module.css";
import Nav from "./nav";
import { useDispatch, useSelector } from "react-redux";
import { showMobileNav } from "../../../Store/action/action";
import { useEffect, useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { useLocation } from "react-router";
const Hamburger = () => {
  const topNav = classes.topnav;
  const dispatch = useDispatch();
  const showMobNavigation = useSelector((sel) => sel.mobNav);
  const hamHandler = () => {
    // console.log("clicked");
    dispatch(showMobileNav(true));
  };
  const location = useLocation();
  return (
    <div className={classes.container}>
      {!showMobNavigation ? (
        <div class={topNav}>
          <a href="#home" class="active">
            <img
              src="https://netflix-clone-9a0b9.firebaseapp.com/f4070143e1f521da82a119eb78b434d0.png"
              alt="logo"
            />
          </a>
          {location.pathname === "/search" ? <SearchBar /> : null}
          <div>
            <a className={classes.icon} onClick={hamHandler}>
              <i className="fa fa-bars"></i>
            </a>
          </div>
        </div>
      ) : (
        <Nav />
      )}
    </div>
  );
};
export default Hamburger;
