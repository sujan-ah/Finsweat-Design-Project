import React, { useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  let [show, setShow] = useState(false);
  let [size, setSize] = useState(false);

  let handlemenushow = () => {
    setShow(!show);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
  });

  let handleSize = () => {
    if (window.innerWidth > 675) {
      setSize(true);
    } else if (window.innerWidth < 320) {
      setSize(true);
    } else {
      setSize(false);
    }
  };

  return (
    <nav>
      <div class="container">
        <div class="box">
          <div class="logo">
            <img src="images/logo.png" alt="logo.jpg" />
          </div>

          <button onClick={handlemenushow}>
            <FaBars />
          </button>

          <div class="nav-item">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/feature">Features</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>FAQ</li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
            <a class="button">
              <Link to="/contact">Contact us</Link>
            </a>
          </div>
        </div>

        {show && (
          <div class="resnav-item" style={size ? menuHide : menuShow}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/feature">Features</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>FAQ</li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
            <a class="button">
              <Link to="/contact">Contact us</Link>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

let menuShow = {
  display: "block",
};
let menuHide = {
  display: "none",
};

export default Navbar;
