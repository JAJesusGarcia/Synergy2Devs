import React, { useEffect, useRef } from 'react';
import styles from './LluviaEstrellas.module.css';

const LluviaEstrellas = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    const numberOfStars = 200;
    const stars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = styles.star;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      background.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach((star) => background.removeChild(star));
    };
  }, []);

  return <div ref={backgroundRef} className={styles.starryBackground}></div>;
};

export default LluviaEstrellas;
