import styles from './Footer.module.css';

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {currentYear} Jesús Garcia - WebPT20B - Synergy2Devs - Copyright
        © Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default FooterComponent;
