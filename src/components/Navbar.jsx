// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", textAlign: "center", backgroundColor: "rgba(0,0,0,0.7)" }}>
      <Link to="/" style={{ margin: "0 10px", color: "white", fontWeight: "bold" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 10px", color: "white", fontWeight: "bold" }}>À propos</Link>
      <Link to="/skills" style={{ margin: "0 10px", color: "white", fontWeight: "bold" }}>Compétences</Link>
      <Link to="/projects" style={{ margin: "0 10px", color: "white", fontWeight: "bold" }}>Projets</Link>
      <Link to="/contact" style={{ margin: "0 10px", color: "white", fontWeight: "bold" }}>Contact</Link>
    </nav>
  );
}