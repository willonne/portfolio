import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", color: "white" }}>
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1>À propos</h1>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Je suis Nicolas Portier, développeur passionné spécialisé en React, AWS, et développement web.
          Ce portfolio présente mes projets, compétences et réalisations.
        </p>
      </section>
    </div>
  );
}