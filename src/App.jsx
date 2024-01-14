import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { Studies } from './components/Studies'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { ProjectsSection } from './components/Projects'
import { ContactMe } from './components/ContactMe'

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(
      async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => 
      (
        {
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 200,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 2.5 },
            },
          },
          detectRetina: true,
        }
    ),
    [],
  );

  return (
    <div className='flex flex-col items-center justify-center w-full z-0'>
      <Navbar />
      {
        init && <Particles id="tsparticles" options={particlesOptions} className="-z-10"/>
      }
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
