import React from "react";
import "./processitem.css";

const Processitem = ({ title }) => {
  return (
    <div className="process">
      <img src="images/processimg.png" />
      <h2>{title}</h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
    </div>
  );
};

export default Processitem;
