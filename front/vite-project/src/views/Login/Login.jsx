import styles from './Login.module.css';
import LoginForm from '../../components/login/LoginForm';

const Login = () => {
  return (
    <div>
      <div className={styles['login-container']}>
        <h1>
          <strong>Synergy2Devs 🚀</strong>
        </h1>
        <p>
          <strong>Accede a tu cuenta y comienza a colaborar</strong>
        </p>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
