import { MainLayout } from '../../layouts/MainLayout';
import { dataItems } from '../../fakeData/dataItems';
import ItemList from './itemList/ItemList';
import styles from './experience.module.css';
import Button from '../../ui/buttom/Button';

const Experience = () => {
  return (
    <MainLayout idSection={'experience'}>
      <div className={styles['experience-container']}>
        <section className={styles['experience-container-text']}>
          <h1>Experience</h1>
          <h2>
            AGEA/Grupo Clarín, <br /> Frontend Developer <br /> 100% remote
          </h2>
          <h3 className={styles['experience-container-h3']}>
            November, 2020 - Present
          </h3>
          <p>
            <b>
              I developed and tested template components for different sections,
              note details, headers, navigation, sliders, search engines and
              more, to achieve the motorization of:
            </b>
            <br />
          </p>
          {dataItems &&
            dataItems.map((e) => (
              <>
                <ItemList
                  timeItem={e.time}
                  textItem={e.text}
                  urlItem={e.url}
                  srcItem={e.srcItem}
                  key={e.id}
                />
                <Button
                  href={e.url}
                  classNameA={styles['experience-a']}
                  classNameP={styles['experience-p']}
                  text={e.url}
                  target={'_blank'}
                />
              </>
            ))}
          <hr />
          <p>
            I participated in these motorization processes so that the newsrooms
            did not require a team of programmers to update their sites all the
            time, reducing development costs by 80%, in addition to improving
            performance by 30% on average, using technologies such as Next,
            allowing SSR or CSR in a selective manner among other advantages.
          </p>
          <br />
          <br />
          <h3>Tech Stack</h3>
          <p>
            <b>React, Next.js, Node, Javascript, CSS3, HTML5.</b>
          </p>
        </section>
        <picture className={styles['experience-container-img-all']}>
          <source srcSet="./all.webp 1x, ./all.webp 2x" type="image/webp" />
          <source srcSet="./all.png 1x, ./all.png 2x" type="image/png" />
          <img src="./all.png" className={styles['experience-img-all']} />
        </picture>
      </div>
    </MainLayout>
  );
};

export default Experience;
