// src/pages/SkillsPage.jsx
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Skills from "../components/Skills.jsx";

export default function SkillsPage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "white" }}>
      <Navbar />
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1>Compétences</h1>
        <Skills />
      </section>
      <Footer />
    </div>
  );
}