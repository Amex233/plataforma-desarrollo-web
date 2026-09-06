function Documentation() {
  const documentationItems = [
    {
      icon: '📋',
      title: 'Product Backlog',
      description:
        'Lista priorizada de funcionalidades y requisitos que conforman el producto.',
      target: '#backlog',
    },
    {
      icon: '📝',
      title: 'Fichas de Backlog',
      description:
        'Historias de usuario y requisitos utilizados para definir las funcionalidades.',
      target: '#backlog',
    },
    {
      icon: '📅',
      title: 'Calendarización de Sprints',
      description:
        'Organización temporal de los Sprints establecidos para el desarrollo.',
      target: '#sprints',
    },
    {
      icon: '🚀',
      title: 'Sprint Planning',
      description:
        'Planificación del trabajo que será realizado durante cada Sprint.',
      target: '#scrum',
    },
  ]

  return (
    <section id="documentacion" className="section documentation">
      <div className="container">
        <div className="section-heading documentation-heading">
          <span>PROYECTO</span>

          <h2>Documentación y metodología Scrum</h2>

          <p>
            Consulta los elementos utilizados para planificar,
            desarrollar y documentar la plataforma.
          </p>
        </div>

        <div className="documentation-grid">
          {documentationItems.map((item) => (
            <article
              className="documentation-card"
              key={item.title}
            >
              <div className="documentation-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <a href={item.target}>
                Consultar →
              </a>
            </article>
          ))}
        </div>

        <div className="project-evidence">
          <div>
            <span>ENTREGABLES</span>

            <h3>Evidencias del proyecto</h3>

            <p>
              El proyecto contempla el desarrollo de la aplicación
              en React, la planificación mediante Scrum, el control
              de versiones y la documentación del proceso.
            </p>
          </div>

          <div className="evidence-list">
            <div>
              <strong>✓</strong>
              <span>Aplicación desarrollada con React</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Product Backlog</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Sprint Backlog</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Calendarización de Sprints</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Documentación Scrum</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Control de versiones con Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documentation