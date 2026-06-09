// src/components/Resume.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 max-w-5xl mx-auto">

      {/* Section Intro (Centered Header Block) */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-subtle mb-4">
          History
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-4">
          Resume
        </h2>
        <p className="mx-auto max-w-2xl text-subtle text-sm md:text-base leading-7">
          A concise overview of my professional background, technical expertise, and
          engineering experience. Download the full document below.
        </p>
      </motion.div>

      {/* High-End Interactive CTA Display Card */}
      <motion.div
        className="mx-auto max-w-3xl rounded-2xl border border-subtle/10 bg-subtle/[0.02] backdrop-blur-sm p-10 text-center relative overflow-hidden group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Subtle mesh/glow effect on hover */}
        <div className="absolute -inset-px bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Decorative Document Icon */}
          <div className="mb-6 w-12 h-12 rounded-xl bg-accent/[0.04] border border-accent/10 flex items-center justify-center text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
          </div>

          <p className="text-sm text-subtle/80 max-w-md mx-auto leading-relaxed">
            Looking for a deep dive into my technical capabilities, framework history, and academic milestones?
          </p>

          <motion.a
            href="/Resume - Iyobosa Esther Omoruyi.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-accent bg-transparent px-8 py-3.5 text-sm font-medium text-accent transition-all duration-300 hover:bg-white hover:text-black shadow-lg shadow-accent/0 hover:shadow-accent/5"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Download Full Resume</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}