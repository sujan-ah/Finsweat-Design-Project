import React from "react";
import "./banner.css";
import BannerImg from "./BannerImg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="box">
          <div className="text">
            <h2>Building stellar websites for early startups</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="btn">
              <a className="work" href="#">
                View our work
              </a>
              <a href="#" className="price">
                View Pricing <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="image">
            <BannerImg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
