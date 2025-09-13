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
        I'm a versatile web developer who loves turning ideas into reality with elegant, accessible, and scalable code. My interests span across UI/UX, backend architecture, and building systems that just make sense.
        <br /><br />
        I have a strong understanding of web development principles and a keen eye for design. I am always looking for new opportunities to learn and grow as a developer. I am also a quick learner, a hard worker, and a team player.
        <br /><br />
        Whether I'm working on a frontend interaction or backend logic, I bring clean structure, modern tools, and curiosity to every project.
      </motion.p>
    </section>
  );
}
