import AboutComp from '../../components/AboutComp/AboutComp';
import styles from './About.module.css';

const About = () => {
  return (
    <div>
      <h1 className={styles['title']}>
        <strong>Acerca de Nosotros</strong>
      </h1>
      <AboutComp />
    </div>
  );
};

export default About;
