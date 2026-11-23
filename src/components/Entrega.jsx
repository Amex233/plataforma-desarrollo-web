
function Entrega() {
  return (
    <>
      {/* ACTIVIDADES REALIZADAS */}
      <section id="actividades" className="section">
        <div className="container">
          <div className="section-heading">
            <span>TRABAJO REALIZADO</span>
            <h2>Actividades realizadas en el curso</h2>
            <p>
              Durante el desarrollo del proyecto se realizaron diferentes
              actividades relacionadas con el diseño, programación y
              documentación de una plataforma educativa.
            </p>
          </div>

          <div className="cards">
            <article className="card">
              <h3>Planeación del proyecto</h3>
              <p>
                Definición del propósito de la plataforma, organización de
                requisitos y elaboración del Product Backlog.
              </p>
            </article>

            <article className="card">
              <h3>Diseño y desarrollo web</h3>
              <p>
                Creación de la interfaz, estructura de navegación y
                componentes utilizando React, JavaScript y CSS.
              </p>
            </article>

            <article className="card">
              <h3>Metodología Scrum</h3>
              <p>
                Organización de actividades mediante Sprints, Backlog,
                planificación y seguimiento de avances.
              </p>
            </article>

            <article className="card">
              <h3>Pruebas y documentación</h3>
              <p>
                Revisión de funcionalidades, corrección de detalles,
                elaboración de reportes y publicación en GitHub.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SISTEMA IMPLEMENTADO */}
      <section id="sistema" className="section tools-section">
        <div className="container">
          <div className="section-heading">
            <span>PRODUCTO DESARROLLADO</span>
            <h2>Sistema implementado</h2>
            <p>
              Se desarrolló una plataforma educativa orientada a apoyar
              a estudiantes que cursan Desarrollo de Sistemas Web,
              proporcionando recursos y herramientas de aprendizaje.
            </p>
          </div>

          <div className="tools">
            <article className="tool">
              <strong>Interfaz de usuario</strong>
              <p>
                Diseño organizado y adaptable para facilitar la navegación
                entre las diferentes secciones.
              </p>
            </article>

            <article className="tool">
              <strong>Recursos educativos</strong>
              <p>
                Materiales de consulta sobre HTML, CSS, JavaScript y React.
              </p>
            </article>

            <article className="tool">
              <strong>Herramientas de aprendizaje</strong>
              <p>
                Buscador, filtros, objetivos de aprendizaje y preguntas
                frecuentes.
              </p>
            </article>

            <article className="tool">
              <strong>Gestión del proyecto</strong>
              <p>
                Secciones de Scrum, Product Backlog, Sprint Backlog y
                calendario de Sprints.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CÓDIGO FUENTE */}
      <section id="codigo" className="section">
        <div className="container">
          <div className="section-heading">
            <span>ARCHIVOS DEL PROYECTO</span>
            <h2>Código fuente comprimido</h2>
            <p>
              En este apartado se incorporará el archivo ZIP con el código
              fuente completo de la plataforma educativa para su descarga
              y revisión.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">ZIP</div>
            <h3>Proyecto Plataforma Web</h3>
            <p>
              Archivo comprimido que contendrá los componentes, estilos,
              archivos de configuración y demás elementos necesarios
              para ejecutar el proyecto.
            </p>
           <a
  href="/archivos/plataforma-desarrollo-web.zip"
  download="plataforma-desarrollo-web.zip"
  className="boton-descarga"
>
  Descargar código fuente (.ZIP)
</a>
<a
  href="https://github.com/Amex233/plataforma-desarrollo-web"
  target="_blank"
  rel="noopener noreferrer"
  className="boton-descarga"
>
  Ver proyecto en GitHub
</a>
          </div>
        </div>
      </section>

      {/* REPORTE DE MODIFICACIONES */}
      <section id="reporte" className="section tools-section">
        <div className="container">
          <div className="section-heading">
            <span>EVOLUCIÓN DEL PROYECTO</span>
            <h2>Reporte de las modificaciones realizadas</h2>
            <p>
              A lo largo del desarrollo se incorporaron mejoras para
              ampliar las funcionalidades y facilitar el uso de la
              plataforma.
            </p>
          </div>

          <div className="backlog-list">
            <article className="backlog-item">
              <div className="backlog-id">01</div>
              <div className="backlog-main">
                <h3>Organización de la interfaz</h3>
                <p>
                  Se desarrollaron y organizaron las secciones principales
                  de la plataforma educativa.
                </p>
              </div>
            </article>

            <article className="backlog-item">
              <div className="backlog-id">02</div>
              <div className="backlog-main">
                <h3>Mejoras en recursos educativos</h3>
                <p>
                  Se incorporaron buscador, filtros y visualización de
                  información detallada de los recursos.
                </p>
              </div>
            </article>

            <article className="backlog-item">
              <div className="backlog-id">03</div>
              <div className="backlog-main">
                <h3>Integración de Scrum y Backlog</h3>
                <p>
                  Se añadieron apartados para mostrar la organización
                  del trabajo y el seguimiento de los Sprints.
                </p>
              </div>
            </article>

            <article className="backlog-item">
              <div className="backlog-id">04</div>
              <div className="backlog-main">
                <h3>Preguntas frecuentes</h3>
                <p>
                  Se agregó una sección de preguntas frecuentes para
                  facilitar la consulta de información.
                </p>
              </div>
            </article>

            <article className="backlog-item">
              <div className="backlog-id">05</div>
              <div className="backlog-main">
                <h3>Menú de entrega</h3>
                <p>
                  Se incorporó un menú desplegable para acceder a las
                  actividades, el sistema, el código fuente y el reporte
                  de modificaciones.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Entrega
