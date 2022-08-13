import image from "../../images/Selfie.jpg";
import styles from "./AboutImage.module.css";

export default function AboutImage() {
  return (
    <div className={styles.about_image}>
      <img src={image} alt="Kevin Jordan"></img>
    </div>
  );
}
