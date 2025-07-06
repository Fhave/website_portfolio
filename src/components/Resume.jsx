// src/components/Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-6 text-center">
      <motion.h2
        className="text-2xl font-semibold text-accent mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Resume
      </motion.h2>

      <motion.a
        href="/Resume - Iyobosa Esther Omoruyi.pdf"
        download
        className="inline-block px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-black rounded transition"
        whileHover={{ scale: 1.05 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
}
