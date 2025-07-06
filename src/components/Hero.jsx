import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-center p-8"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold">Hi, I’m Iyobosa</h2>
        <p className="mt-4 text-lg md:text-2xl">
          A Fullstack Developer building clean, modern and scalable solutions.
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 border border-beige rounded hover:bg-beige hover:text-black transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}
