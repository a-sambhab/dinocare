import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id="about" className="bg-color-about">
      <div className="img">
        {" "}
        <img
          src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1631305498/DINOCARE/dinosaur-icon-8_tj8nup.png"
          className="dino-img"
          srcset=""
          alt="aboutdino"
        />
      </div>
      <div className="about-box">
        <div className="box">
          <h1 className="align">About</h1>
          <p className="about-text">
            Dinosaurus had unique characteristics and features for who they
            were. Few were strong and ruthless others not so much. Well, arent
            humans similar? Physically? Nah. But, mentally? maybe not so
            different. Aren't y'all curious which ones suit you? Go ahead fill
            up the form and know what Dino characteristics have you inherited!
          </p>
        </div>
      </div>
    </div>
  );
}
