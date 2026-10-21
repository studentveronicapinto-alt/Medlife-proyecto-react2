import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { specialtiesDetails } from '../data/specialtiesData';
import '../styles/specialtyDetail.css';

export default function SpecialtyDetail() {
  const { id } = useParams();
  const specialty = specialtiesDetails[id] || specialtiesDetails['cardiologia'];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa' }}>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <section className="detail-view">
          <Link to="/especialidades" className="btn-back">
            <i className="fa-solid fa-arrow-left"></i> Volver a Especialidades
          </Link>

          <h2 className="detail-title">{specialty.title}</h2>

          <div className="detail-banner">
            <img src={specialty.img} alt={specialty.title} loading="lazy" />
          </div>

          <div className="detail-info-card">
            {specialty.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="beneficios-box">
            <div className="beneficios-title">Beneficios del tratamiento</div>
            <div className="beneficios-grid">
              {specialty.benefits.map((b, idx) => (
                <div key={idx} className="beneficio-item">
                  <div className="beneficio-icon">
                    <i className={b.icon}></i>
                  </div>
                  <div className="beneficio-text">
                    <h4>{b.title}</h4>
                    <p>{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-btn-container">
            <Link
              to={`/consultas?especialidad=${encodeURIComponent(specialty.title)}`}
              className="detail-btn-consulta"
            >
              Realiza tu consulta
            </Link>
          </div>
        </section>
      </main>

      {/* Footer de contacto */}
      <footer className="specialty-footer">
        <div className="footer-item">
          <i className="fa-solid fa-heart-circle-check"></i>
        </div>
        <div className="footer-item">
          <i className="fa-solid fa-phone"></i>
          <a href="tel:+573227048889">+57 322 7048889</a>
        </div>
        <div className="footer-item">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:info@medilifegroup.com">INFO@MEDILIFEGROUP.COM</a>
        </div>
      </footer>

      {/* Insignia flotante de asistente */}
      <Link to="/chat-ia" className="specialty-ai-badge" title="Asistente virtual">
        <i className="fa-solid fa-wand-magic-sparkles"></i>
        <span>IA+</span>
      </Link>
    </div>
  );
}
