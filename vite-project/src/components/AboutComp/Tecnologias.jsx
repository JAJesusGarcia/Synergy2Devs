import React from 'react';
import styles from './Tecnologias.module.css';

const Tecnologias = () => {
  const tecnologias = {
    backend: [
      {
        name: 'TypeScript',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png',
        link: 'https://www.typescriptlang.org/',
      },
      {
        name: 'TypeORM',
        imgSrc:
          'https://seeklogo.com/images/T/typeorm-logo-F243B34DEE-seeklogo.com.png',
        link: 'https://typeorm.io/',
      },
      {
        name: 'Express',
        imgSrc:
          'https://images.credly.com/images/1c2c86e1-16ce-4e4d-a425-d1ac96bb026d/express.png',
        link: 'https://expressjs.com/',
      },
      {
        name: 'Node.js',
        imgSrc:
          'https://ih1.redbubble.net/image.367014180.4385/tst,small,845x845-pad,1000x1000,f8f8f8.u3.jpg',
        link: 'https://nodejs.org/',
      },
      {
        name: 'PostgreSQL',
        imgSrc:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8IuOGPHRleZpsOK5GETHFVqxB1nurxle1g&s',
        link: 'https://www.postgresql.org/',
      },
      {
        name: 'netepScript',
        imgSrc: '../../../public/img/netepLogoSynergy.jpg',
        link: 'https://www.npmjs.com/package/netepscript',
      },
    ],
    frontend: [
      {
        name: 'Vite',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
        link: 'https://vitejs.dev/',
      },
      {
        name: 'React',
        imgSrc: 'https://www.svgrepo.com/show/303500/react-1-logo.svg',
        link: 'https://reactjs.org/',
      },
      {
        name: 'Redux',
        imgSrc:
          'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
        link: 'https://redux.js.org/',
      },
      {
        name: 'JavaScript',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'CSS',
        imgSrc:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
    ],
  };

  const renderTecnologias = (techs) => (
    <div className={styles.tecnologiasList}>
      {techs.map((tecnologia, index) => (
        <div key={index} className={styles.tecnologiaCard}>
          <figure className={styles.card}>
            <a
              href={tecnologia.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tecnologiaImageLink}
            >
              <img
                src={tecnologia.imgSrc}
                alt={tecnologia.name}
                className={styles.tecnologiaImage}
              />
            </a>
            <figcaption className={styles.cardTitle}>
              {tecnologia.name}
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.tecnologiasContainer}>
      <h3 className={styles.tecnologiasTitle}>Tecnologías Frontend</h3>
      {renderTecnologias(tecnologias.frontend)}

      <h3 className={styles.tecnologiasTitle}>Tecnologías Backend</h3>
      {renderTecnologias(tecnologias.backend)}
    </div>
  );
};

export default Tecnologias;
