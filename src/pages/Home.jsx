import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/home.css';

export default function Home() {
  return (
    <Layout>
      <section className="inicio-hero">
        <div className="hero-badge" aria-hidden="true">
          <img src="/assets/img/inicio/logo_blanco.png" alt="" className="badge-logo" />
        </div>

        <div className="hero-content">
          <h1>Atención médica inmediata, sin salir de casa.</h1>
          <p>
            Transformamos la atención médica para que accedas a consultas y medicamentos sin
            complicaciones.
          </p>
          <Link to="/consultas" className="btn-pill btn-consulta">
            Realiza tu consulta
          </Link>
        </div>
      </section>
    </Layout>
  );
}
