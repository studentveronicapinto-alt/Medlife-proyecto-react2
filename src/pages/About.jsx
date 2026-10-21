import React from 'react';
import Layout from '../components/Layout';
import ContactFooter from '../components/ContactFooter';
import '../styles/about.css';

export default function About() {
  return (
    <Layout>
      <section className="nosotros-hero">
        <div className="nosotros-content">
          <h1>¡ Conoce más acerca de nosotros !</h1>
          <p>
            Nuestra app combina lo mejor de la medicina con el poder de la inteligencia
            artificial para hacer tu vida más fácil. Te ofrecemos consultas médicas rápidas
            y seguras, acceso a especialistas, orientación inmediata con IA y la posibilidad
            de adquirir productos farmacéuticos sin complicaciones. Todo en un solo lugar,
            pensado para tu salud y bienestar.
          </p>
        </div>
      </section>
      <ContactFooter />
    </Layout>
  );
}
