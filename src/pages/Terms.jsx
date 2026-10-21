import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/consultations.css';

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <header className="consultas-header">
        <Link to="/" className="consultas-logo-block">
          <div className="consultas-brand-name">
            MEDLIFE<span>VIRTUAL HEALTHCARE</span>
          </div>
        </Link>
        <div className="consultas-header-text">
          TÉRMINOS Y CONDICIONES DE USO DE LA PLATAFORMA MEDLIFE
        </div>
      </header>

      <div className="consultas-title-bar">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="consultas-back-arrow"
          style={{ background: 'none', border: 'none' }}
        >
          ‹
        </button>
        TÉRMINOS Y CONDICIONES
      </div>

      <div className="consultas-form-wrap" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="legal-card">
          <h2 className="legal-title">TÉRMINOS Y CONDICIONES</h2>
          <div className="legal-subtitle">MEDLIFE VIRTUAL HEALTHCARE</div>
          <p className="legal-intro">
            Bienvenido a Medlife. Al acceder y utilizar nuestros servicios digitales de salud y telemedicina,
            usted acepta quedar vinculado por los siguientes términos y condiciones:
          </p>
          <ul className="legal-list">
            <li>
              <strong>1. Objeto y Alcance:</strong> Medlife es una plataforma de servicios médicos virtuales,
              orientación en salud preventiva y compra de medicamentos. La plataforma no sustituye los servicios
              de urgencias médicas presenciales de alta complejidad.
            </li>
            <li>
              <strong>2. Requisitos de Usuario:</strong> Para acceder a consultas con médicos especialistas,
              el usuario debe suministrar datos verídicos y exactos relativos a su identidad y estado de salud.
            </li>
            <li>
              <strong>3. Fórmulas y Medicamentos:</strong> La prescripción emitida por los profesionales adscritos
              se ajusta a la normativa sanitaria vigente para telemedicina y recetas digitales.
            </li>
            <li>
              <strong>4. Propiedad Intelectual:</strong> Todos los contenidos, marcas, interfaces y código son
              propiedad exclusiva de Medlife Virtual Healthcare.
            </li>
          </ul>

          <button
            type="button"
            className="legal-accept"
            onClick={() => navigate(-1)}
          >
            ACEPTAR Y VOLVER
          </button>
        </div>
      </div>
    </div>
  );
}
