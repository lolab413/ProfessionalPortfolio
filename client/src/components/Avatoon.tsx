import { motion } from "framer-motion";

export function Avatoon() {
  return (
    <motion.img
      src="../Images/avatoon.png"
      alt="Lola's Avatar"
      className="absolute -bottom-1 -right-32 w-56 h-auto z-0 hidden md:block pointer-events-none select-none"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
  );
}