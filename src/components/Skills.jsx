import React from 'react';
import { motion } from 'framer-motion';

const skills = ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'JavaScript', 'HTML', 'CSS', 'Git', 'Vercel', 'Netlify'];

export default function Skills() {
  return (
    <motion.section className="py-20 px-8" id="skills" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <h3 className="text-3xl font-semibold mb-8">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(skill => (
          <motion.div key={skill} whileHover={{ scale: 1.05 }} className="bg-zinc-800 p-4 rounded text-center shadow-md">
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
