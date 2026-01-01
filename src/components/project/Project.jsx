import React, { useState } from "react";
import SectionHead from "../common/SectionHead";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "motion/react";

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
      img: "/image/plumber-point-website.png",
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(cardContent.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const currentItems = cardContent.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger effect
      },
    },
  };

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
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-6"
          >
            {currentItems.map((item) => (
              <ProjectCard key={item.id} cardContent={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* PAGINATION */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-second font-medium text-lg transition-colors ${currentPage === 1
                ? "text-gray-500 cursor-not-allowed"
                : "text-brand-1 hover:text-white"
              }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-full font-second font-bold text-lg transition-all ${currentPage === page
                  ? "bg-brand-1 text-primary-bg scale-110"
                  : "bg-transparent text-brand-1 border border-brand-1 hover:bg-brand-1/20"
                }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-second font-medium text-lg transition-colors ${currentPage === totalPages
                ? "text-gray-500 cursor-not-allowed"
                : "text-brand-1 hover:text-white"
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
