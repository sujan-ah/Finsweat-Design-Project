import React from "react";
import "./inspire.css";

const Inspire = () => {
  return (
    <div className="inspire">
      <div className="container">
        <div className="box">
          <div className="text">
            <h6>Our Mission </h6>
            <h1>Inspire, Innovate, Share</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="img">
            <picture>
              <img src="images/inspireimg.png" loading="lazy" />
            </picture>
          </div>

          <div className="img">
            <picture>
              <img src="images/inspireimg2.png" loading="lazy" />
            </picture>
          </div>

          <div className="text">
            <h6>Our Vision </h6>
            <h1>Laser focus</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspire;
