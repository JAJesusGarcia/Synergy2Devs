import styles from './NoTurnos.module.css';

const NoTurnos = () => {
  return (
    <div className={styles['no-turnos']}>
      <h1 className={styles['no-turnos-title']}>
        <strong>
          Aun no tienes turnos agendados!
          <br />
          Crea un nuevo turno
        </strong>
      </h1>
    </div>
  );
};

export default NoTurnos;
