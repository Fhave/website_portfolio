import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section className="py-20 px-8 max-w-4xl mx-auto" id="about" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <h3 className="text-3xl font-semibold mb-4">About Me</h3>
      <p>I am a Computer Science graduate and Fullstack Developer passionate about creating accessible, fast, and engaging digital experiences. I’ve worked on real-world projects from NYSC to volunteer experiences like She Code Africa. I’m committed to continuous learning and improving my craft.</p>
    </motion.section>
  );
}
