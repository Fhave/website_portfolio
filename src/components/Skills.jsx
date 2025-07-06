// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiPostgresql, SiNetlify, SiVercel, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

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
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <motion.h2
        className="text-3xl font-semibold text-accent mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 text-4xl text-subtle">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="hover:text-accent transition shadow-sm shadow-gray-900 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 * i }}
          >
            {skill.icon}
            <p className="text-xs mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
