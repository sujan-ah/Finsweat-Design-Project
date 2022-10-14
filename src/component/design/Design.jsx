import React from "react";
import Designitem from "../reusable/designitem/Designitem";
import "./design.css";

const Design = () => {
  return (
    <section className="design">
      <div className="design-title">
        <p>Features</p>
        <h2>Design that solves problems, one product at a time</h2>
      </div>

      <div className="container">
        <div className="box">
          <Designitem title="Uses Client First" />
          <Designitem title="Two Free Revision Round" />
          <Designitem title="Template Customization" />
          <Designitem title="24/7 Support" />
          <Designitem title="Quick Delivery" />
          <Designitem title="Hands-on approach" />
        </div>
      </div>
    </section>
  );
};

export default Design;
