import React from "react";
import "./pricing.css";
import { Link } from "react-router-dom";

const Price = () => {
  return (
    <section className="price">
      <div className="container">
        <div className="heading">
          <h1>Our Pricing Plans</h1>
          <p>
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>

        <div className="box">
          <div className="item">
            <h2>
              $299 <span>Per Design</span>{" "}
            </h2>
            <h3>Landing Page </h3>
            <p>When you’re ready to go beyond prototyping in Figma, </p>

            <ul className="tika">
              <li>
                <img src="images/pricingimg.png" />
                All limited links
              </li>
              <li>
                <img src="images/pricingimg.png" />
                Own analytics platform
              </li>
              <li>
                <img src="images/pricingimg.png" />
                Chat support
              </li>
              <li>
                <img src="images/pricingimg2.png" />
                <span>Optimize hashtags</span>
              </li>
              <li>
                <img src="images/pricingimg2.png" />
                <span>Unlimited users</span>
              </li>
            </ul>

            <div className="btn">
              <Link to="#">Get started</Link>
            </div>
          </div>

          <div className="item">
            <h2>
              $299 <span>Per Design</span>{" "}
            </h2>
            <h3>Landing Page </h3>
            <p>When you’re ready to go beyond prototyping in Figma, </p>

            <ul className="tika">
              <li>
                <img src="images/pricingimg.png" />
                All limited links
              </li>
              <li>
                <img src="images/pricingimg.png" />
                Own analytics platform
              </li>
              <li>
                <img src="images/pricingimg.png" />
                Chat support
              </li>
              <li>
                <img src="images/pricingimg2.png" />
                <span>Optimize hashtags</span>
              </li>
              <li>
                <img src="images/pricingimg2.png" />
                <span>Unlimited users</span>
              </li>
            </ul>

            <div className="btn">
              <Link to="#">Get started</Link>
            </div>

            <div className="round"></div>
          </div>

          <div className="item">
            <h2>
              $299 <span>Per Design</span>{" "}
            </h2>
            <h3>Landing Page </h3>
            <p>When you’re ready to go beyond prototyping in Figma, </p>

            <ul className="tika">
              <li>
                <img src="images/pricingimg.png" />
                All limited links
              </li>
              <li>
                <img src="images/pricingimg.png" />
                Own analytics platform
              </li>
              <li>
                <img src="images/pricingimg.png" />
                Chat support
              </li>
              <li>
                <img src="images/pricingimg2.png" />
                <span>Optimize hashtags</span>
              </li>
              <li>
                <img src="images/pricingimg2.png" />
                <span>Unlimited users</span>
              </li>
            </ul>

            <div className="btn">
              <Link to="#">Get started</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
