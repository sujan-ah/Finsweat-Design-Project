import React from "react";
import "./designitem.css";

const Designitem = ({ title }) => {
  return (
    <div className="item">
      <i className="fa-solid fa-user-group"></i>
      <h2>{title}</h2>
      <p>
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed
        faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.{" "}
      </p>
    </div>
  );
};

export default Designitem;
