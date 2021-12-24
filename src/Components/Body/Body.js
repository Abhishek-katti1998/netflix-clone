import React from "react";
import classes from "./Body.module.css";
import HoverVideoPlayer from "react-hover-video-player";
import Container from "./Container/Container";
const Body = () => {
  return (
    <div>
      <iframe
        src="https://player.vimeo.com/video/384025132?h=060a4e3e2a&title=0&byline=0&portrait=0&playsinline=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
        width="900"
        frameborder="0"
        className={classes.iframe}
      
      >
        <html lang="en">
          <head></head>
          <body></body>
        </html>
      </iframe>
      <Container />
    </div>
  );
};
export default Body;
