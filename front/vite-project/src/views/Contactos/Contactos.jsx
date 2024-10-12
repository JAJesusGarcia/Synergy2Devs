import ContactoForm from '../../components/ContactosForm/ContactoForm';
import styles from './Contactos.module.css';

const Contactos = () => {
  return (
    <div>
      <h1 className={styles['title']}>
        <strong>Contacte con nosotros</strong>
      </h1>
      <p>
        Si te gustaria colaborar con nosotros o tienes alguna pregunta, puedes
        ponerteen contacto con nosotros
      </p>
      <ContactoForm />
    </div>
  );
};

export default Contactos;
