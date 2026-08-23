import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const articles = [
  {
    category: "Frontend",
    title: "Case Study: Be Loved",
    description:
      "A deep dive into the design and logic workflow of Be Loved, exploring front-end styling challenges, mobile-first design patterns, and radio button customization.",
    topics: ["Case Study", "CSS", "HTML"],
    link: "https://medium.com/@omosiyobo/case-study-be-loved-43858ffe3ec6",
  },
  {
    category: "Engineering",
    title: "Setting Up the Backend Foundation for Ekehi",
    description:
      "Establishing core infrastructure with Node.js, Express, and Supabase PostgreSQL—covering database design, custom authentication middleware, JWT issuance, and transactional email setup.",
    topics: ["Node.js", "Express", "Supabase", "PostgreSQL"],
    link: "https://medium.com/@omosiyobo/setting-up-the-backend-foundation-for-ekehi-438f32215f06",
  },
  {
    category: "Engineering",
    title: "Ekehi Development Week 4: Sprint Wrap-Up",
    description:
      "A summary of progress, component refactoring, and integration wins achieved during the fourth development sprint of the Ekehi resource platform.",
    topics: ["React", "Sprint Wrap-Up", "Frontend"],
    link: "https://medium.com/@omosiyobo/ekehi-development-week-4-sprint-wrap-up-80f48c2cb147",
  },
  {
    category: "Engineering",
    title: "Building an Offline-First Quiz Tracking Application",
    description:
      "A practical look at combining React, Mantine, IndexedDB, and PWA techniques to keep a quiz competition useful even without an internet connection.",
    topics: ["React", "IndexedDB", "PWA"],
    link: "https://medium.com/@omosiyobo/building-an-offline-first-quiz-tracking-application-with-react-mantine-indexeddb-and-pwa-3aaee2c3cb20",
  },
  {
    category: "Engineering",
    title: "Ekehi: Moving from Vanilla HTML, CSS & JS to React.js",
    description:
      "Refactoring legacy vanilla web elements into reusable React components, managing component state, and updating unit test coverage with Vitest.",
    topics: ["React", "JavaScript", "Refactoring", "Vitest"],
    link: "https://medium.com/@omosiyobo/ekehi-moving-from-vanilla-html-css-js-to-react-js-8396754e80eb",
  },
  {
    category: "Engineering",
    title: "Ekehi Documentation: Understanding the Guide Detail Page",
    description:
      "A technical walkthrough of fetching, rendering, and structuring dynamic guide details for users exploring funding and growth resources on Ekehi.",
    topics: ["React", "TanStack Router", "API Integration"],
    link: "https://medium.com/@omosiyobo/ekehi-documentation-understanding-the-guide-detail-page-f9c6725fa227",
  },
  {
    category: "AI & Engineering",
    title: "Money-Route: AI Integration",
    description:
      "Integrating an embedded AI financial assistant into Money-Route using the Vercel AI SDK to enable real-time streaming chat responses and interactive tracking.",
    topics: ["Vue.js", "Vercel AI SDK", "TypeScript", "Node.js"],
    link: "https://medium.com/@omosiyobo/money-route-ai-integration-70dd8cdeb7da",
  },
]

export default function Articles() {
  return (
    <section id="articles" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-beige mb-3">
          From the notebook
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Articles</h2>
        <p className="mx-auto max-w-2xl text-sm leading-6 text-subtle">
          Notes on building resilient, accessible, and useful web experiences.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article, index) => (
          <motion.article
            key={article.title}
            className="group flex h-full flex-col rounded-3xl border border-zinc-700 bg-secondary p-7 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.3em] text-beige/70">
                {article.category}
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
                {article.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-subtle">
                {article.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {article.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-[0.72rem] text-beige/80"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-subtle transition hover:border-accent hover:bg-white hover:text-black"
            >
              Read article
              <FaArrowUpRightFromSquare aria-hidden="true" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}