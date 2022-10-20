import React from "react";
import "./meetitem.css";
import { BsFacebook } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Meetitem = ({ img, title, designation }) => {
  return (
    <div className="imgbox">
      <picture className="picture">{img}</picture>
      <div className="gradiant"> </div>
      <div className="iconbox">
        <BsFacebook className="icon" />
        <FiTwitter className="icon" />
        <BsLinkedin className="icon" />
      </div>

      <div className="text">
        <h2>{title}</h2>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default Meetitem;
