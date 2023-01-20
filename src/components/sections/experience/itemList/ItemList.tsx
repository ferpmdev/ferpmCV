import { PropsItemList } from '../../../interfaces/interfaces';
import styles from '../experience.module.css';

const ItemList = ({ timeItem, textItem, urlItem, srcItem }: PropsItemList) => {
  return (
    <>
      <hr className={styles['experience-hr']} />
      <div className={styles['experience-container-img']}>
        <img src={srcItem} className={styles['experience-img']} />
      </div>
      <h3>{timeItem}</h3>
      <p>{textItem}</p>
    </>
  );
};

export default ItemList;
