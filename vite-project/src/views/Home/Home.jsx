import { useSelector } from 'react-redux';
import HomeComp from '../../components/HomeComp/HomeComp';
import styles from './Home.module.css';
import React from 'react';

const Home = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className={styles['home-container']}>
      <h1 className={styles['title']}>
        <strong>
          {user && user.name ? `Hola ${user.name}!👋` : 'Bienvenido!'}
        </strong>
      </h1>
      <h2 className={styles['subtitle']}>
        Transformamos ideas en realidades innovadoras
      </h2>
      <HomeComp />
    </div>
  );
};

export default Home;
