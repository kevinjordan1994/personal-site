import Card from "../../ui/Card";
import styles from "./ProjectCard.module.css";
import image from "../../images/smart-macro.PNG";

export default function ProjectCard() {
  return (
    <div className={styles.card_container}>
      <Card>
        <div className={styles.project_content}>
          <h2>smart macro</h2>
          <div className={styles.project_image}>
            <img src={image} alt="smart macro"></img>
          </div>
        </div>
      </Card>
    </div>
  );
}
