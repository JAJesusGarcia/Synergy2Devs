import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      clearInterval(countdownInterval);
      navigate('/login');
    }, 5000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div className={styles['error-page']}>
      <h1 className={styles['error-title']}>Page Not Found</h1>
      <p className={styles['error-message']}>
        Redirecting to Login in {countdown} seconds...
      </p>
      No se preocupe, estaremos trabajando en esta sección.
    </div>
  );
}

export default ErrorPage;
