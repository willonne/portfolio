import { skills } from "../data/skills";

export default function Skills() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", justifyContent: "center" }}>
      {skills.map((skill, index) => (
        <span
          key={index}
          style={{
            padding: "8px 15px",
            backgroundColor: "#111",
            borderRadius: "8px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}