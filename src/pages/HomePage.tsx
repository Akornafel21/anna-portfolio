import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-3xl border bg-gradient-to-b from-gray-50 to-white p-8 md:p-12">
        <div className="space-y-5">
          <p className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-semibold text-gray-700">
            Media Informatics • Frontend • UI/UX
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            I build clean, user-friendly web UIs with React + TypeScript.
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl">
            Medieninformatik student at BHT Berlin, interested in UI/UX and continuous
            learning, with practical experience in software development and teamwork.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              View projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
          <p className="text-sm font-semibold">Data visualization</p>
          <p className="mt-2 text-sm text-gray-600">
            Dashboards, charts, UI logic and API data integration.
          </p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
          <p className="text-sm font-semibold">UI/UX mindset</p>
          <p className="mt-2 text-sm text-gray-600">
            User-centered design, clarity, consistency, small details.
          </p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
          <p className="text-sm font-semibold">Teamwork</p>
          <p className="mt-2 text-sm text-gray-600">
            Scrum basics, communication, real group project experience.
          </p>
        </div>
      </section>
    </div>
  );
}