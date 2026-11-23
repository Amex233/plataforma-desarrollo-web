
import { useState } from 'react'

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

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

        <div className="menu-entrega">
          <button
            className="boton-menu-entrega"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            ☰ Menú de entrega
          </button>

          {menuAbierto && (
            <div className="menu-entrega-lista">
              <a href="#actividades" onClick={() => setMenuAbierto(false)}>
                Actividades realizadas en el curso
              </a>

              <a href="#sistema" onClick={() => setMenuAbierto(false)}>
                Sistema implementado
              </a>

              <a href="#codigo" onClick={() => setMenuAbierto(false)}>
                Código fuente (comprimido)
              </a>

              <a href="#reporte" onClick={() => setMenuAbierto(false)}>
                Reporte de modificaciones
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
