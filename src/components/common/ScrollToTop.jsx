import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    // Smooth out the progress value
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Map scroll progress to circle dash offset
    const circleLength = 100; // Circumference roughly
    const strokeDashoffset = useTransform(scaleX, [0, 1], [circleLength, 0]);

    return (
        <div className="fixed bottom-10 right-10 z-50">
            <div
                onClick={scrollToTop}
                className={`relative w-12 h-12 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                {/* SVG Circle Progress */}
                <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 36 36">
                    {/* Background Circle */}
                    <path
                        className="text-white/10"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    {/* Progress Circle - using Framer Motion for strokeDashoffset */}
                    <motion.path
                        className="text-brand-1 drop-shadow-[0_0_5px_rgba(18,247,214,0.8)]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="100, 100"
                        style={{ pathLength: scaleX }}
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                </svg>

                {/* Arrow Icon */}
                <FaArrowUp className="text-brand-1 text-sm absolute inset-0 m-auto animate-bounce-custom" />

                {/* Glow backing */}
                <div className="absolute inset-0 bg-brand-1/10 rounded-full blur-sm -z-10"></div>
            </div>
        </div>
    );
};

export default ScrollToTop;
