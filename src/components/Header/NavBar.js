import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h3>Kevin Jordan</h3>
      </div>
      <div className={styles.links_container}>
        <ul className={styles.links}>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
}
