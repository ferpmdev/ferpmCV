import styles from "./nav.module.css";

const Nav = () => {
  return (
    <div className={styles["nav-container"]}>
      <a href="#profile" className={styles["nav-link"]}>
        <p className={styles["nav-link-text"]}>Profile</p>
      </a>
      <a href="#skills" className={styles["nav-link"]}>
        <p className={styles["nav-link-text"]}>Skills</p>
      </a>
      <a href="#projects" className={styles["nav-link"]}>
        <p className={styles["nav-link-text"]}>Proyects</p>
      </a>
      <a href="#contact" className={styles["nav-link"]}>
        <p className={styles["nav-link-text"]}>Contact</p>
      </a>
    </div>
  );
};

export default Nav;
