import React from "react";
import Hero from "../../components/sections/hero/Hero";
import About from "../../components/sections/about/About";
import Skills from "../../components/sections/skills/Skills";
import Contact from "../../components/sections/contact/Contact";
import Project from "../../components/sections/projects/Project";
import SplashCursor from "../../components/animation/SplashCursor";

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
