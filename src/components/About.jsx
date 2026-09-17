export default function About() {
  return (
    <section id="sobre-nosotros" className="about">
      <div className="container about-content">
        <div className="about-text reveal">
          <span className="eyebrow">Quiénes Somos</span>
          <h2>Aprender un idioma no debería ser aburrido.</h2>
          <p>
            Somos una academia de idiomas con más de 12 años formando alumnos en inglés,
            francés y alemán. Nació de la idea de que las clases tradicionales, centradas
            solo en gramática y exámenes, dejan a la gente sin poder mantener una
            conversación real.
          </p>
          <p>
            Por eso nuestros grupos son reducidos, nuestro profesorado es nativo o
            bilingüe certificado, y desde la primera clase se habla el idioma que estás
            aprendiendo. Cero vergüenza, cero prisa.
          </p>
          <h3 style={{ marginTop: '2rem' }}>Nuestros Valores</h3>
          <ul className="values-list">
            <li><strong>Conversación primero:</strong> se habla desde el primer día, no en el nivel avanzado</li>
            <li><strong>Grupos reducidos:</strong> máximo 8 alumnos por clase</li>
            <li><strong>Profesorado nativo:</strong> certificado y con experiencia docente real</li>
            <li><strong>Horarios flexibles:</strong> mañana, tarde y sábados</li>
          </ul>
        </div>

        <div className="about-highlights reveal">
          <div className="highlight-box">
            <h3>Metodología</h3>
            <p>
              Enfoque comunicativo: se practica hablando, no memorizando listas de
              verbos. La gramática se trabaja como apoyo, nunca como punto de partida.
            </p>
          </div>
          <div className="highlight-box">
            <h3>Horarios Flexibles</h3>
            <p>
              Grupos de mañana, tarde y sábado. Si faltas a una clase, puedes recuperarla
              en otro grupo del mismo nivel sin coste adicional.
            </p>
          </div>
          <div className="highlight-box">
            <h3>Resultados Probados</h3>
            <p>
              92% de aprobados en certificaciones oficiales (Cambridge, DELF, Goethe-
              Zertifikat) entre los alumnos que se presentan tras nuestros cursos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
