import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    usuario: '',
    contrasena: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful registration
    navigate('/iniciar-sesion');
  };

  return (
    <div className="auth-page">
      <header className="auth-topbar">
        <Link to="/acceso" className="auth-back-link" aria-label="Volver">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <Link to="/acceso" className="auth-brand">
          <span className="auth-brand-logo">
            <img src="/assets/img/iniciar sesion/imagen.png" alt="Logo de MedLife" />
          </span>
          <span className="auth-brand-name">
            <strong>MEDLIFE</strong>
            <span>VIRTUAL HEALTHCARE</span>
          </span>
        </Link>
      </header>

      <section className="auth-banner">
        <div className="auth-banner-media">
          <img
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1600&q=80"
            alt="Equipo médico"
          />
        </div>
      </section>

      <section className="auth-lower">
        <div className="auth-card">
          <div className="auth-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="10" width="16" height="10" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
          </div>

          <h2>Regístrate</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="ejemplo@correo.com"
                value={formData.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="usuario">Usuario</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Nombre de usuario"
                value={formData.usuario}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="contrasena">Contraseña</label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                placeholder="Crea una contraseña segura"
                value={formData.contrasena}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="auth-submit-btn">
              Crear cuenta
            </button>
          </form>

          <p className="auth-form-footer">
            ¿Ya tienes una cuenta? <Link to="/iniciar-sesion">Inicia sesión</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
