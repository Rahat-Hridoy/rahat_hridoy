import React from "react";
import SectionHead from "../../common/SectionHead";
import { motion } from "motion/react";
import { Code, Terminal, User } from "lucide-react";

const About = () => {
  return (
    <section className="section-padding relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-1/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4">
        <SectionHead title="About Me" text="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Side - Image & Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-brand-1/20 shadow-2xl shadow-brand-1/10 group">
              <img
                src="/image/rahatHridoy_about.jpg"
                alt="Rahat Hridoy"
                className="w-full h-auto object-cover transition-all duration-500"
              />

              {/* Overlay with Name */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8">
                <h3 className="text-3xl font-primary font-bold text-white">Rahat Hridoy</h3>
                <p className="text-brand-1 font-second">Frontend Developer</p>
              </div>
            </div>

            {/* Floating Tech Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 lg:-right-10 bg-cardBG border border-white/10 p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="bg-brand-1/20 p-2 rounded-lg text-brand-1">
                <Code size={24} />
              </div>
              <div>
                <span className="block text-xs text-gray-400 font-second"> coding with</span>
                <span className="font-bold text-white">Passion & Precision</span>
              </div>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute -bottom-10 -left-10 grid grid-cols-5 gap-2 opacity-30">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-1"></div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-1/10 border border-brand-1/20 text-brand-1 text-sm font-second">
              <User size={16} />
              <span>Who I am</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-primary font-bold text-white leading-tight mb-6">
              Turning complex problems into <span className="text-brand-1">elegant solutions</span>
            </h3>

            <div className="bg-cardBG border border-white/5 rounded-2xl p-6 relative overflow-hidden mb-8">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-1"></div>
              <p className="font-second text-gray-300 leading-relaxed text-lg">
                Hello! I'm Rahat, a passionate developer who specializes in building robust web applications. I mix creativity with technical skill to craft visually stunning and highly functional digital experiences.
              </p>
            </div>

            <p className="font-primary text-gray-400 leading-relaxed mb-6">
              My journey involves mastering technologies like <span className="text-white font-medium">React, Tailwind CSS, and JavaScript</span>. I am an eternal optimist dedicated to continuous learning and pushing the boundaries of what's possible on the web.
            </p>

            <p className="font-primary text-gray-400 leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new art projects, writing blogs, or challenging my own perspectives to grow as a person and a professional.
            </p>

            {/* Tech Stack Mini-List */}
            <div className="flex flex-wrap gap-3">
              {['React', 'JavaScript', 'Tailwind', 'Motion', 'Node.js'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
