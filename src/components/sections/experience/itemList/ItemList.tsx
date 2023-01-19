import styles from '../experience.module.css';

export interface PropsItemList {
  timeItem: string;
  textItem: string;
  urlItem: string;
  srcItem: string;
}

const ItemList = ({ timeItem, textItem, urlItem, srcItem }: PropsItemList) => {
  return (
    <>
      <hr />
      <div className={styles['experience-container-img']}>
        <img src={srcItem} className={styles['experience-img']} />
      </div>
      <h3>{timeItem}</h3>
      <p>{textItem}</p>
      <a href={urlItem} className={styles['experience-a']}>
        {urlItem}
      </a>
    </>
  );
};

export default ItemList;
