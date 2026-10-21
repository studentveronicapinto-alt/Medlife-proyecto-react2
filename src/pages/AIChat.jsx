import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { buscarRespuestaPorDefecto, RESPUESTA_POR_DEFECTO } from '../data/aiResponses';
import '../styles/aiChat.css';

export default function AIChat() {
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [inputText, setInputText] = useState('');
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [showDocModal, setShowDocModal] = useState(false);
  const [activeTab, setActiveTab] = useState('historial'); // 'historial' | 'recomendaciones'

  const [messages, setMessages] = useState([
    { id: 1, from: 'user', text: 'HOLA DOCTORA, NO HE TENIDO MÁS FIEBRE DESDE AYER' },
    { id: 2, from: 'ia', text: '¡ME ALEGRO! RECUERDA SEGUIR LAS RECOMENDACIONES DE DESCANSO E HIDRATACIÓN.' },
    { id: 3, from: 'user', text: 'SÍ, PERFECTO, GRACIAS' }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userText = inputText.trim();

    const userMsg = {
      id: Date.now(),
      from: 'user',
      text: userText
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Look up in symptom & medical dictionary
    const answer = buscarRespuestaPorDefecto(userText) || RESPUESTA_POR_DEFECTO;

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: 'ia',
          text: answer
        }
      ]);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleTab = () => {
    setActiveTab((prev) => (prev === 'historial' ? 'recomendaciones' : 'historial'));
  };

  const renderIAIcon = (size = 20) => (
    <svg viewBox="0 0 40 40" width={size} height={size}>
      <g fill="#2aafe7">
        <path d="M20 3 L24 17 L20 20 L16 17 Z" />
        <path d="M20 37 L24 23 L20 20 L16 23 Z" />
        <path d="M3 20 L17 16 L20 20 L17 24 Z" />
        <path d="M37 20 L23 16 L20 20 L23 24 Z" />
      </g>
    </svg>
  );

  return (
    <div className="ai-chat-wrapper">
      <div className="ai-chat-app">
        {/* Topbar */}
        <div className="ai-topbar">
          <button
            type="button"
            className="ai-back-btn"
            onClick={() => navigate('/servicios')}
            title="Volver"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M15 5 L8 12 L15 19"
                fill="none"
                stroke="#222"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="ai-main-layout">
          {/* Panel Izquierdo: Términos y Condiciones */}
          <aside className={`terms-panel ${termsAccepted ? 'is-hidden' : ''}`}>
            <div className="ia-title-row">
              <span className="ia-icon-circle">{renderIAIcon(26)}</span>
              <span className="ia-title">CONSULTA CON IA</span>
            </div>

            <p className="terms-text">
              ESTA INTELIGENCIA ARTIFICIAL PROPORCIONA INFORMACIÓN MÉDICA CON FINES INFORMATIVOS
              Y EDUCATIVOS ÚNICAMENTE. NO REEMPLAZA EL DIAGNÓSTICO, TRATAMIENTO NI LA CONSULTA
              CON UN PROFESIONAL DE LA SALUD CALIFICADO.
              <br /><br />
              NO UTILICE ESTA HERRAMIENTA PARA EMERGENCIAS MÉDICAS NI PARA TOMAR DECISIONES MÉDICAS
              SIN LA EVALUACIÓN DE UN MÉDICO.
              <br /><br />
              EL USO DE ESTA PLATAFORMA ES BAJO RESPONSABILIDAD DEL USUARIO.
            </p>

            <button
              type="button"
              className="btn-aceptar"
              onClick={() => setTermsAccepted(true)}
            >
              ACEPTAR
            </button>
          </aside>

          {/* Panel Central: Chat */}
          <section className="ai-chat-panel">
            <header className="ai-chat-header">
              <span className="ia-icon-small">{renderIAIcon(22)}</span>
              <h2>SAND IA</h2>
            </header>

            <div className="chat-messages">
              {messages.map((m) => (
                <div key={m.id} className={`msg ${m.from === 'user' ? 'msg--user' : 'msg--ia'}`}>
                  {m.from === 'ia' && (
                    <span className="ia-avatar">{renderIAIcon(18)}</span>
                  )}
                  <p>{m.text}</p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Modal Documento Generado */}
            {showDocModal && (
              <div className="doc-overlay" onClick={() => setShowDocModal(false)}>
                <div className="doc-card" onClick={(e) => e.stopPropagation()}>
                  <span className="doc-ribbon">EJEMPLO</span>
                  <img src="/assets/doc-full.png" alt="Documento médico generado" />
                </div>
              </div>
            )}

            {/* Input + Menú de Adjuntos */}
            <div className="chat-input-row">
              <div className="plus-wrap">
                <button
                  type="button"
                  className="btn-plus"
                  onClick={() => setShowPlusMenu(!showPlusMenu)}
                  title="Adjuntar"
                >
                  +
                </button>

                {showPlusMenu && (
                  <div className="plus-menu">
                    <button type="button" onClick={() => setShowPlusMenu(false)}>
                      📷 CÁMARA
                    </button>
                    <button type="button" onClick={() => setShowPlusMenu(false)}>
                      📎 SUBIR ARCHIVOS
                    </button>
                    <button type="button" onClick={() => setShowPlusMenu(false)}>
                      🧩 COMPLEMENTOS
                    </button>
                  </div>
                )}
              </div>

              <input
                type="text"
                id="chatInput"
                placeholder="Escribe un mensaje o síntoma..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
              />

              <button
                type="button"
                className="btn-send"
                onClick={handleSend}
                title="Enviar mensaje"
              >
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M3 11 L21 3 L13 21 L11 13 Z" fill="#fff" />
                </svg>
              </button>
            </div>
          </section>

          {/* Panel Derecho: Ficha de Paciente */}
          <aside className="patient-panel">
            <div className="patient-header">
              <img
                src="/assets/patient-photo.png"
                className="patient-photo"
                alt="Santy Osorno"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="patient-info">
                <span className="ficha-label">FICHA DE PACIENTE</span>
                <span className="patient-name">SANTY OSORNO</span>
                <span className="patient-age">23 AÑOS</span>
              </div>
            </div>

            <button type="button" className="pill-btn" onClick={toggleTab}>
              {activeTab === 'historial' ? 'HISTORIAL' : 'RECOMENDACIONES'}
            </button>

            {activeTab === 'historial' ? (
              <ul className="side-list">
                <li>
                  <span className="dot"></span>
                  <div className="side-list-text">
                    <strong>Consulta general</strong>
                    <small>12 Oct 2026</small>
                  </div>
                </li>
                <li>
                  <span className="dot"></span>
                  <div className="side-list-text">
                    <strong>Fórmula médica</strong>
                    <small>Gastroenteritis leve</small>
                  </div>
                </li>
                <li>
                  <span className="dot"></span>
                  <div className="side-list-text">
                    <strong>Seguimiento IA</strong>
                    <small>Síntomas controlados</small>
                  </div>
                </li>
              </ul>
            ) : (
              <ul className="side-list">
                <li>
                  <span className="dot" style={{ background: '#2aafe7' }}></span>
                  <div className="side-list-text">
                    <strong>Hidratación</strong>
                    <small>Mínimo 2L agua/día</small>
                  </div>
                </li>
                <li>
                  <span className="dot" style={{ background: '#2aafe7' }}></span>
                  <div className="side-list-text">
                    <strong>Reposo</strong>
                    <small>Evitar esfuerzos</small>
                  </div>
                </li>
                <li>
                  <span className="dot" style={{ background: '#2aafe7' }}></span>
                  <div className="side-list-text">
                    <strong>Medicación</strong>
                    <small>Seguir fórmula médica</small>
                  </div>
                </li>
              </ul>
            )}

            <div className="archivos-title">ARCHIVOS GENERADOS</div>

            <button
              type="button"
              className="doc-thumb-btn"
              onClick={() => setShowDocModal(true)}
              title="Click para ver documento completo"
            >
              <img src="/assets/doc-thumb.png" alt="Documento médico" />
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
