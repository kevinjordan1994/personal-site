import AboutText from "./AboutText";
import styles from "./About.module.css";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.about_container}>
        <div className={styles.about_content}>
          <AboutImage />
          <AboutText />
        </div>
      </div>
    </section>
  );
}
