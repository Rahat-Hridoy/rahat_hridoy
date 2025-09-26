import React from "react";
import SectionHead from "../SectionHead";
import ProjectCard from "./ProjectCard";
import Btn from "../Btn";

const Project = () => {
  const cardContent = [
    {
      id: 1,
      img: "/image/plumber-point-website.png",
      title: "Service Website",
      text: " A front-end developer's minimalist portfolio. Built with HTML, Tailwind CSS, and JavaScript. Features responsive design, and a clean code . Streamlined for showcasing projects and professional outreach. ",
      projectTech: ["Html", "css", "js"],
      github: "https://github.com/Rahat-Hridoy/rahat_hridoy",
      liveurl: "https://rahat-hridoy.vercel.app/",
    },
    {
      id: 2,
      img: "/image/plumber-point-website.png",
      title: "Service Website",
      text: " A service-based website for professional plumbing solutions, Plumber Point is built using HTML, CSS, Tailwind CSS, JavaScript, and jQuery. It features a responsive design, smooth interactions, and clear service listings. ",
      projectTech: ["Html", "Tailwind CSS", "JS", "jQuery"],
      github: "https://github.com/Rahat-Hridoy/Plumber-Point",
      liveurl: "https://sprightly-frangipane-d62365.netlify.app/",
    },
    {
      id: 3,
      img: "/image/LMS_Website.png",
      title: "LMS Website",
      text: " Built my first project with React.js and Tailwind CSS — a simple LMS website. Learned component-based development, responsive design, and state management.",
      projectTech: ["React", "Tailwind CSS", "CSS"],
      github: "https://github.com/Rahat-Hridoy/lesson",
      liveurl: "https://lesson-jet.vercel.app/",
    },
  ];
  return (
    <section className="bg-second-bg" id="project">
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
