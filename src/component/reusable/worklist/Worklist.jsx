import React from "react";
import "./worklist.css";

const Worklist = ({ title }) => {
  return (
    <div className="worklist">
      <img src="images/workimg.png" alt="workimg.png" />
      <h3>{title}</h3>
      <p>
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
      </p>
    </div>
  );
};

export default Worklist;
