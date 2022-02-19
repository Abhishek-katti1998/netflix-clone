import { ClassNames } from "@emotion/react";
import { SwipeableDrawer } from "@mui/material";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { backDropState, ModelState } from "../../../../Store/action/action";
import { useLocation } from "react-router";
import classes from "./model.module.css";
import Drawer from "./Drawer/drawer";
import Content from "./content";
import Video from "../../video";
const Model = (props) => {
  const showModel = useSelector((sel) => sel.model);
  const location = useLocation();
  const dispatch = useDispatch();
  const renderIndex = useSelector((sel) => sel.render);
  const movie = useSelector((sel) => sel.movie);
  const series = useSelector((sel) => sel.series);
  const search = useSelector((sel) => sel.search);

  let renderData;
  let itr;
  if (location.pathname === "/") itr = movie;
  if (location.pathname === "/series") itr = series;
  if (location.pathname === "/search") itr = search;
  if (location.pathname !== "/search") {
    itr?.forEach((e) => {
      if (e.genreName === renderIndex.genre)
        renderData = e.data[renderIndex?.index];
    });
  }
  if (location.pathname === "/search" && itr)
    renderData = itr[renderIndex?.index];

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <React.Fragment>
          (
          <Drawer
            posterPath={renderData?.poster_path}
            backDropPath={renderData?.backdrop_path}
          >
            <Content
              title={renderData?.original_title ?? renderData?.name}
              rating={renderData?.vote_average}
              overView={renderData?.overview}
              release={renderData?.release_date ?? renderData?.first_air_date}
              obj={renderData}
            />
          </Drawer>
          )
        </React.Fragment>,
        document.getElementById("model")
      )}
    </React.Fragment>
  );
};
export default Model;
