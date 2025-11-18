import React, { useState } from "react";
import SectionHead from "../common/SectionHead";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const cardContent = [
    {
      id: 1,
      img: "/image/portfolio_website.png",
      title: "Portfolio Website",
      text: " A front-end developer's minimalist portfolio. Built with React JS, Tailwind CSS, Framer Motion and JavaScript. Features responsive design, and a clean code . Streamlined for showcasing projects and professional outreach. ",
      projectTech: ["React JS", "CSS", "Taildwind", "Framer Motion"],
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
    {
      id: 4,
      img: "/image/LMS_Website.png",
      title: "LMS Website",
      text: " Built my first project with React.js and Tailwind CSS — a simple LMS website. Learned component-based development, responsive design, and state management.",
      projectTech: ["React", "Tailwind CSS", "CSS"],
      github: "https://github.com/Rahat-Hridoy/lesson",
      liveurl: "https://lesson-jet.vercel.app/",
    },
    {
      id: 5,
      img: "/image/LMS_Website.png",
      title: "LMS Website",
      text: " Built my first project with React.js and Tailwind CSS — a simple LMS website. Learned component-based development, responsive design, and state management.",
      projectTech: ["React", "Tailwind CSS", "CSS"],
      github: "https://github.com/Rahat-Hridoy/lesson",
      liveurl: "https://lesson-jet.vercel.app/",
    },
    {
      id: 6,
      img: "/image/LMS_Website.png",
      title: "LMS Website",
      text: " Built my first project with React.js and Tailwind CSS — a simple LMS website. Learned component-based development, responsive design, and state management.",
      projectTech: ["React", "Tailwind CSS", "CSS"],
      github: "https://github.com/Rahat-Hridoy/lesson",
      liveurl: "https://lesson-jet.vercel.app/",
    },
    {
      id: 7,
      img: "/image/LMS_Website.png",
      title: "LMS Website",
      text: " Built my first project with React.js and Tailwind CSS — a simple LMS website. Learned component-based development, responsive design, and state management.",
      projectTech: ["React", "Tailwind CSS", "CSS"],
      github: "https://github.com/Rahat-Hridoy/lesson",
      liveurl: "https://lesson-jet.vercel.app/",
    },
    {
      id: 8,
      img: "/image/LMS_Website.png",
      title: "LMS Website",
      text: " Built my first project with React.js and Tailwind CSS — a simple LMS website. Learned component-based development, responsive design, and state management.",
      projectTech: ["React", "Tailwind CSS", "CSS"],
      github: "https://github.com/Rahat-Hridoy/lesson",
      liveurl: "https://lesson-jet.vercel.app/",
    },
    {
      id: 9,
      img: "/image/LMS_Website.png",
      title: "LMS Website",
      text: " Built my first project with React.js and Tailwind CSS — a simple LMS website. Learned component-based development, responsive design, and state management.",
      projectTech: ["React", "Tailwind CSS", "CSS"],
      github: "https://github.com/Rahat-Hridoy/lesson",
      liveurl: "https://lesson-jet.vercel.app/",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    if (allShown) {
      setVisibleCount((prev) => prev - prev + 3);
    } else {
      setVisibleCount((prev) => prev + 3);
    }
  };

  const allShown = visibleCount >= cardContent.length;

  return (
    <section className="section-padding" id="project">
      <div className="container mx-auto">
        <div className="wrapper">
          <SectionHead
            title={"Project"}
            text={"I had the pleasure of working with these awesome projects"}
          />
        </div>

        {/* CARDs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-6">
          {cardContent.slice(0, visibleCount).map((item) => (
            <ProjectCard key={item.id} cardContent={item} />
          ))}
        </div>

        {/* SHOW MORE BUTTON */}
        <div className="mt-12">
          <button
            onClick={handleShowMore}
            className={`mx-auto bg-brand-1 rounded-full flex items-center justify-center gap-x-4 px-8 py-4 duration-300 hover:cursor-pointer active:scale-95`}
          >
            <span className="font-primary font-medium text-[20px] text-primary-bg leading-[24px] ">
              {allShown ? "Show Less" : "See More"}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
