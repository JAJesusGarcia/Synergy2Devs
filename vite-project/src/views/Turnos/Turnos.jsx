// src/views/Turnos/Turnos.jsx
import React, { useState } from 'react';
import TurnosNavigation from '../../components/Turnos/TurnosNavigation';
import MisTurnos from './MisTurnos';
import styles from './Turnos.module.css';

const Turnos = () => {
  const [activeView, setActiveView] = useState('');

  return (
    <div className={styles['turnos-container']}>
      <TurnosNavigation activeView={activeView} setActiveView={setActiveView} />
      <div className={styles['turnos-content']}>
        {activeView === 'misTurnos' && <MisTurnos />}
        {activeView === 'newTurno' && <div>Contenido de Nuevo Turno</div>}
      </div>
    </div>
  );
};

export default Turnos;
