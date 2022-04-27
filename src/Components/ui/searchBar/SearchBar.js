import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadSearchResults } from "../../../Store/action/action";
import { searchMovieApiCall } from "../../../API/searchAPI";
import { querySearch } from "../../../Store/action/action";
import classes from "./SearchBar.module.css";

import {
  dispatchError,
  dispatchSearchResults,
} from "../../../Dispatch/dispatch";
const SearchBar = (props) => {
  const query = useSelector((sel) => sel.query);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ipRef = useRef();
  const setMovieData = (data) => dispatchSearchResults(dispatch, data);
  const setErrorFunc = (data) => {
    dispatchError(dispatch, data);
  };
  const searchIpHandler = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    //   setQuery(e.target.value);
    dispatch(querySearch(e.target.value));

    navigate("/search");
  };
  const blurHandler = () => {
    ipRef.current.value = "";
  };
  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      if (query.length > 0) {
        dispatch(loadSearchResults(true));
        searchMovieApiCall(query, setMovieData, setErrorFunc);
      }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  return (
    <div className={classes.searchItem}>
      <input
        type="text"
        onChange={searchIpHandler}
        onBlur={blurHandler}
        ref={ipRef}
        autofocus
        placeholder="Movie/Tv-Show"
        // className={inputClassName}
      ></input>
      {/* <BiSearch className={classes.search} /> */}
    </div>
  );
};
export default SearchBar;
