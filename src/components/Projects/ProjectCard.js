import Card from "../../ui/Card";
import styles from "./ProjectCard.module.css";
import image from "../../icons/macros.png";

export default function ProjectCard() {
  return (
    <div className={styles.card_container}>
      <Card>
        <div className={styles.project_content}>
          <h2>smart macro</h2>
          <div className={styles.project_image}>
            <img src={image} alt="smart macro"></img>
          </div>
          <p className={styles.project_description}>
            Smart macro is a meal planning application that utilizes the
            Spoonacular API to allow health-conscious users to find meals based
            on their macronutrient needs.
          </p>
          <a
            className={styles.project_link}
            href="https://kevinjordan1994.github.io/smart-macro/"
            target="break"
          >
            Check It Out!
          </a>
        </div>
      </Card>
    </div>
  );
}
