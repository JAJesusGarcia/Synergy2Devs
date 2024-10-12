import { useEffect } from 'react';
import Swal from 'sweetalert2';
import TurnoNuevo from '../../components/Turnos/TurnoNuevo';

const NewTurnos = () => {
  useEffect(() => {
    Swal.fire({
      title: '¡Atención!',
      text: 'Recuerda que los turnos son de 8:00am a 5:00pm',
      icon: 'warning',
      confirmButtonText: 'Ok',
    });
  }, []);

  return (
    <div>
      <h1>Crear Nuevo Turno</h1>
      {<TurnoNuevo />}
    </div>
  );
};

export default NewTurnos;
