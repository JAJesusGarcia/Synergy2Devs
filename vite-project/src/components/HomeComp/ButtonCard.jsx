import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ButtonCard.module.css';

const ButtonCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-turno');
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      👉🗓️
    </button>
  );
};

export default ButtonCard;
