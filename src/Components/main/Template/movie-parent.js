import Movie from "./movie";
const MovieParent = (props) => {
  const itr = props.movieData;
  return itr.slice(0, 9)?.map((e, i) => {
    return (
      <Movie
        // key={e.id}
        name={e.genreName}
        movieData={e.data}
        index={e?.data}
        type={props.type}
      />
    );
  });
};
export default MovieParent;
