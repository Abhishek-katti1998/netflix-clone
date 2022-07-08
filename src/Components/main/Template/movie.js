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
  // debugger;
  const sliderRef = useRef();
  const [showBtn, setShowBtn] = useState(false);
  const [hoverdIndex, setHoverdIndex] = useState(-1);
  const [styleArray, setStyleArray] = useState(
    new Array(20).fill({ opacity: 1 })
  );

  // console.log(flexDom[0].style.display);

  const settings = Settings;

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
    <div
      key={props.key}
      onClick={(e) => {
        // console.log(e.target);
      }}
    >
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
      <div className={classes.flexContainer}>
        <p className={classes.flexItem1}>
          {props.name ? props.name : "Movies"}
        </p>

        <div
          className={classes.flexItem2}
          onMouseEnter={showButtonsHandler}
          onMouseLeave={hideButtonHandler}
        >
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
    </div>
  );
};
export default Movie;
