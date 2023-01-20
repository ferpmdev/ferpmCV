import { MainLayout } from '../../layouts/MainLayout';
import Button from '../../ui/buttom/Button';

import styles from './contact.module.css';

const Contact = () => {
  return (
    <MainLayout idSection={'contact'}>
      <div className={styles['container-contact']}>
        <div className={styles['contact-button']}>
          <img src="/email.png" alt="email" />
        </div>
        <Button
          href={'https://github.com/ferpmdev'}
          classNameA={styles['contact-button']}
          target={'_blank'}
        >
          <img src="/github.png" alt="github" />
        </Button>
        <Button
          href={'./FernandoPiolMartinez.pdf'}
          classNameA={styles['contact-button-b']}
          classNameP={styles['contact-button-p']}
          download={'FernandoPiolMartinez.pdf'}
          text={'Download CV'}
        />
        <Button
          href={'https://www.linkedin.com/in/ferpmdeveloper/'}
          classNameA={styles['contact-button']}
          target={'_blank'}
        >
          <img src="/linkedin.png" alt="linkedin" />
        </Button>

        <div className={styles['contact-button']}>
          <img src="/ws.png" alt="wjwbfc" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
