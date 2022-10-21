import React from "react";
import "./study.css";

const Study = () => {
  return (
    <section className="study">
      <div className="container">
        <div className="heading">
          <h1>
            A UX Case Study on Creating a Studious Environment for Students
          </h1>

          <p>
            {" "}
            <span>Andrew Jonson</span> Posted on 27th January 2021
          </p>
        </div>

        <picture>
          <img src="images/blogstudyimg.png" loading="lazy" />
        </picture>

        <div className="endline">
          <h6>
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </h6>

          <span>Read more</span>
        </div>
      </div>
    </section>
  );
};

export default Study;
