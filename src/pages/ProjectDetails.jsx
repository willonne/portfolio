// src/pages/ProjectDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function ProjectDetails() {
  const { projectId, imageIndex } = useParams();
  const navigate = useNavigate();
  const index = parseInt(imageIndex);

  const portfolioProject = {
    id: "portfolio",
    title: "Portfolio",
    images: Array.from({ length: 26 }, (_, i) => `/images/screen${i + 1}.png`),
    explanations: Array.from({ length: 26 }, (_, i) => `Explication ${i + 1} : Description personnalisée.`)
  };

  if (!portfolioProject || index >= portfolioProject.images.length) return <p>Projet non trouvé</p>;

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
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1>{portfolioProject.title}</h1>
        <img
          src={portfolioProject.images[index]}
          alt={`Screen ${index + 1}`}
          style={{ maxWidth: "90%", borderRadius: "10px", marginTop: "30px" }}
        />
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          {portfolioProject.explanations[index]}
        </p>
        <button
          onClick={() => navigate(-1)}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            backgroundColor: "#222",
            color: "white",
            cursor: "pointer"
          }}
        >
          Retour aux projets
        </button>
      </section>
      <Footer />
    </div>
  );
}