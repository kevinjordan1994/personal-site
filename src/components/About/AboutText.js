import Card from "../../ui/Card";
import styles from "./AboutText.module.css";

export default function AboutText() {
  const birthYear = new Date("April 9, 1994");
  const age = Math.trunc((Date.now() - birthYear) / 1000 / 60 / 60 / 24 / 365);

  return (
    <div className={styles.about_card}>
      <Card>
        <div className={styles.about_text}>
          <h1>about me</h1>
          <p>
            My name is Kevin Jordan. I am a {age} year old front-end developer
            from Jacksonville, Fl. My hobbies include working out, writing,
            cooking, gaming and learning.
          </p>
        </div>
      </Card>
    </div>
  );
}
