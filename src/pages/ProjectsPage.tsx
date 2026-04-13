import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import fineCashLogoImg from "../assets/logo/logo.webp";
import crazyFmLogoImg from "../assets/logo/logo_fm.webp";

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


function ProjectCard({
  logo,
  logoAlt,
  tags,
  title,
  description,
  caseStudyLink,
  repositoryLink,
  websiteLink,
}: {
  logo: string;
  logoAlt: string;
  tags: string[];
  title: string;
  description: string;
  caseStudyLink: string;
  repositoryLink?: string;
  websiteLink?: string;
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="rounded-[28px] border border-black/10 bg-white/60 p-5 shadow-sm md:p-6"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-start">
<div className="flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-[28px] bg-black/80 shadow-sm">
          <img
            src={logo}
            alt={logoAlt}
            className="h-16 w-16 object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <h3 className="mt-4 text-3xl font-bold text-brand-text">{title}</h3>

          <p className="mt-3 max-w-2xl leading-relaxed text-black/70">
            {description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to={caseStudyLink}
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primaryDarker"
            >
              Open case study
            </Link>

            {repositoryLink ? (
              <a
                href={repositoryLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-brand-textButton px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                View repository
              </a>
            ) : null}

            {websiteLink ? (
              <a
                href={websiteLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primaryDarker"
              >
                To the website
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
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
          <h2 className="text-2xl font-bold text-brand-text">Case studies</h2>
          <p className="mt-1 text-sm text-black/70">
            Detailed project pages that show my work, design decisions and implementation focus.
          </p>
        </div>

        <div className="space-y-4">
          <ProjectCard
            logo={fineCashLogoImg}
            logoAlt="FineCash logo"
            tags={["React", "TypeScript", "Tailwind", "Data Visualization", "FinTech"]}
            title="FineCash"
            description="FineCash is a web app for managing personal and shared household finances with dashboards, OCR receipt scanning and AI-based categorization"
            caseStudyLink="/projects/finecash"
            repositoryLink="https://gitlab.bht-berlin.de/finecash"
            websiteLink="https://www.finecash.de"
          />

          <ProjectCard
            logo={crazyFmLogoImg}
            logoAlt="CrazyFM logo"
            tags={["Handlebars", "JavaScript", "CSS", "SQLite", "CRUD", "Authentication"]}
            title="CrazyFM"
            description="CrazyFM is a radio platform with shows, podcasts, schedule, subscriptions and authentication"
            caseStudyLink="/projects/crazyfm"
            repositoryLink="https://gitlab.bht-berlin.de/anko3273/we1-assignments-ws25"
          />
        </div>
      </motion.section>
    </div>
  );
}