import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbBrandDiscord } from "react-icons/tb";

const Footer = () => {
  return (
    <section className="bg-second-bg border-t-1 border-primary/20 ">
      <div className="container mx-auto py-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center lg:justify-items-normal lg:grid-flow-col  space-y-6 lg:space-y-0 space-x-[48px] xl:grid-cols-[auto_1fr_1fr_auto] ">
          {/* license */}
          <div className="max-w-[300px] order-2 lg:order-1   ">
            <p className=" font-primary font-light text-primary text-[16px] leading-[18px] ">
              © 2025 Rahat_Hridoy. All rights reserved.
            </p>
          </div>
          {/* Term & condision */}
          <div className="order-3 lg:order-2 ">
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
          </div>
          {/* Social icon */}
          <div className="order-1 md:col-span-2 lg:col-span-1 lg:order-3 ">
            <div className=" flex justify-center items-center gap-8">
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
          </div>
          {/* Credit */}
          <div className="order-4  md:col-span-2 lg:col-span-1 lg:order-4  ">
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
