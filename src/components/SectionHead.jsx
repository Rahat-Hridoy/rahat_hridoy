import React from "react";

const SectionHead = ({ title, text }) => {
  return (
    <div className="pb-16 flex flex-col gap-y-4 ">
      <h2 className="w-fit mx-auto px-[10px] font-primary font-normal text-brand-1 text-[64px] leading-[72px] text-center relative">
        {title}
        <div className="flex justify-center items-center  absolute inset-0 top-[110%] ">
          <div className="bg-brand-1 w-2 h-2 rounded-full  "></div>
          <div className=" bg-brand-1 h-[2px] w-full "></div>
          <div className="bg-brand-1 w-2 h-2 rounded-full  "></div>
        </div>
      </h2>

      <p className="pera-text text-[16px] leading-[20px] text-center pt-4 ">
        {text}
      </p>
    </div>
  );
};

export default SectionHead;
