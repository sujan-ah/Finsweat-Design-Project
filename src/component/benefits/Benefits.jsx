import React from "react";
import Designitem from "../reusable/designitem/Designitem";
import "./benefits.css";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="container">
        <div className="heading">
          <h1>The benefits of working with us</h1>
        </div>
        <div className="box">
          <Designitem title="Customize with ease" />
          <Designitem title="Perfectly Responsive" />
          <Designitem title="Friendly Support" />
        </div>

        <div className="benefitimg">
          <picture>
            <img src="images/benefitlogo.png" />
          </picture>
          <picture className="imgmargin">
            <img src="images/benefitlogo1.png" />
          </picture>
          <picture className="imgmargin">
            <img src="images/benefitlogo2.png" />
          </picture>
          <picture className="imgmargin">
            <img src="images/benefitlogo3.png" />
          </picture>
          <picture className="imgmargin">
            <img src="images/benefitlogo4.png" />
          </picture>
          <picture className="imgmargin">
            <img src="images/benefitlogo5.png" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
