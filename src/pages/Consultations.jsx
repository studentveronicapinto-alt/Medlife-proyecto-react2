import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../styles/consultations.css';

export default function Consultations() {
  const [searchParams] = useSearchParams();
  const specialtyParam = searchParams.get('especialidad') || '';

  const [formData, setFormData] = useState({
    nombre: '',
    tipoDocumento: '',
    telefono: '',
    numeroDocumento: '',
    departamento: '',
    ciudad: '',
    direccion: '',
    correo: '',
    contrasena: '',
    especialidad: specialtyParam,
    modalidad: 'videollamada',
    motivo: ''
  });

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [legalModal, setLegalModal] = useState(null); // 'terms' | 'habeas' | null
  const [submitted, setSubmitted] = useState(false);

  const docTypes = [
    'Cédula Ciudadanía',
    'Cédula Extranjería',
    'Tarj. Identidad',
    'Pasaporte',
    'Registro Civil'
  ];

  const departamentos = [
    'Amazonas',
    'Antioquia',
    'Arauca',
    'Atlántico',
    'Bolívar',
    'Boyacá',
    'Caldas',
    'Cundinamarca',
    'Valle del Cauca'
  ];

  const ciudades = [
    'Bogotá D.C.',
    'Medellín',
    'Cali',
    'Barranquilla',
    'Cartagena',
    'Tunja',
    'Manizales',
    'Leticia',
    'Arauca'
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const selectOption = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    setActiveDropdown(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      {/* Header */}
      <header className="consultas-header">
        <Link to="/" className="consultas-logo-block">
          <div className="consultas-brand-name">
            MEDLIFE<span>VIRTUAL HEALTHCARE</span>
          </div>
        </Link>
        <div className="consultas-header-text">
          ENVÍANOS LOS SIGUIENTES DATOS PARA ASIGNARTE EL SERVICIO MÉDICO QUE REQUIERAS.
          <br />
          PODEMOS ATENDERTE POR VIDEOLLAMADAS, CHAT 24/7 O EN CONSULTORIOS VIRTUALES
        </div>
      </header>

      {/* Title bar */}
      <div className="consultas-title-bar">
        <Link to="/" className="consultas-back-arrow">
          ‹
        </Link>
        REALIZA TU CONSULTA {specialtyParam ? `· ${specialtyParam.toUpperCase()}` : ''}
      </div>

      <div className="consultas-form-wrap">
        {submitted ? (
          <div className="consultas-form-card" style={{ textAlign: 'center', padding: '50px 30px' }}>
            <h2 style={{ color: '#1f7fc4', marginBottom: '16px', fontSize: '24px' }}>
              ¡Solicitud Recibida con Éxito!
            </h2>
            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
              Gracias, <strong>{formData.nombre}</strong>. Hemos registrado tus datos para tu consulta{' '}
              {formData.especialidad ? `de ${formData.especialidad}` : 'médica'}. Nuestro equipo se
              comunicará al teléfono <strong>{formData.telefono}</strong> o correo{' '}
              <strong>{formData.correo}</strong> para coordinar tu atención.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/servicios" className="consultas-submit-btn" style={{ textDecoration: 'none', padding: '14px 28px' }}>
                Ver Servicios
              </Link>
              <Link to="/chat-medico" className="consultas-submit-btn" style={{ textDecoration: 'none', padding: '14px 28px', background: '#1f7fc4' }}>
                Abrir Chat Médico
              </Link>
            </div>
          </div>
        ) : (
          <form className="consultas-form-card" onSubmit={handleSubmit}>
            <div className="consultas-field">
              <input
                type="text"
                placeholder="INGRESE SU NOMBRE COMPLETO (NOMBRES Y APELLIDOS)"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
              />
            </div>

            <div className="consultas-row">
              <div className="consultas-field" style={{ flex: 1 }}>
                <div
                  className={`select-display ${activeDropdown === 'tipoDoc' ? 'open' : ''}`}
                  onClick={() => toggleDropdown('tipoDoc')}
                  tabIndex={0}
                >
                  <span>{formData.tipoDocumento || 'INGRESE SU TIPO DE DOCUMENTO'}</span>
                  <span className="arrow">&#9660;</span>
                </div>
                <div className={`dropdown-panel ${activeDropdown === 'tipoDoc' ? 'show' : ''}`}>
                  {docTypes.map((doc) => (
                    <div
                      key={doc}
                      className={formData.tipoDocumento === doc ? 'active' : ''}
                      onClick={() => selectOption('tipoDocumento', doc)}
                    >
                      {doc}
                    </div>
                  ))}
                </div>
              </div>

              <div className="consultas-field" style={{ flex: 1 }}>
                <input
                  type="tel"
                  placeholder="INGRESE SU NÚMERO DE TELÉFONO"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="consultas-field">
              <input
                type="text"
                placeholder="INGRESE SU NÚMERO DE DOCUMENTO"
                value={formData.numeroDocumento}
                onChange={(e) => setFormData({ ...formData, numeroDocumento: e.target.value })}
                required
              />
            </div>

            <div className="consultas-row">
              <div className="consultas-field" style={{ flex: 1 }}>
                <div
                  className={`select-display ${activeDropdown === 'depto' ? 'open' : ''}`}
                  onClick={() => toggleDropdown('depto')}
                  tabIndex={0}
                >
                  <span>{formData.departamento || 'SELECCIONE DEPARTAMENTO'}</span>
                  <span className="arrow">&#9660;</span>
                </div>
                <div className={`dropdown-panel ${activeDropdown === 'depto' ? 'show' : ''}`}>
                  {departamentos.map((dep) => (
                    <div
                      key={dep}
                      className={formData.departamento === dep ? 'active' : ''}
                      onClick={() => selectOption('departamento', dep)}
                    >
                      {dep}
                    </div>
                  ))}
                </div>
              </div>

              <div className="consultas-field" style={{ flex: 1 }}>
                <div
                  className={`select-display ${activeDropdown === 'ciudad' ? 'open' : ''}`}
                  onClick={() => toggleDropdown('ciudad')}
                  tabIndex={0}
                >
                  <span>{formData.ciudad || 'SELECCIONE CIUDAD'}</span>
                  <span className="arrow">&#9660;</span>
                </div>
                <div className={`dropdown-panel ${activeDropdown === 'ciudad' ? 'show' : ''}`}>
                  {ciudades.map((c) => (
                    <div
                      key={c}
                      className={formData.ciudad === c ? 'active' : ''}
                      onClick={() => selectOption('ciudad', c)}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="consultas-field">
              <input
                type="text"
                placeholder="INGRESE SU DIRECCIÓN (BARRIO, NÚMERO, CÓDIGO POSTAL)"
                value={formData.direccion}
                onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                required
              />
            </div>

            <div className="consultas-row">
              <div className="consultas-field" style={{ flex: 1 }}>
                <input
                  type="email"
                  placeholder="INGRESE SU CORREO ELECTRÓNICO"
                  value={formData.correo}
                  onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                  required
                />
              </div>
              <div className="consultas-field" style={{ flex: 1 }}>
                <input
                  type="password"
                  placeholder="INGRESE UNA CONTRASEÑA"
                  value={formData.contrasena}
                  onChange={(e) => setFormData({ ...formData, contrasena: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="consultas-terms">
              Al enviar sus datos, está de acuerdo con la ley vigente{' '}
              <button type="button" onClick={() => setLegalModal('habeas')}>
                Habeas Data
              </button>{' '}
              y los{' '}
              <button type="button" onClick={() => setLegalModal('terms')}>
                términos y condiciones
              </button>{' '}
              que puede consultar.
            </div>

            <button type="submit" className="consultas-submit-btn">
              ENVIAR DATOS
            </button>
          </form>
        )}
      </div>

      {/* Modal Legal: Términos y Condiciones */}
      {legalModal === 'terms' && (
        <div className="legal-modal-overlay" onClick={() => setLegalModal(null)}>
          <div className="legal-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="legal-title">TÉRMINOS Y CONDICIONES</h2>
            <div className="legal-subtitle">MEDLIFE VIRTUAL HEALTHCARE</div>
            <p className="legal-intro">
              Bienvenido a Medlife. Al acceder y utilizar nuestra plataforma de telemedicina, usted
              acepta cumplir con los siguientes términos y condiciones de servicio:
            </p>
            <ul className="legal-list">
              <li>
                <strong>1. Naturaleza del servicio:</strong> Medlife brinda orientación médica,
                videoconsultas y gestión farmacéutica virtual. En casos de urgencia con riesgo vital,
                debe acudir inmediatamente a un centro de urgencias.
              </li>
              <li>
                <strong>2. Responsabilidad del usuario:</strong> El usuario se compromete a
                proporcionar información veraz y completa sobre sus antecedentes de salud.
              </li>
              <li>
                <strong>3. Confidencialidad y Secreto Médico:</strong> Toda la información médica
                suministrada está protegida bajo estándares estrictos de confidencialidad médica.
              </li>
              <li>
                <strong>4. Prescripciones:</strong> Las recetas expedidas en línea cumplen con la
                reglamentación vigente aplicable para medicamentos ambulatorios.
              </li>
            </ul>
            <button
              type="button"
              className="legal-accept"
              onClick={() => setLegalModal(null)}
            >
              ACEPTAR Y VOLVER
            </button>
          </div>
        </div>
      )}

      {/* Modal Legal: Habeas Data */}
      {legalModal === 'habeas' && (
        <div className="legal-modal-overlay" onClick={() => setLegalModal(null)}>
          <div className="legal-card" onClick={(e) => e.stopPropagation()}>
            <h2 className="legal-title">POLÍTICA DE HABEAS DATA</h2>
            <div className="legal-subtitle">TRATAMIENTO DE DATOS PERSONALES · MEDLIFE</div>
            <p className="legal-intro">
              En cumplimiento de la legislación de protección de datos personales, Medlife informa a
              sus usuarios los términos del tratamiento de su información:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Finalidad del tratamiento:</strong> Los datos recolectados se usarán
                exclusivamente para la prestación de servicios médicos, emisión de fórmulas, historias
                clínicas y entrega domiciliaria de farmacia.
              </li>
              <li>
                <strong>Datos sensibles:</strong> La información clínica recolectada es de carácter
                sensible y cuenta con medidas de seguridad de alto nivel criptográfico.
              </li>
              <li>
                <strong>Derechos del titular:</strong> Conocer, actualizar, rectificar o revocar la
                autorización de sus datos en cualquier momento escribiendo a info@medilifegroup.com.
              </li>
            </ul>
            <button
              type="button"
              className="legal-accept"
              onClick={() => setLegalModal(null)}
            >
              ACEPTAR Y VOLVER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
