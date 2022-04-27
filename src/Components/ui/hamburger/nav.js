import classes from "./hamburger.module.css";
import { useDispatch, useSelector } from "react-redux";
import { showMobileNav } from "../../../Store/action/action";
import { Link } from "react-router-dom";
const Nav = () => {
  const dispatch = useDispatch();
  const closeNavHandler = () => {
    // console.log("clicked");
    dispatch(showMobileNav(false));
  };
  return (
    <div className={classes.parentLink}>
      <div className={classes.myLinks}>
        <div className={classes.Home}>
          <Link to="/Films" style={{ zIndex: "4" }}>
            Home
          </Link>
          <div
            style={{
              color: "white",
              fontSize: "30px",
              marginRight: "10px",
              marginTop: "5px",
              zIndex: "4",
              cursor: "pointer",
            }}
            onClick={closeNavHandler}
          >
            &#10005;
          </div>
        </div>
        <div>
          <Link to="/series">Series</Link>
        </div>
        <div>
          <Link to="/Films">Films</Link>
        </div>
        <div>
          <Link to="/search">Search</Link>
        </div>
      </div>
    </div>
  );
};
export default Nav;
