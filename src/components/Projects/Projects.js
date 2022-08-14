import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";
import sm_image from "../../icons/macros.png";
import wc_image from "../../icons/microphone.png";
import fa_image from "../../icons/hamburger.png";

const projects = [
  {
    name: "smart macro",
    image: sm_image,
    description:
      "An app that allows users to find meals based on their macronutrient needs.",
    link: "https://kevinjordan1994.github.io/smart-macro/",
  },
  {
    name: "WADco Media Website",
    image: wc_image,
    description: "A website I built for my friend's podcasting company.",
    link: "https://wadcomedia.com/",
  },
  {
    name: "McDonalds 2",
    image: fa_image,
    description: "A food order application made with React JS.",
    link: "https://github.com/kevinjordan1994/food-app",
  },
];

export default function Projects() {
  const projectsList = projects.map((project) => {
    return (
      <ProjectCard
        name={project.name}
        image={project.image}
        description={project.description}
        link={project.link}
      />
    );
  });

  return (
    <section className={styles.projects}>
      <h1>projects</h1>
      <div className={styles.projects_container}>{projectsList}</div>
    </section>
  );
}
