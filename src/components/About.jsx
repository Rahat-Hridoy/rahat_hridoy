import React from "react";
import { LuMouse } from "react-icons/lu";

const About = () => {
  return (
    <section className="bg-second-bg relative ">
      <div className="absolute inset-0 bg-[url('/image/about_bg.png')] bg-no-repeat bg-cover bg-center opacity-10 "></div>
      <div className="container mx-auto py-[128px] relative z-10">
        <div className="wrapper">
          <div className="flex justify-center items-center text-brand-1">
            <LuMouse className="w-8 h-11 " />
          </div>
          <div className="flex justify-between items-center pt-[134px] ">
            {/* Left side-about description */}
            <div className="flex flex-col gap-16  ">
              {/* Head */}
              <h1 className="max-w-[367px] font-primary font-normal text-primary text-[64px] leading-[72px] px-[40px] py-[16px] border-4 border-brand-1 rounded-tl-[50px] rounded-br-[50px] bg-primary-bg  ">
                About Me
              </h1>
              {/* Description */}
              <div className="px-[40px] py-[24px] bg-primary-bg rounded-3xl">
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
                className="w-[462px] h-[556px] rounded-3xl object-cover object-center overflow-hidden  "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
