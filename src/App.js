import "./App.css";
import React from "react";
import Home from "./Components/Home/Home";
import SearchResults from "./Components/Search/searchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Components/header/Header";
import HeaderChild from "./Components/header/headerChild";
// import SeriesMain from "./Components/main/main-series";
import Main from "./Components/main/mainCpy";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/search"
              element={
                <>
                  <HeaderChild />
                  <SearchResults />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <HeaderChild />
                  <Home />
                </>
              }
            />
            <Route path="/films" />
            <Route
              path="/series"
              element={
                <>
                  <HeaderChild />
                  {/* <SeriesMain /> */}
                  <Main type="series" />
                </>
              }
            />
            <Route path="/list" />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
