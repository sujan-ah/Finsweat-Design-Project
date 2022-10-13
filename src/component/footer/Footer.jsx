import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="box">
            <div className="finsweet">
              <div class="logo">
                <img src="images/logo.png" alt="logo.jpg" />
              </div>
              <p>
                We are always open to discuss your project and improve your
                online presence.
              </p>

              <div className="img">
                <div className="imgbox">
                  <div className="email">
                    <h6>Email me at</h6>
                    <p>contact@website.com</p>
                  </div>

                  <div className="imgtext">
                    <h6>Call us</h6>
                    <p>0927 6277 28525</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text">
              <h1>Lets Talk!</h1>
              <p>
                We are always open to discuss your project, improve your online
                presence and help with your UX/UI design challenges.
              </p>
              <div className="icon">
                <BsFacebook />
                <FaTwitter />
                <FiInstagram />
                <GrLinkedin />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footerlastpart">
        <div class="container">
          <div class="box">
            <div class="copy">
              <p>Copyright 2022, Finsweet.com</p>
            </div>
            <div class="nav-item">
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
