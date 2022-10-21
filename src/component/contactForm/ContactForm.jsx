import React from "react";
import "./contactForm.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="heading">
          <h1>Contact Us</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="form">
          <div>
            <h4>Name</h4>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <h4>Email</h4>
            <input type="text" placeholder="Enter your email" />
          </div>

          <div>
            <h4>Subject</h4>
            <input type="text" placeholder="Provide context" />
          </div>

          <div>
            <h4>Subject</h4>
            <input type="text" placeholder="Select Subject" />
          </div>

          <div>
            <h4>Message</h4>
            <input
              style={{ padding: 50, width: 1040 }}
              type="text"
              placeholder="Write your  question here"
            />
          </div>

          <div className="btn">
            <Link to="#">Send Messege</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
