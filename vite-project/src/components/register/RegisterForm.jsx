import { setUser } from '../../store/userSlice';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import { validate } from '../../helpers/validate';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    email: '',
    birthdate: '',
    nDni: '',
    numberPhone: '',
    credentialsId: {
      username: '',
      password: '',
    },
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedUserData = { ...userData };

    if (name === 'username' || name === 'password') {
      updatedUserData.credentialsId[name] = value;
    } else {
      updatedUserData[name] = value;
    }

    setUserData(updatedUserData);
    const errors = validate(updatedUserData);
    setErrors(errors);

    const isValid =
      Object.keys(errors).length === 0 &&
      Object.values(updatedUserData).every((value) => {
        if (typeof value === 'object') {
          return Object.values(value).every((nestedValue) => nestedValue);
        }
        return value;
      });

    setIsFormValid(isValid);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const formErrors = validate(userData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        console.log('Sending data:', userData);
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/users/register`,
          {
            ...userData,
            username: userData.credentialsId.username,
            password: userData.credentialsId.password,
          },
        );
        console.log('Datos enviados:', userData);
        console.log('Respuesta del servidor:', response.data);

        dispatch(setUser(response.data.user));

        Swal.fire({
          title: 'Registro exitoso',
          text: '¡Te has registrado correctamente!',
          icon: 'success',
        });

        navigate('/login');
      } catch (error) {
        console.error(
          'Error en el registro:',
          error.response ? error.response.data : error,
        );
        Swal.fire({
          title: 'Error',
          text:
            'Error al registrar usuario: ' +
            (error.response?.data?.message ||
              error.message ||
              'Ocurrió un error'),
          icon: 'error',
        });
      }
    } else {
      Swal.fire({
        title: 'Errores en el formulario',
        text: 'Por favor, corrija los errores antes de enviar.',
        icon: 'warning',
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <form onSubmit={handleOnSubmit} className={styles.form}>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="text"
              id="nombre"
              value={userData.name}
              name="name"
              onChange={handleInputChange}
              required
            />
            <label className={styles.label} htmlFor="nombre">
              Name
            </label>
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="text"
              id="apellido"
              value={userData.lastName}
              name="lastName"
              onChange={handleInputChange}
              required
            />
            <label className={styles.label} htmlFor="apellido">
              Last Name
            </label>
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="email"
              id="email"
              value={userData.email}
              name="email"
              onChange={handleInputChange}
              required
            />
            <label className={styles.label} htmlFor="email">
              Email
            </label>
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="date"
              id="fechaNacimiento"
              value={userData.birthdate}
              name="birthdate"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="number"
              id="dni"
              value={userData.nDni}
              name="nDni"
              onChange={handleInputChange}
              required
            />
            <label className={styles.label} htmlFor="dni">
              DNI
            </label>
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="text"
              id="numberPhone"
              value={userData.numberPhone}
              name="numberPhone"
              onChange={handleInputChange}
              required
            />
            <label className={styles.label} htmlFor="numberPhone">
              Phone Number
            </label>
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="text"
              id="username"
              value={userData.credentialsId.username}
              name="username"
              onChange={handleInputChange}
              required
            />
            <label className={styles.label} htmlFor="username">
              Username
            </label>
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="password"
              id="password"
              value={userData.credentialsId.password}
              name="password"
              onChange={handleInputChange}
              required
            />
            <label className={styles.label} htmlFor="password">
              Password
            </label>
          </div>
          <div className={styles.inputBlock}>
            <div className={styles['options-container']}>
              <span className={styles.forgot}>
                <Link to="/login" className={styles.a}>
                  Ya tengo una cuenta. Iniciar sesión
                </Link>
              </span>
            </div>
            <button
              className={styles.button}
              type="submit"
              disabled={!isFormValid}
            >
              Registrarse
            </button>
          </div>
        </form>
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        {errors.birthdate && <p style={{ color: 'red' }}>{errors.birthdate}</p>}
        {errors.nDni && <p style={{ color: 'red' }}>{errors.nDni}</p>}
        {errors.numberPhone && (
          <p style={{ color: 'red' }}>{errors.numberPhone}</p>
        )}
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <div className={styles.right}>
        <div className={styles.img}>
          <img src="/form.svg" alt="register-ilustrator" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
