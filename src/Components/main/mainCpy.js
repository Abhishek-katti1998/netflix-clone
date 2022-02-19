import React, { useEffect, useState } from "react";
import classes from "./main.module.css";
import { useSelector, useDispatch } from "react-redux";
import MovieParent from "./Template/movie-parent";
import { renderResultsAPI } from "../../API/renderAPI";
import Loader from "../ui/loader";
import { dispatchGenresFunc, dispatchDataFunc } from "../../Dispatch/dispatch";
const Main = (props) => {
  const genrData = useSelector((selector) => {
    return selector.gen;
  });
  const seriesGenData = useSelector((selector) => {
    return selector.seriesGen;
  });
  const movieData = useSelector((selector) => selector.movie);
  const seriesData = useSelector((selector) => selector.series);
  const moviesArray = [];
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const dispatchGenres = (data) => dispatchGenresFunc(props, data, dispatch);
  const dispatchData = (data) =>
    dispatchDataFunc(props, data, dispatch, moviesArray, setLoading);

  useEffect(() => {
    if (movieData.length === 19 && props.type === "movie") return;
    if (movieData.length === 16 && props.type === "series") return;
    else {
      setLoading(true);
      renderResultsAPI(props, dispatchGenres, dispatchData);
    }
    return () => {
      // console.log("unmounted mainCpy.js");
    };
  }, [props.type]);
  console.log("SERIES DATA", seriesData);
  // console.log("Movies DATA", movieData);

  return (
    <div className={classes.main}>
      {!loading ? (
        <MovieParent
          movieData={props.type === "movie" ? movieData : seriesData}
          type={props.type}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default Main;
