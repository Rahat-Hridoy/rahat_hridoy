import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoLink } from "react-icons/go";
import { MdOutlineEmail, MdOutlineWorkOutline } from "react-icons/md";
import Btn from "./Btn";
import { PiDownloadSimpleBold } from "react-icons/pi";
import ShinyText from "./ShinyText";
import { FiPhone } from "react-icons/fi";

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
      icon: <FiPhone />,
      text: "+880 1917 579030",
    },
  ];

  const skills = ["HTML", "CSS", "JS", "React"];

  const exp = [
    {
      id: 1,
      digit: 4,
      title: "Programming Language",
    },
    {
      id: 2,
      digit: 6,
      title: "Development Tools",
    },
    {
      id: 3,
      digit: 8,
      title: "Year of experiance",
    },
  ];

  return (
    <section className="bg-second-bg  relative shadow-2xl " id="home">
      <div className="absolute inset-0 bg-[url('/image/framer_bg.png')] bg-no-repeat bg-cover bg-center opacity-15 "></div>
      <div className="container mx-auto relative z-10  px-[35px] lg:px-0 ">
        <div className="wrapper pb-[64px] lg:pb-[128px] pt-[128px] md:pt-[150px] lg:pt-[90px] ">
          <div className="hidden lg:block ">
            <h1 className="font-primary font-normal  text-[117px] text-center leading-[134px] py-[64px]">
              <ShinyText
                text="Developer"
                disabled={false}
                speed={5}
                className="text-brand-1/60"
              />
            </h1>
          </div>
          <div className="grid grid-cols-1 space-y-16 space-x-8 lg:grid-cols-[auto_1fr] xl:grid-cols-[1fr_auto_1fr]   justify-items-center place-items-center">
            {/* left-side: information  */}
            <div className=" lg:col-span-2 xl:col-span-1 w-[320px] h-[520px] border-4 border-primary  px-[22px] py-[36px] rounded-tl-[160px] rounded-br-[160px] relative">
              <div>
                {/* profile */}
                <div>
                  <div className="flex flex-col justify-center items-center gap-[16px] ">
                    <img
                      src="/image/rahatHridoy.jpeg"
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
                      key={skill.id}
                      className="max-w-[60px] pera-text text-sm leading-[18px] px-2 bg-brand-1 rounded-full "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* CV button */}
              </div>
              <a
                href="/document/MD-RAHATUL-ISLAM-resume-post-web-designer.pdf"
                target="_blank"
              >
                <Btn
                  text={"Download CV"}
                  icon={PiDownloadSimpleBold}
                  color={"bg-primary hover:bg-primary/90 active:bg-primary"}
                />
              </a>
            </div>
            {/* Middle-side : intro */}
            <div className=" flex flex-col  gap-y-[32px]  ">
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
                <a href="#contact">
                  <button className="flex items-center justify-start gap-x-[16px] font-second font-medium text-brand-1 text-[32px] leading-[42px] pl-6 hover:cursor-pointer hover:underline">
                    <span>Let’s Talk</span> <MdOutlineEmail />
                  </button>
                </a>
              </div>
            </div>
            {/* right side-card : experiance */}
            <div className="max-w-[215px] bg-primary-bg rounded-[80px] px-[32px] py-[48px]  ">
              {exp.map((item) => (
                <div
                  key={item.id}
                  className=" flex justify-center items-center gap-x-4 py-[16px] "
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
