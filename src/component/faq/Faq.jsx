import React from "react";
import Accordian from "../../helpers/accordian/Accordian";
import "./faq.css";

const Faq = () => {
  
    


  return (
    <section className="faq">
      <div className="container">
        <div className="box">
          <div className="left">
            <div className="title">
              <h2>Frequently asked questions</h2>
              <a href="#">Contact us for more info</a>
            </div>
          </div>

          <div className="right">
            
            <Accordian/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;