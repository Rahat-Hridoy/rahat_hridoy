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

  const exp = [
    {
      digit: 4,
      title: "Programming Language",
    },
    {
      digit: 6,
      title: "Development Tools",
    },
    {
      digit: 8,
      title: "Year of experiance",
    },
  ];

  return (
    <section className="bg-primary-bg ">
      <div className="container mx-auto">
        <div className="wrapper pb-[128px] ">
          <div>
            <h1 className="font-primary font-normal text-brand-2 text-[117px] text-center leading-[134px] py-[64px]">
              Developer
            </h1>
          </div>
          <div className=" flex justify-between items-center">
            {/* left-side */}
            <div className="w-[320px] h-[520px] border-4 border-primary  px-[22px] py-[36px] rounded-tl-[160px] rounded-br-[160px] relative">
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

            {/* Middle-side */}
            <div className="flex flex-col  gap-y-[32px] ">
              <div>
                <p className="tag-style"> {"<h1>"} </p>
                <h1 className="intro-text pl-6">
                  {" "}
                  Hey <br /> I'm <span className="text-brand-1">
                    Rahat
                  </span>{" "}
                  <br />
                  Full-Stack Devoloper{" "}
                </h1>
                <p className="tag-style"> {"</h1>"} </p>
              </div>
              <div>
                <p className="tag-style"> {"<p>"} </p>
                <p className="max-w-[650px] pera-text text-[16px] leading-[20px] pl-6 ">
                  I help business grow by crafting amazing web experiences. If
                  you’re looking for a developer that likes to get stuff done,
                </p>
                <p className="tag-style"> {"</p>"} </p>
              </div>
              <div>
                <button className="flex items-center justify-start gap-x-[16px] font-second font-medium text-brand-1 text-[32px] leading-[42px] pl-6 hover:cursor-pointer hover:underline">
                  <span>Let’s Talk</span> <MdOutlineEmail />
                </button>
              </div>
            </div>
            {/* right side-card */}
            <div className="bg-second-bg rounded-[80px] px-[32px] py-[48px]">
              {exp.map((item) => (
                <div
                  key={item}
                  className=" flex justify-center items-center gap-x-4 py-[16px]  "
                >
                  <p className="font-second font-medium text-brand-1 text-[48px] leading-[62px] ">
                    {item.digit}
                  </p>
                  <p className="pera-text text-[16px] leading-[20px] max-w-[106px] ">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
