function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="badge">DESARROLLO WEB</span>

          <h1>
            Aprende, desarrolla y
            <span> crea en la web</span>
          </h1>

          <p>
            Plataforma de desarrollo web creada con React para
            aprender, consultar recursos y utilizar herramientas
            para el desarrollo de aplicaciones modernas.
          </p>

          <div className="hero-buttons">
            <a href="#recursos" className="button primary">
              Explorar recursos
            </a>

            <a href="#herramientas" className="button secondary">
              Ver herramientas
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <pre>
{`function DesarrolloWeb() {
  return (
    <React.App>
      Aprende();
      Desarrolla();
      Crea();
    </React.App>
  )
}`}
          </pre>
        </div>
      </div>
    </section>
  )
}

export default Hero