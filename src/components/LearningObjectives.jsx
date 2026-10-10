
function LearningObjectives() {
  const objectives = [
    {
      title: 'Aprender HTML',
      description:
        'Comprender cómo se organiza el contenido de una página web.',
      icon: '🧱',
    },
    {
      title: 'Diseñar con CSS',
      description:
        'Mejorar los colores, la distribución y la apariencia de una página.',
      icon: '🎨',
    },
    {
      title: 'Programar con JavaScript y React',
      description:
        'Crear interfaces interactivas y desarrollar aplicaciones web.',
      icon: '💻',
    },
  ]

  return (
    <section id="objetivos"className="section">
      <div className="container">
        <div className="section-heading">
          <span className="badge">OBJETIVOS DE APRENDIZAJE</span>
          <h2>¿Qué aprenderás?</h2>
          <p>
            Desarrolla tus habilidades paso a paso con los
            fundamentos del desarrollo web.
          </p>
        </div>

        <div className="cards-grid">
          {objectives.map((objective) => (
            <article className="card" key={objective.title}>
              <div className="card-icon">{objective.icon}</div>
              <h3>{objective.title}</h3>
              <p>{objective.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningObjectives
