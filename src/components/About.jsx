// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold text-accent mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-subtle text-sm leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        I am a versatile Full-Stack Engineer driven by the challenge of turning complex ideas into elegant, accessible, and scalable digital realities. My expertise bridges the gap between intuitive UI/UX design and robust backend architecture—building systems that are as powerful as they are intuitive.
        <br /><br />
        With a strong foundation in modern web development principles and a sharp eye for design, I approach every project with a commitment to clean structure and performant code. I thrive in collaborative environments where I can solve real-world problems and continuously push the boundaries of my technical skill set.
        <br /><br />
        Whether crafting seamless frontend interactions or engineering secure backend logic, I bring curiosity, modern tools, and an absolute focus on quality to everything I build.
      </motion.p>
    </section>
  );
}
