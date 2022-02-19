import React from "react";
import classes from "./header.module.css";
import { BsCaretDown } from "react-icons/bs";
import Avatar from "@mui/material/Avatar";
import { BiSearch } from "react-icons/bi";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loadSearchResults } from "../../Store/action/action";
import { Link } from "react-router-dom";
import { searchMovieApiCall } from "../../API/searchAPI";
import { dispatchSearchResults, dispatchError } from "../../Dispatch/dispatch";
import { appendError } from "../../Dispatch/dispatch";

import { useRef } from "react";
const HeaderChild = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ipRef = useRef();
  let inputClassName = classes.ip;
  const searchIpHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    navigate("/search");
  };
  const setMovieData = (data) => dispatchSearchResults(dispatch, data);
  const setErrorFunc = (data) => {
    // console.log("data", data);
    // debugger;
    dispatchError(dispatch, data);
  };
  const blurHandler = () => {
    // setQuery("");
    ipRef.current.value = "";
    // navigate("/");
  };
  const showIpBoxHandler = () => {
    // console.log("clicked");
    inputClassName = classes.ipOpen;
  };
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      const dom = document.getElementsByClassName("header_header__2m0Oy");
      if (window.pageYOffset < 2) {
        dom[0].style.backgroundColor = "transparent";
      } else {
        dom[0].style.backgroundColor = "#111";
      }
    });
    let timerId;
    // console.log("useEffect in headerchild.js");
    timerId = setTimeout(() => {
      if (query.length > 0) {
        dispatch(loadSearchResults(true));
        searchMovieApiCall(query, setMovieData, setErrorFunc);
      }
    }, 500);
    return () => {
      // console.log("cleanup in headerchild.js");
      clearTimeout(timerId);
    };
  }, [query]);

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
              <input
                type="text"
                onChange={searchIpHandler}
                onBlur={blurHandler}
                ref={ipRef}
                // className={inputClassName}
              ></input>
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
      {/* <div>
        <p>Genres</p>
        <BsCaretDown size={25} style={{ color: "white" }} />
      </div> */}
    </div>
  );
};
export default HeaderChild;
