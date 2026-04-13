import { Link } from "react-router-dom";
import profileImage from "../assets/profile/me.webp"; // зміни шлях під своє фото

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-[40px] bg-[#d8cef3] px-6 py-10 md:px-10 md:py-14">
        {/* background shapes */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#c5b8ee] blur-2xl opacity-70" />
        <div className="absolute right-[-80px] top-[-40px] h-[420px] w-[420px] rounded-full bg-[#b8aae8] opacity-80" />
        <div className="absolute bottom-[-120px] left-[20%] h-56 w-56 rounded-full bg-white/20 blur-2xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-2">
          {/* left */}
          <div className="animate-[fadeDown_.8s_ease-out] space-y-6">
            <p className="inline-flex items-center rounded-full border border-white/40 bg-white/40 px-4 py-1.5 text-xs font-semibold text-gray-700 backdrop-blur">
              Media Informatics • Frontend • UI/UX
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight text-[#18181b] md:text-6xl">
              Clean and thoughtful web interfaces with React + TypeScript.
            </h1>

            <p className="max-w-xl text-base leading-8 text-gray-700 md:text-lg">
              Medieninformatik student at BHT Berlin with practical experience in
              frontend development, UI/UX thinking and building structured digital
              products with clarity and purpose.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center rounded-full bg-[#18181b] px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                View projects
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-white/40 bg-white/60 px-6 py-3 text-sm font-semibold text-[#18181b] backdrop-blur transition hover:bg-white/80"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 pt-3 text-sm text-gray-700">
              <span className="rounded-full bg-white/55 px-4 py-2 backdrop-blur">
                Berlin, Germany
              </span>
              <span className="rounded-full bg-white/55 px-4 py-2 backdrop-blur">
                React • TypeScript • UI/UX
              </span>
            </div>
          </div>

          {/* right */}
          <div className="animate-[fadeDown_1s_ease-out] flex justify-center md:justify-end">
            <div className="relative h-[420px] w-[300px] overflow-hidden rounded-[38px] bg-white/20 shadow-2xl md:h-[500px] md:w-[360px]">
              <img
                src={profileImage}
                alt="Anna Kornafel"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-[28px] bg-white/70 p-6 shadow-sm backdrop-blur">
          <p className="text-lg font-semibold text-[#18181b]">Frontend clarity</p>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Clean layouts, responsive interfaces and structured component-based UI.
          </p>
        </div>

        <div className="rounded-[28px] bg-white/70 p-6 shadow-sm backdrop-blur">
          <p className="text-lg font-semibold text-[#18181b]">UI/UX mindset</p>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            User-centered design, consistency, hierarchy and attention to detail.
          </p>
        </div>

        <div className="rounded-[28px] bg-white/70 p-6 shadow-sm backdrop-blur">
          <p className="text-lg font-semibold text-[#18181b]">Teamwork</p>
          <p className="mt-3 text-sm leading-7 text-gray-600">
            Collaboration, communication, practical project work and continuous learning.
          </p>
        </div>
      </section>
    </div>
  );
}