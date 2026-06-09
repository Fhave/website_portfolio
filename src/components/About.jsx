// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const values = [
    {
      title: "Accessibility",
      desc: "Building inclusive web experiences that everyone can use seamlessly.",
    },
    {
      title: "Scalability",
      desc: "Writing modular, performant code designed to handle growth smoothly.",
    },
    {
      title: "Clean Architecture",
      desc: "Balancing precise frontend design with maintainable backend structures.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Section Intro */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-subtle mb-4">
          About Me
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-4">
          Profile
        </h2>
        <p className="mx-auto max-w-2xl text-subtle text-sm md:text-base leading-7">
          A brief look into my background, engineering philosophy, and the core
          principles that drive my development process from concept to deployment.
        </p>
      </motion.div>

      {/* Two-Column Grid Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Side: About Text (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 space-y-6 text-subtle text-sm leading-relaxed">
          <motion.p variants={itemVariants}>
            I am a versatile Full-Stack Engineer driven by the challenge of
            turning complex ideas into elegant, accessible, and scalable digital
            realities. My expertise bridges the gap between intuitive UI/UX
            design and robust backend architecture—building systems that are as
            powerful as they are intuitive.
          </motion.p>

          <motion.p variants={itemVariants}>
            With a strong foundation in modern web development principles and a
            sharp eye for design, I approach every project with a commitment to
            clean structure and performant code. I thrive in collaborative
            environments where I can solve real-world problems and continuously
            push the boundaries of my technical skill set.
          </motion.p>

          <motion.p variants={itemVariants}>
            Whether crafting seamless frontend interactions or engineering
            secure backend logic, I bring curiosity, modern tools, and an
            absolute focus on quality to everything I build.
          </motion.p>
        </div>

        {/* Right Side: Core Values Sidebar (Spans 1 column) */}
        <div className="space-y-6 border-t md:border-t-0 md:border-l border-subtle/20 pt-8 md:pt-0 md:pl-8">
          <motion.h3
            variants={itemVariants}
            className="text-xs font-bold uppercase tracking-widest text-accent/80 mb-4"
          >
            Core Values
          </motion.h3>

          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <h4 className="text-sm font-medium text-accent mb-1 group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  {value.title}
                </h4>
                <p className="text-xs text-subtle/80 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
