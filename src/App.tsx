import './App.css'
import  Hero  from './sections/hero/index'
import About from './sections/about/index'
import Projects from './sections/projects'
import Footer from './sections/footer'
import { useRef } from 'react';

export default function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col w-full">
      <Hero aboutRef={aboutRef} projectRef={projectRef} />
      <About aboutRef={aboutRef} />
      <Projects projectRef={projectRef} />
      <Footer />
    </div>
  )
}