import React from "react";
import "./client.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const client = () => {
  return (
    <section class="client">
      <div class="container">
        <div class="box">
          <div class="left">
            <div class="title">
              <h2>What our clients say about us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
              </p>
            </div>
          </div>

          <div class="right">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              modules={[Navigation]}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <h2 className="clientslideheading">
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h2>
                <div className="clientInfo">
                  <img src="images/clientimg.png" />
                  <div className="info">
                    <h3>Jenny Wilson</h3>
                    <h4>Vice President</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2 className="clientslideheading">
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h2>
                <div className="clientInfo">
                  <img src="images/clientimg.png" />
                  <div className="info">
                    <h3>Jenny Wilson</h3>
                    <h4>Vice President</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2 className="clientslideheading">
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h2>
                <div className="clientInfo">
                  <img src="images/clientimg.png" />
                  <div className="info">
                    <h3>Jenny Wilson</h3>
                    <h4>Vice President</h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <h2 className="clientslideheading">
                  "The best agency we’ve worked with so far. They understand our
                  product and are able to add new features with a great focus."
                </h2>
                <div className="clientInfo">
                  <img src="images/clientimg.png" />
                  <div className="info">
                    <h3>Jenny Wilson</h3>
                    <h4>Vice President</h4>
                  </div>
                </div>
              </SwiperSlide>
              <div className="clientsliderarrow">
                <div className="prev">
                  <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="next">
                  <i className="fa-solid fa-angle-right"></i>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default client;
