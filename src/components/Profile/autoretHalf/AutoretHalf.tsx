import styles from './autoretHalf.module.css';

export const AutoretHalf = () => {
  return (
    <div>
      <section className={styles['skillsLogos-container']}>
        <img
          className={styles['profile-container-svg-mobile']}
          src="./autoret-mobile.svg"
          alt="Yo soy FerPM"
        />
      </section>
    </div>
  );
};
