import { useState } from 'react';
import styles from './TurnoNuevo.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUserAppointment } from '../../store/userSlice';
import TimeSelector from './TimeSelector';
import Swal from 'sweetalert2';
import axios from 'axios';
import { sendEmail } from '../../helpers/emailHelper';

const TurnoNuevo = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    description: '',
    userId: user?.id || null,
  });
  const [errors, setErrors] = useState({
    date: '',
    time: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'date') {
      handleDateValidation(value);
    } else if (name === 'time') {
      handleTimeValidation(value);
    }
  };

  const handleDateValidation = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();
    const day = selectedDate.getDay();

    if (day === 5 || day === 6) {
      setAppointmentData((prevData) => ({
        ...prevData,
        date: '',
      }));
      Swal.fire({
        title: '¡Atención!',
        text: 'Recuerdes que los turnos solo pueden ser programados de Lunes a Viernes.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
      });
    } else if (selectedDate < currentDate) {
      setAppointmentData((prevData) => ({
        ...prevData,
        date: '',
      }));
      Swal.fire({
        title: '¡Atención!',
        text: 'Los turnos solo pueden ser programados para fechas futuras.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
      });
    } else {
      setErrors((prev) => ({ ...prev, date: '' }));
    }
  };

  const handleTimeValidation = (time) => {
    if (!time) {
      setErrors((prev) => ({
        ...prev,
        time: 'Por favor, selecciona una hora',
      }));
      return;
    }

    const [hours, minutes] = time.split(':');
    const selectedDateTime = new Date(appointmentData.date);
    selectedDateTime.setHours(parseInt(hours), parseInt(minutes));
    const currentDateTime = new Date();

    if (selectedDateTime <= currentDateTime) {
      setErrors((prev) => ({
        ...prev,
        time: 'La hora debe ser posterior a la hora actual.',
      }));
    } else {
      setErrors((prev) => ({ ...prev, time: '' }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user) {
      Swal.fire({
        title: '¡Atención!',
        text: 'Por favor, inicia sesión para crear una cita.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
      });
      return;
    }

    if (errors.date || errors.time) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, corrige los errores antes de enviar.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/appointments`,
        appointmentData,
      );
      dispatch(addUserAppointment(response.data));
      setAppointmentData({
        date: '',
        time: '',
        description: '',
        userId: user?.id || null,
      });
      Swal.fire({
        title: '¡Éxito!',
        text: 'Su cita se ha creado correctamente y se ha enviado un correo de confirmación.',
        icon: 'success',
        confirmButtonText: 'Genial',
      });

      // Enviar un correo electrónico de confirmación
      await sendEmail(
        user.email,
        'Confirmación de turno',
        `Su turno se ha creado exitosamente para el ${appointmentData.date} a las ${appointmentData.time}. Descripción: ${appointmentData.description}. Muchas gracias por elegirnos.`,
      );
    } catch (error) {
      console.error('Error al agregar el turno:', error);
      Swal.fire({
        title: 'Error',
        text: `Error al agregar el turno. Por favor, intentelo nuevamente. Detalle: ${error.message}`,
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputBlock}>
        <label className={styles.label} htmlFor="date">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={appointmentData.date}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
        {/* {errors.date && <p className={styles.error}>{errors.date}</p>} */}
      </div>
      <div className={styles.inputBlock}>
        <label className={styles.label} htmlFor="time">
          Time:
        </label>
        <TimeSelector
          id="time"
          name="time"
          value={appointmentData.time}
          onChange={handleInputChange}
          required
          className={styles.input}
        />
        {/* {errors.time && <p className={styles.error}>{errors.time}</p>} */}
      </div>
      <div className={styles.inputBlock}>
        <label className={styles.label} htmlFor="description">
          Description:
        </label>
        <select
          id="description"
          name="description"
          value={appointmentData.description}
          onChange={handleInputChange}
          required
          className={styles.select}
        >
          <option value="" disabled>
            Select a description
          </option>
          <option value="Desarrollo de Sitios Web">
            Desarrollo de Sitios Web
          </option>
          <option value="Desarrollo de Aplicaciones Móviles">
            Desarrollo de Aplicaciones Móviles
          </option>
          <option value="Desarrollo de Software a Medida">
            Desarrollo de Software a Medida
          </option>
          <option value="Desarrollo de API y Microservicios">
            Desarrollo de API y Microservicios
          </option>
          <option value="Desarrollo de Aplicaciones en la Nube">
            Desarrollo de Aplicaciones en la Nube
          </option>
          <option value="Desarrollo de Blockchain">
            Desarrollo de Blockchain
          </option>
          <option value="Consultoría Tecnológica">
            Consultoría Tecnológica
          </option>
          <option value="Servicios de DevOps y CI/CD">
            Servicios de DevOps y CI/CD
          </option>
          <option value="Diseño UX/UI">Diseño UX/UI</option>
          <option value="Mantenimiento y Soporte">
            Mantenimiento y Soporte
          </option>
          <option value="Desarrollo de Inteligencia Artificial y Machine Learning">
            Desarrollo de Inteligencia Artificial y Machine Learning
          </option>
          <option value="Desarrollo de Aplicaciones Web">
            Desarrollo de Aplicaciones Web
          </option>
        </select>
      </div>
      <button type="submit" className={styles.button}>
        Create Appointment
      </button>
    </form>
  );
};

export default TurnoNuevo;
