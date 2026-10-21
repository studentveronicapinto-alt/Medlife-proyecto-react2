import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/consultations.css';

export default function HabeasData() {
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
          POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS PERSONALES (HABEAS DATA)
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
        POLÍTICA DE HABEAS DATA
      </div>

      <div className="consultas-form-wrap" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="legal-card">
          <h2 className="legal-title">TRATAMIENTO DE DATOS PERSONALES</h2>
          <div className="legal-subtitle">LEY DE HABEAS DATA · MEDLIFE VIRTUAL HEALTHCARE</div>
          <p className="legal-intro">
            En estricto cumplimiento de la Ley 1581 de 2012 y normatividad vigente sobre protección de
            datos personales, Medlife pone a su disposición la política de tratamiento de información:
          </p>
          <ul className="legal-list">
            <li>
              <strong>1. Responsable del Tratamiento:</strong> Medlife Virtual Healthcare S.A.S., con canal
              de atención digital info@medilifegroup.com y línea de contacto +57 322 7048889.
            </li>
            <li>
              <strong>2. Tratamiento y Finalidad:</strong> La recolección de datos personales y sensibles
              (historia clínica, síntomas, recetas) se realizará exclusivamente con fines de prestación de
              servicios de salud, seguimiento terapéutico y despacho de farmacia.
            </li>
            <li>
              <strong>3. Derechos del Titular:</strong> Usted tiene derecho a conocer, actualizar y rectificar
              sus datos personales, así como solicitar la supresión de los mismos cuando corresponda según la ley.
            </li>
            <li>
              <strong>4. Seguridad de la Información:</strong> Implementamos medidas técnicas, humanas y
              administrativas para otorgar seguridad a los registros, evitando su adulteración, pérdida, consulta o
              uso no autorizado.
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
