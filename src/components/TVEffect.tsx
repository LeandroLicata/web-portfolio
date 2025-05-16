"use client";

import { motion } from "framer-motion";

interface TVEffectProps {
  src: string; // URL de la imagen
  alt: string; // Texto alternativo para la imagen
  className?: string; // Clases adicionales opcionales
}

const TVEffect: React.FC<TVEffectProps> = ({ src, alt, className }) => {
  return (
    <motion.div
      className={`relative bg-black shadow-2xl border-4 border-gray-800 ${className}`}
      initial={{ opacity: 0.8 }}
      animate={{
        opacity: [0.8, 1, 0.9, 1],
        filter: [
          "brightness(1) contrast(1)",
          "brightness(1.2) contrast(1.3)",
          "brightness(0.9) contrast(1)",
          "brightness(1) contrast(1)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 1,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover saturate-150 contrast-125 opacity-95"
      />
      <div className="absolute inset-0 bg-stripes"></div>
    </motion.div>
  );
};

export default TVEffect;
