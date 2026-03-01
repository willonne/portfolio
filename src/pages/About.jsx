// src/pages/About.jsx
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function About() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "white" }}>
      <Navbar />
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1>À propos</h1>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Je suis DevOps-Cloud AWS Junior spécialisé en JavaScript et React.
          J’aime créer des interfaces claires, modernes et performantes.
        </p>
      </section>
      <Footer />
    </div>
  );
}