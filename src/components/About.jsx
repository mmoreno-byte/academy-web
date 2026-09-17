export default function About() {
  return (
    <section id="sobre-nosotros" className="about">
      <div className="container about-content">
        <div className="about-text reveal">
          <span className="eyebrow">Quién Enseña</span>
          <h2>Aprender un idioma no debería ser aburrido.</h2>
          <p>
            Soy Marta, fundé Academia Lingua hace 12 años después de dar clases particulares
            de inglés en mi salón durante dos. Me cansé de ver alumnos que llevaban años
            "estudiando" un idioma y seguían sin atreverse a pedir un café en él.
          </p>
          <p>
            Por eso aquí se habla desde la primera clase. La gramática se trabaja, claro,
            pero como apoyo, nunca como punto de partida. Los grupos son reducidos a
            propósito: con más de 8 personas ya no puedo garantizar que todo el mundo hable
            en cada clase, y eso no lo negocio.
          </p>
          <h3 style={{ marginTop: '2rem' }}>Nuestros Valores</h3>
          <ul className="values-list">
            <li><strong>Conversación primero:</strong> se habla desde el primer día, no en el nivel avanzado</li>
            <li><strong>Grupos reducidos:</strong> máximo 8 alumnos por clase</li>
            <li><strong>Profesorado nativo:</strong> certificado y con experiencia docente real</li>
            <li><strong>Horarios flexibles:</strong> mañana, tarde y sábados</li>
          </ul>

          <p className="about-quote">
            Si buscas una academia para tu hijo de 8 años o un curso puramente gramatical
            sin hablar, no somos la opción adecuada — te lo digo yo misma para que no
            pierdas el tiempo.
          </p>
          <p className="about-signature">— Marta Calvo, fundadora de Academia Lingua</p>
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
