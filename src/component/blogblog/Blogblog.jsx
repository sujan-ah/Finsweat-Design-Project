import React from "react";
import Blogitem from "../reusable/blogitem/Blogitem";
import "./blogblog.css";

const Blogblog = () => {
  return (
    <section className="blogblog">
      <div className="container">
        <div className="text">
          <h1>Our Blog</h1>
        </div>

        <div className="box">
          <Blogitem
            img="images/blogimg4.png"
            date="27 Jan 2021"
            title="How one Webflow user grew his single person consultancy from
            $0-100K in 14 months"
            para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
          <Blogitem
            img="images/blogimg5.png"
            date="27 Jan 2021"
            title="How one Webflow user grew his single person consultancy from
            $0-100K in 14 months"
            para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
          <Blogitem
            img="images/blogimg6.png"
            date="27 Jan 2021"
            title="How one Webflow user grew his single person consultancy from
            $0-100K in 14 months"
            para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
          <Blogitem
            img="images/blogimg01.png"
            date="27 Jan 2021"
            title="How one Webflow user grew his single person consultancy from
            $0-100K in 14 months"
            para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
          <Blogitem
            img="images/blogimg4.png"
            date="27 Jan 2021"
            title="How one Webflow user grew his single person consultancy from
            $0-100K in 14 months"
            para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
          <Blogitem
            img="images/blogimg03.png"
            date="27 Jan 2021"
            title="How one Webflow user grew his single person consultancy from
            $0-100K in 14 months"
            para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
        </div>
      </div>
    </section>
  );
};

export default Blogblog;
