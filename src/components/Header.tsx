import { NavLink } from "react-router-dom";

const linkBase =
  "text-sm font-medium text-gray-600 hover:text-gray-900 transition";

const linkActive = "text-gray-900";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="font-bold tracking-tight text-gray-900">
          Anna Kornafel
        </NavLink>

        <nav className="flex items-center gap-5">
          <NavLink
            to="/projects"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            About
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Contact
          </NavLink>

          {/* <NavLink
            to="/projects/finecash"
            className="ml-2 inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            FineCash Case
          </NavLink> */}
        </nav>
      </div>
    </header>
  );
}