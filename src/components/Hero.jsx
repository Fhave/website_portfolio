import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center p-8 m-2"
      id="home"
    >
      <motion.div
        className="max-w-3xl w-full rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-black/20 backdrop-blur-xl"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-8">
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] text-white/70">
            <span className="inline-block h-1.5 w-12 rounded-full bg-white" />
            Welcome
          </p>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Hi, I'm Iyobosa
        </h2>
        <p className="mt-6 text-base md:text-xl leading-relaxed text-white/80">
          A Fullstack Engineer building clean, modern, and scalable solutions
          with strong focus on usability and performance.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row sm:justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-white bg-white text-black px-8 py-3 text-sm font-semibold transition hover:bg-transparent hover:text-white"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white text-white px-8 py-3 text-sm font-semibold transition hover:bg-white hover:text-black"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
