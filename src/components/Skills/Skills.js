import SkillCard from "./SkillCard";
import styles from "./Skills.module.css";
import js_image from "../../icons/js.png";
import html_image from "../../icons/html-5.png";
import css_image from "../../icons/css-3.png";
import bs_image from "../../icons/bootstrap.png";
import react_image from "../../icons/physics.png";

const skills = [
  {
    name: "JavaScript",
    image: js_image,
  },
  {
    name: "HTML",
    image: html_image,
  },
  {
    name: "CSS",
    image: css_image,
  },
  {
    name: "Bootstrap",
    image: bs_image,
  },
  {
    name: "React JS",
    image: react_image,
  },
];

export default function Skills() {
  const skillsList = skills.map((skill) => {
    return <SkillCard name={skill.name} image={skill.image} />;
  });

  return (
    <section className={styles.skills}>
      <div className={styles.skills_container}>
        <h1>skills</h1>
        <div className={styles.skills_section}>{skillsList}</div>
      </div>
    </section>
  );
}
