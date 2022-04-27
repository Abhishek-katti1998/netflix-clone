import { ClassNames } from "@emotion/react";
import { useSelector } from "react-redux";
import classes from "./video.module.css";
import ReactDOM from "react-dom";
import React from "react";
const Video = () => {
  const vedioData = useSelector((sel) => sel.video);
  // console.log(
  //   "VideoData",
  //   vedioData,
  //   `https://www.youtube.com/embed/${vedioData?.key}?autoplay=1&mute=1`
  // );

  return (
    <>
      <React.Fragment>
        {ReactDOM.createPortal(
          <div className={classes.videoContainer}>
            {/* <html>
              <body> */}
            <iframe
              title="trailor"
              width={"100%"}
              height={"500px"}
              src={` https://www.youtube.com/embed/${vedioData?.key}?autoplay=1`}
            ></iframe>
            {/* </body>
            </html> */}
          </div>,
          document.getElementById("video")
        )}
      </React.Fragment>
      ;
    </>
  );
};
export default Video;
//
