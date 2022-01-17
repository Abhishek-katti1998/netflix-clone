import NetflixLoader from "../ui/skeleton";
import { useSelector } from "react-redux";
import classes from "./searchResults.module.css";
import Cards from "../Cards";
const SearchResults = () => {
  const searchRes = useSelector((sel) => sel.search);
  const loadState = useSelector((sel) => sel.loadSearchResults);

  return (
    <div className={classes.searchContainer}>
      {loadState
        ? new Array(20).fill(0).map((e) => (
            <div className={classes.skeleton}>
              <NetflixLoader showReact={false} />
            </div>
          ))
        : searchRes.map((e) => {
            return e.poster_path ? (
              <div
                style={{
                  marginTop: "50px",
                  height: "350px",
                  marginRight: "7px",
                }}
              >
                <Cards
                  src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                  className={classes.searchCard}
                />
              </div>
            ) : null;
          })}
      {/* {loadState ? new Array(20).fill(0).map((e) => <Skeleton />) : null} */}
    </div>
  );
};
export default SearchResults;
