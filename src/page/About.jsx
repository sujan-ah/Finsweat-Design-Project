import React from "react";
import Benefits from "../component/benefits/Benefits";
import Designsolv from "../component/designsolv/Designsolv";
import Goal from "../component/goal/Goal";
import Inspire from "../component/inspire/Inspire";
import Meet from "../component/meet/Meet";
import Process from "../component/process/Process";

const About = () => {
  return (
    <>
      <Designsolv />
      <Goal />
      <Process />
      <Inspire />
      <Benefits />
      <Meet />
    </>
  );
};

export default About;
