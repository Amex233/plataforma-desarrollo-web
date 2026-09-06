function Scrum() {
  const scrumItems = [
    {
      number: '01',
      title: 'Product Backlog',
      description:
        'Lista priorizada de requisitos, funcionalidades e historias de usuario que forman parte del producto.',
    },
    {
      number: '02',
      title: 'Sprint Backlog',
      description:
        'Conjunto de actividades e historias seleccionadas para ser desarrolladas durante un Sprint.',
    },
    {
      number: '03',
      title: 'Historias de Usuario',
      description:
        'Representan las necesidades de los usuarios y permiten definir las funcionalidades del sistema.',
    },
    {
      number: '04',
      title: 'Sprint Planning',
      description:
        'Proceso de planificación donde se determina el trabajo que será realizado durante cada Sprint.',
    },
  ]

  return (
    <section id="scrum" className="section scrum-section">
      <div className="container">
        <div className="section-heading">
          <span>METODOLOGÍA</span>

          <h2>Gestión del proyecto con Scrum</h2>

          <p>
            El desarrollo de la plataforma se organiza mediante
            Scrum, permitiendo planificar, desarrollar y revisar
            progresivamente las funcionalidades del producto.
          </p>
        </div>

        <div className="scrum-grid">
          {scrumItems.map((item) => (
            <article className="scrum-card" key={item.number}>
              <span className="scrum-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button className="scrum-button">
                Ver información →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Scrum