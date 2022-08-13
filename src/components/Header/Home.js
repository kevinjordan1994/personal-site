import image from "../../images/test-background-img.jpg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.title}>
        <h1>Kevin Jordan</h1>
        <h2>Developer</h2>
      </div>
      <div className={styles.background_image}>
        <img src={image}></img>
      </div>
    </section>
  );
}
