import Button from '../buttom/Button';
import styles from './nav.module.css';

const Nav = () => {
  return (
    <div className={styles['nav-container']}>
      <Button
        href={'#profile'}
        classNameA={styles['nav-link']}
        classNameP={styles['nav-link-text']}
        text={'Profile'}
      />
      <Button
        href={'#skills'}
        classNameA={styles['nav-link']}
        classNameP={styles['nav-link-text']}
        text={'Skills'}
        download={undefined}
      />
      <Button
        href={'#experience'}
        classNameA={styles['nav-link']}
        classNameP={styles['nav-link-text']}
        text={'Experience'}
      />
      <Button
        href={'#contact'}
        classNameA={styles['nav-link']}
        classNameP={styles['nav-link-text']}
        text={'Contact'}
      />
    </div>
  );
};

export default Nav;
