import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo">
        <img src="/assets/img/inicio/logo.png" alt="Medlife" className="logo-icon" />
        <div className="logo-text">
          <span className="logo-title">MEDLIFE</span>
          <span className="logo-subtitle">VIRTUAL HEALTHCARE</span>
        </div>
      </Link>
      <nav className="main-nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          INICIO
        </NavLink>
        <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'active' : '')}>
          NOSOTROS
        </NavLink>
        <NavLink to="/especialidades" className={({ isActive }) => (isActive ? 'active' : '')}>
          ESPECIALIDADES
        </NavLink>
        <NavLink to="/servicios" className={({ isActive }) => (isActive ? 'active' : '')}>
          SERVICIOS
        </NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
          BLOG
        </NavLink>
        <NavLink to="/farmacia" className={({ isActive }) => (isActive ? 'active' : '')}>
          FARMACIA
        </NavLink>
        <NavLink to="/pagos" className={({ isActive }) => (isActive ? 'active' : '')}>
          PAGOS
        </NavLink>
        <Link to="/acceso" className="nav-login-btn">
          ACCESO
        </Link>
      </nav>
    </header>
  );
}
