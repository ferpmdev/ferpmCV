import { MainLayout } from '../../layouts/MainLayout';
import styles from './profile.module.css';
import SkillsLogos from '../skills/skillsLogos/SkillsLogos';
import { AutoretNewCurve } from './autoretNew/AutoretNewCurve';
import { AutoretLogos } from './autoretNew/Autoretlogos';

const Profile = () => {
  return (
    <MainLayout idSection={'profile'}>
      <div className={styles['profile-container-logos']}>
        <AutoretLogos />
      </div>
      <div className={styles['profile-container']}>
        <section className={styles['profile-container-text']}>
          <h1>
            Nice
            <br /> to meet you!
          </h1>
          <h1 className={styles['profile-h1']}>I'm FerPM</h1>
          <p>
            Frontend Developer with over 3 years of experience developing and
            testing multiple web-based applications, incorporating a range of
            technologies like React, React-Native, Next, JavaScript, CSS3.
            <br /> I am looking for new challenges to grow professionally as a
            Frontend Developer with React, React-Native, Next.js and other
            frameworks.
          </p>
        </section>

        <div className={styles['profile-container-svg']}>
          <AutoretNewCurve />
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
