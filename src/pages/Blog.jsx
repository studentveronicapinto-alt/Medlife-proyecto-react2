import React from 'react';
import Layout from '../components/Layout';
import '../styles/blog.css';

export default function Blog() {
  return (
    <Layout>
      <main className="blog-section">
        <div className="content-panel">
          <div className="post-meta">
            <span className="meta-item">
              <svg viewBox="0 0 24 24" className="meta-icon">
                <circle cx="12" cy="12" r="9" fill="none" stroke="#414042" strokeWidth="1.6" />
                <path
                  d="M12 7 V12 L16 14"
                  fill="none"
                  stroke="#414042"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              PUBLICADO HACE 2 AÑOS
            </span>
            <span className="meta-item">
              <svg viewBox="0 0 24 24" className="meta-icon">
                <path
                  d="M12 20 C5 15, 3 10, 7 6.5 C9.5 4.3, 12 5.5, 12 8 C12 5.5, 14.5 4.3, 17 6.5 C21 10, 19 15, 12 20 Z"
                  fill="none"
                  stroke="#414042"
                  strokeWidth="1.6"
                />
                <path d="M10 8 h4 M12 6 v4" stroke="#414042" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              SALUD
            </span>
          </div>

          <div className="blog-grid">
            <article className="post-body">
              <div className="post-head">
                <div className="post-image">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" rx="16" fill="#EAF6FA" />
                    <path
                      d="M100 155 C65 130, 45 105, 55 78 C63 55, 90 58, 100 78 C110 58, 137 55, 145 78 C155 105, 135 130, 100 155 Z"
                      fill="none"
                      stroke="#1C86C4"
                      strokeWidth="6"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M70 100 C66 92, 74 84, 82 88 C86 90, 86 96, 82 100 L74 108"
                      fill="none"
                      stroke="#4FB8D6"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="post-intro">
                  <h1>¿Qué es la lepra?</h1>
                  <p>
                    La lepra, también llamada enfermedad de Hansen, es una enfermedad infecciosa
                    crónica causada por una bacteria llamada Mycobacterium leprae. Esta bacteria
                    afecta principalmente la piel, los nervios periféricos, los ojos y algunas partes
                    de las vías respiratorias.
                  </p>
                </div>
              </div>

              <p>
                La lepra se transmite de una persona a otra principalmente a través de gotas que salen
                por la nariz o la boca cuando una persona enferma y no tratada tose o estornuda. Sin
                embargo, no es una enfermedad muy contagiosa, y normalmente se necesita contacto
                cercano y prolongado con una persona infectada para que ocurra el contagio.
              </p>

              <p>
                Uno de los síntomas más comunes de la lepra es la aparición de manchas claras o rojizas
                en la piel que pueden perder sensibilidad. También pueden aparecer entumecimiento en
                manos y pies, debilidad muscular, lesiones en la piel y daño en los nervios. Si la
                enfermedad no se trata a tiempo, puede causar daños permanentes en los nervios,
                deformaciones en manos o pies y problemas en los ojos.
              </p>

              <p>
                La lepra tiene cura. Actualmente se trata con una combinación de antibióticos
                especiales durante varios meses, tratamiento conocido como terapia multidrogas,
                recomendado por la Organización Mundial de la Salud. Con el tratamiento adecuado, la
                persona deja de contagiar rápidamente y puede recuperarse.
              </p>
            </article>

            <aside className="sidebar">
              <h3>Categorías</h3>
              <ul className="category-list">
                <li>
                  <a href="#bienestar">Bienestar</a>
                </li>
                <li>
                  <a href="#corporativo">Corporativo</a>
                </li>
                <li>
                  <a href="#salud">Salud</a>
                </li>
              </ul>

              <h3>Entradas recientes</h3>
              <ul className="recent-list">
                <li>
                  <a href="#lepra">¿Qué es la lepra?</a>
                </li>
                <li>
                  <a href="#asperger">Día internacional del síndrome de Asperger</a>
                </li>
                <li>
                  <a href="#glaucoma">Día mundial del glaucoma</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </main>
    </Layout>
  );
}
