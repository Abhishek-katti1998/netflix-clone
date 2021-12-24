import classes from "./movie.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../../Cards";
const Movie = (props) => {
  const sliderRef = useRef();
  const settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slidePrevHandler = () => {
    console.log("prev");
    sliderRef.current.slickPrev();
  };
  const slideNextHandler = () => {
    console.log("next");

    sliderRef.current.slickNext();
  };
  console.log("props name", props.name);

  return (
    <div style={{ marginTop: "-180px" }} key={props.key}>
      <div className={classes.prev} onClick={slidePrevHandler}>
        &#8249;
      </div>

      <p style={{ fontSize: "35px" }}>{props.name ? props.name : "Movies"}</p>

      <Slider
        {...settings}
        ref={sliderRef}
        className={classes.slider}
        touchMove={true}
        // swipeToSlide={true}
      >
        {props.movieData?.map((el, index) => {
          return (
            <Cards src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} />
          );
        })}
      </Slider>

      <div className={classes.next} onClick={slideNextHandler}>
        &#8250;
      </div>
    </div>
  );
};
export default Movie;
