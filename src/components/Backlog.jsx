import { useState } from 'react'

function Backlog() {
  const [view, setView] = useState('product')
  const [status, setStatus] = useState('Todos')

  const productBacklog = [
    {
      id: 'PB-01',
      title: 'Diseño de la interfaz principal',
      priority: 'Alta',
      status: 'Por hacer',
      description:
        'Diseñar la estructura visual y navegación principal de la plataforma.',
    },
    {
      id: 'PB-02',
      title: 'Sección de recursos web',
      priority: 'Alta',
      status: 'En progreso',
      description:
        'Crear una sección para consultar recursos de desarrollo web.',
    },
    {
      id: 'PB-03',
      title: 'Buscador de recursos',
      priority: 'Media',
      status: 'Completado',
      description:
        'Permitir al usuario buscar recursos mediante palabras clave.',
    },
    {
      id: 'PB-04',
      title: 'Información detallada de recursos',
      priority: 'Media',
      status: 'Completado',
      description:
        'Mostrar información adicional de cada tecnología seleccionada.',
    },
    {
      id: 'PB-05',
      title: 'Sección de objetivos de aprendizaje',
      priority: 'Alta',
      status: 'Completado',
      description:
        'Presentar objetivos de aprendizaje de HTML, CSS, JavaScript y React.',
    },
  ]

  const sprintBacklog = [
    {
      id: 'SB-01',
      title: 'Crear componentes React',
      priority: 'Alta',
      status: 'Completado',
      description:
        'Construir los componentes principales de la aplicación.',
    },
    {
      id: 'SB-02',
      title: 'Implementar buscador',
      priority: 'Alta',
      status: 'Completado',
      description:
        'Implementar búsqueda dinámica mediante React.',
    },
    {
      id: 'SB-03',
      title: 'Implementar filtros',
      priority: 'Media',
      status: 'Completado',
      description:
        'Agregar filtros para clasificar los recursos.',
    },
    {
      id: 'SB-04',
      title: 'Crear sección Scrum',
      priority: 'Alta',
      status: 'En progreso',
      description:
        'Integrar información de la metodología Scrum utilizada.',
    },
     {
      id: 'SB-05',
      title: 'Integrar objetivos de aprendizaje',
      priority: 'Alta',
      status: 'Completado',
      description:
        'Crear el componente LearningObjectives.jsx e integrarlo con el menú de navegación.',
    },
  ]

  const currentBacklog =
    view === 'product' ? productBacklog : sprintBacklog

  const filteredBacklog =
    status === 'Todos'
      ? currentBacklog
      : currentBacklog.filter((item) => item.status === status)

  return (
    <section id="backlog" className="section backlog-section">
      <div className="container">
        <div className="section-heading">
          <span>PLANIFICACIÓN</span>

          <h2>Backlog del proyecto</h2>

          <p>
            Organización de las funcionalidades y actividades
            mediante la metodología Scrum.
          </p>
        </div>

        <div className="backlog-controls">
          <div className="backlog-tabs">
            <button
              className={view === 'product' ? 'active' : ''}
              onClick={() => {
                setView('product')
                setStatus('Todos')
              }}
            >
              Product Backlog
            </button>

            <button
              className={view === 'sprint' ? 'active' : ''}
              onClick={() => {
                setView('sprint')
                setStatus('Todos')
              }}
            >
              Sprint Backlog
            </button>
          </div>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="Todos">Todos los estados</option>
            <option value="Por hacer">Por hacer</option>
            <option value="En progreso">En progreso</option>
            <option value="Completado">Completado</option>
          </select>
        </div>

        <div className="backlog-list">
          {filteredBacklog.map((item) => (
            <article className="backlog-item" key={item.id}>
              <div className="backlog-id">
                {item.id}
              </div>

              <div className="backlog-main">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="backlog-meta">
                  <span
                    className={`priority ${item.priority
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    Prioridad: {item.priority}
                  </span>

                  <span
                    className={`status ${item.status
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </article>
          ))}

          {filteredBacklog.length === 0 && (
            <p className="no-results">
              No hay elementos con este estado.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Backlog