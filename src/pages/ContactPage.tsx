import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

function ContactItem({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm">
      <p className="text-sm font-semibold text-brand-text">{title}</p>

      {href ? (
        <a
          href={href}
          className="mt-2 block text-lg font-medium text-brand-primary hover:underline"
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 text-lg font-medium text-black/80">{value}</p>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="space-y-10">
      {/* HERO */}

      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="rounded-[32px] border border-black/10 bg-gradient-to-b from-white/70 to-white/40 p-8 md:p-12"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-text md:text-5xl">
          Contact
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/70">
          Feel free to reach out if you have questions, collaboration ideas or
          opportunities. I will be happy to connect.
        </p>
      </motion.section>

      {/* CONTACT CARDS */}

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="grid gap-4 md:grid-cols-2"
      >
        <ContactItem
          title="Email"
          value="anna.kornafel2104@gmail.com"
          href="mailto:anna.kornafel2104@gmail.com"
        />

        <ContactItem
          title="Location"
          value="Berlin, Germany"
        />
      </motion.section>
    </div>
  );
}