import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { ImReddit } from "react-icons/im";

const Footer = () => {
  return (
    <section className="bg-sectionBG border-t-1 border-primary/20 ">
      <div className="container mx-auto py-[16px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-[18px] lg:gap-y-0 items-center justify-items-center">
          {/* license */}
          <div className="max-w-[300px] order-2 lg:order-1 ">
            <p className=" font-primary font-light text-primary text-[16px] leading-[18px] ">
              © 2025 Rahat_Hridoy. All rights reserved.
            </p>
          </div>

          {/* Social icon */}
          <div className="order-1 lg:order-2">
            <div className=" flex justify-center items-center gap-8">
              <div className="p-2 bg-brand-1 rounded-full">
                <a
                  href="https://www.linkedin.com/in/rahat-hridoy"
                  target="_blank"
                >
                  <CiLinkedin className="w-4 h-4" />
                </a>
              </div>
              <div className="p-2 bg-brand-1 rounded-full">
                <a
                  href="https://www.reddit.com/user/Big-Warthog2876/"
                  target="_blank"
                >
                  <ImReddit className="w-4 h-4" />
                </a>
              </div>
              <div className="p-2 bg-brand-1 rounded-full">
                <a href="https://github.com/Rahat-Hridoy" target="_blank">
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Credit */}
          <div className=" order-3 lg:order-3 ">
            <p className="font-primary font-light text-primary text-[16px] leading-[18px] ">
              Design By: <span className="text-brand-1">Rahat</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
