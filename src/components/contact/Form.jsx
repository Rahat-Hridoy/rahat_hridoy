import React from "react";
import { FiSend } from "react-icons/fi";
import Btn from "../Btn";

const Form = () => {
  return (
    <form className="max-w-[1120px] mx-auto pt-16 px-[35px] lg:px-0 ">
      <div className="w-full flex flex-col items-start gap-y-[34px] lg:flex-row lg:justify-center lg:items-center gap-x-[128px]  ">
        {/* input name */}
        <div className="w-full lg:w-[496px] flex flex-col gap-[24px] ">
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
              className="form-input-box"
              required
            />
          </div>
        </div>
        {/* input email*/}
        <div className="w-full lg:w-[496px] flex flex-col gap-[24px] ">
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
              required
              className="form-input-box "
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
            <textarea
              type="text"
              placeholder="Enter your message"
              required
              className="form-input-box h-[150px] resize-none  "
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
  );
};

export default Form;
