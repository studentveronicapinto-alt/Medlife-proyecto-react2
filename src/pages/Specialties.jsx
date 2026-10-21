import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { specialtiesList } from '../data/specialtiesData';
import '../styles/specialties.css';

export default function Specialties() {
  return (
    <Layout>
      <main className="especialidades-section">
        <h1>Nuestras Especialidades</h1>
        <div className="specialties-grid">
          {specialtiesList.map((item) => (
            <Link key={item.id} to={`/especialidades/${item.id}`} className="specialty-card">
              <span className="specialty-label">{item.label}</span>
              <div className="specialty-visual">
                <img src={item.image} alt={item.label} />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
