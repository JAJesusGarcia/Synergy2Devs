import React from 'react';
import { useSelector } from 'react-redux';
import styles from './HomeComp.module.css';
import texts from '../../helpers/texts';
import ButtonCard from './ButtonCard';

const HomeComp = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className={styles['container-home']}>
      {texts.map((text, index) => (
        <div
          key={index}
          className={`${styles['form-container']} ${styles['card']}`}
        >
          <div className={styles['card-inner']}>
            <div className={styles['card-front']}>
              <strong>{text.front}</strong>
            </div>
            <div className={styles['card-back']}>
              {text.back}
              <div className={styles['button-container']}>
                {user && <ButtonCard />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeComp;
