// src/pages/Contact.jsx
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Contact() {
  return (
    <div style={{ minHeight: "100vh", color: "white", backgroundColor: "#000" }}>
      <Navbar />
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1>Contact</h1>
        <p>Email : <a href="mailto:willonne.production@hotmail.com">willonne.production@hotmail.com</a></p>
        <p>
          <a href="https://www.linkedin.com/in/nicolas-portier-8bb5a0366/" target="_blank" rel="noopener noreferrer"
             style={{ padding: "10px 20px", backgroundColor: "#0077b5", color: "white", borderRadius: "6px", fontWeight: "bold" }}>
            LinkedIn
          </a>
        </p>
      </section>
      <Footer />
    </div>
  );
}