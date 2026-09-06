function ResourceCard({ title, description, icon, onExplore }) {
  return (
    <article className="card">
      <div className="card-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button
        className="explore-button"
        onClick={onExplore}
      >
        Explorar →
      </button>
    </article>
  )
}

export default ResourceCard