import Card from "../../ui/Card";
import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  return (
    <div className={styles.card_container}>
      <Card>
        <div className={styles.project_content}>
          <h2>{props.name}</h2>
          <div className={styles.project_image}>
            <img src={props.image} alt={props.name}></img>
          </div>
          <p className={styles.project_description}>{props.description}</p>
          <a className={styles.project_link} href={props.link} target="break">
            Check It Out!
          </a>
        </div>
      </Card>
    </div>
  );
}
