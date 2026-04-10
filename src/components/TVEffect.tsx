"use client";

import { useId } from "react";
import { motion } from "framer-motion";

interface TVEffectProps {
  src: string;
  alt: string;
  className?: string;
}

const TVEffect: React.FC<TVEffectProps> = ({ src, alt, className }) => {
  const filterId = useId().replace(/:/g, "");

  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? "rounded-lg"}`}
      style={{
        boxShadow:
          "0 0 15px rgba(0, 240, 255, 0.15), 0 0 40px rgba(0, 240, 255, 0.05), inset 0 0 30px rgba(0, 0, 0, 0.3)",
      }}
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
    >
      {/* Power-on flash overlay */}
      <motion.div
        className="absolute inset-0 z-10 bg-white pointer-events-none"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      />

      {/* Horizontal line power-on effect */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 48%, rgba(0, 240, 255, 0.6) 49.5%, rgba(255, 255, 255, 0.8) 50%, rgba(0, 240, 255, 0.6) 50.5%, transparent 52%)",
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      />

      {/* SVG filter for chromatic aberration — unique ID per instance */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id={filterId}>
            <feOffset in="SourceGraphic" dx="1" dy="0" result="red-shifted">
              <animate
                attributeName="dx"
                values="1;2;0;1"
                dur="4s"
                repeatCount="indefinite"
              />
            </feOffset>
            <feOffset in="SourceGraphic" dx="-1" dy="0" result="blue-shifted">
              <animate
                attributeName="dx"
                values="-1;0;-2;-1"
                dur="4s"
                repeatCount="indefinite"
              />
            </feOffset>
            <feColorMatrix
              in="red-shifted"
              type="matrix"
              values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="red"
            />
            <feColorMatrix
              in="blue-shifted"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
              result="blue"
            />
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="green"
            />
            <feBlend mode="screen" in="red" in2="green" result="rg" />
            <feBlend mode="screen" in="rg" in2="blue" />
          </filter>
        </defs>
      </svg>

      {/* Main image with chromatic aberration + flicker */}
      <div
        className="relative w-full h-full"
        style={{
          filter: `url(#${filterId})`,
          animation: "crt-flicker 3s infinite",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover saturate-125 contrast-110 brightness-105 block"
        />
      </div>

      {/* Scanlines overlay */}
      <div className="absolute inset-0 bg-stripes pointer-events-none" />

      {/* Noise/static grain */}
      <div
        className="absolute pointer-events-none opacity-[0.03]"
        style={{
          inset: "-50%",
          width: "200%",
          height: "200%",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          animation: "noise 0.3s steps(3) infinite",
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0, 0, 0, 0.4) 100%)",
        }}
      />

      {/* Subtle reflection/glare */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.1) 100%)",
        }}
      />
    </motion.div>
  );
};

export default TVEffect;
