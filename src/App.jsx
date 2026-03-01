// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:projectId/:imageIndex" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}