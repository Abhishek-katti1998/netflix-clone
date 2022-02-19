import classes from "./content.module.css";
import { getVedioApi } from "../../../../API/getVedio";
import { useDispatch } from "react-redux";
import { playBtnClicked } from "../../../../Store/action/action";
const Content = (props) => {
  const dispatch = useDispatch();
  const playVideoHandler = () => {
    console.log("play", props.obj);
    getVedioApi(props.obj?.id, dispatch,props.obj);
    dispatch(playBtnClicked(true));
  };
  return (
    <div className={classes.content}>
      <h1>{props.title}</h1>
      <div className={classes.rating}>
        <p style={{ fontSize: "20px" }}>
          <span style={{ color: "#5cdf5c" }}>Rating {props.rating}</span>{" "}
          released on {props.release}
        </p>
      </div>
      <div className={classes.overview}>
        <p style={{ fontSize: "20px" }}>{props.overView} </p>
      </div>
      <div className={classes.buttonFlex}>
        <button className={classes.btn} onClick={playVideoHandler}>
          PLAY
        </button>
        <button>MY LIST</button>
      </div>
    </div>
  );
};
export default Content;
