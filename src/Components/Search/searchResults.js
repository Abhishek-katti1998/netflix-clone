import NetflixLoader from "../ui/skeleton";
import { useSelector } from "react-redux";
import classes from "./searchResults.module.css";
import Cards from "../Cards";
const SearchResults = () => {
  const searchRes = useSelector((sel) => sel.search);
  const loadState = useSelector((sel) => sel.loadSearchResults);
  const errorStr = useSelector((sel) => sel.error);
  // console.log('serarchRes',searchRes)
  return (
    <div className={classes.searchContainer}>
      {loadState ? (
        new Array(20).fill(0).map((e) => (
          <div className={classes.skeleton}>
            <NetflixLoader showReact={false} />
          </div>
        ))
      ) : errorStr.length === 0 ? (
        searchRes.length === 0 ? (
          <div style={{ display: "flex", margin: "auto" }}>
            {" "}
            <p>Search for a movie/tv-show here:)</p>{" "}
          </div>
        ) : (
          searchRes.map((e, index) => {
            return e.poster_path ? (
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <Cards
                  src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                  className={classes.searchCard}
                  index={index}
                />
              </div>
            ) : null;
          })
        )
      ) : (
        <div style={{ color: "red" }}>
          {/* <ErrorOutlineIcon /> */}
          {errorStr}
        </div>
      )}
      {/* {loadState ? new Array(20).fill(0).map((e) => <Skeleton />) : null} */}
    </div>
  );
};
export default SearchResults;
