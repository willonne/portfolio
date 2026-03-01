// src/pages/ProjectsPage.jsx
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {
  const navigate = useNavigate();

  // Les 26 screens du projet portfolio
  const portfolioProject = {
    id: "portfolio",
    title: "Portfolio",
    description: "Création de mon portfolio personnel en React avec un design immersif.",
    tech: ["React", "CSS"],
    images: Array.from({ length: 26 }, (_, i) => `/images/screen${i + 1}.png`),
    explanations: Array.from({ length: 26 }, (_, i) => `Explication ${i + 1} : Description personnalisée.`)
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "white",
        background: 'url("/images/nightmare-nicolai-abraham-abildgaard.jpg") no-repeat center center fixed',
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <section style={{ padding: "80px 20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Mes Projets</h1>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
          {portfolioProject.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Screen ${i + 1}`}
              style={{ width: "300px", borderRadius: "10px", cursor: "pointer" }}
              onClick={() => navigate(`/project/${portfolioProject.id}/${i}`)}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}