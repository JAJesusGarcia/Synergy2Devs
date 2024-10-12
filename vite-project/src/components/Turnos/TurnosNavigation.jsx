import React, { useState } from 'react';
import MisTurnos from '../../views/Turnos/MisTurnos';
import NewTurnos from '../../views/Turnos/NewTurno';
import styles from './TurnosNavigation.module.css';

const TurnosNavigation = () => {
  const [activeView, setActiveView] = useState('mis-turnos');

  return (
    <div>
      <div className={styles['turnos-navigation']}>
        <div
          className={`${styles['navigation-button']} ${activeView === 'mis-turnos' ? styles.active : ''}`}
          onClick={() => setActiveView('mis-turnos')}
        >
          <div className={styles['button-inner']}>Mis Turnos</div>
        </div>
        <div
          className={`${styles['navigation-button']} ${activeView === 'nuevo-turno' ? styles.active : ''}`}
          onClick={() => setActiveView('nuevo-turno')}
        >
          <div className={styles['button-inner']}>Nuevo Turno</div>
        </div>
      </div>
      <div>
        {activeView === 'mis-turnos' && <MisTurnos />}
        {activeView === 'nuevo-turno' && <NewTurnos />}
      </div>
    </div>
  );
};

export default TurnosNavigation;
