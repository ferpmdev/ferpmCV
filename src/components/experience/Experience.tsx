import { MainLayout } from '../layouts/MainLayout';
import SkillsLogos from '../skills/skillsLogos/SkillsLogos';
import styles from './experience.module.css';

const Experience = () => {
  return (
    <MainLayout idSection={'experience'}>
      <div className={styles['experience-container']}>
        <section className={styles['experience-container-text']}>
          <h1>Experience</h1>
          <p>
            <b>AGEA/Grupo Clarín, Frontend Developer 100% remote</b>
            <i>— November, 2020 - Present</i>
            <br />
            <br />I developed and tested template components for different
            sections, note details, headers, navigation sliders, search engines
            and more, to achieve the motorization of:{' '}
            <code>
              <br />● October 2022 | The most important Spanish-speaking sports
              news site: https://www.ole.com.ar/ <br />● March 2022 | The most
              important news site in the province of Santa Fé, Argentina:
              https://www.ellitoral.com/ <br />● December 2021 | The site
              https://elle.clarin.com/
            </code>
          </p>
          <p>
            <br />I participated in these motorization processes so that the
            newsrooms did not require a team of programmers to update their
            sites all the time, reducing development costs by 80%, in addition
            to improving performance by 30% on average, using technologies such
            as Next, allowing SSR or CSR in a selective manner among other
            advantages.
            <br />
            <code>
              ● Tech Stack | React, Next.js, Node, Javascript, CSS3, HTML5.
            </code>
          </p>
        </section>
        <div className={styles['experience-container-svg']}>
          <SkillsLogos />
        </div>
      </div>
    </MainLayout>
  );
};

export default Experience;
