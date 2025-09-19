import React from "react";

const Btn = ({ text, icon: Icon, color }) => {
  return (
    <button
      className={`${color} rounded-full flex items-center justify-center gap-x-4 px-8 py-4 duration-300 hover:cursor-pointer active:scale-95 `}
    >
      <span className="font-primary font-normal text-[20px] text-primary-bg leading-[24px] ">
        {text}
      </span>
      {Icon && <Icon className="text-primary-bg w-6 h-6" />}
    </button>
  );
};

export default Btn;
