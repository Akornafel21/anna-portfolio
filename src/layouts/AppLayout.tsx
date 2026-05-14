import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
      <Header />

      <main className="mx-auto max-w-5xl px-4 py-10">
        {!isHome && (
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center w-10 h-10 mb-6 rounded-full border border-black/10 bg-white/60 hover:bg-white shadow-sm transition hover:scale-105 active:scale-95"
            aria-label="Go back"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Anna Kornafel
        </div>
      </footer>
    </div>
  );
}