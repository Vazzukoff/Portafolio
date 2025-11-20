import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import DownloadButton from "@/UI/download.CV.button";
import type { RefObject } from "react";
import LetterGlitch from "@/animations/letter.glitch";

interface HeroProps {
  aboutRef: RefObject<HTMLDivElement | null>
  projectRef: RefObject<HTMLDivElement | null>
  certificateRef: RefObject<HTMLDivElement | null>
}

export default function Hero({ aboutRef, projectRef, certificateRef }: HeroProps) {
  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="flex items-center justify-center min-h-screen py-20 md:h-screen bg-black text-white relative overflow-hidden">
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

        <div className="absolute top-4 md:top-8 z-20 left-1/2 -translate-x-1/2 w-full px-4">
          <nav className="backdrop-blur-xl bg-black/30 border border-white/30 hover:border-emerald-400/60 px-4 md:px-8 py-3 md:py-4 rounded-full shadow-2xl transition-all duration-500 hover:bg-black/40 max-w-fit mx-auto">
            <ul className="flex flex-row font-title gap-4 md:gap-8">
              <li
                onClick={() => scrollToSection(aboutRef)}
                className="cursor-pointer px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium text-white/80 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 tracking-wide"
              >
                Sobre mí
              </li>
              <li
                onClick={() => scrollToSection(projectRef)}
                className="cursor-pointer px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium text-white/80 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 tracking-wide"
              >
                Mis proyectos
              </li>
              <li
                onClick={() => scrollToSection(certificateRef)}
                className="cursor-pointer px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium text-white/80 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 tracking-wide"
              >
                Certificados
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-center px-4 max-w-2xl z-10 relative mt-16 md:mt-0">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl -m-4"></div>
          
          <div className="relative z-10">
            <img
              src="/assets/images/Hero.jpeg"
              alt="Hero"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-2 border-white/30 shadow-2xl mx-auto mb-4 md:mb-6 ring-2 ring-emerald-400/20"
            />
            <h1 className="font-light text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-lg px-2 tracking-tight">
              Hola! soy <span className="text-emerald-400">Sebastián Vallejo Bezzubikoff</span>
            </h1>
            <h2 className="font-light text-base md:text-lg lg:text-xl text-white/70 mt-2 drop-shadow-md tracking-wide">
              Full Stack web developer
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch mt-6 mb-6 max-w-lg mx-auto">
              <a
                href="mailto:sebasvallejo@gmail.com"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-white/10 text-white/70 hover:text-emerald-400 transition-all duration-300 text-sm font-light tracking-wide group flex-1 min-w-0"
              >
                <HiMail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="truncate">sebasvallejo@gmail.com</span>
              </a>
              
              <a
                href="https://wa.me/51997639634?text=Hola%20Sebastián,%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-400/40 hover:bg-white/10 text-white/70 hover:text-emerald-400 transition-all duration-300 text-sm font-light tracking-wide group flex-1 min-w-0"
              >
                <FaWhatsapp className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="whitespace-nowrap">+51 997 639 634</span>
              </a>
            </div>

            <ul className="flex gap-4 md:gap-6 justify-center items-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/sebastian-vallejo-bezzubikoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-emerald-400 transition-all transform hover:scale-110 duration-300 drop-shadow-md"
                >
                  <CiLinkedin className="text-2xl md:text-4xl" />
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
                  className="text-white/70 hover:text-emerald-400 transition-all transform hover:scale-110 duration-300 drop-shadow-md"
                >
                  <FaGithub className="text-2xl md:text-4xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}