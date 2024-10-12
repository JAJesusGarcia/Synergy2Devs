import PropTypes from 'prop-types';
import styles from './BotonesTurno.module.css';

const BotonesTurno = ({ status, onCancelar, onEliminar }) => {
  return (
    <div className={styles['botones-turno']}>
      <button
        className={`${styles.boton} ${styles['boton-cancelar']}`}
        disabled={status.toLowerCase() === 'cancelado'}
        onClick={onCancelar}
      >
        Cancelar
      </button>
      <button
        className={`${styles.boton} ${styles['boton-eliminar']}`}
        onClick={onEliminar}
      >
        Eliminar
      </button>
    </div>
  );
};

BotonesTurno.propTypes = {
  status: PropTypes.string.isRequired,
  onCancelar: PropTypes.func.isRequired,
  onEliminar: PropTypes.func.isRequired,
};

export default BotonesTurno;
