import React from "react";
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
import { TbBrandVscode, TbBrandFramer } from "react-icons/tb";

const skillsCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive & interactive UIs",
    skills: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "Framer Motion", icon: <TbBrandFramer />, color: "#E32693" },
    ],
  },
  {
    title: "Backend & Database",
    description: "Handling logic & data persistence",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools & Environment",
    description: "Workflow & Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF" },
      { name: "VS Code", icon: <TbBrandVscode />, color: "#007ACC" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="relative section-padding overflow-hidden" id="skill">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-1/5 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-4 z-10 relative">
        <SectionHead
          title={"Skills & Tech"}
          text={"My technical ecosystem and tools I work with"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-cardBG/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-brand-1/30 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-1/5 group"
            >
              <h3 className="text-2xl font-primary font-bold text-white mb-2 group-hover:text-brand-1 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-400 font-second text-sm mb-8 border-b border-white/10 pb-4">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg cursor-default transition-colors text-gray-300 hover:text-white"
                  >
                    <span className="text-lg" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="font-second text-sm font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-1/10 border border-brand-1/30 text-brand-1 font-second text-sm animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-1 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-1"></span>
            </span>
            Currently learning: System Design & Backend Architechture
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
