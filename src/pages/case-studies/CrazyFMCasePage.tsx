import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import GalleryModal from "../../components/GalleryModal";

import crazyLandingImg from "../../assets/crazyfm/crazy-landing.webp";
import crazyShowsImg from "../../assets/crazyfm/crazy-shows.webp";
import crazyScheduleImg from "../../assets/crazyfm/crazy-schedule.webp";
import crazyPodcastsImg from "../../assets/crazyfm/crazy-podcasts.webp";
import crazyDatabaseDiagramImg from "../../assets/crazyfm/er-diagram.webp";
import crazySqlSchemaImg from "../../assets/crazyfm/sql-schema.webp";
import crazyArchitectureImg from "../../assets/crazyfm/crazy-architecture.webp";
import crazyShowPageImg from "../../assets/crazyfm/crazy-shows-page.webp";
import crazySubscriptionsImg from "../../assets/crazyfm/crazy-subscriptions.webp";
import crazyCreateShowImg from "../../assets/crazyfm/crazy-create-show.webp";
import crazyEditShowImg from "../../assets/crazyfm/crazy-edit-show.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

type GalleryKey = "landing" | "shows" | "schedule" | "podcasts" | "database" | null;

type GalleryImage = {
  src: string;
  alt: string;
  title?: string;
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-semibold text-brand-text">
      {children}
    </span>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm">
      <p className="text-sm font-semibold text-brand-text">{title}</p>
      <div className="mt-2 text-sm leading-relaxed text-black/70">{children}</div>
    </div>
  );
}

function GalleryCard({
  img,
  title,
  subtitle,
}: {
  img: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group overflow-hidden rounded-3xl border border-black/10 bg-white/60 shadow-sm"
    >
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="h-56 w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
      </div>

      <div className="p-5">
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-sm text-black/70">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function CrazyFMCasePage() {
  const [openGallery, setOpenGallery] = useState<GalleryKey>(null);

  const landingGallery: GalleryImage[] = [
    { src: crazyLandingImg, alt: "CrazyFM landing" },
  ];

  const showsGallery: GalleryImage[] = [
    { 
        src: crazyShowsImg,
        alt: "CrazyFM shows"
    },
    {
        src: crazyShowPageImg,
        alt: "CrazyFM show page"
    },
    {
        src: crazySubscriptionsImg,
        alt: "CrazyFM subscriptions"
    },
    {
        src: crazyCreateShowImg,
        alt: "CrazyFM create show"
    },
    {
        src: crazyEditShowImg,
        alt: "CrazyFM edit show"
    },
  ];

  const scheduleGallery: GalleryImage[] = [
    { src: crazyScheduleImg, alt: "CrazyFM schedule" },
  ];

  const podcastsGallery: GalleryImage[] = [
    { src: crazyPodcastsImg, alt: "CrazyFM podcasts" },
  ];

const databaseGallery: GalleryImage[] = [
  {
    src: crazyDatabaseDiagramImg,
    alt: "CrazyFM ER diagram",
  },
  {
    src: crazySqlSchemaImg,
    alt: "CrazyFM SQL schema",
  },
  {
    src: crazyArchitectureImg,
    alt: "CrazyFM architecture structure",
  },
];

  return (
    <div className="space-y-10">
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative overflow-hidden rounded-[32px] border border-black/10 bg-gradient-to-b from-white/70 to-white/30 p-8 md:p-12"
      >
        <motion.div
          aria-hidden
          className="absolute -top-20 -right-16 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl"
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-brand-primaryDark/20 blur-3xl"
          animate={{ y: [0, -14, 0], x: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Tag>TypeScript</Tag>
              <Tag>Handlebars</Tag>
              <Tag>CSS</Tag>
              <Tag>SQLite</Tag>
              <Tag>CRUD</Tag>
              <Tag>Authentication</Tag>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-text md:text-5xl">
              CrazyFM — Case Study
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-black/70">
              A radio platform with shows, podcasts, schedule, subscriptions and
              authentication. In this project, I worked on page structure,
              reusable templates, CRUD flows, database-connected rendering and
              feature logic across multiple pages.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primaryDarker"
                href="https://gitlab.bht-berlin.de/anko3273/we1-assignments-ws25"
                target="_blank"
                rel="noreferrer"
              >
                
              GitLab repository
              </a>

              <Link
                to="/projects"
                className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-5 py-2.5 text-sm font-semibold text-brand-text transition hover:bg-white"
              >
                Back to projects
              </Link>
            </div>
          </div>

        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="grid gap-4 md:grid-cols-3"
      >
        <Card title="Product">
          Interactive radio platform with shows, schedule, podcasts,
          subscriptions and authenticated user flows.
        </Card>

        <Card title="Key features">
          Authentication, show management, subscriptions, schedule page, podcasts,
          reusable templates and SQLite-backed rendering.
        </Card>

        <Card title="My role">
          Page structure, reusable partial-based UI, forms, CRUD flows,
          database-connected pages and multi-page feature implementation.
        </Card>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="rounded-3xl border border-black/10 bg-white/50 p-7 md:p-10"
      >
        <h2 className="text-2xl font-bold">What I implemented</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="font-semibold">Dynamic shows pages</p>
            <p className="mt-2 text-sm text-black/70">
              Built database-driven show cards with actions such as subscribe,
              edit and delete.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="font-semibold">Subscriptions flow</p>
            <p className="mt-2 text-sm text-black/70">
              Implemented subscribe and unsubscribe logic together with a
              personalized subscriptions page.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="font-semibold">Create and edit forms</p>
            <p className="mt-2 text-sm text-black/70">
              Created structured pages for adding and editing shows with clean
              form handling and route-based actions.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="font-semibold">Reusable template structure</p>
            <p className="mt-2 text-sm text-black/70">
              Organized the project into reusable layouts, page templates and UI
              sections for better maintainability.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="font-semibold">Authentication and user flow</p>
            <p className="mt-2 text-sm text-black/70">
              Worked on login, register, logout and user-oriented navigation and
              protected page behavior.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="font-semibold">Database-connected architecture</p>
            <p className="mt-2 text-sm text-black/70">
              Connected SQLite-based data with pages and worked with relations
              between users, shows and subscriptions.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="space-y-4"
      >
        <div>
          <h2 className="text-2xl font-bold">Screens & visuals</h2>
          <p className="mt-1 text-sm text-black/70">
            Demo gallery for now. Replace these placeholders with your real
            CrazyFM screenshots later.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() => setOpenGallery("landing")}
            className="text-left"
          >
            <GalleryCard
              img={crazyLandingImg}
              title="Landing"
              subtitle="Homepage, hero section and first impression"
            />
          </button>

          <button
            type="button"
            onClick={() => setOpenGallery("shows")}
            className="text-left"
          >
            <GalleryCard
              img={crazyShowsImg}
              title="Shows & Subscriptions"
              subtitle="Shows grid, actions and subscriptions flow"
            />
          </button>

          <button
            type="button"
            onClick={() => setOpenGallery("schedule")}
            className="text-left"
          >
            <GalleryCard
              img={crazyScheduleImg}
              title="Schedule & Podcasts"
              subtitle="Structured content pages and information layout"
            />
          </button>

          <button
            type="button"
            onClick={() => setOpenGallery("database")}
            className="text-left"
            >
            <GalleryCard
                img={crazyArchitectureImg}
                title="Architecture"
                subtitle="Controllers, routes, middleware and database structure"
            />
           </button>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="rounded-3xl border border-black/10 bg-white/50 p-7 md:p-10"
      >
        <h2 className="text-2xl font-bold">What I learned</h2>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/70">
          <li>Structuring a server-rendered project with reusable templates and page layers.</li>
          <li>Building CRUD flows with forms, controllers and route-based actions.</li>
          <li>Connecting database content to UI and handling relations between entities.</li>
          <li>Designing user flows for authentication, subscriptions and multi-page navigation.</li>
          <li>Separating app logic into controllers, routes, middleware and repositories.</li>
        </ul>
      </motion.section>

      <GalleryModal
        isOpen={openGallery === "landing"}
        onClose={() => setOpenGallery(null)}
        title="CrazyFM • Landing"
        images={landingGallery}
      />

      <GalleryModal
        isOpen={openGallery === "shows"}
        onClose={() => setOpenGallery(null)}
        title="CrazyFM • Shows"
        images={showsGallery}
      />

      <GalleryModal
        isOpen={openGallery === "schedule"}
        onClose={() => setOpenGallery(null)}
        title="CrazyFM • Schedule & Podcasts"
        images={[...scheduleGallery, ...podcastsGallery]}
      />

      <GalleryModal
        isOpen={openGallery === "database"}
        onClose={() => setOpenGallery(null)}
        title="CrazyFM • Database & Architecture"
        images={databaseGallery}
      />
    </div>
  );
}