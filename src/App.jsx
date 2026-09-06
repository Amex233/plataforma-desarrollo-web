import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Resources from './components/Resources'
import Tools from './components/Tools'
import Documentation from './components/Documentation'
import Sprints from './components/Sprints'
import Backlog from './components/Backlog'
import Scrum from './components/Scrum'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <Resources />
        <Tools />
        <Scrum />
        <Backlog />
        <Sprints />
        <Documentation />
      </main>

      <Footer />
    </div>
  )
}

export default App