import { useDispatch } from 'react-redux';
import { clearUser } from '../../../store/userSlice';
import React from 'react';
import styles from './BotonesNavbar.module.css';
import Swal from 'sweetalert2';

const BotonLogout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    sessionStorage.removeItem('welcomeMessageShown');
    Swal.fire({
      title: 'Atencion!',
      text: 'Esta seguro de cerrar la sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearUser());
        Swal.fire('Sesión cerrada', '', 'success');
      }
    });
  };

  return (
    <div className={styles['botones-navbar']}>
      <button
        className={`${styles.boton} ${styles['boton-login']}`}
        onClick={handleLogout}
      >
        cerrar sesión
      </button>
    </div>
  );
};

export default BotonLogout;
