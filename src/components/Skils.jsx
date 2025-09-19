import React from "react";
import ScrollMouse from "./Scroll";
import { FiMonitor } from "react-icons/fi";
import { LuSmartphone } from "react-icons/lu";
import TechSkill from "./TechSkill";
import { RiHtml5Line } from "react-icons/ri";
import SectionHead from "./SectionHead";
import { FaCss3, FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";

const Skils = () => {
  const cardItem = [
    {
      icon: <FiMonitor className="w-8 h-8 " />,
      title: "Web Developement",
      text: "html.css.js.react",
    },
    {
      icon: <LuSmartphone className="w-8 h-8" />,
      title: "App Developement",
      text: "iOS.Android",
    },
  ];
  return (
    <section className="bg-primary-bg relative">
      <div className="absolute inset-0 bg-[url('/image/skill_bg.png')] bg-no-repeat bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto py-[128px] relative z-10 ">
        <div className="wrapper">
          <ScrollMouse />
          {/* Section-title */}
          <SectionHead
            title={"Skills"}
            text={"I am striving to never stop learning and improving"}
          />
          {/* skill-cards */}
          <div className="flex justify-center items-center gap-[152px] ">
            {cardItem.map((item) => (
              <div
                key={item}
                className=" w-[288px] flex flex-col items-center justify-center gap-2 bg-brand-2 py-[16px] px-[24px] rounded-2xl "
              >
                <div> {item.icon} </div>
                <h5 className="font-second font-normal text-primary-bg text-[24px] leading-8 text-center ">
                  {item.title}
                </h5>
                <p className="font-second font-normal text-[#43454D] text-[16px] leading-[20px] text-center uppercase ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          {/* Skill-technology */}
          <div className="flex justify-center items-center gap-[128px] pt-[90px]">
            <div className="flex flex-col items-center justify-center gap-6 ">
              <div className="p-[40px] rounded-full bg-[#E54F26] ">
                <RiHtml5Line className="w-16 h-16 text-primary" />
              </div>
              <p
                className={`font-second font-medium text-[32px] leading-[42px] text-[#E54F26] uppercase`}
              >
                Html
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 ">
              <div className="p-[40px] rounded-full bg-[#E54F26] ">
                <FaCss3 className="w-16 h-16 text-primary" />
              </div>
              <p
                className={`font-second font-medium text-[32px] leading-[42px] text-[#E54F26] uppercase`}
              >
                Css
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 ">
              <div className="p-[40px] rounded-full bg-[#E54F26] ">
                <SiNodedotjs className="w-16 h-16 text-primary" />
              </div>
              <p
                className={`font-second font-medium text-[32px] leading-[42px] text-[#E54F26] uppercase`}
              >
                js
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 ">
              <div className="p-[40px] rounded-full bg-[#E54F26] ">
                <FaReact className="w-16 h-16 text-primary" />
              </div>
              <p
                className={`font-second font-medium text-[32px] leading-[42px] text-[#E54F26] uppercase`}
              >
                react
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
