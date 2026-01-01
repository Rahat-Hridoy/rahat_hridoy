import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import Btn from "../../common/Btn";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.user_name.trim()) {
      newErrors.user_name = "Name is required";
    }

    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (!validateEmail(formData.user_email)) {
      newErrors.user_email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form before sending
    if (!validateForm()) {
      toast.error("Failed to send message. Please try again!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    emailjs
      .sendForm("service_bxx40xl", "template_gsfkvee", form.current, {
        publicKey: "L4UvlNzkQ1WOeebJY",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          // Reset form data
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });

          // Reset errors
          setErrors({});

          // Reset form reference
          if (form.current) {
            form.current.reset();
          }

          toast.success("Message successfully sent!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message. Please try again!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-[1120px] mx-auto pt-16 px-[10px] lg:px-0 "
    >
      <div className="w-full flex flex-col items-start gap-y-[34px] lg:flex-row lg:justify-center lg:items-center gap-x-[128px]">
        {/* Input name */}
        <div className="w-full lg:w-[496px] flex flex-col gap-[24px] relative">
          <label
            htmlFor="name"
            className="font-primary font-light text-brand-1 text-[16px] leading-[18px]"
          >
            Your name *
          </label>
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className={`form-input-box relative ${errors.user_name ? "border-red-500 border-2" : ""
                }`}
              value={formData.user_name}
              onChange={handleInputChange}
              required
            />
            {errors.user_name && (
              <p className="text-red-500 text-sm absolute inset-0 top-[105%]  ">
                {errors.user_name}
              </p>
            )}
          </div>
        </div>

        {/* Input email */}
        <div className="w-full lg:w-[496px] flex flex-col gap-[24px] relative">
          <label
            htmlFor="email"
            className="font-primary font-light text-brand-1 text-[16px] leading-[18px]"
          >
            Email *
          </label>
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className={`form-input-box  ${errors.user_email ? "border-red-500 border-2" : ""
                }`}
              value={formData.user_email}
              onChange={handleInputChange}
              required
            />
            {errors.user_email && (
              <p className="text-red-500 text-sm absolute inset-0 top-[105%] ">
                {errors.user_email}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="pt-16">
        <div className="flex flex-col gap-[24px]">
          <label
            htmlFor="message"
            className="font-primary font-light text-brand-1 text-[16px] leading-[18px]"
          >
            Your message *
          </label>
          <div>
            <textarea
              name="message"
              placeholder="Enter your message"
              className={`form-input-box h-[150px] resize-none ${errors.message ? "border-red-500 border-2" : ""
                }`}
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm ">{errors.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="pt-16 flex justify-center items-center">
        <Btn
          type="submit"
          text={"Send Message"}
          icon={FiSend}
          color={"bg-brand-1 hover:bg-brand-1/80 active:bg-brand-1"}
        />
        <ToastContainer />
      </div>
    </form>
  );
};

export default Form;
