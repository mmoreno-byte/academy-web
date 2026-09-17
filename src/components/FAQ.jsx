import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: '¿Cómo sé qué nivel tengo?',
    answer:
      'Hacemos una prueba de nivel gratuita, oral y escrita, antes de tu primera clase. Con eso te ubicamos en el grupo que mejor se ajusta a ti, sin compromiso.',
  },
  {
    id: 2,
    question: '¿Cuánto dura cada curso?',
    answer:
      'Los cursos son trimestrales, con posibilidad de continuar de un trimestre a otro sin perder tu grupo ni tu horario. Los intensivos de verano duran de 4 a 6 semanas.',
  },
  {
    id: 3,
    question: '¿Puedo cambiar de horario si no me encaja?',
    answer:
      'Sí. Si tu grupo deja de funcionarte, te movemos a otro grupo del mismo nivel en cuanto haya plaza disponible, sin coste adicional.',
  },
  {
    id: 4,
    question: '¿Preparáis para exámenes oficiales?',
    answer:
      'Sí, tenemos cursos específicos de preparación para Cambridge (First, Advanced), DELF/DALF en francés y Goethe-Zertifikat en alemán.',
  },
  {
    id: 5,
    question: '¿Las clases son solo para adultos?',
    answer:
      'Nuestros grupos están pensados para adultos y jóvenes a partir de 16 años. No tenemos grupos infantiles por el momento.',
  },
  {
    id: 6,
    question: '¿Qué pasa si falto a una clase?',
    answer:
      'Puedes recuperarla asistiendo a otro grupo del mismo nivel esa misma semana, avisando con antelación por WhatsApp o email.',
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <button
        className={`faq-question ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{faq.question}</span>
        <span className="chevron" aria-hidden="true">▼</span>
      </button>
      {open && <div className="faq-answer">{faq.answer}</div>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Preguntas Frecuentes</span>
          <h2>Dudas Habituales</h2>
          <p>Respuestas claras a lo que más nos preguntan los alumnos nuevos</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
