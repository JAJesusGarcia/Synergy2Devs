import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FooterComponent from './components/Footer/FooterComponent';
import Home from './views/Home/Home';
import Turnos from './views/Turnos/Turnos';
import About from './views/About/About';
import Contactos from './views/Contactos/Contactos';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import NewTurnos from './views/Turnos/NewTurno';
import LluviaEstrellas from '@components/LluviaEstrellas/LluviaEstrellas';
import ErrorPage from './components/ErrorPage';
import ProtectedRoute from './components/ProtectedRoute';

import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/turnos"
          element={<ProtectedRoute element={<Turnos />} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/new-turno"
          element={<ProtectedRoute element={<NewTurnos />} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterComponent />
      <LluviaEstrellas />
    </div>
  );
}

export default App;
