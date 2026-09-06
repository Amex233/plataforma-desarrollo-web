function Tools() {
  const tools = [
    {
      name: 'VS Code',
      description:
        'Editor utilizado para desarrollar y administrar el proyecto.',
    },
    {
      name: 'Git',
      description:
        'Sistema de control de versiones utilizado para administrar los cambios.',
    },
    {
      name: 'GitHub',
      description:
        'Plataforma utilizada para alojar y compartir el código del proyecto.',
    },
    {
      name: 'Vite',
      description:
        'Herramienta utilizada para ejecutar y construir la aplicación React.',
    },
  ]

  return (
    <section id="herramientas" className="section tools-section">
      <div className="container">
        <div className="section-heading">
          <span>DESARROLLO</span>

          <h2>Herramientas</h2>

          <p>
            Tecnologías y herramientas utilizadas durante el desarrollo
            de la plataforma.
          </p>
        </div>

        <div className="tools">
          {tools.map((tool) => (
            <div className="tool" key={tool.name}>
              <strong>{tool.name}</strong>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools