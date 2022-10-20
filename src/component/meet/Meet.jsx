import React from "react";
import Meetitem from "../reusable/meetitem/Meetitem";
import "./meet.css";

const Meet = () => {
  return (
    <section className="meet">
      <div className="container">
        <div className="heading">
          <h1>Meet our team</h1>
        </div>
        <div className="box">
          <div className="item">
            <Meetitem
              img={<img src="images/meetimg1.png" loading="lazy" />}
              title="John Smith"
              designation="CEO"
            />
          </div>

          <div className="item">
            <Meetitem
              img={<img src="images/meetimg2.png" loading="lazy" />}
              title="Simon Adams"
              designation="CTO"
            />
          </div>

          <div className="item">
            <Meetitem
              img={<img src="images/meetimg3.png" loading="lazy" />}
              title="Paul Jones"
              designation="Design Lead"
            />
          </div>

          <div className="item">
            <Meetitem
              img={<img src="images/meetimg4.png" loading="lazy" />}
              title="Sara Hardin"
              designation="Project Manager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;
