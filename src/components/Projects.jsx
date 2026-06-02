// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Helping Handz Connect NGO Website",
    description: "A fully responsive website for a non-profit organization.",
    tech: ["React", "Tailwind", "Vercel", "Git"],
    code: "https://github.com/Fhave/helping-handz-connect",
    link: "https://www.helpinghandzconnect.org.ng/",
  },
  {
    title: "Quiz Tracker Web Application",
    description:
      "A lightweight mobile-friendly web application that helps judges, participants, and audience members track quiz competitions in real time, even when there is no internet connection",
    tech: ["React", "Mantine", "PWA", "IndexedDB", "Vercel", "Git"],
    code: "https://github.com/Fhave/quiz-app.git",
    link: "https://quiz-app-beige-eight-48.vercel.app/",
    article:
      "https://medium.com/@omosiyobo/building-an-offline-first-quiz-tracking-application-with-react-mantine-indexeddb-and-pwa-3aaee2c3cb20",
  },
  {
    title: "FreeCodeCamp SQL and Bash Challenges",
    description: "Solutions to the SQL and Bash challenges on freecodecamp.",
    tech: ["Bash", "PostgreSQL", "Git"],
    code: "https://github.com/Fhave/freecodecamp.git",
  },
  {
    title: "Be Loved Website",
    description:
      "A fully responsive website based on discovering daily acts of kindness for yourself, your partner, and your world.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel", "Git"],
    code: "https://github.com/Fhave/Be_Loved.git",
    link: "https://be-loved.vercel.app/",
  },
  {
    title: "Weventa E-commerce Website",
    description: "A modern responsive e-commerce web application.",
    tech: ["React", "Tailwind", "Vercel", "Git"],
    code: "https://github.com/Fhave/weventa",
    link: "https://weventa.vercel.app/",
  },
  {
    title: "Star Wars Dashboard",
    description: "A simple dashboard with star wars information",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    code: "https://github.com/Fhave/Star-Wars-Dashboard",
    link: "https://star-wars-dashboard-omega.vercel.app/dashboard",
  },
  {
    title: "Sure Boi Photography Website",
    description:
      "A simple portfolio website for a photographer with contact form.",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    code: "https://github.com/Fhave/sure-boi-photography",
    link: "https://sure-boi-photography.netlify.app/",
  },
  {
    title: "Jamzy Studio Photography Website",
    description:
      "A simple portfolio website for a photographer with contact form.",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    code: "https://github.com/Fhave/jamzy-studio",
    link: "https://jamzy-studio.netlify.app/",
  },
  {
    title: "Sample Portfolios",
    description:
      "Sample portfolios. Click on the image to see the ones I designed",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    code: "https://github.com/Fhave/sample",
    link: "https://designxecute-samples.netlify.app/",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Frontend Mentor challenge for Responsive Social Media Dashboard",
    tech: ["Html", "Css", "Javascript", "Git"],
    code: "https://github.com/Fhave/Social-Media-Dashboard",
    link: "https://social-media-dashboard-eta-ten.vercel.app/",
  },
  {
    title: "Simple Email Server",
    description: "This was used in other projects for the contact form.",
    tech: ["Node.js", "Express", "Vercel", "Git"],
    code: "https://github.com/Fhave/email_server",
    link: "https://email-server-ochre.vercel.app/",
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
              {project.code && (
                <a
                  href={project.code}
                  className="text-subtle hover:text-accent hover:underline text-sm"
                >
                  Code Link
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  className="text-subtle hover:text-accent hover:underline text-sm"
                >
                  Live Link
                </a>
              )}
              {project.article && (
                <a
                  href={project.article}
                  className="text-subtle hover:text-accent hover:underline text-sm"
                >
                  Article
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
