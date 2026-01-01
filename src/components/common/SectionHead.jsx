import React from "react";
import { motion } from "motion/react";

const SectionHead = ({ title, text }) => {
  return (
    <div className="pb-16 flex flex-col gap-y-4 ">
      <h2 className="w-fit mx-auto px-[10px] font-primary font-normal text-brand-1 text-[44px] md:text-[64px] leading-[72px] text-center relative group">
        {title}
        <div className="flex justify-center items-center  absolute inset-0 top-[110%] ">
          <div className="bg-brand-1 w-2 h-2 rounded-full  "></div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="h-[2px] bg-brand-1 shadow-[0_0_10px_#12f7d6] "
          ></motion.div>
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
