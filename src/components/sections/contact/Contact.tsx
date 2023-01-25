import { useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { AlertEmail } from '../../ui/alertEmail/AlertEmail';
import { MessageHasCopied } from '../../ui/alertEmail/MessageHasCopied';
import Button from '../../ui/buttom/Button';

import styles from './contact.module.css';

const Contact = () => {
  const [iscopied, setIscopied] = useState(false);
  const [copy, setCopy] = useState(false);

  const notNowCopyEmail = () => {
    setCopy(!copy);
  };

  const startCopyEmail = () => {
    setCopy(!copy);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ferpm.dev@gmail.com');
      setIscopied(true);
      setTimeout(() => {
        setIscopied(false);
      }, 1500);
    } catch (e) {
      console.error('e', e);
    }
  };

  return (
    <MainLayout idSection={'contact'}>
      <div className={styles['container-contact']}>
        {/* <div className={styles['contact-button']}>
          <img src="/email.png" alt="email" />
        </div> */}
        <Button
          text={'ferpm.dev@gmail.com'}
          classNameA={styles['contact-button']}
          classNameP={styles['contact-button-classnamep']}
        >
          <img onClick={startCopyEmail} src="/emailCopy.svg" alt="github" />
        </Button>
        {iscopied && <MessageHasCopied />}
        {copy && (
          // <MessageHasCopied />
          <AlertEmail copyEmail={copyEmail} notNowCopyEmail={notNowCopyEmail} />
        )}
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
