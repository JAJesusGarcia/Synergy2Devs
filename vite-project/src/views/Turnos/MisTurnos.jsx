import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TurnoItem from '../../components/Turnos/TurnoItem';
import NoTurnos from '../../components/Turnos/NoTurnos';
import axios from 'axios';
import { setUserAppointments } from '../../store/userSlice';
import styles from './Turnos.module.css';

const MisTurnos = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userAppointments = useSelector((state) => state.user.userAppointments);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/appointments?userId=${user.id}`,
        )
        .then((res) => {
          dispatch(setUserAppointments(res.data));
        })
        .catch((error) => console.error('Error fetching appointments:', error));
    }
  }, [user, dispatch]);

  const cancelarTurno = async (id) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/appointments/cancel/${id}`,
      );

      // await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
      const nuevosTurnos = userAppointments.map((turno) =>
        turno.id === id ? { ...turno, status: 'Cancelado' } : turno,
      );
      dispatch(setUserAppointments(nuevosTurnos));
    } catch (error) {
      console.error('Error al cancelar el turno:', error);
    }
  };

  const eliminarTurno = async (id) => {
    const turno = userAppointments.find((t) => t.id === id);
    console.log(`Estado del turno antes de eliminar: ${turno.status}`);

    if (turno.status?.toLowerCase() === 'activo') {
      console.error('No se puede eliminar un turno activo');
      Swal.fire({
        title: 'No se puede eliminar el turno',
        text: 'No puedes eliminar un turno activo. Primero debes cancelarlo.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    try {
      // await axios.delete(`http://localhost:3000/appointments/${id}`);
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/appointments/${id}`,
      );

      const nuevosTurnos = userAppointments.filter((turno) => turno.id !== id);
      dispatch(setUserAppointments(nuevosTurnos));
      console.log(`Turno ${id} eliminado con éxito`);
    } catch (error) {
      console.error('Error al eliminar el turno:', error);
      console.log(`Error al eliminar el turno ${id}`);
    }
  };

  return (
    <div>
      <h1>Mis Turnos</h1>
      {userAppointments.length === 0 ? (
        <NoTurnos />
      ) : (
        userAppointments.map((turno) => (
          <TurnoItem
            key={turno.id}
            id={turno.id}
            time={turno.time}
            date={turno.date}
            description={turno.description}
            status={turno.status}
            user={turno.user.name}
            onEliminar={eliminarTurno}
            onCancelar={cancelarTurno}
            userEmail={turno.user.email} // Agregamos el email del usuario
          />
        ))
      )}
    </div>
  );
};

export default MisTurnos;
