import { Studies } from './components/Studies'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { ProjectsSection } from './components/Projects'
import { ContactMe } from './components/ContactMe'

function App() {

  return (
    <div className='flex flex-col items-center justify-center z-0'>
      <Navbar />
      <Hero />
      <About />
      <Studies />
      <Skills />
      <ProjectsSection />
      <ContactMe />
    </div>
  )
}

export default App
