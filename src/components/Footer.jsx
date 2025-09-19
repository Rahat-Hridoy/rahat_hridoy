import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbBrandDiscord } from "react-icons/tb";

const Footer = () => {
  return (
    <section className="bg-second-bg border-t-1 border-primary/20 ">
      <div className="container mx-auto py-[16px]">
        <div className="wrapper flex justify-between items-center gap-5">
          <div>
            <p className="font-primary font-light text-primary text-[16px] leading-[18px] ">
              © 2025 Rahat_Hridoy. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center items-center gap-8">
            <a
              href="#"
              className="font-primary font-light text-primary text-[16px] leading-[18px] "
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-primary font-light text-primary text-[16px] leading-[18px] "
            >
              Terms & Conditions
            </a>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="p-2 bg-brand-2 rounded-full">
              <a href="#">
                <CiLinkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="p-2 bg-brand-2 rounded-full">
              <a href="#">
                <TbBrandDiscord className="w-4 h-4" />
              </a>
            </div>
            <div className="p-2 bg-brand-2 rounded-full">
              <a href="#">
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
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
