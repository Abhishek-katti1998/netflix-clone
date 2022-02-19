import ReactDom from "react-dom";
import React from "react";
import classes from "./backdrop.module.css";
import { useDispatch } from "react-redux";
import {
  backDropState,
  ModelState,
  playBtnClicked,
} from "../../../../Store/action/action";
const Backdrop = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <div
          className={classes.container}
          onClick={() => {
            dispatch(ModelState(false));
            dispatch(backDropState(false));
            dispatch(playBtnClicked(false));
          }}
        ></div>,
        document.getElementById("backdrop")
      )}
    </React.Fragment>
  );
};
export default Backdrop;
