import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    navigate('/');
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

          <h2>Inicia sesión</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="correo">Correo electrónico</label>
              <input
                type="email"
                id="correo"
                name="correo"
                placeholder="ejemplo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="contrasena">Contraseña</label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="auth-submit-btn">
              Acceso
            </button>
          </form>

          <p className="auth-form-footer">
            <Link to="/recuperar-contrasena">¿Olvidaste tu contraseña?</Link>
          </p>
          <p className="auth-form-footer" style={{ marginTop: '10px' }}>
            ¿No tienes cuenta? <Link to="/registro">Regístrate</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
