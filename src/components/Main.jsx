import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skils from "./Skils";
import Contact from "./Contact";
import Project from "./project/Project";

export const Main = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skils />
      <Project />
      <Contact />
    </main>
  );
};
