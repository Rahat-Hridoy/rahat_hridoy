import React from "react";
import ScrollMouse from "../animation/Scroll";
import SectionHead from "../common/SectionHead";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="section-padding" id="contact">
      <div className="container mx-auto">
        <div className="wrapper">
          <ScrollMouse />
          <SectionHead
            title={"Contact"}
            text={"I’m currently available for freelance work"}
          />
          <div>
            <div className="flex justify-center items-center">
              <h3 className="max-w-[407px] font-second font-medium text-brand-1 text-[32px] text-center leading-[42px] px-[30px] md:px-[40px]  py-[14px] md:py-[16px] border-2 border-brand-1 rounded-tl-4xl rounded-br-4xl">
                Send me a message
              </h3>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
