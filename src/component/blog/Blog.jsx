import React from "react";
import Blogitem from "../reusable/blogitem/Blogitem";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <h1>Our blog</h1>

        <div className="box">
          <Blogitem
            img="images/blogimg01.png"
            date="19 Jan 2022"
            title="How one Webflow user grew his single person consultancy from
            $0-100K in 14 months"
            para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
          <Blogitem
            img="images/blogimg03.png"
            date="19 Jan 2022"
            title="How one Webflow user grew his single person consultancy from
            $0-100K in 14 months"
            para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
          <Blogitem
            img="images/blogimg01.png"
            date="19 Jan 2022"
            title="How one Webflow user grew his single person consultancy from
            $0-100K in 14 months"
            para="See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
