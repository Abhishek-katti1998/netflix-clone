import "./App.css";
import React from "react";
import Home from "./Components/Home/Home";
import SearchResults from "./Components/Search/searchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Components/header/Header";
import HeaderChild from "./Components/header/headerChild";
// import SeriesMain from "./Components/main/main-series";
import Main from "./Components/main/mainCpy";
import Backdrop from "./Components/ui/overlay/backdrop/backdrop";
import { useSelector } from "react-redux";
import Model from "./Components/ui/overlay/model/model";
import Video from "./Components/ui/video";
import Hamburger from "./Components/ui/hamburger/hamburger";
function App() {
  const backDropState = useSelector((sel) => sel.backdrop);
  const modelState = useSelector((sel) => sel.model);
  const play = useSelector((sel) => sel.play);
  // console.log("model", modelState);
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <HeaderChild />
          <Routes>
            <Route
              path="/search"
              element={
                <>
                  <Hamburger />
                  <SearchResults />
                  {backDropState ? <Backdrop /> : null}
                  {!play ? <Model /> : <Video />}
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Home />
                  {backDropState ? <Backdrop /> : null}
                  {!play ? <Model /> : <Video />}
                </>
              }
            />
            <Route
              path="/films"
              element={
                <>
                  <Home />
                  {backDropState ? <Backdrop /> : null}
                  {!play ? <Model /> : <Video />}
                </>
              }
            />
            <Route
              path="/series"
              element={
                <>
                  <Main type="series" />
                  {backDropState ? <Backdrop /> : null}
                  {!play ? <Model /> : <Video />}
                </>
              }
            />
            <Route
              path="/list"
              element={
                <>
                  <Home />
                  {backDropState ? <Backdrop /> : null}
                  {!play ? <Model /> : <Video />}
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
