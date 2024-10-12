import React, { useState } from 'react';
import styles from './ContactoForm.module.css';

const ContactoForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log('Email:', email);
    console.log('Message:', message);
    // Reiniciar los campos después del envío
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles['container-contactos']}>
      <div className={styles['form-container']}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="email">Company Email</label>
            <input
              required
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea
              required
              cols="50"
              rows="10"
              id="textarea"
              name="textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className={styles['form-submit-btn']}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactoForm;
