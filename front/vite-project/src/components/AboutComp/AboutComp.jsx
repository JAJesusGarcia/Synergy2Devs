import React from 'react';
import Tecnologias from './Tecnologias';
import styles from './AboutComp.module.css';

const AboutComp = () => {
  return (
    <div className={styles.aboutContainer}>
      <p>
        Bienvenido a nuestra aplicación. Somos un equipo dedicado a ofrecer las
        mejores soluciones tecnológicas. Nuestra misión es proporcionar
        herramientas eficaces y eficientes que faciliten el trabajo diario de
        nuestros usuarios.
      </p>

      <hr />
      <br />
      <h2>Nuestra Visión</h2>
      <p>
        Aspiramos a ser líderes en el desarrollo de software innovador y de alta
        calidad. Nos esforzamos por mantenernos a la vanguardia de la tecnología
        y proporcionar a nuestros clientes soluciones que superen sus
        expectativas.
      </p>
      <hr />
      <br />
      <h2>Nuestro Equipo</h2>
      <p>
        Nuestro equipo está compuesto por desarrolladores, diseñadores y
        expertos en tecnología comprometidos con la excelencia. Trabajamos
        juntos para asegurarnos de que cada proyecto que emprendemos sea un
        éxito rotundo.
      </p>
      <hr />
      <br />
      <br />
      <br />
      <h2>Tecnologías que Utilizamos</h2>
      <Tecnologias />
    </div>
  );
};

export default AboutComp;
