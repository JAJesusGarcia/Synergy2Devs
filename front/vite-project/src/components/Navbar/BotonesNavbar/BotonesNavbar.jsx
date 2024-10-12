import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BotonesNavbar.module.css';

const BotonesNavbar = () => {
  return (
    <div className={styles['botones-navbar']}>
      <Link to="/login" className={`${styles.boton} ${styles['boton-login']}`}>
        Login
      </Link>
      <Link
        to="/register"
        className={`${styles.boton} ${styles['boton-register']}`}
      >
        Register
      </Link>
    </div>
  );
};

export default BotonesNavbar;
