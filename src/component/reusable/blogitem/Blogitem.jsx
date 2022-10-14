import React from "react";
import "./blogitem.css";

const Blogitem = ({ img }) => {
  return (
    <div className="img">
      {img}
      <span>19 Jan 2022</span>
      <h2>
        How one Webflow user grew his single person consultancy from $0-100K in
        14 months
      </h2>
      <p>
        See how pivoting to Webflow changed one person’s sales strategy and
        allowed him to attract
      </p>
    </div>
  );
};

export default Blogitem;
