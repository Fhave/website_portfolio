// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32" id="home">
      <motion.h2
        className="text-subtle text-sm mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hello, my name is
      </motion.h2>

      <motion.h1
        className="text-4xl md:text-6xl font-bold text-accent mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Iyobosa Esther Omoruyi
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl text-subtle"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        I'm a Fullstack Web Developer passionate about creating sleek, performant web experiences.
      </motion.p>
    </section>
  );
}
