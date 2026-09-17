const courses = [
  {
    id: 'ingles',
    flag: '🇬🇧',
    title: 'Inglés',
    tagline: 'De cero a fluidez profesional.',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    formats: ['Grupo reducido', '1 a 1', 'Cambridge', 'Business'],
  },
  {
    id: 'frances',
    flag: '🇫🇷',
    title: 'Francés',
    tagline: 'Para viajar, estudiar o trabajar en francés.',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1'],
    formats: ['Grupo reducido', '1 a 1', 'DELF / DALF', 'Inmersión'],
  },
  {
    id: 'aleman',
    flag: '🇩🇪',
    title: 'Alemán',
    tagline: 'Gramática con práctica oral desde el primer día.',
    levels: ['A1', 'A2', 'B1', 'B2', 'C1'],
    formats: ['Grupo reducido', '1 a 1', 'Goethe-Zertifikat', 'Trabajo'],
  },
]

function CourseCard({ course }) {
  return (
    <div className="course-card reveal">
      <div className="course-flag">{course.flag}</div>
      <h3>{course.title}</h3>
      <p className="course-tagline">{course.tagline}</p>

      <div className="course-levels">
        {course.levels.map((level) => (
          <span key={level} className="level-chip">{level}</span>
        ))}
      </div>

      <div className="course-formats">
        {course.formats.map((format) => (
          <span key={format} className="format-pill">{format}</span>
        ))}
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
