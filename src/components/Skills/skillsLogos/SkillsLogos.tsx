import styles from './skillsLogos.module.css';

const SkillsLogos = () => {
  return (
    <section className={styles['skillsLogos-container']}>
      <div className={styles['skillsLogos-container-item']}>
        <img
          src="./tailwind.svg"
          alt="logo de tailwind css"
          className={styles['skillsLogos-svg-ccs-cls-1']}
        />
      </div>
      <div className={styles['skillsLogos-container-item']}>
        <img
          src="./html.svg"
          alt="logo de tailwind css"
          className={styles['skillsLogos-svg-ccs-cls-1']}
        />
      </div>
      <div className={styles['skillsLogos-container-item']}>
        <img
          src="./css.svg"
          alt="logo de tailwind css"
          className={styles['skillsLogos-svg-ccs-cls-1']}
        />
      </div>
      <div className={styles['skillsLogos-container-item']}>
        <img
          src="./js.svg"
          alt="logo de tailwind css"
          className={styles['skillsLogos-svg-ccs-cls-1']}
        />
      </div>
      <div className={styles['skillsLogos-container-item']}>
        <img
          src="./git.svg"
          alt="logo de tailwind css"
          className={styles['skillsLogos-svg-ccs-cls-1']}
        />
      </div>
      <div className={styles['skillsLogos-container-item']}>
        <img
          src="./react.svg"
          alt="logo de tailwind css"
          className={styles['skillsLogos-svg-ccs-cls-1']}
        />
      </div>
      <div className={styles['skillsLogos-container-item']}>
        <img
          src="./sass.svg"
          alt="logo de tailwind css"
          className={styles['skillsLogos-svg-ccs-cls-1']}
        />
      </div>
    </section>
  );
};

export default SkillsLogos;
