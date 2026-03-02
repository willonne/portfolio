// src/pages/ProjectsPage.jsx
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

export default function ProjectsPage() {
  const navigate = useNavigate();
  const prefix = "/portfolio"; // Nom du repo GitHub

  const portfolioProject = {
    id: "portfolio",
    title: "Portfolio",
    description: "Création de mon portfolio personnel en React avec un design immersif.",
    tech: ["React", "CSS"],
    images: Array.from({ length: 26 }, (_, i) => `${prefix}/images/screen${i + 1}.png`),
    explanations: [
      "Explication 1 : Met à jour l'ensemble du système",
      "Explication 2 : Installe Apache HTTP Server sur ton système",
      "Explication 3 : Démarre le serveur web Apache sur ton système.",
      "Explication 4 : Configure le service pour qu’il démarre automatiquement au démarrage du système (au boot)",
      "Explication 5 : Ouvrir un navigateur internet et mettre l'adresse IP publique de l'instance dans la barre de recherche",
      "Explication 6 : Se rendre dans le dossier où Apache cherche les fichiers web à afficher.",
      "Explication 7 : Ouvre ou crée le fichier index.html dans l’éditeur nano avec les droits nécessaires pour que tu puisses y mettre ton code HTML.",
      "Explication 8 : Ajouter Cette Configuration",
      "Explication 9 : Permettre à l’utilisateur EC2 de modifier librement les fichiers web dans /var/www/html.",
      "Explication 10 : Upload le fichier lecauchemar.png depuis ton ordinateur vers ton bucket S3 portfolio-nicolas-images.",
      "Explication 11 : Envoie le fichier lecauchemar.png depuis ton PC vers ton serveur EC2, dans le dossier /home/ec2-user/, en utilisant ta clé privée pour te connecter.",
      "Explication 12 : Tu dois voir ton Image",
      "Explication 13 : Installe MariaDB 10.5 sur ton serveur, ce qui te permettra de créer et gérer des bases de données pour ton site web ou tes applications.",
      "Explication 14 : Lance MariaDB et Configure le service pour qu’il démarre automatiquement au démarrage du serveur.",
      "Explication 15 : Vérifie l’état actuel de MariaDB",
      "Explication 16 : Cette commande te montre l’état actuel de MariaDB, active (running) → MariaDB fonctionne correctement. Inactive (dead) → MariaDB est arrêté. Failed → MariaDB a rencontré une erreur lors du démarrage.",
      "Explication 17 : sécurise MariaDB , sinon ton serveur sera vulnérable.",
      "Explication 18 : Connecte toi à MariaDB en tant qu’administrateur (root) avec mysql -u root -p pour créer des bases de données, des utilisateurs, etc.",
      "Explication 19 : mysql -u root -p",
      "Explication 20 : Télécharger AWS CLI, Décompresser le fichier et Installer AWS CLI",
      "Explication 21 : Récupère la liste des dernières versions disponibles des logiciels et installe AWS CLI sur ton système Ubuntu/Debian.",
      "Explication 22 : Configure AWS CLI",
      "Explication 23 : Envoyer (upload) un fichier vers Amazon S3",
      "Explication 24 : Validé !!!",
      "Explication 25 : Créer un nouveau projet Vite nommé portfolio.",
      "Explication 26 : Déplace toi dans le dossier portfolio situé sur ton Bureau (Desktop) sous Windows."
    ]
  };

  const otherProjects = [
    {
      id: "app1",
      title: "Application 1",
      description: "Application interactive développée en JavaScript.",
      tech: ["JavaScript"],
      images: [`${prefix}/images/app1-1.jpg`],
      explanations: ["Explication unique de l'application 1"],
    },
  ];

  const projects = [portfolioProject, ...otherProjects];

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "white",
        background: `url("${prefix}/images/paintings-by-zdzis%C5%82aw-beksi%C5%84ski-v0-mhrzhfhoyg7b1.jpg") no-repeat center center fixed`,
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <section style={{ padding: "80px 20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Mes Projets</h1>

        {projects.map((project) => (
          <div key={project.id} style={{ marginBottom: "60px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{project.title}</h2>
            <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 20px auto" }}>
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                justifyContent: "center",
              }}
            >
              {project.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screen ${i + 1}`}
                  style={{ width: "300px", borderRadius: "10px", cursor: "pointer" }}
                  onClick={() => navigate(`/project/${project.id}/${i}`)}
                />
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  style={{ padding: "5px 10px", backgroundColor: "#222", borderRadius: "5px" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}