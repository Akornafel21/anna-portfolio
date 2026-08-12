import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiGithub, FiGlobe } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  return (
    <div className="space-y-6">

      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="rounded-[32px] border border-black/10 bg-gradient-to-b from-white/70 to-white/40 p-8 md:p-12"
      >
        <p className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-brand-text mb-4">
          Open to Werkstudent roles · Berlin
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-text md:text-5xl">
          Let's connect.
        </h1>
        <p className="mt-3 max-w-lg text-base leading-7 text-black/60">
          Available for frontend Werkstudent positions in Berlin. Always happy to talk about projects, ideas, or opportunities
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="grid gap-3 md:grid-cols-2"
      >
        <a
          href="mailto:anna.kornafel2104@gmail.com"
          className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm transition hover:bg-white hover:shadow-md"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/80">
            <HiOutlineMail className="text-black/50" size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-black/40 uppercase tracking-wide">Email</p>
            <p className="text-sm font-medium text-brand-primary group-hover:underline">
              anna.kornafel2104@gmail.com
            </p>
          </div>
        </a>

        <div className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/80">
            <HiOutlineLocationMarker className="text-black/50" size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-black/40 uppercase tracking-wide">Location</p>
            <p className="text-sm font-medium text-black/80">Berlin, Germany</p>
          </div>
        </div>

        <a
          href="https://github.com/Akornafel21"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm transition hover:bg-white hover:shadow-md"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/80">
            <FiGithub className="text-black/50" size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-black/40 uppercase tracking-wide">GitHub</p>
            <p className="text-sm font-medium text-brand-primary group-hover:underline">
              Akornafel21
            </p>
          </div>
        </a>

        <a
          href="https://kornafel.dev"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-black/10 bg-white/60 p-5 shadow-sm transition hover:bg-white hover:shadow-md"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/80">
            <FiGlobe className="text-black/50" size={20} />
          </div>
          <div>
            <p className="text-xs font-semibold text-black/40 uppercase tracking-wide">Portfolio</p>
            <p className="text-sm font-medium text-brand-primary group-hover:underline">
              kornafel.dev
            </p>
          </div>
        </a>
      </motion.section>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="rounded-2xl border border-black/10 bg-white/60 p-5 flex items-center gap-4"
      >
        <div className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
        </div>
        <p className="text-sm text-black/70">
          Currently{" "}
          <span className="font-semibold text-black/90">available</span>{" "}
          for Werkstudent positions in Berlin — frontend development, UI/UX, or AI-integrated workflows.
        </p>
      </motion.div>

    </div>
  );
}