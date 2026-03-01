// src/pages/SkillsPage.jsx
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Skills from "../components/Skills.jsx";
import { skills } from "../data/skills.js";

export default function SkillsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        color: "white",
        background: 'url("/portfolio/images/nightmare-nicolai-abraham-abildgaard.jpg") no-repeat center center fixed',
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "40px" }}>Compétences</h1>
        <Skills skills={skills} />
      </section>
      <Footer />
    </div>
  );
}