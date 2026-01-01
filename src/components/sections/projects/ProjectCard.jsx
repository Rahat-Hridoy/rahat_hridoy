import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "motion/react";

const ProjectCard = ({ cardContent }) => {
  const btnItem = [
    {
      id: 1,
      text: "Git-Hub",
      icon: FaCodeBranch,
      path: cardContent.github,
    },
    {
      id: 2,
      text: "Live URL",
      icon: FiExternalLink,
      path: cardContent.liveurl,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="max-w-[490px] rounded-2xl border-2 border-brand-1/50 project-art flex flex-col duration-200 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] hover:bg-cardBG/80 overflow-hidden group"
    >
      {/* figure with parallax hover effect */}
      <div className="w-full h-[250px] overflow-hidden rounded-t-2xl relative">
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-brand-1/10 lg:opacity-0 group-hover:opacity-10 z-10 transition-opacity duration-300"></div>
        <motion.img
          transition={{ duration: 0.5 }}
          src={cardContent.img}
          alt="image"
          className="w-full h-full object-cover object-top transition-all duration-[3000ms] ease-in-out group-hover:object-bottom"
        />
      </div>
      {/* article  */}
      <div className="p-[20px] flex-1 relative z-20">
        <h4 className="font-second font-medium text-brand-1 text-[24px] leading-[32px] pb-[8px] group-hover:text-white transition-colors">
          {" "}
          {cardContent.title}
        </h4>
        <p className="pera-text text-[16px] leading-[24px] text-justify  ">
          {" "}
          {cardContent.text}{" "}
        </p>
        {/* project-technology */}
        <div className="flex flex-wrap justify-start items-center gap-3 py-3 ">
          {cardContent.projectTech.map((item) => (
            <span
              key={item}
              className="font-second font-semibold text-second-bg text-[16px] leading-[24px] px-[14px] py-[2px]  bg-brand-1 rounded-full  uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      {/* button */}
      <div className="w-full flex justify-between items-center mt-[16px] px-[20px] pb-[20px] relative z-20 ">
        {btnItem.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => {
                const link = document.createElement("a");
                link.href = item.path;
                link.target = "_blank";
                link.click();
              }}
              className="flex justify-between items-center gap-3 px-3 xl:px-4 py-2 xl:py-3 border-3 border-primary/20 rounded-full bg-primary-bg duration-300  hover:cursor-pointer hover:bg-brand-1 hover:text-primary-bg active:bg-primary-bg active:scale-95 group/btn"
            >
              <span className="font-second font-medium text-[16px] leading-[20px] text-primary group-hover/btn:text-primary-bg">
                {item.text}
              </span>
              <Icon className="text-primary w-4 h-4 group-hover/btn:text-primary-bg" />
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
