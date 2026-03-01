import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
      <Header />

      <main className="mx-auto max-w-5xl px-4 py-10">
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