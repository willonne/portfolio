import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import Skills from "../components/Skills.jsx";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1 style={{ fontSize: "6rem", margin: 0, fontWeight: "bold" }}>C.V.D</h1>
        <h2 style={{ fontSize: "2rem", marginTop: "10px", fontWeight: "normal" }}>
          Cloud Virtual Documents
        </h2>
        <p style={{ maxWidth: "600px", marginTop: "20px" }}>
          Bienvenue sur mon portfolio – Développeur Front-End passionné par les interfaces modernes.
        </p>
      </section>

      {/* À PROPOS */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      >
        <h2>À propos</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto" }}>
          Je suis DevOps-Cloud AWS Junior spécialisé en JavaScript et React.
          J’aime créer des interfaces claires, modernes et performantes.
        </p>
      </section>

      {/* SKILLS */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <h2>Mes Compétences</h2>
        <Skills />
      </section>

      {/* PROJECTS */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "rgba(0,0,0,0.75)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Mes Projets</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}