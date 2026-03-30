import { Route, Routes } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import FineCashCasePage from "./pages/case-studies/FineCashCasePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import CrazyFMCasePage from "./pages/case-studies/CrazyFMCasePage";

function App() {
  return(
    <Routes>
      <Route element = {<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/finecash" element={<FineCashCasePage />} />
        <Route path="/projects/crazyfm" element={<CrazyFMCasePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App
