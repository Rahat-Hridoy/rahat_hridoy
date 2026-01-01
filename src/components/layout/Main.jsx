import React from "react";
import Hero from "../sections/hero/Hero";
import About from "../sections/about/About";
import Skills from "../sections/skills/Skills";
import Contact from "../sections/contact/Contact";
import Project from "../sections/projects/Project";
import SplashCursor from "../animation/SplashCursor";

export const Main = () => {
  return (
    <main className="bg-sectionBG">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      {/* <SplashCursor /> */}
    </main>
  );
};
