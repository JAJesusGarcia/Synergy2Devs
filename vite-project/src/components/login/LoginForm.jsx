import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { validateLogin } from '../../helpers/validateLogin';
import styles from './LoginForm.module.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    credentialsId: {
      username: '',
      password: '',
    },
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({ username: false, password: false });
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      credentialsId: {
        ...prevState.credentialsId,
        [name]: value,
      },
    }));

    if (touched[name]) {
      const validationErrors = validateLogin({
        ...loginData,
        credentialsId: {
          ...loginData.credentialsId,
          [name]: value,
        },
      });
      setErrors(validationErrors);
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
    const validationErrors = validateLogin(loginData);
    setErrors(validationErrors);
  };

  const isFormValid =
    Object.keys(errors).length === 0 &&
    Object.values(loginData.credentialsId).every((value) => value);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    setTouched({ username: true, password: true });
    const formErrors = validateLogin(loginData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      setServerError('');
      try {
        console.log('Datos enviados:', loginData.credentialsId); // Verifica los datos enviados
        const response = await axios.post(
          'http://localhost:3000/users/login',
          loginData.credentialsId,
        );
        console.log('Respuesta del servidor:', response.data);
        dispatch(setUser(response.data.user));
        sessionStorage.setItem('welcomeMessageShown', 'true');

        // Mostrar el mensaje de bienvenida
        Swal.fire({
          title: `¡Bienvenido, ${response.data.user.name}!`,
          text: 'Has iniciado sesión correctamente',
          icon: 'success',
          confirmButtonText: 'Gracias',
        }).then(() => {
          // Navegar a Home después de que el usuario presione el botón
          navigate('/home');
        });
      } catch (error) {
        console.error(
          'Error en el login:',
          error.response ? error.response.data : error.message,
        );
        if (error.response && error.response.status === 500) {
          setServerError(
            'Se produjo un error en el servidor. Por favor, intenta de nuevo más tarde.',
          );
        } else if (error.response && error.response.status === 401) {
          setServerError('Nombre de usuario o contraseña incorrectos.');
        } else {
          setServerError(
            'Ocurrió un error al intentar iniciar sesión. Por favor, intenta de nuevo.',
          );
        }
      } finally {
        setIsLoading(false);
      }
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
              id="username"
              value={loginData.credentialsId.username}
              name="username"
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            />
            <label className={styles.label} htmlFor="username">
              Username
            </label>
            {touched.username && errors.username && (
              <p className={styles.error}>{errors.username}</p>
            )}
          </div>
          <div className={styles.inputBlock}>
            <input
              className={styles.input}
              type="password"
              id="password"
              value={loginData.credentialsId.password}
              name="password"
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
            />
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            {touched.password && errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>
          <div className={styles.inputBlock}>
            <div className={styles['options-container']}>
              <span className={styles.forgot}>
                <Link
                  to="https://img.desmotivaciones.es/201204/zzz_27.jpg"
                  className={styles.a}
                >
                  Forgot Password?
                </Link>
              </span>
              <span className={styles.forgot}>
                <Link to="/register" className={styles.a}>
                  Sign up
                </Link>
              </span>
            </div>
            <button
              className={styles.button}
              type="submit"
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? 'Logging in...' : 'Submit'}
            </button>
          </div>
        </form>
        {serverError && <p className={styles.error}>{serverError}</p>}
      </div>
      <div className={styles.right}>
        <div className={styles.img}>
          <img src="/form.svg" alt="login-illustrator" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
