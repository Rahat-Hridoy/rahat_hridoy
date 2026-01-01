import React from "react";
import ScrollMouse from "./animation/Scroll";
import SectionHead from "./common/SectionHead";
import { motion } from "motion/react";
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiRedux,
  SiVite,
  SiPostman,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const skillsData = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
];

const Skils = () => {
  // Triple the list for smooth infinite scrolling
  const marqueeSkills = [...skillsData, ...skillsData, ...skillsData];

  return (
    <section className="relative section-padding min-h-screen overflow-hidden" id="skill">
      <div className="w-[80%] h-[80%] absolute top-0 right-0 rounded-full shadow-[100px] bg-brand-1/10 blur-[300px] -z-10"></div>

      <div className="container mx-auto relative z-10">
        <div className="wrapper">
          <ScrollMouse />
          <SectionHead
            title={"Skills & Tech"}
            text={"My technical ecosystem and tools I work with"}
          />

          {/* MARQUEE SECTION */}
          <div className="relative w-full overflow-hidden py-10 mb-20 group">
            {/* Gradient Masks for smooth fade out at edges */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-primary-bg to-transparent z-20 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-primary-bg to-transparent z-20 pointer-events-none"></div>

            <motion.div
              className="flex gap-8 md:gap-16 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {marqueeSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <div
                    className="text-5xl md:text-7xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    style={{ color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="font-second text-primary/80 text-sm md:text-base font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* BENTO GRID - Top Picks */}
          <div className="mt-20">
            <h3 className="font-primary text-3xl md:text-4xl text-white text-center mb-12">
              Core <span className="text-brand-1">Stack</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* React Card - Large Item */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-2 bg-gradient-to-br from-[#1c1c22] to-[#131318] border border-white/5 rounded-3xl p-8 flex items-center justify-between group overflow-hidden relative"
              >
                <div className="z-10 bg-black/40 p-4 rounded-xl backdrop-blur-sm self-end">
                  <h4 className="font-primary text-2xl text-white mb-2">Frontend Mastery</h4>
                  <p className="font-second text-gray-400 text-sm">React, Next.js, Tailwind CSS</p>
                </div>
                <FaReact className="text-[150px] text-[#61DAFB]/10 absolute -right-10 -bottom-10 group-hover:scale-110 transition-transform duration-500" />
                <SiNextdotjs className="text-[120px] text-white/5 absolute top-10 right-20 group-hover:rotate-12 transition-transform duration-500" />
              </motion.div>

              {/* Backend Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-bl from-[#1c1c22] to-[#131318] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative"
              >
                <FaNodeJs className="text-[100px] text-[#339933]/10 absolute -right-4 -top-4" />
                <div className="z-10 mt-auto">
                  <h4 className="font-primary text-xl text-white mb-1">Backend</h4>
                  <p className="font-second text-gray-400 text-sm">Node.js, Express, MongoDB</p>
                </div>
              </motion.div>

              {/* Tools Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-tr from-[#1c1c22] to-[#131318] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative"
              >
                <div className="flex gap-4 text-4xl text-gray-600">
                  <TbBrandVscode className="group-hover:text-[#007ACC] transition-colors" />
                  <FaGitAlt className="group-hover:text-[#F05032] transition-colors" />
                  <FaFigma className="group-hover:text-[#F24E1E] transition-colors" />
                </div>
                <div className="z-10 mt-12">
                  <h4 className="font-primary text-xl text-white mb-1">Tools</h4>
                  <p className="font-second text-gray-400 text-sm">VS Code, Git, Figma</p>
                </div>
              </motion.div>

              {/* Deployment Card - Large Item */}
              <motion.div
                whileHover={{ y: -5 }}
                className="md:col-span-2 bg-gradient-to-r from-[#1c1c22] to-[#131318] border border-white/5 rounded-3xl p-8 flex items-center justify-between group overflow-hidden relative"
              >
                <div className="flex gap-6 z-10">
                  <div className="text-center">
                    <SiVercel className="text-4xl text-white mb-2 mx-auto" />
                    <span className="font-second text-xs text-gray-500">Vercel</span>
                  </div>
                  <div className="text-center">
                    <SiNetlify className="text-4xl text-[#00C7B7] mb-2 mx-auto" />
                    <span className="font-second text-xs text-gray-500">Netlify</span>
                  </div>
                </div>
                <div className="z-10 text-right">
                  <h4 className="font-primary text-2xl text-white mb-2">Deployment</h4>
                  <p className="font-second text-gray-400 text-sm">Fast, secure, & scalable shipping</p>
                </div>
                <div className="absolute inset-0 bg-brand-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skils;
