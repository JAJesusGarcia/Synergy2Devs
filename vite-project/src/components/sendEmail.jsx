// import { useState } from 'react';
// import axios from 'axios';

// const SendEmail = () => {
//   const [emailSent, setEmailSent] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSendEmail = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/emails/send', {
//         to: 'jesusjagarcia98@gmail.com',
//         subject: 'Test email',
//         text: 'Este email se envió desde React',
//       });

//       if (response.data.success) {
//         setEmailSent(true);
//         setError(null);
//       }
//     } catch (err) {
//       console.error('Error al enviar el email:', err);
//       setError('Hubo un error al enviar el email');
//       setEmailSent(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleSendEmail}>Enviar email</button>
//       {emailSent && <p>Email enviado satisfactoriamente</p>}
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default SendEmail;
