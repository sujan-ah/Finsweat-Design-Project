import React from "react";
import Worklist from "../reusable/worklist/Worklist";
import "./work.css";

const Work = () => {
  return (
    <section className="work">
      <div className="container">
        <div className="box">
          <div className="left">
            <div className="title">
              <h2>How we work</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <a href="#">
                Get in touch with us{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="right">
            <Worklist title="Shawon" />
            <Worklist title="Tuhin" />
            <Worklist title="Roki" />
            <Worklist title="Saikot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
