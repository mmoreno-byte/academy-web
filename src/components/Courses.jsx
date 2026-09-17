const courses = [
  {
    id: 'ingles',
    title: 'Inglés',
    description:
      'De cero a fluidez profesional. Grupos generales y cursos de Business English para el entorno de trabajo.',
    formats: ['Grupos reducidos (máx. 8)', 'Clases particulares 1 a 1', 'Preparación Cambridge (First, Advanced)', 'Business English'],
  },
  {
    id: 'frances',
    title: 'Francés',
    description:
      'Iniciación y perfeccionamiento con enfoque comunicativo, pensado para viajar, estudiar o trabajar en francés.',
    formats: ['Grupos reducidos (máx. 8)', 'Clases particulares 1 a 1', 'Preparación DELF / DALF', 'Conversación e inmersión'],
  },
  {
    id: 'aleman',
    title: 'Alemán',
    description:
      'Desde A1 hasta niveles avanzados, con especial atención a la gramática y la práctica oral desde el primer día.',
    formats: ['Grupos reducidos (máx. 8)', 'Clases particulares 1 a 1', 'Preparación Goethe-Zertifikat', 'Alemán para el trabajo'],
  },
]

function CourseCard({ course }) {
  return (
    <div className="practice-card card reveal">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="practice-areas">
        <p className="areas-label">Formatos disponibles:</p>
        <ul>
          {course.formats.map((format) => (
            <li key={format}>• {format}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Courses() {
  return (
    <section id="cursos" className="practices">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Cursos</span>
          <h2>Tres idiomas, un mismo método.</h2>
          <p>Elige el idioma y nosotros adaptamos el formato a tu nivel y tu horario</p>
        </div>

        <div className="practices-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
