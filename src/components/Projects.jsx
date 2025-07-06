// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project One',
    description: 'A modern responsive fullstack web application.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Project Two',
    description: 'An elegant UI component library built from scratch.',
    tech: ['HTML', 'CSS', 'JS'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold text-accent mb-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-secondary p-6 rounded-lg border border-zinc-700 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i }}
          >
            <h3 className="text-xl text-accent mb-2">{project.title}</h3>
            <p className="text-sm text-subtle mb-3">{project.description}</p>
            <div className="text-xs mb-4 text-beige flex flex-wrap gap-2">
              {project.tech.map((tech, j) => (
                <span key={j} className="bg-zinc-800 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} className="text-subtle hover:text-accent text-sm">GitHub</a>
              <a href={project.demo} className="text-subtle hover:text-accent text-sm">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
