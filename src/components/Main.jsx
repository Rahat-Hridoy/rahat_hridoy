import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skils from "./Skils";
import Contact from "./contact/Contact";
import Project from "./project/Project";
import SplashCursor from "./animation/SplashCursor";

export const Main = () => {
  return (
    <main className="bg-sectionBG">
      <Hero />
      <About />
      <Skils />
      <Project />
      <Contact />
      {/* <SplashCursor /> */}
    </main>
  );
};
