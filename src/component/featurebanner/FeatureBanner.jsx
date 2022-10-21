import React from "react";
import BannerImg from "../banner/BannerImg";
import "./featurebanner.css";

const FeatureBanner = () => {
  return (
    <section className="featurebanner">
      <div className="container">
        <div className="box">
          <div className="text">
            <h2>All the features you need</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a className="work" href="#">
              View Pricing
            </a>
          </div>
          <div className="image">
            <BannerImg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
