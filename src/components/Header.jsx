function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-icon">&lt;/&gt;</span>
          <span>Plataforma Web</span>
        </div>

        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#objetivos">¿Qué aprenderás?</a>
          <a href="#recursos">Recursos</a>
          <a href="#herramientas">Herramientas</a>
          <a href="#scrum">Scrum</a>
          <a href="#faq">Preguntas frecuentes</a>
          <a href="#backlog">Backlog</a>
          <a href="#sprints">Sprints</a>
          <a href="#documentacion">Documentación</a>
        </nav>
      </div>
    </header>
  )
}

export default Header