import  Hero  from './sections/hero/index'
import About from './sections/about/index'
import Projects from './sections/projects'
import Footer from './sections/footer'
import Certifications from './sections/certifications'
import { useRef } from 'react';

export default function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col w-full">
      <Hero aboutRef={aboutRef} projectRef={projectRef} certificateRef={certificateRef} />
      <About aboutRef={aboutRef} />
      <Projects projectRef={projectRef} />
      <Certifications certificateRef={certificateRef} />
      <Footer />
    </div>
  )
}