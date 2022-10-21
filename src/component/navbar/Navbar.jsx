import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div class="container">
        <div class="box">
          <div class="logo">
            <img src="images/logo.png" alt="logo.jpg" />
          </div>
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
              <li>Blog</li>
            </ul>
            <a class="button">Contact us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
