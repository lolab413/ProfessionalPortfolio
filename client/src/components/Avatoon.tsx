import { motion } from "framer-motion";

export function Avatoon() {
  return (
    <motion.svg
      width="200"
      height="250"
      viewBox="0 0 200 250"
      className="absolute -bottom-20 -right-20 w-64 h-auto z-0 hidden md:block pointer-events-none select-none"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <defs>
        <clipPath id="avatoonClip">
          <path d="M100,20 C140,20 170,50 170,90 C170,130 140,160 100,160 C60,160 30,130 30,90 C30,50 60,20 100,20 Z" />
        </clipPath>
      </defs>
      
      {/* Head and face */}
      <circle cx="100" cy="90" r="70" fill="#8B4513" clipPath="url(#avatoonClip)" />
      
      {/* Hair */}
      <path
        d="M100,20 C140,20 170,50 170,90 C170,130 140,160 100,160 C60,160 30,130 30,90 C30,50 60,20 100,20 Z"
        fill="#2D1810"
      />
      
      {/* Body */}
      <rect x="60" y="160" width="80" height="90" fill="#FFFFFF" />
      
      {/* Expressions */}
      <circle cx="80" cy="80" r="8" fill="#000000" /> {/* Left eye */}
      <circle cx="120" cy="80" r="8" fill="#000000" /> {/* Right eye */}
      <path
        d="M90,100 Q100,110 110,100"
        stroke="#000000"
        strokeWidth="3"
        fill="none"
      /> {/* Smile */}
    </motion.svg>
  );
}
