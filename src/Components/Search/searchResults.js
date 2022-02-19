import NetflixLoader from "../ui/skeleton";
import { useSelector } from "react-redux";
import classes from "./searchResults.module.css";
import Cards from "../Cards";
// import { ImageList } from "@mui/material";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const SearchResults = () => {
  const searchRes = useSelector((sel) => sel.search);
  const loadState = useSelector((sel) => sel.loadSearchResults);
  const errorStr = useSelector((sel) => sel.error);
  console.log('serarchRes',searchRes)
  return (
    <div className={classes.searchContainer}>
      {loadState ? (
        new Array(20).fill(0).map((e) => (
          <div className={classes.skeleton}>
            <NetflixLoader showReact={false} />
          </div>
        ))
      ) : errorStr.length === 0 ? (
        searchRes.map((e,index) => {
          return e.poster_path ? (
            <div
              style={{
                marginTop: "20px",
                // height: "350px",
                // marginLeft: "12px",
                // marginRight: "2px",
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

