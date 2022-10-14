import React from "react";
import Banner from "../component/banner/Banner";
import Blog from "../component/blog/Blog";
import Client from "../component/client/Client";
import Design from "../component/design/Design";
import Faq from "../component/faq/Faq";
import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";
import Project from "../component/project/Project";
import Startup from "../component/startup/Startup";
import Work from "../component/work/Work";

const Home = () => {
  return (
    <>
      <Banner />
      <Work />
      <Project />
      <Design />
      <Client />
      <Faq />
      <Startup />
      <Blog />
    </>
  );
};

export default Home;
