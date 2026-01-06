import React, { useState } from "react";
import SectionHead from "../../common/SectionHead";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "motion/react";
import { useData } from "../../../context/DataContext";

const Project = () => {
  const { projects: cardContent } = useData();

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

        {/* MODERN PAGINATION */}
        <div className="mt-16 flex justify-center items-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-second font-medium text-lg transition-all duration-300 border border-brand-1 ${currentPage === 1
              ? "text-gray-600 border-gray-600 cursor-not-allowed opacity-50"
              : "text-brand-1 hover:bg-brand-1 hover:text-white hover:shadow-[0_0_15px_rgba(8,_112,_184,_0.4)]"
              }`}
          >
            Prev
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-lg font-second font-bold text-lg transition-all duration-300 flex items-center justify-center border ${currentPage === page
                  ? "bg-brand-1 text-white border-brand-1 shadow-[0_0_15px_rgba(8,_112,_184,_0.4)] scale-110"
                  : "bg-transparent text-gray-400 border-gray-700 hover:border-brand-1 hover:text-brand-1"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-second font-medium text-lg transition-all duration-300 border border-brand-1 ${currentPage === totalPages
              ? "text-gray-600 border-gray-600 cursor-not-allowed opacity-50"
              : "text-brand-1 hover:bg-brand-1 hover:text-white hover:shadow-[0_0_15px_rgba(8,_112,_184,_0.4)]"
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
