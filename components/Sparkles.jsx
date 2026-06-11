"use client";

import { motion } from "framer-motion";
import { PiSparkleFill, PiStarFourFill } from "react-icons/pi";

// Each sparkle: position (%), size, icon, color and animation timing.
// Palette limited to the brand accents (purple + cyan) for a calm, cohesive feel.
const sparkles = [
  { top: "10%", left: "8%", size: 16, Icon: PiSparkleFill, color: "#b79cff", delay: 0, duration: 4.4 },
  { top: "20%", left: "86%", size: 14, Icon: PiStarFourFill, color: "#6cb8f6", delay: 0.8, duration: 5 },
  { top: "15%", left: "48%", size: 12, Icon: PiSparkleFill, color: "#b79cff", delay: 0.4, duration: 5.4 },
  { top: "66%", left: "6%", size: 13, Icon: PiStarFourFill, color: "#6cb8f6", delay: 1.4, duration: 4.8 },
  { top: "70%", left: "90%", size: 16, Icon: PiSparkleFill, color: "#b79cff", delay: 1, duration: 5.2 },
  { top: "44%", left: "72%", size: 11, Icon: PiStarFourFill, color: "#6cb8f6", delay: 0.6, duration: 4.2 },
];

const Sparkles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* soft floating glows */}
      <motion.div
        className="absolute left-[8%] top-[15%] h-52 w-52 rounded-full bg-accent/25 blur-3xl"
        animate={{ y: [0, -24, 0], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-[38%] h-64 w-64 rounded-full bg-[#22d3ee]/25 blur-3xl"
        animate={{ y: [0, 28, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* twinkling sparkle icons */}
      {sparkles.map(({ top, left, size, Icon, color, delay, duration }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top, left, color }}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: [0, 0.7, 0.15, 0.7, 0],
            scale: [0.5, 1, 0.8, 1, 0.5],
            rotate: [0, 15, -8, 6, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} style={{ filter: `drop-shadow(0 0 6px ${color})` }} />
        </motion.div>
      ))}
    </div>
  );
};

export default Sparkles;
