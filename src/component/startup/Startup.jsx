import React from "react";
import "./startup.css";

const Startup = () => {
  return (
    <section className="startup">
      <div className="container">
        <div className="box">
          <div className="image">
            <img src="images/startupimg.png" />
            <div className="overlay">
              <h1>Building stellar websites for early startups</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
          </div>

          <div className="text">
            <h1>Send inquiry</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Paste your Figma design URL" />

            <button>Send an Inquiry</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startup;
