import classes from "./movie.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../../Cards";
import { Settings } from "../../../config";
import Button from "../../ui/buttons/button";
const Movie = (props) => {
  const sliderRef = useRef();
  const [showBtn, setShowBtn] = useState(false);
  const [hoverdIndex, setHoverdIndex] = useState(-1);
  const [styleArray, setStyleArray] = useState(
    new Array(20).fill({ opacity: 1 })
  );

  const settings = Settings;
  let margin =
    props.index === 0 && props.type !== "series"
      ? { marginTop: "0px" }
      : { marginTop: "10rem" };
  margin =
    props.index === 0 && props.type === "series"
      ? { marginTop: "10rem" }
      : { marginTop: "10rem" };
  const showButtonsHandler = () => {
    setShowBtn(true);
  };
  const hideButtonHandler = () => {
    setShowBtn(false);
  };
  const higlighHandler = (e) => {
    let arr = [];
    for (let i = 0; i < styleArray.length; i++) {
      if (i === Number(e.target.id)) {
        arr.push({ opacity: 1 });
      } else {
        arr.push({ opacity: 0.2 });
      }
    }

    setStyleArray(arr);
  };
  const removeHighlight = () => {
    setStyleArray(new Array(20).fill({ opacity: 1 }));
  };

  return (
    <div key={props.key} style={{ ...margin }} onClick={(e)=>{console.log(e.target)}}>
      {showBtn ? (
        <Button
          prev={() => {
            sliderRef.current.slickPrev();
          }}
          next={() => {
            sliderRef.current.slickNext();
          }}
          reRender={showButtonsHandler}
        />
      ) : null}
      <div>
        <p style={{ fontSize: "35px" }}>{props.name ? props.name : "Movies"}</p>
      </div>
      <div onMouseEnter={showButtonsHandler} onMouseLeave={hideButtonHandler}>
        <Slider
          {...settings}
          ref={sliderRef}
          className={classes.slider}
          touchMove={true}
          // swipeToSlide={true}
          arrows={false}
        >
          {props.movieData?.map((el, index) => {
            return (
              <Cards
              name={props.name}
                src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                key={index}
                index={index}
                higlighHandler={higlighHandler}
                removeHighlight={removeHighlight}
                hoverdIndex={hoverdIndex}
                styleArr={styleArray[index]}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default Movie;
