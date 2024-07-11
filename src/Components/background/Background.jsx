import React from "react";
import "./Background.css";
import video from "../Asset/video.mp4";
const Background = () => {
  return (
    <div className="background-video-container">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
