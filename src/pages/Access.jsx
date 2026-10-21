import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

export default function Access() {
  return (
    <div className="access-hero">
      {/* Topbar branding */}
      <header className="auth-topbar">
        <Link to="/" className="auth-brand" aria-label="Ir al inicio de MedLife">
          <span className="auth-brand-logo">
            <img src="/assets/img/iniciar sesion/imagen.png" alt="Logo de MedLife" />
          </span>
          <span className="auth-brand-name">
            <strong>MEDLIFE</strong>
            <span>VIRTUAL HEALTHCARE</span>
          </span>
        </Link>
        <Link to="/" className="auth-back-link" title="Volver al inicio">
          ✕
        </Link>
      </header>

      {/* Background Media */}
      <div className="access-media">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=80"
          alt="Atención médica virtual"
        />
      </div>

      {/* Content */}
      <div className="access-content">
        <div className="access-badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.5 8.5c0 4.5-8.5 10-8.5 10s-8.5-5.5-8.5-10a4.5 4.5 0 0 1 8.5-2 4.5 4.5 0 0 1 8.5 2Z" />
            <path d="M7 12h2l1.2-2.5L11.6 14l1.4-3h3" />
          </svg>
        </div>

        <h1>Atención médica inmediata,<br />sin salir de casa.</h1>

        <div className="access-actions">
          <Link to="/registro" className="btn-auth-primary">
            ¡Regístrate con nosotros!
          </Link>
          <Link to="/iniciar-sesion" className="btn-auth-outline">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
