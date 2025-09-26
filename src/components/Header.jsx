import React, { useEffect, useState } from "react";
import { AiOutlineDiscord } from "react-icons/ai";
import { CiLinkedin, CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { RiRedditLine } from "react-icons/ri";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.offsetTop - headerOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setActiveSection(sectionId);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for active section detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 w-full z-50 ">
      <nav className="container mx-auto px-[24px] md:px-0 ">
        <div
          className="wrapper flex items-center justify-between min-h-[60px] md:min-h-[90px] px-[10px] md:px-[28px] 
          bg-black/30 backdrop-blur-lg  rounded-2xl shadow-2xl"
        >
          <div>
            <button
              to="/"
              className="font-second font-normal text-primary text-[16px] leading-[20px] md:text-[24px] md:leading-[32px] lg:font-medium lg:text-[32px]  lg:leading-10 hover: cursor-pointer  "
            >
              {" "}
              <span className="text-brand-1 "> {"<C/>"}</span>Rahat-Hridoy
            </button>
          </div>
          <div className="flex items-center justify-between">
            <ul className="flex items-center justify-between gap-x-[16px] md:gap-x-[32px]">
              <li
                className={`nav-list text-primary hover:cursor-pointer `}
                onClick={() => scrollToSection("home")}
              >
                <a>Home</a>
              </li>
              <li
                className={`nav-list text-primary hover:cursor-pointer  `}
                onClick={() => scrollToSection("project")}
              >
                <a>Projects</a>
              </li>
            </ul>
            <div className="flex items-center bg-transparent lg:bg-primary rounded-full py-[6px] px-0 md:px-[16px] mx-[32px] 2xl:mx-[64px] ">
              <input
                type="text"
                name="search"
                className="outline-none hidden lg:block  "
              />
              <CiSearch className="w-[20px] h-[20px] text-primary lg:text-primary-bg hover:cursor-pointer " />
            </div>
            <ul className="hidden md:flex items-center justify-between gap-x-[32px]">
              <li className="nav-menu-social">
                <a
                  href="https://www.linkedin.com/in/rahat-hridoy"
                  className="flex items-center justify-center gap-2"
                  target="_blank"
                >
                  <CiLinkedin className="w-[24px] h-[24px] text-brand-1 " />
                  <span className="hidden xl:block ">LinkdIn</span>
                </a>
              </li>
              <li className="nav-menu-social">
                <a
                  href="https://www.reddit.com/user/Big-Warthog2876/"
                  className="flex items-center justify-center gap-2"
                  target="_blank"
                >
                  <RiRedditLine className="w-[24px] h-[24px] text-brand-1 " />
                  <span className="hidden xl:block ">Reddit</span>
                </a>
              </li>
              <li className="nav-menu-social">
                <a
                  href="https://github.com/Rahat-Hridoy"
                  className="flex items-center justify-center gap-2"
                  target="_blank"
                >
                  <FaGithub className="w-[24px] h-[24px] text-brand-1 " />
                  <span className="hidden xl:block ">Git-Hub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
