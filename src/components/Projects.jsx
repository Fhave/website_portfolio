// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Money-Route",
    description: "A financial management website",
    tech: ["Vue", "CSS", "Vercel", "Git"],
    code: "https://github.com/Fhave/money-route",
    link: "https://stirring-piroshki-a98863.netlify.app/",
  },
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
  // {
  //   title: "FreeCodeCamp SQL and Bash Challenges",
  //   description: "Solutions to the SQL and Bash challenges on freecodecamp.",
  //   tech: ["Bash", "PostgreSQL", "Git"],
  //   code: "https://github.com/Fhave/freecodecamp.git",
  // },
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
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-beige mb-3">
          Selected work
        </p>
        <motion.h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Projects
        </motion.h2>
        <p className="mx-auto max-w-2xl text-sm text-subtle">
          Recent frontend and full-stack projects showcasing responsive design,
          performance, and polished UI.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <motion.article
            key={i}
            className="group overflow-hidden rounded-3xl border border-zinc-700 bg-secondary p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ delay: 0.1 * i, type: "spring", stiffness: 120 }}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-beige/70">
                  Project
                </p>
                <h3 className="text-xl font-semibold text-white mt-2">
                  {project.title}
                </h3>
              </div>
            </div>

            <p className="text-sm leading-6 text-subtle mb-3">
              {project.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-[0.72rem] text-beige/80 capitalize"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-3">
              {/* {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-subtle transition hover:border-accent hover:bg-white hover:text-black"
                >
                  Code
                </a>
              )} */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-subtle transition hover:border-accent hover:bg-white hover:text-black"
                >
                  Live
                </a>
              )}
              {project.article && (
                <a
                  href={project.article}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-subtle transition hover:border-accent hover:bg-white hover:text-black"
                >
                  Article
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
