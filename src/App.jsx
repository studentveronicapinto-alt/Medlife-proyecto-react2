import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Specialties from './pages/Specialties';
import SpecialtyDetail from './pages/SpecialtyDetail';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Pharmacy from './pages/Pharmacy';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Consultations from './pages/Consultations';
import DoctorChat from './pages/DoctorChat';
import AIChat from './pages/AIChat';
import Access from './pages/Access';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Terms from './pages/Terms';
import HabeasData from './pages/HabeasData';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/inicio.html" element={<Navigate to="/" replace />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/nosotros.html" element={<Navigate to="/nosotros" replace />} />
          <Route path="/especialidades" element={<Specialties />} />
          <Route path="/especialidades.html" element={<Navigate to="/especialidades" replace />} />
          <Route path="/especialidades/:id" element={<SpecialtyDetail />} />

          {/* Specialty subpage redirects for backwards compatibility */}
          <Route path="/cardiologia.html" element={<Navigate to="/especialidades/cardiologia" replace />} />
          <Route path="/enfermeria.html" element={<Navigate to="/especialidades/enfermeria" replace />} />
          <Route path="/medicina_general.html" element={<Navigate to="/especialidades/medicina_general" replace />} />
          <Route path="/nutricion.html" element={<Navigate to="/especialidades/nutricion" replace />} />
          <Route path="/pediatria.html" element={<Navigate to="/especialidades/pediatria" replace />} />
          <Route path="/psicologia.html" element={<Navigate to="/especialidades/psicologia" replace />} />
          <Route path="/psiquiatria.html" element={<Navigate to="/especialidades/psiquiatria" replace />} />
          <Route path="/terapia_fisica.html" element={<Navigate to="/especialidades/terapia_fisica" replace />} />

          {/* Services & Blogs */}
          <Route path="/servicios" element={<Services />} />
          <Route path="/servicios.html" element={<Navigate to="/servicios" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog.html" element={<Navigate to="/blog" replace />} />

          {/* Pharmacy, Cart & Checkout */}
          <Route path="/farmacia" element={<Pharmacy />} />
          <Route path="/farmacia.html" element={<Navigate to="/farmacia" replace />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/carrito.html" element={<Navigate to="/carrito" replace />} />
          <Route path="/pagos" element={<Checkout />} />
          <Route path="/pagos.html" element={<Navigate to="/pagos" replace />} />

          {/* Consultations & Chats */}
          <Route path="/consultas" element={<Consultations />} />
          <Route path="/consultas.html" element={<Navigate to="/consultas" replace />} />
          <Route path="/chat-medico" element={<DoctorChat />} />
          <Route path="/chatmedico" element={<Navigate to="/chat-medico" replace />} />
          <Route path="/chatmedico.html" element={<Navigate to="/chat-medico" replace />} />
          <Route path="/chat-ia" element={<AIChat />} />
          <Route path="/chat_ia.html" element={<Navigate to="/chat-ia" replace />} />
          <Route path="/ia.html" element={<Navigate to="/chat-ia" replace />} />
          <Route path="/ia" element={<Navigate to="/chat-ia" replace />} />

          {/* Authentication Pages */}
          <Route path="/acceso" element={<Access />} />
          <Route path="/acceso.html" element={<Navigate to="/acceso" replace />} />
          <Route path="/iniciar-sesion" element={<Login />} />
          <Route path="/iniciar_sesion.html" element={<Navigate to="/iniciar-sesion" replace />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/registro.html" element={<Navigate to="/registro" replace />} />
          <Route path="/recuperar-contrasena" element={<ForgotPassword />} />
          <Route path="/recuperar_contraseña.html" element={<Navigate to="/recuperar-contrasena" replace />} />
          <Route path="/nueva-contrasena" element={<ResetPassword />} />
          <Route path="/nueva_contraseña.html" element={<Navigate to="/nueva-contrasena" replace />} />

          {/* Legal Pages */}
          <Route path="/terminos" element={<Terms />} />
          <Route path="/terminos.html" element={<Navigate to="/terminos" replace />} />
          <Route path="/habeasdata" element={<HabeasData />} />
          <Route path="/habeasdata.html" element={<Navigate to="/habeasdata" replace />} />

          {/* Default fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
