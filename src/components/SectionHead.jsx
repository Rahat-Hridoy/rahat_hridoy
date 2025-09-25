import React from "react";

const SectionHead = ({ title, text }) => {
  return (
    <div className="pb-16 flex flex-col gap-y-4 ">
      <h2 className="font-primary font-normal text-brand-1 text-[64px] leading-[72px] text-center ">
        {title}
      </h2>
      <div className="flex justify-center items-center  ">
        <div className="bg-brand-1 w-2 h-2 rounded-full  "></div>
        <div className="w-[148px] bg-brand-1 h-[0.5px] "></div>
        <div className="bg-brand-1 w-2 h-2 rounded-full  "></div>
      </div>
      <p className="pera-text text-[16px] leading-[20px] text-center ">
        {text}
      </p>
    </div>
  );
};

export default SectionHead;
