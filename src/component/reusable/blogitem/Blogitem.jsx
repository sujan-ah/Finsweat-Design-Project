import React from "react";
import "./blogitem.css";

const Blogitem = ({ img, date, title, para }) => {
  return (
    <div className="img">
      <img src={img} loading="lazy" />
      <span>{date}</span>
      <h2>{title}</h2>
      <p>{para}</p>
    </div>
  );
};

export default Blogitem;
