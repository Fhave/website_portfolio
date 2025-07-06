import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'She Code Africa Summit Website',
    description: 'Frontend project using React and TailwindCSS.',
    tech: 'React, TailwindCSS',
    link: '#',
  },
  {
    title: 'NYSC Travel Portal',
    description: 'Designed flyers and forms, managed online submissions.',
    tech: 'HTML, CSS, JavaScript',
    link: '#',
  },
];

export default function Projects() {
  return (
    <motion.section className="py-20 px-8" id="projects" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <h3 className="text-3xl font-semibold mb-8">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <motion.div key={idx} whileHover={{ scale: 1.02 }} className="bg-zinc-800 p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">{proj.title}</h4>
            <p className="mb-2">{proj.description}</p>
            <p className="text-sm text-beige/70">Tech: {proj.tech}</p>
            <a href={proj.link} className="inline-block mt-4 underline">View Project</a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
