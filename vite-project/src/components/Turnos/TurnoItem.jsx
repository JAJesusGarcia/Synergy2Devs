import PropTypes from 'prop-types';
import { parseISO, format, isSameDay, addDays } from 'date-fns';
import styles from './TurnoItem.module.css';
import BotonesTurno from './BotonesTurno/BotonesTurno';
import Swal from 'sweetalert2';
import { sendEmail } from '../../helpers/emailHelper';

const TurnoItem = ({
  id,
  time,
  date,
  description,
  status,
  user,
  onEliminar,
  onCancelar,
  userEmail,
}) => {
  const formattedDate = date
    ? format(parseISO(date), 'dd-MM-yyyy')
    : 'Fecha no disponible';

  const formattedTime = time || 'Hora no disponible';

  const handleCancelar = async () => {
    const today = new Date();
    const turnoDate = parseISO(date);

    if (
      isSameDay(today, turnoDate) ||
      isSameDay(today, addDays(turnoDate, -1))
    ) {
      Swal.fire({
        title: 'No se puede cancelar el turno',
        text: 'No puedes cancelar el turno el mismo día o un día antes de la fecha',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    const result = await Swal.fire({
      title: '¿Estás seguro de cancelar este turno?',
      text: 'No podrás deshacer esta accion',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cancelar',
    });

    if (result.isConfirmed) {
      try {
        await onCancelar(id);
        Swal.fire(
          'Turno cancelado',
          'El turno ha sido cancelado' +
            (userEmail ? ' y se ha enviado un correo de confirmación' : ''),
          'success',
        );
        if (userEmail) {
          await sendEmail(
            userEmail,
            'Turno Cancelado',
            `Su turno para el ${formattedDate} a las ${formattedTime} ha sido cancelado. Descripción: ${description}.`,
          );
        }
      } catch (error) {
        console.error('Error al cancelar el turno:', error);
        Swal.fire('Error', 'Hubo un problema al cancelar el turno', 'error');
      }
    }
  };

  const handleEliminar = async () => {
    console.log(`Intentando eliminar turno con ID: ${id} y status: ${status}`);
    if (status.toLowerCase() === 'active') {
      Swal.fire({
        title: 'No se puede eliminar el turno',
        text: 'No puedes eliminar un turno activo. Primero debes cancelarlo.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }
    const result = await Swal.fire({
      title: '¿Estás seguro de eliminar este turno?',
      text: 'No podrás deshacer esta accion',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    });

    if (result.isConfirmed) {
      try {
        await onEliminar(id);
        Swal.fire(
          'Turno Eliminado',
          'El turno ha sido eliminado' +
            (userEmail ? ' y se ha enviado un correo de confirmación' : ''),
          'success',
        );
        if (userEmail) {
          await sendEmail(
            userEmail,
            'Turno Eliminado',
            `Su turno para el ${formattedDate} a las ${formattedTime} ha sido eliminado. Descripción: ${description}.`,
          );
        }
      } catch (error) {
        console.error('Error al eliminar el turno:', error);
        Swal.fire('Error', 'Hubo un problema al eliminar el turno', 'error');
      }
    }
  };

  return (
    <div className={styles.turno}>
      <div className={styles.info}>
        <p>
          <strong>Cliente:</strong> {user}
        </p>
        <p>
          <strong>Fecha:</strong> {formattedDate}
        </p>
        <p>
          <strong>Servicio:</strong> {description}
        </p>
        <p>
          <strong>Hora:</strong> {formattedTime}
        </p>
        <div className={styles.botones}>
          <BotonesTurno
            status={status}
            onCancelar={handleCancelar}
            onEliminar={handleEliminar}
          />
        </div>
        <p className={`${styles.status} ${styles[status.toLowerCase()]}`}>
          {status.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

TurnoItem.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onEliminar: PropTypes.func.isRequired,
  onCancelar: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
};

export default TurnoItem;
