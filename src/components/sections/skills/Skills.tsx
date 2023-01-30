import { MainLayout } from '../../layouts/MainLayout';
import styles from './skills.module.css';
import { SkillsLogosNew } from './skillsLogosNew/SkillsLogosNew';
// import SkillsLogosNew from './skillsLogosNew/SkillsLogosNew';

const Skills = () => {
  return (
    <MainLayout idSection={'skills'}>
      <div className={styles['skills-container']}>
        <div className={styles['skills-container-svg']}>
          <SkillsLogosNew />
        </div>
        <section className={styles['skills-container-text']}>
          <h1>Skills</h1>
          <p>
            <b>Tech strong skills</b>
            <br />
            HTML5, CSS3, Javascript, React, Next.js, React-Native, Git,
            TailwindCSS and Sass.
          </p>
          <p>
            <b>Tech basic skills</b>
            <br />
            Dart, Flutter, Redux, JAVA, SQL, MySQL, Node, Docker, AWS, Scrum and
            Design Thinking.
          </p>
          <p>
            <b>Soft skills</b>
            <br />I think that as time goes by, what I am acquiring the most is
            Flexibility. I went from being a graphic designer to Frontend
            Developer when I discovered I was also passionate about programming.
            Although today I don’t make a living from design, I have a lot of
            fun combining the two areas when developing a personal project.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default Skills;

{
  /* **************** LOGO JS ***************** */
}
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 292.4 291.3"
//   className={styles["skills-svg-js"]}
// >
//   <g>
//     <path d="M91.5 260.5c26.1 17.4 52.1 1.6 52.1 1.6 12.8-8.6 14.7-20.1 15.1-27.5 1.4-25.8 1.2-101.6 1.2-101.6l-28 .3s.1 66.4.2 91.3c0 4.3-.4 19.5-14 19.6s-18.5-14.1-18.5-14.1l-22.7 13.8s7.2 11.7 14.6 16.6zM225.3 244.2s-19.1.9-28.7-15.5L174.4 241s9.8 28.9 54.2 27.8c0 0 41.4-1.8 41.6-39.9 0 0 3.2-21.9-23.8-35.7-4.5-2.3-9-4.8-20-9.5-4.5-1.9-12.3-6-15.6-10.9-4.3-6.2.7-14.6 6.1-17 5.9-2.6 12.8-1.3 17.3 3.4 1.8 1.9 6.7 8 6.7 8l20.6-12.9s-10-24.5-41.5-22.9c0 0-35.3 1.8-37.6 33.4 0 0-4.4 25.6 24.1 40.5 18.4 9.6 36.5 9.4 35.9 26 0 0 .4 11.1-17.1 12.9z"></path>
//     <path
//       d="M0 0v291.3h292.4V0H0z"
//       className={styles["skills-svg-js-cls-1"]}
//     ></path>
//     <path d="M242.4 231.3c.6-16.6-17.5-16.4-35.9-26-28.5-14.9-24.1-40.5-24.1-40.5 2.3-31.6 37.6-33.4 37.6-33.4 31.5-1.6 41.5 22.9 41.5 22.9l-20.6 12.9s-4.9-6.1-6.7-8c-4.5-4.7-11.4-6-17.3-3.4-5.4 2.4-10.4 10.8-6.1 17 3.3 4.9 11.1 9 15.6 10.9 11 4.7 15.5 7.2 20 9.5 27 13.8 23.8 35.7 23.8 35.7-.2 38.1-41.6 39.9-41.6 39.9-44.4 1.1-54.2-27.8-54.2-27.8l22.2-12.3c9.6 16.4 28.7 15.5 28.7 15.5 17.5-1.8 17.1-12.9 17.1-12.9zm-142.8-1.2s4.9 14.2 18.5 14.1 14-15.3 14-19.6c-.1-24.9-.2-91.3-.2-91.3l28-.3s.2 75.8-1.2 101.6c-.4 7.4-2.3 18.9-15.1 27.5 0 0-26 15.8-52.1-1.6-7.4-4.9-14.6-16.6-14.6-16.6l22.7-13.8z"></path>
//   </g>
// </svg>
// {/* **************** LOGO CSS ***************** */}
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 296.76 420"
//   className={styles["skills-svg-css"]}
// >
//   <g>
//     <path
//       d="M296.76 81.85L0 81.85 27.7 385.01 149.39 420 269.6 385.64 296.76 81.85z"
//       className={styles["skills-svg-ccs-cls-1"]}
//     ></path>

//     <path
//       d="M54.77 141.85L241.41 141.85 224.35 332.27 148.09 354.06 70.88 331.64 66.14 272.9 103.41 272.9 106.25 303.53 148.09 314.27 188.98 302.9 193.09 254.27 106.88 254.58 103.41 217.01 196.88 217.01 199.41 179.43 57.3 179.43 54.77 141.85z"
//       className={styles["skills-svg-ccs-cls-2"]}
//     ></path>
//     <path
//       d="M81.3 16.16L81.3 40.48 107.83 40.48 107.83 56.59 61.09 56.59 61.09 0 107.83 0 107.83 16.8 81.3 16.16z"
//       className={styles["skills-svg-ccs-cls-1"]}
//     ></path>
//     <path
//       d="M116.98 0L116.98 13.64 142.88 41.11 116.98 41.11 116.98 56.59 170.67 56.59 170.67 43.01 145.72 16.16 170.67 16.16 170.67 0 116.98 0z"
//       className={styles["skills-svg-ccs-cls-1"]}
//     ></path>
//     <path
//       d="M180.46 0L180.46 13.64 206.35 41.11 180.46 41.11 180.46 56.59 234.14 56.59 234.14 43.01 209.19 16.16 234.14 16.16 234.14 0 180.46 0z"
//       className={styles["skills-svg-ccs-cls-1"]}
//     ></path>
//   </g>
// </svg>
