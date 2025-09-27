import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import Btn from "../Btn";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const form = useRef();
  const [inputValue, setinputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", inputValue);
    setinputValue("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target.value),
      emailjs
        .sendForm("service_bxx40xl", "template_gsfkvee", form.current, {
          publicKey: "L4UvlNzkQ1WOeebJY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Message successfully sent!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              //   transition: Bounce,
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("Failed !");
          }
        );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-[1120px] mx-auto pt-16 px-[35px] lg:px-0 "
    >
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
              name="user_name"
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
              name="user_email"
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
              name="message"
              placeholder="Enter your message"
              required
              className="form-input-box h-[150px] resize-none  "
            />
          </div>
        </div>
      </div>
      <div className="pt-16 flex justify-center items-center">
        {/* <input
          type="submit"
          value="Send"
          className="px-3 bg-amber-300 rounded-full"
        /> */}
        <Btn
          type="submit"
          value="Send"
          text={"Sent Message"}
          icon={FiSend}
          color={"bg-brand-1 hover:bg-brand-1/80 active:bg-brand-1 "}
        />
        <ToastContainer />
      </div>
    </form>
  );
};

export default Form;
