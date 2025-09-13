// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs,
} from 'react-icons/fa';
import {
  SiPostgresql, SiNetlify, SiVercel, SiTailwindcss, SiMongodb, SiExpress,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <SiExpress />, name: 'Express' },
  { icon: <SiTailwindcss />, name: 'TailwindCSS' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiNetlify />, name: 'Netlify' },
  { icon: <SiVercel />, name: 'Vercel' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 max-w-6xl mx-auto text-center"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-accent mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 text-4xl text-subtle">
        {skills.map((skill, index) => (
          <motion.figure
            key={skill.name}
            className="flex flex-col items-center justify-center border border-beige rounded-xl p-4 hover:text-accent hover:border-accent transition duration-300 ease-in-out cursor-pointer"
            aria-label={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ delay: 0 * index, type: 'spring', stiffness: 120 }}
          >
            {skill.icon}
            <figcaption className="text-xs mt-2">{skill.name}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
