import styles from './alertemail.module.css';

export const MessageHasCopied = () => {
  return (
    <div className={styles['parent-alert']}>
      <div className={styles['alert-copied']}>
        <h5 className={styles['copied']}>email adress copied!</h5>
      </div>
    </div>
  );
};
