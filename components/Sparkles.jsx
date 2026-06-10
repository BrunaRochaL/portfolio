"use client";

import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import { PiSparkleFill, PiStarFourFill } from "react-icons/pi";
import { BsStars } from "react-icons/bs";

// Each sparkle: position (%), size, icon, color and animation timing.
const sparkles = [
  { top: "8%", left: "6%", size: 28, Icon: HiSparkles, color: "#00f0ff", delay: 0, duration: 3.2 },
  { top: "18%", left: "88%", size: 22, Icon: PiSparkleFill, color: "#b79cff", delay: 0.6, duration: 3.8 },
  { top: "30%", left: "14%", size: 16, Icon: PiStarFourFill, color: "#8b5cf6", delay: 1.1, duration: 2.8 },
  { top: "12%", left: "46%", size: 18, Icon: BsStars, color: "#b79cff", delay: 0.3, duration: 4.2 },
  { top: "62%", left: "4%", size: 20, Icon: PiSparkleFill, color: "#00f0ff", delay: 1.5, duration: 3.4 },
  { top: "72%", left: "92%", size: 26, Icon: HiSparkles, color: "#b79cff", delay: 0.9, duration: 3.9 },
  { top: "84%", left: "22%", size: 16, Icon: PiStarFourFill, color: "#8b5cf6", delay: 0.4, duration: 3.1 },
  { top: "50%", left: "80%", size: 18, Icon: PiSparkleFill, color: "#00f0ff", delay: 1.8, duration: 4.5 },
  { top: "40%", left: "62%", size: 14, Icon: PiStarFourFill, color: "#b79cff", delay: 0.7, duration: 2.6 },
  { top: "90%", left: "70%", size: 20, Icon: BsStars, color: "#00f0ff", delay: 1.2, duration: 3.7 },
];

const Sparkles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* soft floating glows */}
      <motion.div
        className="absolute left-[8%] top-[15%] h-40 w-40 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, -24, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[40%] h-52 w-52 rounded-full bg-accent2/20 blur-3xl"
        animate={{ y: [0, 28, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* twinkling sparkle icons */}
      {sparkles.map(({ top, left, size, Icon, color, delay, duration }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top, left, color }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: [0, 1, 0.2, 1, 0],
            scale: [0.4, 1, 0.7, 1, 0.4],
            rotate: [0, 25, -15, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} style={{ filter: `drop-shadow(0 0 8px ${color})` }} />
        </motion.div>
      ))}
    </div>
  );
};

export default Sparkles;
