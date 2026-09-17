export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        <div className="hero-text reveal">
          <span className="eyebrow">Escuela de Idiomas</span>
          <h1>Habla otro idioma con confianza, no solo de memoria.</h1>
          <p className="hero-description">
            Clases de inglés, francés y alemán para todos los niveles, con grupos reducidos
            y profesorado nativo. Se habla desde la primera clase.
          </p>
          <div className="hero-cta">
            <a href="#contacto" className="btn btn-primary">
              Reserva tu clase de prueba
            </a>
            <a href="#cursos" className="btn btn-outline">
              Ver cursos
            </a>
          </div>
        </div>
        <div className="hero-stats reveal">
          <div className="stat">
            <span className="stat-number">12+</span>
            <p>Años Enseñando</p>
          </div>
          <div className="stat">
            <span className="stat-number">300+</span>
            <p>Alumnos Activos</p>
          </div>
          <div className="stat">
            <span className="stat-number">92%</span>
            <p>Aprobados en Certificación</p>
          </div>
        </div>
      </div>
    </section>
  )
}
