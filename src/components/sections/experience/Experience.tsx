import { MainLayout } from '../../layouts/MainLayout';
import styles from './experience.module.css';
import ItemList from './itemList/ItemList';

const dataItems = [
  {
    time: 'Currently developing',
    text: 'On the most important news site in Argentina, working with commitment, facing the next presidential elections.',
    url: 'https://www.clarin.com.ar/',
    srcItem: './clarin.webp',
    id: 1,
  },
  {
    time: 'Deploy: October 2022',
    text: 'On the most important Spanish-language sports news website, ahead of the FIFA World Cup Qatar 2022.',
    url: 'https://www.ole.com.ar/',
    srcItem: './ole.webp',
    id: 2,
  },
  {
    time: 'Deploy: March 2022',
    text: 'The most important news site in the province of Santa Fé, Argentina:',
    url: 'https://www.ellitoral.com/',
    srcItem: './el_litoral.webp',
    id: 3,
  },
  {
    time: 'Deploy: December 2021',
    text: 'Magazine of fashion, beauty, celebrity and culture:',
    url: 'http://www.elle.clarin.com',
    srcItem: './elle.webp',
    id: 4,
  },
];

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
              <ItemList
                timeItem={e.time}
                textItem={e.text}
                urlItem={e.url}
                srcItem={e.srcItem}
                key={e.id}
              />
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
        <div className={styles['experience-container-img-all']}>
          <img src="./all.webp" className={styles['experience-img-all']} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Experience;
