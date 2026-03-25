import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import GalleryModal from "../../components/GalleryModal";

import dashboardImg from "../../assets/dashboard/dashboard.png";
import dashboardImg2 from "../../assets/dashboard/dashboard2.png";
import dashboardImg3 from "../../assets/dashboard/dashboard3.png";
import dashboardImg4 from "../../assets/dashboard/dashboard4.png";
import landingImg from "../../assets/landing.png";
import transactionImg1 from "../../assets/transaction/transaction1.png";
import transactionImg2 from "../../assets/transaction/transaction2.png";
import transactionImg3 from "../../assets/transaction/transaction3.png";
import transactionImg4 from "../../assets/transaction/transaction4.png";
import householdImg1 from "../../assets/household/household1.png";
import householdImg2 from "../../assets/household/household2.png";
import householdImg3 from "../../assets/household/household3.png";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

type GalleryKey = "dashboard" | "landing" | "transaction" | "household" | null;

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

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm">
      <p className="text-sm font-semibold text-brand-text">{title}</p>
      <div className="mt-2 text-sm text-black/70 leading-relaxed">{children}</div>
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
      className="group rounded-3xl border border-black/10 bg-white/60 overflow-hidden shadow-sm"
    >
      <div className="relative">
        <img src={img} alt={title} className="h-56 w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
      </div>
      <div className="p-5">
        <p className="font-semibold">{title}</p>
        <p className="mt-1 text-sm text-black/70">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function FineCashCasePage() {
  const [openGallery, setOpenGallery] = useState<GalleryKey>(null);

  // Add more images anytime by importing them and pushing here.
  const dashboardGallery: GalleryImage[] = [
    { src: dashboardImg, alt: "Dashboard overview" },
    { src: dashboardImg2, alt: "Dashboard overview 2"},
    { src: dashboardImg3, alt: "Dashboard overview 3"},
    { src: dashboardImg4, alt: "Dashboard overview 4"},
  ];

  const landingGallery: GalleryImage[] = [
    { src: landingImg, alt: "Landing page" },
  ];

  const transactionGallery: GalleryImage[] = [
    { src: transactionImg1, alt: "Transaction modal" },
    { src: transactionImg2, alt: "Transaction modal 2" },
    { src: transactionImg3, alt: "Transaction modal 3" },
    { src: transactionImg4, alt: "Transaction modal 4" },
  ];

  const householdGallery: GalleryImage[] = [
    { src: householdImg1, alt: "Household page" },
    { src: householdImg2, alt: "Household page 2" },
    { src: householdImg3, alt: "Household page 3" },
  ];

  return (
    <div className="space-y-10">
      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative overflow-hidden rounded-[32px] border border-black/10 bg-gradient-to-b from-white/70 to-white/30 p-8 md:p-12"
      >
        {/* floating blobs (finecash vibe) */}
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

        <div className="relative">
          <div className="flex flex-wrap gap-2">
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Tailwind</Tag>
            <Tag>Data Visualization</Tag>
            <Tag>Multi-user households</Tag>
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-brand-text">
            FineCash — Case Study
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-black/70">
            Web app for managing personal and shared household finances with interactive dashboards,
            receipt scanning (OCR) and AI-based categorization.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primaryDarker transition"
              href="https://gitlab.bht-berlin.de/finecash"
              target="_blank"
              rel="noreferrer"
            >
              GitLab repository
            </a>

            <a
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primaryDarker transition"
              href="https://www.finecash.de"
              target="_blank"
              rel="noreferrer"
            >
              To the website
            </a>

            <Link
              to="/projects"
              className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-5 py-2.5 text-sm font-semibold text-brand-text hover:bg-white transition"
            >
              Back to projects
            </Link>
          </div>
        </div>
      </motion.section>

      {/* OVERVIEW */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="grid gap-4 md:grid-cols-3"
      >
        <Card title="Product">
          Personal + shared household budgeting, dashboards and clear spending insights
        </Card>
        <Card title="Key features">
          OCR receipt scanning + automatic categorization (Ollama), shared households, gaming mode
        </Card>
        <Card title="My role (Frontend)">
          Dashboard UI, donut chart, income/expense timeline chart, full household page logic & API integration
        </Card>
      </motion.section>

      {/* MY CONTRIBUTIONS */}
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
            <p className="font-semibold">Donut chart — spending by category</p>
            <p className="mt-2 text-sm text-black/70">
              Grouped expenses by category, displayed totals and percentages, supported filtering and clean legends.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="font-semibold">Timeline chart — income & expenses over time</p>
            <p className="mt-2 text-sm text-black/70">
              Implemented a time-based chart with toggles (expenses / income / both) and consistent UI states.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="font-semibold">Household page — multi-user logic</p>
            <p className="mt-2 text-sm text-black/70">
              Built the household page end-to-end: data mapping, household switch, UI logic and correct assignment of data per household.
            </p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="font-semibold">Dashboard UI & polish</p>
            <p className="mt-2 text-sm text-black/70">
              UI optimizations, bug fixes, responsive improvements, and API-data integration into visualization components.
            </p>
          </div>
        </div>
      </motion.section>

      {/* GALLERY */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="space-y-4"
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Screens & visuals</h2>
            <p className="mt-1 text-sm text-black/70">
              Hover the cards — images are animated. Click a card to open the gallery.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() => setOpenGallery("dashboard")}
            className="text-left"
          >
            <GalleryCard
              img={dashboardImg}
              title="Dashboard"
              subtitle="Interactive charts + spending overview (click)"
            />
          </button>

          <button
            type="button"
            onClick={() => setOpenGallery("landing")}
            className="text-left"
          >
            <GalleryCard
              img={landingImg}
              title="Landing"
              subtitle="Brand look & onboarding (click)"
            />
          </button>

          <button
            type="button"
            onClick={() => setOpenGallery("transaction")}
            className="text-left"
          >
          <GalleryCard
              img={transactionImg1}
              title="Transaction"
              subtitle="Expense & income tracking with smart categorization (click)"
            />
          </button>

          <button
            type="button"
            onClick={() => setOpenGallery("household")}
            className="text-left"
          >
          <GalleryCard
              img={householdImg1}
              title="Household"
              subtitle="Multi-user household management and shared budgets (click)"
            />
          </button>
        </div>
      </motion.section>

      {/* NEXT */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="rounded-3xl border border-black/10 bg-white/50 p-7 md:p-10"
      >
        <h2 className="text-2xl font-bold">What I learned</h2>
        <ul className="mt-4 space-y-2 text-sm text-black/70 list-disc pl-5">
          <li>Building data-visualization UI with clean states (loading/empty/error).</li>
          <li>Handling complex UI logic for multi-user & household switching.</li>
          <li>Polishing product UI for clarity and usability.</li>
        </ul>
      </motion.section>

      {/* MODALS */}
      <GalleryModal
        isOpen={openGallery === "dashboard"}
        onClose={() => setOpenGallery(null)}
        title="FineCash • Dashboard"
        images={dashboardGallery}
      />

      <GalleryModal
        isOpen={openGallery === "landing"}
        onClose={() => setOpenGallery(null)}
        title="FineCash • Landing"
        images={landingGallery}
      />

      <GalleryModal
        isOpen={openGallery === "transaction"}
        onClose={() => setOpenGallery(null)}
        title="FineCash • Transaction"
        images={transactionGallery}
      />

      <GalleryModal
        isOpen={openGallery === "household"}
        onClose={() => setOpenGallery(null)}
        title="FineCash • Transaction"
        images={householdGallery}
      />
    </div>
  );
}