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
import LearningObjectives from './components/LearningObjectives'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <LearningObjectives />
        <Resources />
        <Tools />
        <Scrum />
        <Backlog />
        <Sprints />
        <Documentation />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default App