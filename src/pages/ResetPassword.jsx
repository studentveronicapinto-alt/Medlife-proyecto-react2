import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    // Simulate update
    navigate('/iniciar-sesion');
  };

  return (
    <div className="auth-page">
      <header className="auth-topbar">
        <Link to="/recuperar-contrasena" className="auth-back-link" aria-label="Volver">
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

          <h2>Nueva contraseña</h2>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="contrasena">Nueva contraseña</label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                placeholder="Ingresa tu nueva contraseña"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="verificar">Verificar contraseña</label>
              <input
                type="password"
                id="verificar"
                name="verificar"
                placeholder="Repite tu nueva contraseña"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError('');
                }}
                required
              />
            </div>

            {error && <p style={{ color: '#e74c3c', fontSize: '13px', fontWeight: 'bold' }}>{error}</p>}

            <button type="submit" className="auth-submit-btn">
              Guardar y acceder
            </button>
          </form>

          <p className="auth-form-footer">
            <Link to="/iniciar-sesion">Volver a inicio de sesión</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
