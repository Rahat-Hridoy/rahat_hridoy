import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { GiMailShirt } from "react-icons/gi";
import { GoLink } from "react-icons/go";
import { LuDownload } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineWorkOutline } from "react-icons/md";

const Hero = () => {
  const info = [
    {
      id: 1,
      icon: <MdOutlineEmail />,
      text: " rahathridoyd2x@gmail.com",
    },
    {
      id: 2,
      icon: <CiLocationOn />,
      text: " Bangladesh",
    },
    {
      id: 3,
      icon: <MdOutlineWorkOutline />,
      text: " Full-time",
    },
    {
      id: 4,
      icon: <GoLink />,
      text: " rahathridoy.com",
    },
  ];

  const skills = ["HTML", "CSS", "JS", "React"];

  return (
    <section className="bg-primary-bg h-screen">
      <div className="container mx-auto">
        <div className="wrapper">
          <div>
            <h1 className="font-primary font-normal text-brand-2 text-[117px] text-center leading-[134px] py-[64px]">
              Developer
            </h1>
          </div>
          {/* left-side */}
          <div className="w-[320px] h-[520px] border-4 border-primary  px-[22px] py-[36px] relative">
            <div className="before:content-[' '] "></div>
            <div>
              {/* profile */}
              <div>
                <div className="flex flex-col justify-center items-center gap-[16px] ">
                  <img
                    src="/public/image/rahatHridoy.jpeg"
                    alt="image"
                    className="w-[90px] h-[90px] rounded-full border-4 border-brand-1 "
                  />
                </div>
                <h3 className="font-second font-medium text-primary text-[32px] leading-[42px] text-center">
                  Rahat
                </h3>
                <h5 className="font-second font-normal text-primary text-sm leading-[18px] text-center">
                  Full-stack Developer{" "}
                </h5>
              </div>
              {/* information */}
              <div>
                <ul className="py-[32px] flex flex-col justify-center items-start gap-y-[16px] ">
                  {info.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-start gap-4 "
                    >
                      <span className="text-brand-1 w-[14px] h-[14px] ">
                        {item.icon}
                      </span>

                      <span className="pera-text text-sm leading-[18px]  ">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* skills */}
              <div className="flex items-center justify-start gap-4 pb-8  ">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="max-w-[60px] pera-text text-sm leading-[18px] px-2 bg-brand-1 rounded-full "
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {/* CV button */}
              <button className="bg-primary rounded-full flex items-center justify-center gap-x-4 px-8 py-4 duration-300 hover:cursor-pointer hover:bg-primary/80 active:bg-primary active:scale-95 ">
                <span className="font-primary font-normal text-[20px] text-primary-bg leading-[24px] ">
                  Download CV
                </span>
                <LuDownload className="text-primary-bg w-6 h-6 " />
              </button>
            </div>
          </div>

          {/* Right-side */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
