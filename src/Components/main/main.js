import React, { useEffect, useState } from "react";
import classes from "./main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { appendGenre, appendMovies } from "../../Store/action/action";
import Movie from "./Template/movie";
import NetflixLoader from "../ui/skeleton";
const MovieParent = (props) => {
  console.log(props.movieData);
  return props.movieData.map((e, i) => {
    return (
      <Movie
        key={e.id}
        name={props.hash.get(e[i].genre_ids[0])}
        movieData={e}
        index={i}
      />
    );
  });
};
const Loader = () => {
  return new Array(19).fill(0).map((e) => (
    <div style={{ marginTop: "10rem" }}>
      <NetflixLoader />
    </div>
  ));
};
const Main = () => {
  const [loading, setLoading] = useState(false);
  const API_KEY = "26ea0d14873136cdf3c5e559958f77e7";
  const genrData = useSelector((selector) => {
    return selector.gen;
  });
  const movieData = useSelector((selector) => selector.movie);
  const dispatch = useDispatch();
  const urls = [];
  const moviesArray = [];
  const computeHash = () => {
    const m = new Map();
    genrData.forEach((e) => {
      m.set(e.id, e.name);
    });
    return m;
  };
  const hash = computeHash();
  useEffect(() => {
    if (movieData.length === 19) return;
    else {
      setLoading(true);
      fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
        .then((e) => {
          return e.json();
        })
        .then((e) => {
          dispatch(appendGenre(e.genres));
          e.genres.forEach((e) =>
            urls.push(
              fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${e?.id}`
              )
            )
          );
          const data = Promise.all(urls);
          data.then((e) => {
            e.forEach((i) => {
              i.json().then((p) => {
                moviesArray.push(p.results);
                if (moviesArray.length >= 19) {
                  dispatch(appendMovies(moviesArray));
                }
              });
            });
            setLoading(false);
          });
        })
        .catch((err) => {
          // console.log(err)
        });
    }
  }, []);

  // console.log("movies", movieData);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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

  const slidePrevHandler = (sliderRef) => {
    sliderRef.current.slickPrev();
  };
  const slideNextHandler = (sliderRef) => {
    sliderRef.current.slickNext();
    // console.log(sliderRef);
  };
  // console.log(":)Main.js renderd");
  console.log("movie data", movieData);
  return (
    <div className={classes.main}>
      {!loading ? (
        <MovieParent movieData={movieData} hash={hash} />
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default Main;
