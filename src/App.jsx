// App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const backgroundStyle = {
    width: "100vw",
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${import.meta.env.BASE_URL}images/fussli-songe-d-une-nuit-d-ete.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    color: "white",
  };

  return (
    <HashRouter>
      <div style={backgroundStyle}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectId/:imageIndex" element={<ProjectDetails />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}