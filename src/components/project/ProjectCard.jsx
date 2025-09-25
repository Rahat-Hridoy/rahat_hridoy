import React from "react";
import { FaCodeBranch } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ cardContent }) => {
  const btnItem = [
    {
      id: 1,
      text: "Git-Hub",
      icon: FaCodeBranch,
    },
    {
      id: 2,
      text: "Live URL",
      icon: FiExternalLink,
    },
  ];
  return (
    <>
      {/* Card */}
      <div className="max-w-[490px] rounded-2xl border border-brand-2/50 project-art flex flex-col ">
        {/* figure */}
        <div className="w-full h-[250px] overflow-hidden rounded-t-2xl  ">
          <img src={cardContent.img} alt="image" className="animate-scroll " />
        </div>
        {/* article  */}
        <div className="p-[20px] flex-1">
          <h4 className="font-second font-medium text-brand-1 text-[24px] leading-[32px] pb-[8px] ">
            {" "}
            {cardContent.title}
          </h4>
          <p className="pera-text text-[16px] leading-[24px]   ">
            {" "}
            {cardContent.text}{" "}
          </p>
          {/* project-technology */}
          <div className="flex justify-start items-center gap-x-3 py-3 ">
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
        <div className="w-full flex justify-between items-center mt-[16px] px-[20px] pb-[20px] ">
          {btnItem.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className="flex justify-between items-center gap-3 px-3 xl:px-4 py-2 xl:py-3 border-3 border-primary/20 rounded-full bg-primary-bg duration-300  hover:cursor-pointer hover:bg-second-bg active:bg-primary-bg active:scale-95  "
              >
                <span className="font-second font-medium text-[16px] leading-[20px] text-primary ">
                  {item.text}
                </span>
                <Icon className="text-primary w-4 h-4 " />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
