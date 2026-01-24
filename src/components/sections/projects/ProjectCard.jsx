import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";

const ProjectCard = ({ cardContent }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group flex flex-col h-full bg-cardBG border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_10px_30px_rgba(18,247,214,0.1)] hover:border-brand-1/30 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-48 md:h-60 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-brand-1/0 group-hover:bg-brand-1/5 transition-colors z-10 duration-300"></div>
        <img
          src={cardContent.image}
          alt={cardContent.title}
          className="w-full h-full object-cover object-top transition-all duration-[3000ms] ease-in-out group-hover:object-bottom"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className="text-2xl font-primary font-bold text-white mb-3 group-hover:text-brand-1 transition-colors">
          {cardContent.title}
        </h3>

        <p className="text-gray-400 font-second text-sm leading-relaxed mb-4 line-clamp-3">
          {cardContent.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {Array.isArray(cardContent.tech) && cardContent.tech.map((tech, idx) => (
            <span key={idx} className="text-xs font-second font-medium text-brand-1 bg-brand-1/5 px-2 py-1 rounded border border-brand-1/10">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/10">
          <a
            href={cardContent.github_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-1 text-black font-bold font-second text-sm hover:bg-white transition-all shadow-lg shadow-brand-1/20 hover:shadow-brand-1/40"
            title="View Source Code"
          >
            <FaGithub size={18} /> Code
          </a>
          <a
            href={cardContent.live_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-1 text-black font-bold font-second text-sm hover:bg-white transition-all shadow-lg shadow-brand-1/20 hover:shadow-brand-1/40"
          >
            Live Link <FaExternalLinkAlt size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
