import { motion } from "framer-motion";
//import profileImg from "../assets/profile/me.webp";

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

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-brand-text">{title}</h3>
      <div className="mt-4 text-sm leading-relaxed text-black/70">{children}</div>
    </div>
  );
}

function InfoItem({
  title,
  subtitle,
  details,
}: {
  title: string;
  subtitle?: string;
  details?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/50 p-5">
      <p className="font-semibold text-brand-text">{title}</p>
      {subtitle ? <p className="mt-1 text-sm text-black/70">{subtitle}</p> : null}
      {details ? <div className="mt-3 text-sm text-black/70">{details}</div> : null}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="rounded-[32px] border border-black/10 bg-gradient-to-b from-white/70 to-white/40 p-8 md:p-12"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* LEFT — TEXT */}

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Tag>Media Informatics</Tag>
              <Tag>Frontend</Tag>
              <Tag>UI/UX</Tag>
              <Tag>Software Development</Tag>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-brand-text md:text-5xl">
              About me
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/70">
              I am a motivated and detail-oriented Media Informatics student at BHT Berlin
              with practical experience in software development, business analysis and
              user-centered design. I enjoy building clean digital products, learning new
              technologies and working in structured, collaborative teams.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-black/65">
              <span className="rounded-full border border-black/10 bg-white/60 px-4 py-2">
                Berlin, Germany
              </span>

              <span className="rounded-full border border-black/10 bg-white/60 px-4 py-2">
                UI/UX • Frontend • Web Development
              </span>

              <span className="rounded-full border border-black/10 bg-white/60 px-4 py-2">
                German C1-C2 • English B2 • Ukrainian native
              </span>
            </div>
          </div>

          {/* RIGHT — PHOTO */}

          {/* <div className="flex h-[180px] w-[180px] shrink-0 items-center justify-center rounded-[28px] border border-black/10 bg-white/70 shadow-sm md:h-[220px] md:w-[220px]">
            <img
              src={profileImg}
              alt="Anna Kornafel"
              className="h-full w-full rounded-[24px] object-cover object-[center_30%]"
              loading="lazy"
              decoding="async"
            />
          </div> */}

        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="grid gap-4 md:grid-cols-3"
      >
        <SectionCard title="Profile">
          Strong academic foundation in software development, UX and digital media
          systems, combined with practical project work and communication experience.
        </SectionCard>

        <SectionCard title="Focus">
          Interested in frontend development, UI clarity, user-centered design and
          building structured web applications with clean logic.
        </SectionCard>

        <SectionCard title="Strengths">
          Teamwork, intercultural communication, adaptability, attention to detail and
          continuous learning.
        </SectionCard>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="rounded-3xl border border-black/10 bg-white/50 p-7 md:p-10"
      >
        <h2 className="text-2xl font-bold text-brand-text">Technical skills</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <InfoItem
            title="Programming"
            details={
              <ul className="list-disc space-y-1 pl-5">
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML & CSS</li>
                <li>SQL (SQLite)</li>
                <li>NoSQL</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>React (basic knowledge)</li>
              </ul>
            }
          />

          <InfoItem
            title="Tools"
            details={
              <ul className="list-disc space-y-1 pl-5">
                <li>Git & GitHub</li>
                <li>Figma</li>
                <li>Postman</li>
                <li>Eclipse</li>
                <li>Visual Studio Code</li>
                <li>1C System</li>
              </ul>
            }
          />

          <InfoItem
            title="Frameworks & methods"
            details={
              <ul className="list-disc space-y-1 pl-5">
                <li>Bootstrap</li>
                <li>REST APIs</li>
                <li>OOP</li>
                <li>Scrum</li>
              </ul>
            }
          />

          <InfoItem
            title="Modeling"
            details={
              <ul className="list-disc space-y-1 pl-5">
                <li>UML</li>
                <li>BPMN</li>
                <li>Entity-Relationship models</li>
                <li>UML Use Case Diagrams</li>
              </ul>
            }
          />
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-brand-text">Experience</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <InfoItem
            title="Consultant – Information Services & Marketing"
            subtitle="DMP Development Group, Remote / Ukraine • 03/2025 – 06/2025"
            details={
              <ul className="list-disc space-y-1 pl-5">
                <li>Technical and informational support for customers</li>
                <li>Worked with the 1C accounting and ERP system</li>
                <li>Handled communication and internal documentation</li>
              </ul>
            }
          />

          <InfoItem
            title="Youth Supervisor"
            subtitle="GLS Sprachenzentrum, Berlin • 07/2023 – 08/2023"
            details={
              <ul className="list-disc space-y-1 pl-5">
                <li>Supported international students in a language summer camp</li>
                <li>Organized activities and excursions</li>
                <li>Communicated with students and staff in English and German</li>
              </ul>
            }
          />

          <InfoItem
            title="Volunteer Translator"
            subtitle="Landessportbund Berlin • 03/2022 – 05/2022"
            details={
              <ul className="list-disc space-y-1 pl-5">
                <li>Supported refugees from Ukraine</li>
                <li>Provided live Ukrainian → German translation</li>
                <li>Helped with integration and orientation</li>
              </ul>
            }
          />
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="grid gap-4 lg:grid-cols-2"
      >
        <SectionCard title="Education">
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-brand-text">
                Bachelor of Science in Media Informatics
              </p>
              <p className="text-sm text-black/70">
                Berliner Hochschule für Technik (BHT), Berlin • since October 2023
              </p>
            </div>

            <div>
              <p className="font-semibold text-brand-text">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-sm text-black/70">
                Lviv Polytechnic National University, Lviv • since October 2023
              </p>
              <p className="mt-1 text-sm text-black/65">
                Part-time studies with focus on software development, user experience
                and digital media systems.
              </p>
            </div>

            <div>
              <p className="font-semibold text-brand-text">
                Previous studies in Computer Science
              </p>
              <p className="text-sm text-black/70">
                Lviv Polytechnic National University • 09/2021 – 06/2023
              </p>
              <p className="mt-1 text-sm text-black/65">
                Completed 4 semesters in the field of computer science, department of
                artificial intelligence systems.
              </p>
            </div>

            <div>
              <p className="font-semibold text-brand-text">
                Secondary school
              </p>
              <p className="text-sm text-black/70">
                Vasyl Symonenko Lyceum, Lviv • 09/2010 – 05/2021
              </p>
              <p className="mt-1 text-sm text-black/65">
                Graduated with a gold medal.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Certificates">
          <ul className="list-disc space-y-2 pl-5">
            <li>German Language Diploma (DSD) – Level II – 2022</li>
            <li>German Language Diploma (DSD) – Level I – 2019</li>
            <li>Business Analysis (EPAM University Program) – 2023</li>
            <li>HTML5 / CSS3 / JavaScript Fundamentals (SoftServe Academy) – 2023</li>
            <li>Database Fundamentals (SoftServe Academy) – 2024</li>
          </ul>
        </SectionCard>
      </motion.section>
    </div>
  );
}