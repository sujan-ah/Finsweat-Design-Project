import React from "react";
import "./goal.css";

const Goal = () => {
  return (
    <section className="goal">
      <div className="container">
        <div className="box">
          <div className="text">
            <div className="box2">
              <div className="text1">
                <h6>Who we are</h6>
                <h1>Goal focussed</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="text2">
                <h1>Continuous improvement</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>

          <div className="img">
            <img src="images/goalimg.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goal;
