const steps = [
  {
    id: 1,
    icon: '🔍',
    title: 'Prueba de Nivel',
    description: 'Test rápido, oral y escrito, totalmente gratuito, para saber tu punto de partida real.',
  },
  {
    id: 2,
    icon: '🎯',
    title: 'Eliges Formato',
    description: 'Grupo reducido, clases particulares o intensivo. Tú decides el ritmo y el horario que te encaja.',
  },
  {
    id: 3,
    icon: '💬',
    title: 'Clases con Nativos',
    description: 'Conversación real desde el primer día. La gramática se trabaja, pero nunca sustituye a hablar.',
  },
  {
    id: 4,
    icon: '📈',
    title: 'Seguimiento',
    description: 'Evaluamos tu progreso cada trimestre y te preparamos para el examen oficial si lo necesitas.',
  },
]

export default function Process() {
  return (
    <section id="metodo" className="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Cómo Funciona</span>
          <h2>Nuestro Método</h2>
          <p>Un camino claro desde tu primera clase hasta el certificado</p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
              <div key={step.id} className="process-step reveal">
                <div className="step-content">
                  <span className="step-icon" aria-hidden="true">{step.icon}</span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="step-arrow" aria-hidden="true">
                  →
                </div>}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
