import NavBar from "./NavBar";
import Home from "./Home";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <section className={styles.header}>
      <NavBar />
      <Home />
      <div className={styles.background}></div>
    </section>
  );
}
