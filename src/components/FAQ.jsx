
import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const questions = [
    {
      question: '¿Qué necesito para comenzar a aprender desarrollo web?',
      answer:
        'Puedes comenzar con HTML para crear la estructura de una página, continuar con CSS para diseñar su apariencia y después aprender JavaScript para agregar interactividad.',
    },
    {
      question: '¿Para qué sirve React?',
      answer:
        'React permite construir interfaces de usuario mediante componentes reutilizables, lo que facilita organizar y mantener una aplicación web.',
    },
    {
      question: '¿Cómo puedo practicar lo aprendido?',
      answer:
        'Consulta los recursos de la plataforma y practica creando páginas pequeñas. Después puedes incorporar estilos, formularios y funciones interactivas.',
    },
    {
      question: '¿Necesito instalar programas para aprender?',
      answer:
        'Puedes comenzar con un navegador y un editor de código. Para desarrollar proyectos con React, también puedes utilizar Node.js y herramientas como Visual Studio Code.',
    },
  ]

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="section-heading">
          <span>AYUDA AL ESTUDIANTE</span>
          <h2>Preguntas frecuentes</h2>
          <p>
            Encuentra respuestas a dudas comunes sobre el
            aprendizaje y desarrollo de páginas web.
          </p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => (
            <article className="faq-item" key={item.question}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={openIndex === index}
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? -1 : index,
                  )
                }
              >
                <span>{item.question}</span>
                <span aria-hidden="true">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
