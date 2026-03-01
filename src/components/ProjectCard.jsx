export default function ProjectCard({ project }) {
  return (
    <div
      style={{
        width: "280px",
        maxWidth: "100%",
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: "10px",
        padding: "15px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "center" }}>
        {project.tech.map((t, i) => (
          <span
            key={i}
            style={{
              padding: "5px 10px",
              backgroundColor: "#222",
              borderRadius: "5px",
              fontSize: "12px",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}