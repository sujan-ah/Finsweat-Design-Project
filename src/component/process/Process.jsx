import React from "react";
import Processitem from "../reusable/processitem/Processitem";
import "./process.css";

const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <div className="heading">
          <h1>The process we follow</h1>
        </div>
        <div className="box">
          <Processitem title="Planning" />
          <Processitem title="Conception" />
          <Processitem title="Design" />
          <Processitem title="Development" />
        </div>
      </div>
    </section>
  );
};

export default Process;
