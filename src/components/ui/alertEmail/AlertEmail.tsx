import styles from './alertemail.module.css';
import { PropsAlertEmail } from '../../interfaces/interfaces';

export const AlertEmail = ({ notNowCopyEmail, copyEmail }: PropsAlertEmail) => {
  return (
    <div className={styles['parent-alert']} onClick={notNowCopyEmail}>
      <div className={styles['container-alert']}>
        <div className={styles['alert-button-close']} onClick={notNowCopyEmail}>
          <img
            src="./icon-close.svg"
            alt="cerrar"
            className={styles['alert-button-close-img']}
          />
        </div>
        <div className={styles['alert-title']}>ferpm.dev@gmail.com</div>
        <div className={styles['alert-button']} onClick={copyEmail}>
          copy
        </div>
      </div>
    </div>
  );
};
