import React from "react";
import Blogitem from "../reusable/blogitem/Blogitem";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <h1>Our blog</h1>

        <div className="box">
          <Blogitem img={<img src="images/blogimg3.png" />} />
          <Blogitem img={<img src="images/blogimg.png" />} />
          <Blogitem img={<img src="images/blogimg3.png" />} />

          {/* <div className="img">
            <img src="images/blogimg.png" />
            <span>19 Jan 2022</span>
            <h2>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h2>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
          </div>

          <div className="img">
            <img src="images/blogimg3.png" />
            <span>19 Jan 2022</span>
            <h2>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h2>
            <p>
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Blog;
