const steps = [
  {
    id: 1,
    title: 'Prueba de Nivel',
    description: 'Test rápido, oral y escrito, totalmente gratuito, para saber tu punto de partida real.',
  },
  {
    id: 2,
    title: 'Eliges Formato',
    description: 'Grupo reducido, clases particulares o intensivo. Tú decides el ritmo y el horario que te encaja.',
  },
  {
    id: 3,
    title: 'Clases con Nativos',
    description: 'Conversación real desde el primer día. La gramática se trabaja, pero nunca sustituye a hablar.',
  },
  {
    id: 4,
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
                  <h4>
                    <span className="step-number">{step.id}</span> {step.title}
                  </h4>
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
