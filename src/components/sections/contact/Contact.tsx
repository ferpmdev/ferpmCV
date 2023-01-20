import { MainLayout } from '../../layouts/MainLayout';

import styles from './contact.module.css';

const Contact = () => {
  return (
    <MainLayout idSection={'contact'}>
      <div className={styles['container-contact']}>
        <div className={styles['image-project']}>
          <img src="/email.png" alt="email" />
        </div>
        <a
          href={'https://github.com/ferpmdev'}
          className={styles['image-project']}
          target="_blank"
          rel="noreferrer"
        >
          <img src="/github.png" alt="wjwbfc" />
        </a>
        <a
          href={'https://www.linkedin.com/in/ferpmdeveloper/'}
          className={styles['image-project']}
          target="_blank"
          rel="noreferrer"
        >
          <img src="/linkedin.png" alt="wjwbfc" />
        </a>
        <div className={styles['image-project']}>
          <img src="/ws.png" alt="wjwbfc" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
