import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h1>projects</h1>
      <div className={styles.projects_container}>
        <ProjectCard />
      </div>
    </section>
  );
}
