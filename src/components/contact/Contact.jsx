import React from "react";
import ScrollMouse from "../Scroll";
import SectionHead from "../SectionHead";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="bg-second-bg " id="contact">
      <div className="container mx-auto py-16">
        <div className="wrapper">
          <ScrollMouse />
          <SectionHead
            title={"Contact"}
            text={"I’m currently available for freelance work"}
          />
          <div>
            <div className="flex justify-center items-center">
              <h3 className="max-w-[407px] font-second font-medium text-brand-1 text-[32px] text-center leading-[42px] px-[40px] py-[16px] border-2 border-brand-1 rounded-tl-4xl rounded-br-4xl">
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
