import React from "react";
import { LuMouse } from "react-icons/lu";
import ScrollMouse from "./animation/Scroll";

const About = () => {
  return (
    <section className="relative">
      <div className="w-[600px] h-[600px] rounded-full shadow-[100px] top-[30px] right-[10%] absolute bg-brand-1/50 blur-[250px] "></div>
      <div className="container mx-auto relative z-10">
        <div className="wrapper">
          <div className="hidden lg:block ">
            <ScrollMouse />
          </div>
          <div className="flex flex-col xl:flex-row justify-between items-center lg:items-end gap-10 pt-0  ">
            {/* Left side-about description */}
            <div className="flex flex-col gap-16  ">
              {/* Head */}
              <h1 className="max-w-[367px] font-primary font-normal text-primary text-[32px] md:text-[64px] leading-[36px] md:leading-[72px] px-[40px] py-[16px] border-4 border-brand-1 rounded-tl-[50px] rounded-br-[50px] bg-primary-bg mx-auto md:mx-0 ">
                About Me
              </h1>
              {/* Description */}
              <div className="px-[24px] md:px-[40px] py-[58px] bg-cardBG/70 shadow-white/5 shadow-md backdrop-blur-md  rounded-3xl">
                <p className="tag-style"> {"<p>"} </p>
                <h4 className="font-second font-medium text-brand-1 text-[32px] leading-[42px] pt-[16px] ">
                  Hello !
                </h4>
                <p className="pera-text text-[16px] leading-[20px] text-justify max-w-[880px] py-[16px] ">
                  My name is Rahat and I specialize in web developement that
                  utilizes
                  <span className="text-brand-1"> HTML</span> ,
                  <span className="text-brand-1"> CSS</span>{" "}
                  <span className="text-brand-1"> JS</span>{" "}
                  <span className="text-brand-1"> React</span> etc. <br />
                  <br /> I am a highly motivated individual and eternal optimist
                  dedicated to writing clear, concise, robust code that works.
                  Striving to never stop learning and improving. <br />
                  <br /> When I'm not coding, I am writing bolgs, reading, or
                  picking up some new hands-on art project like photography.{" "}
                  <br />
                  <br /> I like to have my perspective and belief systems
                  challenged so that I see the world through new eyes.
                </p>
                <p className="tag-style"> {"</p>"} </p>
              </div>
            </div>
            {/* right side - image */}
            <div>
              <img
                src="/image/about_me.jpg"
                alt="image"
                className="w-[272px] md:w-[462px]  rounded-3xl object-cover object-center overflow-hidden  "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
