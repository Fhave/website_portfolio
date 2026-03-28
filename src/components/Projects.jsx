// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Helping Handz Connect NGO Website",
    description:
      "A fully responsive web application for a non-profit organization.",
    tech: ["React", "Tailwind", "Vercel", "Git"],
    github: "https://github.com/Fhave/helping-handz-connect",
    demo: "https://www.helpinghandzconnect.org.ng/",
  },
  {
    title: "Weventa E-commerce Website",
    description: "A modern responsive e-commerce web application.",
    tech: ["React", "Tailwind", "Vercel", "Git"],
    github: "https://github.com/Fhave/weventa",
    demo: "https://weventa.vercel.app/",
  },
    {
    title: "Star Wars Dashboard",
    description:
      "A simple portfolio website for a photographer with contact form.",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    github: "https://github.com/Fhave/Star-Wars-Dashboard",
    demo: "https://star-wars-dashboard-omega.vercel.app/dashboard",
  },
  {
    title: "Sure Boi Photography Website",
    description:
      "A simple portfolio website for a photographer with contact form.",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    github: "https://github.com/Fhave/sure-boi-photography",
    demo: "https://sure-boi-photography.netlify.app/",
  },
  {
    title: "Jamzy Studio Photography Website",
    description:
      "A simple portfolio website for a photographer with contact form.",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    github: "https://github.com/Fhave/jamzy-studio",
    demo: "https://jamzy-studio.netlify.app/",
  },
    {
    title: "Sample Portfolios",
    description:
      "Sample portfolios. Click on the image to see the ones I designed",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    github: "https://github.com/Fhave/sample",
    demo: "https://designxecute-samples.netlify.app/",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Frontend Mentor challange for Responsive Social Media Dashboard",
    tech: ["Html", "Css", "Javascript", "Git"],
    github: "https://github.com/Fhave/Social-Media-Dashboard",
    demo: "https://social-media-dashboard-eta-ten.vercel.app/",
  },
  {
    title: "Simple Email Server",
    description: "This was used in other projects for the contact form.",
    tech: ["Node.js", "Express", "Vercel", "Git"],
    github: "https://github.com/Fhave/email_server",
    demo: "https://email-server-ochre.vercel.app/",
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
              <a
                href={project.github}
                className="text-subtle hover:text-accent text-sm"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                className="text-subtle hover:text-accent text-sm"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
