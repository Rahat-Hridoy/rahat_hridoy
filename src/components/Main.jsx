import React from "react";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Skils from "./Skils";
import Contact from "./Contact";

export const Main = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skils />
      {/* <Project /> */}
      <Contact />
    </main>
  );
};
