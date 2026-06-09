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
        <h2 className="text-4xl md:text-6xl font-bold">Hi, I'm Iyobosa</h2>
        <p className="mt-4 text-lg md:text-2xl">
          A Fullstack Engineer building clean, modern and scalable solutions.
        </p>
        <div className="flex gap-3 justify-center mt-6">
          <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 border bg-white text-black rounded hover:bg-transparent hover:text-white transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="mt-6 inline-block px-6 py-3 border rounded hover:text-black hover:bg-white transition"
        >
          Contact Me
        </a>
        </div>
      </motion.div>
    </section>
  );
}
