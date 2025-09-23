import React from "react";
import ScrollMouse from "./Scroll";
import SectionHead from "./SectionHead";
import Btn from "./Btn";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="bg-second-bg ">
      <div className="container mx-auto py-16">
        <div className="wrapper">
          <ScrollMouse />
          <SectionHead
            title={"Contact"}
            text={"I’m currently available for freelance work"}
          />
          <div>
            <div className="flex justify-center items-center">
              <h3 className="max-w-[407px] font-second font-medium text-brand-1 text-[32px] text-center leading-[42px] px-[40px] py-[16px] border border-brand-1 rounded-tl-4xl rounded-br-4xl">
                Send me a message
              </h3>
            </div>
            <form className="max-w-[1120px] mx-auto pt-16 px-[35px] lg:px-0 ">
              <div className="w-full flex justify-center items-center gap-x-[128px]  ">
                {/* input name */}
                <div className="w-[496px] flex flex-col gap-[24px] ">
                  <label
                    htmlFor="name"
                    className="font-primary font-light text-brand-1 text-[16px] leading-[18px] "
                  >
                    Your name *
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="outline-none font-primary font-light text-primary text-[16px] leading-[18px] placeholder:font-primary placeholder:font-light placeholder:text-white/50  py-[8px] border-b-1 border-brand-2 w-full "
                    />
                  </div>
                </div>
                {/* input email*/}
                <div className="w-[496px] flex flex-col gap-[24px] ">
                  <label
                    htmlFor="email"
                    className="font-primary font-light text-brand-1 text-[16px] leading-[18px] "
                  >
                    Email *
                  </label>
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="outline-none font-primary font-light text-primary text-[16px] leading-[18px] placeholder:font-primary placeholder:font-light placeholder:text-white/50  py-[8px] border-b-1 border-brand-2 w-full required"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-16">
                <div className=" flex flex-col gap-[24px] ">
                  <label
                    htmlFor="message"
                    className="font-primary font-light text-brand-1 text-[16px] leading-[18px] "
                  >
                    Your message *
                  </label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your message"
                      className="outline-none font-primary font-light text-primary text-[16px] leading-[18px] placeholder:font-primary placeholder:font-light placeholder:text-white/50  py-[8px] border-b-1 border-brand-2 w-full required"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-16 flex justify-center items-center">
                <Btn
                  text={"Sent Message"}
                  icon={FiSend}
                  color={"bg-brand-1 hover:bg-brand-1/80 active:bg-brand-1 "}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
