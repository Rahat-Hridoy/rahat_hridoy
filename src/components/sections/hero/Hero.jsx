import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineWorkOutline } from "react-icons/md";
import Btn from "../../common/Btn";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import CountUp from "../../animation/CountUp";
import GradientText from "../../animation/GradientText";
import TypingAnimation from "../../animation/typingAnimation";
import TiltCard from "../../animation/TiltCard";
import { motion, useMotionValue, useSpring } from "motion/react";

const Hero = () => {
  const info = [
    {
      id: 1,
      icon: <MdOutlineEmail />,
      text: " rahathridoyd2x@gmail.com",
    },
    {
      id: 2,
      icon: <CiLocationOn />,
      text: " Sylhet, Bangladesh",
    },
    {
      id: 3,
      icon: <MdOutlineWorkOutline />,
      text: " Full-time / Remote",
    },
    {
      id: 4,
      icon: <FiPhone />,
      text: "+880 1917 579030",
    },
  ];

  const skills = ["Next JS", "JavaScript", "Tailwind"];

  const exp = [
    {
      id: 1,
      digit: 3,
      title: "Programming Language",
    },
    {
      id: 2,
      digit: 6,
      title: "Development Tools",
    },
    {
      id: 3,
      digit: 2,
      title: "Year of experiance",
    },
  ];

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 50, stiffness: 400 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Text Stagger Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const introText = "I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done.";

  return (
    <section className="relative overflow-hidden" id="home">
      {/* Background with Parallax and Continuous Drift */}
      <div className="absolute inset-0 bg-[url('/image/framer_bg.png')] bg-no-repeat bg-cover bg-center opacity-15 pointer-events-none"></div>

      {/* Interactive Blobs that ALSO drift */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ x: useSpring(useMotionValue(springX.get() * -50)), y: useSpring(useMotionValue(springY.get() * -50)) }}
        className="absolute top-20 left-20 w-72 h-72 bg-brand-1/10 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ x: useSpring(useMotionValue(springX.get() * 80)), y: useSpring(useMotionValue(springY.get() * 80)) }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10"
      />

      {/* Floating Particles - NEW */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-1/20 blur-sm"
          initial={{
            x: Math.random() * 1000,
            y: Math.random() * 800,
            opacity: 0,
            scale: 0
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [0, 0.5, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5
          }}
        />
      ))}

      <div className="container mx-auto relative z-10  px-[35px] lg:px-0 ">
        <div className="wrapper pb-[32px] lg:pb-[64px] pt-[128px] md:pt-[150px] lg:pt-[90px] ">
          <div className="hidden lg:block ">
            <h1 className="">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={8}
                showBorder={false}
                className="font-primary font-medium  text-[120px] text-center leading-[134px] py-[64px] "
              >
                Developer
              </GradientText>
            </h1>
          </div>
          <div className="grid grid-cols-1 space-y-16 space-x-0 md:space-x-8 lg:grid-cols-[auto_1fr] xl:grid-cols-[1fr_auto_1fr]   justify-items-center place-items-center">
            {/* left-side: information  */}
            <div className="perspective-1000">
              {/* Full Card with Movable Border - Static (No Tilt) */}
              <div className="lg:col-span-2 xl:col-span-1 w-[320px] h-[520px] rounded-tl-[160px] rounded-br-[160px] relative bg-transparent shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                {/* Container to clip the gradient */}
                <div className="w-full h-full relative rounded-tl-[160px] rounded-br-[160px] overflow-hidden group">

                  {/* Spinning Gradient Layer */}
                  <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,#12f7d6,#00ccff,#ff00ff,#12f7d6)] animate-spin-slow opacity-100"></div>

                  {/* Content Mask (Inset to show border) */}
                  <div className="absolute inset-[4px] bg-cardBG rounded-tl-[156px] rounded-br-[156px] flex flex-col items-center px-[22px] py-[36px] h-[calc(100%-8px)] w-[calc(100%-8px)]">
                    <div>
                      {/* profile */}
                      <div>
                        <div className="flex flex-col justify-center items-center gap-[16px]">
                          <div className="relative group">
                            {/* Spinning Gradient Border */}
                            <div className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#12f7d6,#00ccff,#ff00ff,#12f7d6)] animate-spin-slow blur-sm opacity-70"></div>

                            {/* Static Image with solid background to hide the center of the gradient */}
                            <div className="relative rounded-full p-[3px] bg-cardBG">
                              <img
                                src="/image/rahatHridoy.jpeg"
                                alt="image"
                                className="w-[90px] h-[90px] rounded-full object-cover border-2 border-transparent"
                              />
                            </div>
                          </div>
                        </div>
                        <h3 className="font-second font-medium text-primary text-xl leading-[42px] text-center text-shadow-sm">
                          Md Rahatul Islam
                        </h3>
                        <h5 className="font-second font-normal text-primary text-sm leading-[18px] text-center opacity-80">
                          Full-stack Developer{" "}
                        </h5>
                      </div>
                      {/* information */}
                      <div>
                        <ul className="py-[32px] flex flex-col justify-center items-start gap-y-[16px] ">
                          {info.map((item) => (
                            <li
                              key={item.id}
                              className="flex items-center justify-start gap-4 "
                            >
                              <span className="text-brand-1 w-[14px] h-[14px] ">
                                {item.icon}
                              </span>

                              <span className="pera-text text-sm leading-[18px]  ">
                                {item.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* skills */}
                      <div className="flex items-center justify-start gap-3 pb-8 flex-wrap  ">
                        {skills.map((skill) => (
                          <span
                            key={skill.id}
                            className="pera-text !text-black text-sm leading-[18px] px-2 bg-brand-1 rounded-full shadow-[0_0_10px_rgba(18,247,214,0.3)]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* CV button */}
                    <div className="w-full flex justify-start mt-2 ">
                      <a
                        href="/document/MD-RAHATUL-ISLAM-resume-post-web-designer.pdf"
                        target="_blank"
                        className="w-fit scale-90"
                      >
                        <Btn
                          text={"Download CV"}
                          icon={PiDownloadSimpleBold}
                          color={"bg-primary hover:bg-primary/90 active:bg-primary"}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Middle-side : intro */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className=" flex flex-col  gap-y-[32px]  "
            >
              <div>
                <p className="tag-style"> {"<h1>"} </p>
                <TypingAnimation />
                <p className="tag-style"> {"</h1>"} </p>
              </div>
              <div>
                <p className="tag-style"> {"<p>"} </p>
                <motion.p
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="max-w-[650px] pera-text text-[16px] leading-[20px] pl-6 flex flex-wrap gap-[6px]"
                >
                  {introText.split(" ").map((word, index) => (
                    <motion.span key={index} variants={wordVariants}>
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
                <p className="tag-style"> {"</p>"} </p>
              </div>
              <div>
                <a href="#contact">
                  <button className="flex items-center justify-start gap-x-[16px] font-second font-medium text-brand-1 text-[32px] leading-[42px] pl-6 hover:cursor-pointer hover:underline group">
                    <span>Let’s Talk</span> <MdOutlineEmail className="group-hover:scale-110 transition-transform" />
                  </button>
                </a>
              </div>
            </motion.div>
            {/* right side-card : experiance */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-[215px] bg-cardBG/70 backdrop-blur-xs rounded-[80px] px-[32px] py-[48px] border border-white/5 hover:border-brand-1/30 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(18,247,214,0.1)] "
            >
              {exp.map((item) => (
                <div
                  key={item.id}
                  className=" flex justify-center items-center gap-x-4 py-[16px] "
                >
                  <CountUp
                    from={0}
                    to={item.digit}
                    separator=","
                    direction="up"
                    duration={1}
                    className="font-second font-medium text-brand-1 text-[48px] leading-[62px]"
                  />
                  <p className="pera-text text-[16px] leading-[20px] max-w-[106px] ">
                    {item.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div >
    </section >
  );
};

export default Hero;
