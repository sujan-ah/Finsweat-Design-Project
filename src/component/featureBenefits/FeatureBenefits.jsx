import React from "react";
import "./featureBenefits.css";
import Designitem from "../reusable/designitem/Designitem";

const FeatureBenefits = () => {
  return (
    <section className="featurebenefits">
      <div className="container">
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

        <div className="heading">
          <h1>The benefits of working with us</h1>
        </div>

        <div className="box">
          <Designitem title="Customize with ease" />
          <Designitem title="Perfectly Responsive" />
          <Designitem title="Friendly Support" />
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefits;
