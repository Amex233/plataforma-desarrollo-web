function Sprints() {
  const sprints = [
    {
      id: 'Sprint 1',
      start: '01/09/2026',
      end: '05/09/2026',
      goal: 'Diseño y configuración inicial del proyecto.',
      status: 'Completado',
    },
   {
   id: 'Sprint 2',
   start: '06/09/2026',
   end: '12/09/2026',
   goal: 'Desarrollo de componentes, recursos web y sección de objetivos de aprendizaje.',
    status: 'Completado',
    },
    {
      id: 'Sprint 3',
      start: '13/09/2026',
      end: '19/09/2026',
      goal: 'Integración de funcionalidades y pruebas.',
      status: 'Pendiente',
    },
    {
      id: 'Sprint 4',
      start: '20/09/2026',
      end: '26/09/2026',
      goal: 'Correcciones, documentación y entrega final.',
      status: 'Pendiente',
    },
  ]

  return (
    <section id="sprints" className="section sprints-section">
      <div className="container">
        <div className="section-heading">
          <span>PLANIFICACIÓN</span>

          <h2>Calendarización de Sprints</h2>

          <p>
            Organización temporal de las actividades del proyecto
            mediante Sprints.
          </p>
        </div>

        <div className="sprint-timeline">
          {sprints.map((sprint, index) => (
            <article className="sprint-item" key={sprint.id}>
              <div className="sprint-marker">
                {index + 1}
              </div>

              <div className="sprint-card">
                <div className="sprint-header">
                  <h3>{sprint.id}</h3>

                  <span
                    className={`sprint-status ${sprint.status
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    {sprint.status}
                  </span>
                </div>

                <div className="sprint-dates">
                  <span>
                    <strong>Inicio:</strong> {sprint.start}
                  </span>

                  <span>
                    <strong>Fin:</strong> {sprint.end}
                  </span>
                </div>

                <p>{sprint.goal}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sprints