import React from "react";
import ScrollMouse from "../../animation/Scroll";
import SectionHead from "../../common/SectionHead";
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


          {/* Grid Removed as per request */}

        </div>
      </div>
    </section>
  );
};

export default Skils;
