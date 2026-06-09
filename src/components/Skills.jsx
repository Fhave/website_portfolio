// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaJs,
} from 'react-icons/fa';
import {
  SiPostgresql, SiNetlify, SiVercel, SiTailwindcss, SiMongodb, SiExpress, SiNestjs, SiMysql
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

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
  { icon: <RiNextjsLine />, name: 'NextJS' },
  { icon: <SiNestjs />, name: 'Nestjs' },
  { icon: <SiMysql />, name: 'MySQL' }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 max-w-7xl mx-auto text-center overflow-hidden"
    >
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-subtle mb-4">
          My toolbox
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-4">
          Skills
        </h2>
        <p className="mx-auto max-w-2xl text-subtle text-sm md:text-base leading-7">
          A curated collection of technologies I use to build modern apps with performance, accessibility, and scalability in mind.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 sm:gap-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.08 }}
      >
        {skills.map((skill, index) => (
          <motion.figure
            key={skill.name}
            className="group flex flex-col items-center justify-center rounded-3xl border border-beige/20 bg-white/5 p-6 text-subtle shadow-[0_18px_90px_-70px_rgba(255,255,255,0.1)] transition duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:text-accent cursor-pointer"
            aria-label={skill.name}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.04, type: 'spring', stiffness: 120 }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-4xl text-accent mb-4">
              {skill.icon}
            </div>
            <figcaption className="text-xs font-semibold uppercase tracking-[0.2em] leading-5">
              {skill.name}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
