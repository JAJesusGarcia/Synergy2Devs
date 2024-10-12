import axios from 'axios';

const API_URL = 'http://localhost:3000/emails/send';

export const sendEmail = async (to, subject, text) => {
  try {
    const response = await axios.post(API_URL, {
      to,
      subject,
      text,
    });

    if (response.status !== 200) {
      throw new Error(`Respuesta inesperada del servidor: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error('Error al enviar el email:', error);

    if (error.response) {
      // El servidor respondió con un código de estado fuera del rango 2xx
      console.error('Datos de la respuesta:', error.response.data);
      console.error('Estado de la respuesta:', error.response.status);
      console.error('Cabeceras de la respuesta:', error.response.headers);
      throw new Error(
        `Error del servidor: ${error.response.status} - ${error.response.data.message || 'Sin mensaje de error'}`,
      );
    } else if (error.request) {
      // La solicitud se hizo pero no se recibió respuesta
      console.error('No se recibió respuesta del servidor');
      throw new Error('No se pudo contactar con el servidor de correo');
    } else {
      // Algo sucedió en la configuración de la solicitud que provocó un error
      console.error('Error de configuración de la solicitud:', error.message);
      throw new Error('Error al configurar la solicitud de correo');
    }
  }
};
