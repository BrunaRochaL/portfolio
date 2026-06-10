"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex h-[300px] w-[300px] items-center justify-center xl:h-[440px] xl:w-[440px]">
      {/* glow */}
      <div className="absolute inset-6 rounded-full bg-accent-gradient opacity-30 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }}
        className="relative h-full w-full"
      >
        {/* photo */}
        <div className="absolute inset-[14px] overflow-hidden rounded-full border border-white/10">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Bruna Rocha"
            className="object-cover"
          />
        </div>

        {/* rotating chrome/liquid ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, rgba(255, 255, 255, 0.8) 15%, transparent 30%, transparent 50%, rgba(0, 240, 255, 0.8) 65%, transparent 80%, transparent 100%)",
            padding: "4px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude"
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* glowing outer aura */}
        <motion.div
          className="absolute -inset-2 rounded-full border border-white/10"
          style={{
            background: "conic-gradient(from 180deg, transparent 0%, rgba(183, 156, 255, 0.4) 20%, transparent 40%, transparent 60%, rgba(0, 240, 255, 0.4) 80%, transparent 100%)",
            padding: "2px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude"
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
};

export default Photo;
