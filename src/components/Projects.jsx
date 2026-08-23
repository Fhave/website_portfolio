import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Money-Route",
    description:
      "A personal finance website for tracking transactions and account balances.",
    tech: ["Vue", "CSS", "Vercel", "Git"],
    code: "https://github.com/Fhave/money-route",
    link: "https://stirring-piroshki-a98863.netlify.app/",
  },
  {
    title: "Helping Handz Connect",
    description:
      "A fully responsive web platform designed to streamline community outreach and donor engagement for an NGO.",
    tech: ["React", "Tailwind", "Vercel", "Git"],
    code: "https://github.com/Fhave/helping-handz-connect",
    link: "https://www.helpinghandzconnect.org.ng/",
  },
  {
    title: "Quiz Tracker Web Application",
    description:
      "An offline-first PWA for live quiz competition tracking, enabling real-time scoring without internet dependency.",
    tech: ["React", "Mantine", "PWA", "IndexedDB", "Vercel", "Git"],
    code: "https://github.com/Fhave/quiz-app.git",
    link: "https://quiz-app-beige-eight-48.vercel.app/",
  },
  {
    title: "Be Loved Website",
    description:
      "An interactive web application centered on discovering daily mindfulness prompts and acts of kindness.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel", "Git"],
    code: "https://github.com/Fhave/Be_Loved.git",
    link: "https://be-loved.vercel.app/",
  },
  {
    title: "Weventa E-commerce Website",
    description:
      "A modern e-commerce storefront featuring product catalogs, responsive layouts, and streamlined navigation.",
    tech: ["React", "Tailwind", "Vercel", "Git"],
    code: "https://github.com/Fhave/weventa",
    link: "https://weventa.vercel.app/",
  },
  {
    title: "Star Wars Dashboard",
    description:
      "An interactive data dashboard for exploring character stats, vehicles, and lore from the Star Wars API.",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    code: "https://github.com/Fhave/Star-Wars-Dashboard",
    link: "https://star-wars-dashboard-omega.vercel.app/dashboard",
  },
  {
    title: "Sure Boi Photography",
    description:
      "A photography showcase portfolio featuring high-resolution galleries and integrated client contact channels.",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    code: "https://github.com/Fhave/sure-boi-photography",
    link: "https://sure-boi-photography.netlify.app/",
  },
  {
    title: "Jamzy Studio Photography",
    description:
      "A portfolio website tailored for photography service listings, photo galleries, and inquiry forms.",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    code: "https://github.com/Fhave/jamzy-studio",
    link: "https://jamzy-studio.netlify.app/",
  },
  {
    title: "Sample Portfolios",
    description:
      "A curated collection of visual portfolio layout prototypes and UI experiments.",
    tech: ["React", "Tailwind", "Netlify", "Git"],
    code: "https://github.com/Fhave/sample",
    link: "https://designxecute-samples.netlify.app/",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A responsive analytics dashboard interface featuring dark mode toggle functionality based on Frontend Mentor.",
    tech: ["Html", "Css", "Javascript", "Git"],
    code: "https://github.com/Fhave/Social-Media-Dashboard",
    link: "https://social-media-dashboard-eta-ten.vercel.app/",
  },
  {
    title: "Simple Email Server",
    description:
      "A Node.js & Express REST API backend utility built to handle contact form submissions and email dispatches.",
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
            className="group flex flex-col h-full overflow-hidden rounded-3xl border border-zinc-700 bg-secondary p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ delay: 0.1 * i, type: "spring", stiffness: 120 }}
          >
            <div className="flex-1">
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
            </div>

            <div className="mt-auto pt-4 flex flex-wrap gap-3">
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-subtle transition hover:border-accent hover:bg-white hover:text-black"
                >
                  Code
                </a>
              )}
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
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}