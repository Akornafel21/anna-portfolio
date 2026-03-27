import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logoImg from "../assets/logo/logo.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-brand-text">
      {children}
    </span>
  );
}

function PlaceholderCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-[28px] border border-dashed border-black/15 bg-white/40 p-6 shadow-sm"
    >
      <div className="flex h-full min-h-[220px] flex-col justify-between">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/60">
            Coming soon
          </div>

          <h3 className="text-2xl font-bold text-brand-text">Next project</h3>
          <p className="mt-3 text-sm leading-relaxed text-black/65">
            This space is reserved for another project case study. I will add more
            frontend and UI/UX work here soon.
          </p>
        </div>

        <div className="mt-6">
          <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-black/50">
            In progress
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="rounded-[32px] border border-black/10 bg-gradient-to-b from-white/70 to-white/40 p-8 md:p-12"
      >
        <p className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-brand-text">
          Selected work
        </p>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-text md:text-5xl">
          Projects
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/70">
          A growing collection of projects that reflect my frontend skills, UI
          thinking and product-oriented approach.
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-brand-text">Featured project</h2>
          <p className="mt-1 text-sm text-black/70">
            A detailed case study of my work on FineCash.
          </p>
        </div>

        <motion.article
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="rounded-[28px] border border-black/10 bg-white/60 p-5 shadow-sm md:p-6"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <div className="flex h-[96px] w-[96px] shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-br from-brand-primary/10 to-white shadow-sm">
              <img
                src={logoImg}
                alt="FineCash logo"
                className="h-16 w-16 object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-2">
                <Tag>React</Tag>
                <Tag>TypeScript</Tag>
                <Tag>Tailwind</Tag>
                <Tag>Data Visualization</Tag>
                <Tag>FinTech</Tag>
              </div>

              <h3 className="mt-4 text-3xl font-bold text-brand-text">
                FineCash
              </h3>

              <p className="mt-3 max-w-2xl leading-relaxed text-black/70">
                FineCash is a web app for managing personal and shared household
                finances with dashboards, OCR receipt scanning and AI-based
                categorization. On this project, I focused on dashboard UI,
                charts, household logic and API data integration.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/projects/finecash"
                  className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primaryDarker"
                >
                  Open case study
                </Link>

                <a
                  href="https://gitlab.bht-berlin.de/finecash"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-brand-textButton px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  View repository
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="space-y-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-brand-text">More projects</h2>
          <p className="mt-1 text-sm text-black/70">
            More case studies and development work will be added here.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
        </div>
      </motion.section>
    </div>
  );
}