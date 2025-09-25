import React from "react";
import SectionHead from "../SectionHead";
import ProjectCard from "./ProjectCard";
import Btn from "../Btn";

const Project = () => {
  const cardContent = [
    {
      img: "/public/image/plumber-point-website.png",
      title: "Service Website",
      text: " A front-end developer's minimalist portfolio. Built with HTML, Tailwind CSS, and JavaScript. Features responsive design, and a clean code . Streamlined for showcasing projects and professional outreach. ",
      projectTech: ["Html", "css", "js"],
    },
    {
      img: "/public/image/plumber-point-website.png",
      title: "Service Website",
      text: " A front-end developer's minimalist portfolio. Built with HTML, Tailwind CSS, and JavaScript. Features responsive design, and a clean code . Streamlined for showcasing projects and professional outreach. ",
      projectTech: ["Html", "css", "React"],
    },
    {
      img: "/public/image/plumber-point-website.png",
      title: "Service Website",
      text: " A front-end developer's minimalist portfolio. Built with HTML, Tailwind CSS, and JavaScript. Features responsive design, and a clean code . Streamlined for showcasing projects and professional outreach.showcasing projects and professional outreach ",
      projectTech: ["Html", "tailwind css", "js"],
    },
  ];
  return (
    <section className="bg-second-bg ">
      <div className="container mx-auto px-[35px] lg:px-0 py-[64px] lg:py-[128px]">
        <div className="wrapper">
          <SectionHead
            title={"Project"}
            text={"I had the pleasure of working with these awesome projects"}
          />
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-3 justify-items-center gap-6   ">
          {cardContent.map((item) => (
            <ProjectCard cardContent={item} />
          ))}
        </div>
        <div>
          <Btn text={"See More"} color={"bg-brand-1 mt-[64px] mx-auto "} />
        </div>
      </div>
    </section>
  );
};

export default Project;
