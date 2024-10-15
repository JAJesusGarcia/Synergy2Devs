import styles from './Register.module.css';
import RegisterForm from '../../components/register/RegisterForm';

const Register = () => {
  return (
    <div className={styles['register-container']}>
      <h1>
        <strong>Synergy2Devs 🚀</strong>
      </h1>
      <div>
        <p>
          <strong>Por favor, completa este Formulario para registrarte</strong>
        </p>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
