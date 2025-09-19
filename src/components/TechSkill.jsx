import React from "react";
import { RiHtml5Line } from "react-icons/ri";

const TechSkill = ({ icon: Icon, text, color }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 ">
      <div className={`p-[40px]  rounded-full bg-[${color}]`}>
        <Icon className="w-16 h-16 text-primary" />
      </div>
      <p
        className={`font-second font-medium text-[32px] leading-[42px] text-[${color}]`}
      >
        {text}
      </p>
    </div>
  );
};

export default TechSkill;
