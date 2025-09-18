import React from "react";
import { AiOutlineDiscord } from "react-icons/ai";
import { CiLinkedin, CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-primary-bg ">
      <nav className="container mx-auto px-[24px] md:px-0 ">
        <div className="wrapper flex items-center justify-between min-h-[170px] border-b-1 border-white/10 ">
          <div>
            <button
              to="./Hero.jsx"
              className="font-second font-normal text-primary text-[16px] leading-[20px] md:text-[24px] md:leading-[32px] lg:font-medium lg:text-[32px]  lg:leading-10 hover: cursor-pointer  "
            >
              {" "}
              <span className="text-brand-1 "> {"<C/>"}</span>Rahat-Hridoy
            </button>
          </div>
          <div className="flex items-center justify-between">
            <ul className="flex items-center justify-between gap-x-[16px] md:gap-x-[32px]">
              <li className="nav-list">
                <a href="#">Home</a>
              </li>
              <li className="nav-list ">
                <a href="#">Projects</a>
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
                <a href="#" className="flex items-center justify-center gap-2">
                  <CiLinkedin className="w-[24px] h-[24px] text-brand-1 " />
                  <span className="hidden xl:block ">LinkdIn</span>
                </a>
              </li>
              <li className="nav-menu-social">
                <a href="#" className="flex items-center justify-center gap-2">
                  <AiOutlineDiscord className="w-[24px] h-[24px] text-brand-1 " />
                  <span className="hidden xl:block ">Discord</span>
                </a>
              </li>
              <li className="nav-menu-social">
                <a href="#" className="flex items-center justify-center gap-2">
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
