// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AtomIcon from '../../logo/Logo';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import BotonLogout from './BotonesNavbar/BotonLogout';
import BotonesNavbar from './BotonesNavbar/BotonesNavbar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <Link className={styles['navbar-logo']} to="/">
          <div className={styles['logo-container']}>
            <AtomIcon size={40} />
            <strong>Synergy2Devs</strong>
          </div>
        </Link>
        <div className={styles['menu-icon']} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
        <ul
          className={`${styles['nav-menu']} ${menuOpen ? styles['active'] : ''}`}
        >
          <li className={styles['nav-item']}>
            <Link
              to="/home"
              className={styles['nav-links']}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          {user && (
            <li className={styles['nav-item']}>
              <Link
                to="/turnos"
                className={styles['nav-links']}
                onClick={toggleMenu}
              >
                Turnos
              </Link>
            </li>
          )}
          <li className={styles['nav-item']}>
            <Link
              to="/about"
              className={styles['nav-links']}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li className={styles['nav-item']}>
            <Link
              to="/contactos"
              className={styles['nav-links']}
              onClick={toggleMenu}
            >
              Contactos
            </Link>
          </li>
          <li className={styles['auth-buttons']}>
            {user ? <BotonLogout /> : <BotonesNavbar />}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
