import styles from "./SkillCard.module.css";

export default function SkillCard(props) {
  return (
    <div className={styles.skill}>
      <div className={styles.skill_image}>
        <img src={props.image} alt={props.name}></img>
      </div>
      {/* <p className={styles.skill_name}>{props.name}</p> */}
    </div>
  );
}
