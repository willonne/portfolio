// src/pages/SkillsPage.jsx
import Skills from "../components/Skills.jsx";
import { skills } from "../data/skills.js";

export default function SkillsPage() {
  return (
    <section
      style={{
        minHeight: "100vh",
        color: "white",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h1>Compétences</h1>
      <Skills skills={skills} />
    </section>
  );
}