import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import DownloadButton from "@/UI/download.CV.button";
import type { RefObject } from "react";
import LetterGlitch from "@/animations/letter.glitch";

interface HeroProps {
  aboutRef: RefObject<HTMLDivElement | null>
  projectRef: RefObject<HTMLDivElement | null>
}

export default function Hero({ aboutRef, projectRef }: HeroProps) {
  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="flex items-center justify-center h-screen bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <LetterGlitch
            glitchColors={['#10b981', '#059669', '#047857', '#065f46']}
            glitchSpeed={80}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
          />
        </div>

        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent z-[2]" />

        <div className="absolute top-8 z-20">
          <nav className="backdrop-blur-xl bg-black/30 border border-white/10 hover:border-white/20 px-8 py-4 rounded-full shadow-2xl transition-all duration-500 hover:bg-black/40">
            <ul className="flex flex-row gap-8">
              <li
                onClick={() => scrollToSection(aboutRef)}
                className="cursor-pointer px-5 py-2 rounded-full text-sm font-light text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 tracking-wide"
              >
                About me
              </li>
              <li
                onClick={() => scrollToSection(projectRef)}
                className="cursor-pointer px-5 py-2 rounded-full text-sm font-light text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 tracking-wide"
              >
                My projects
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-center px-4 max-w-2xl z-10 relative">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl -m-4"></div>
          
          <div className="relative z-10">
            <img
              src="/assets/images/Hero.jpeg"
              alt="Hero"
              className="w-32 h-32 md:w-51 md:h-51 rounded-full object-cover border-2 border-neutral-600 shadow-2xl mx-auto mb-6 ring-2 ring-neutral-700/50"
            />
            <h1 className="font-title text-3xl md:text-4xl text-white drop-shadow-lg">
              Hola! soy Sebastián Vallejo Bezzubikoff
            </h1>
            <h2 className="font-subtitle text-lg md:text-xl text-neutral-300 mt-2 drop-shadow-md">
              Full Stack web developer
            </h2>
            <ul className="flex gap-6 justify-center items-center mt-6">
              <li>
                <a
                  href="https://www.linkedin.com/in/tu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-blue-400 transition-all transform hover:scale-110 duration-200 drop-shadow-md"
                >
                  <CiLinkedin className="text-3xl" />
                </a>
              </li>
              <li>
                <DownloadButton />
              </li>
              <li>
                <a
                  href="https://github.com/Vazzukoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-white transition-all transform hover:scale-110 duration-200 drop-shadow-md"
                >
                  <FaGithub className="text-3xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}