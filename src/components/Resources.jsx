import { useState } from 'react'
import ResourceCard from './ResourceCard'

function Resources() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const [selectedResource, setSelectedResource] = useState(null)

const resources = [
  {
    title: 'HTML',
    description:
      'Aprende la estructura y organización de páginas web.',
    icon: 'HTML',
    category: 'HTML',
    content:
      'HTML (HyperText Markup Language) es el lenguaje de marcado utilizado para estructurar el contenido de las páginas web.',
    purpose:
      'Permite organizar títulos, párrafos, imágenes, enlaces, listas, formularios y otros elementos de una página.',
    example:
      '<h1>Mi primera página web</h1>',
    features: [
      'Define la estructura de una página web.',
      'Utiliza etiquetas para representar elementos.',
      'Permite integrar imágenes, enlaces y formularios.',
      'Es fundamental para cualquier aplicación web.',
    ],
  },
  {
    title: 'CSS',
    description:
      'Diseña interfaces modernas, atractivas y responsivas.',
    icon: 'CSS',
    category: 'CSS',
    content:
      'CSS (Cascading Style Sheets) es el lenguaje utilizado para definir la apariencia y presentación visual de una página web.',
    purpose:
      'Permite controlar colores, tipografías, tamaños, espacios, posiciones, diseños y adaptación a diferentes dispositivos.',
    example:
      'h1 { color: blue; }',
    features: [
      'Permite diseñar interfaces visuales.',
      'Facilita la creación de diseños responsivos.',
      'Permite reutilizar estilos.',
      'Se puede combinar con HTML y JavaScript.',
    ],
  },
  {
    title: 'JavaScript',
    description:
      'Agrega lógica e interactividad a tus aplicaciones web.',
    icon: 'JS',
    category: 'JavaScript',
    content:
      'JavaScript es un lenguaje de programación utilizado para agregar lógica, comportamiento e interactividad a las aplicaciones web.',
    purpose:
      'Permite responder a eventos, modificar contenido, realizar cálculos, consumir APIs y controlar el comportamiento de una aplicación.',
    example:
      'console.log("Hola mundo");',
    features: [
      'Permite crear aplicaciones interactivas.',
      'Maneja eventos del usuario.',
      'Permite trabajar con datos y APIs.',
      'Se ejecuta directamente en el navegador.',
    ],
  },
  {
    title: 'React',
    description:
      'Construye interfaces modernas mediante componentes.',
    icon: '⚛',
    category: 'React',
    content:
      'React es una biblioteca de JavaScript utilizada para construir interfaces de usuario mediante componentes reutilizables.',
    purpose:
      'Permite dividir una aplicación en componentes independientes y administrar dinámicamente la información mostrada en pantalla.',
    example:
      'function App() { return <h1>Hola React</h1> }',
    features: [
      'Utiliza componentes reutilizables.',
      'Permite crear interfaces dinámicas.',
      'Utiliza JSX para definir interfaces.',
      'Facilita el desarrollo de aplicaciones modernas.',
    ],
  },
]

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(search.toLowerCase()) ||
      resource.description.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      category === 'Todos' || resource.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <section id="recursos" className="section">
      <div className="container">
        <div className="section-heading">
          <span>APRENDIZAJE</span>

          <h2>Recursos de desarrollo</h2>

          <p>
            Consulta los principales temas utilizados en el
            desarrollo web moderno.
          </p>
        </div>

        <div className="resource-filters">
          <input
            type="text"
            placeholder="Buscar un recurso..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <div className="filter-buttons">
            {['Todos', 'HTML', 'CSS', 'JavaScript', 'React'].map(
              (item) => (
                <button
                  key={item}
                  className={category === item ? 'active' : ''}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="cards">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <ResourceCard
                key={resource.title}
                title={resource.title}
                description={resource.description}
                icon={resource.icon}
                onExplore={() => setSelectedResource(resource)}
              />
            ))
          ) : (
            <p className="no-results">
              No se encontraron recursos.
            </p>
          )}
        </div>

        {selectedResource && (
          <div className="resource-detail">
            <div className="resource-detail-header">
              <span className="resource-detail-icon">
                {selectedResource.icon}
              </span>

              <div>
                <span className="resource-detail-category">
                  RECURSO
                </span>

                <h2>{selectedResource.title}</h2>
              </div>
            </div>

<div className="resource-info">
  <h3>¿Qué es?</h3>
  <p>{selectedResource.content}</p>

  <h3>¿Para qué sirve?</h3>
  <p>{selectedResource.purpose}</p>

  <h3>Ejemplo</h3>

  <pre className="resource-example">
    {selectedResource.example}
  </pre>

  <h3>Características principales</h3>

  <ul>
    {selectedResource.features.map((feature) => (
      <li key={feature}>{feature}</li>
    ))}
  </ul>
</div>

<button
  className="close-button"
  onClick={() => setSelectedResource(null)}
>
  Cerrar
</button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Resources