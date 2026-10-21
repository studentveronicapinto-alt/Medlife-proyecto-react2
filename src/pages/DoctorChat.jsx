import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/doctorChat.css';

export default function DoctorChat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, from: 'patient', text: 'HOLA DOCTORA, NO HE TENIDO MÁS FIEBRE DESDE AYER' },
    { id: 2, from: 'doctor', text: 'HOLA SANTY, ¿HAS TENIDO FIEBRE LOS ÚLTIMOS 3 DÍAS?' },
    { id: 3, from: 'patient', text: 'SÍ, DOCTORA, ME SIGO SINTIENDO ALGO DÉBIL' }
  ]);
  const [inputText, setInputText] = useState('');
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [showDocModal, setShowDocModal] = useState(false);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const userText = inputText.trim();
    const newMsg = {
      id: Date.now(),
      from: 'patient',
      text: userText
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputText('');

    // Simulate doctor reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: 'doctor',
          text: 'Comprendo. Continuemos con el tratamiento recetado y mantente bien hidratado. Si los síntomas persisten, avísame de inmediato.'
        }
      ]);
    }, 900);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="doctor-chat-app">
      {/* Topbar */}
      <div className="chat-topbar">
        <button
          type="button"
          className="back"
          onClick={() => navigate('/servicios')}
          title="Volver a Servicios"
        >
          ‹
        </button>
        <span className="title">CHAT MÉDICO</span>
      </div>

      <div className="chat-body">
        {/* Left Panel: Doctors */}
        <aside className="panel-left">
          <div className="panel-label">MÉDICOS ASIGNADOS</div>
          <div className="doctor-row">
            <div className="avatar-circle">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>
            <div>
              <div className="doctor-name">DRA. ISABEL DUQUE</div>
              <div className="doctor-spec">MEDICINA GENERAL</div>
            </div>
          </div>
          <div className="contact-row"><div className="contact-avatar"></div><div className="contact-line"></div></div>
          <div className="contact-row"><div className="contact-avatar"></div><div className="contact-line"></div></div>
          <div className="contact-row"><div className="contact-avatar"></div><div className="contact-line"></div></div>
          <div className="contact-row"><div className="contact-avatar"></div><div className="contact-line"></div></div>
        </aside>

        {/* Middle Panel: Conversation */}
        <section className="panel-mid">
          <div className="search-bar">
            <svg viewBox="0 0 24 24" fill="none" stroke="#1a7fb5" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input type="text" placeholder="Buscar en la conversación..." />
          </div>

          <div className="consult-label">CONSULTA GENERAL · EN LÍNEA</div>

          <div className="messages">
            {messages.map((m) => (
              <div key={m.id} className={`msg-row ${m.from === 'patient' ? 'mine' : ''}`}>
                {m.from === 'doctor' && (
                  <div className="avatar-circle">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                  </div>
                )}
                <div className={`bubble ${m.from === 'doctor' ? 'doctor' : 'patient'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="composer">
            <button
              type="button"
              className="plus-btn"
              onClick={() => setShowAttachMenu(!showAttachMenu)}
            >
              +
            </button>

            {showAttachMenu && (
              <div className="attach-menu show">
                <div onClick={() => setShowAttachMenu(false)}>📷 CÁMARA</div>
                <div onClick={() => setShowAttachMenu(false)}>📎 SUBIR ARCHIVO</div>
                <div onClick={() => setShowAttachMenu(false)}>🖼️ FOTOS</div>
                <div onClick={() => setShowAttachMenu(false)}>🧩 COMPLEMENTOS</div>
              </div>
            )}

            <input
              type="text"
              placeholder="Escribe un mensaje al médico..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button
              type="button"
              onClick={handleSendMessage}
              style={{
                background: 'var(--blue-main)',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                padding: '9px 18px',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              Enviar
            </button>
          </div>
        </section>

        {/* Right Panel: Patient Record */}
        <aside className="panel-right">
          <div className="patient-header">
            <div className="patient-photo">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
              </svg>
            </div>
            <div className="patient-info">
              <div className="ficha-label">FICHA DE PACIENTE</div>
              <div className="patient-name">SANTY OSORNO</div>
              <div className="patient-age">23 AÑOS</div>
            </div>
          </div>

          <div className="icon-row">
            <div className="icon-btn filled" title="Llamada"><i className="fa-solid fa-phone"></i></div>
            <div className="icon-btn" title="Videollamada"><i className="fa-solid fa-video"></i></div>
            <div className="icon-btn" title="Chat"><i className="fa-solid fa-comment-dots"></i></div>
          </div>

          <div>
            <div className="section-label">PRÓXIMA CONSULTA</div>
            <div className="next-box">
              <div className="date-chip">VIE<br />25</div>
              <div style={{ flex: 1 }}>
                <div className="bar-line" style={{ width: '90%' }}></div>
                <div className="bar-line" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

          <div>
            <div className="section-label">TRATAMIENTO</div>
            <div className="bar-line" style={{ width: '100%' }}></div>
            <div className="bar-line" style={{ width: '95%' }}></div>
            <div className="bar-line" style={{ width: '80%' }}></div>
          </div>

          <div>
            <div className="section-label">RECETA / ARCHIVOS</div>
            <div
              className="archivo-thumb"
              onClick={() => setShowDocModal(true)}
              title="Click para ver la fórmula médica"
            >
              <svg viewBox="0 0 200 120" width="100%">
                <rect width="200" height="120" fill="#fff" stroke="#1a7fb5" strokeWidth="2" rx="4" />
                <text x="10" y="20" fontSize="8" fill="#1a7fb5" fontWeight="bold">DR. ALEJANDRO CARAPIA</text>
                <text x="10" y="34" fontSize="6" fill="#333">MÉDICO GENERAL</text>
                <text x="10" y="55" fontSize="7" fill="#333" fontWeight="bold">Fórmula Médica · Activa</text>
                <text x="10" y="72" fontSize="6" fill="#555">1. Medicamento 1 · 1 cap / 24h</text>
                <text x="10" y="86" fontSize="6" fill="#555">2. Medicamento 2 · 1 cap / 8h</text>
                <text x="10" y="104" fontSize="6" fill="#1a7fb5" fontWeight="bold">👁️ Click para ampliar</text>
              </svg>
            </div>
          </div>
        </aside>
      </div>

      {/* Modal receta médica */}
      {showDocModal && (
        <div className="doc-modal-overlay" onClick={() => setShowDocModal(false)}>
          <div className="doc-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="doc-modal-close"
              onClick={() => setShowDocModal(false)}
            >
              ×
            </button>
            <svg viewBox="0 0 400 300" width="100%" style={{ background: '#eef6fb', borderRadius: '6px' }}>
              <rect x="4" y="4" width="392" height="292" fill="#fff" stroke="#1a7fb5" strokeWidth="2" />
              <text x="130" y="24" fontSize="11" fill="#0e4c7c" fontWeight="bold">DR: ALEJANDRO CARAPIA RODRÍGUEZ</text>
              <text x="130" y="38" fontSize="8" fill="#333">MÉDICO GENERAL</text>
              <text x="130" y="50" fontSize="8" fill="#333">CED. PROF. 58496</text>
              <text x="130" y="62" fontSize="8" fill="#333">TELÉFONO: 5596356</text>
              <text x="290" y="76" fontSize="7" fill="#333">FECHA: 12/10/26</text>
              <text x="290" y="88" fontSize="7" fill="#333">NOMBRE: SANTY OSORNO</text>
              <text x="290" y="100" fontSize="7" fill="#333">EDAD: 23 · SEXO: M</text>
              <line x1="20" y1="72" x2="115" y2="72" stroke="#1a7fb5" strokeWidth="1" />
              <circle cx="45" cy="40" r="26" fill="none" stroke="#1a7fb5" strokeWidth="2" />
              <path d="M35 40c3-8 7-8 10 0s7 8 10 0" stroke="#1a7fb5" strokeWidth="2" fill="none" />
              <text x="150" y="130" fontSize="12" fill="#222" fontWeight="bold">Gastroenteritis aguda</text>
              <text x="30" y="155" fontSize="9" fill="#333">1. Medicamento 1</text>
              <text x="40" y="168" fontSize="8" fill="#555">Tomar 1 cápsula cada 24 horas por 7 días.</text>
              <text x="30" y="188" fontSize="9" fill="#333">2. Medicamento 2</text>
              <text x="40" y="201" fontSize="8" fill="#555">Tomar 1 cápsula cada 8 horas por 5 días.</text>
              <text x="30" y="221" fontSize="9" fill="#333">3. Guardar reposo total por 4 días e hidratación oral constante.</text>
              <text x="270" y="235" fontSize="16" fontStyle="italic" fill="#0e4c7c">A. Carapia</text>
              <line x1="20" y1="250" x2="380" y2="250" stroke="#1a7fb5" strokeWidth="1" />
              <text x="110" y="264" fontSize="7" fill="#1a7fb5">CENTRO DE ESPECIALIDADES MÉDICAS MEDLIFE</text>
              <text x="75" y="276" fontSize="6" fill="#555">SEDE PRINCIPAL · CIUDAD · TELÉFONO 322-7048889 · MEDLIFE VIRTUAL HEALTHCARE</text>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
