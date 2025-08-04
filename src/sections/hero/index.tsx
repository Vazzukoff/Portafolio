import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import DownloadButton from "../../UI/download.CV.button";
import type { RefObject } from "react";

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
      <section className="flex items-center justify-center h-screen bg-black text-white relative">
  {/* Navbar */}
  <div className="absolute top-8 z-10">
    <nav className="backdrop-blur-md bg-neutral-900/60 border border-neutral-700 px-6 py-3 rounded-xl shadow-md">
      <ul className="flex flex-row gap-6">
        <li
          onClick={() => scrollToSection(aboutRef)}
          className="cursor-pointer px-4 py-2 rounded-md text-sm text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors duration-200"
        >
          About me
        </li>
        <li
          onClick={() => scrollToSection(projectRef)}
          className="cursor-pointer px-4 py-2 rounded-md text-sm text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors duration-200"
        >
          My projects
        </li>
      </ul>
    </nav>
  </div>

  {/* Hero content */}
  <div className="text-center px-4 max-w-2xl">
    <img
      src="/assets/images/Hero.jpeg"
      alt="Hero"
      className="w-32 h-32 md:w-51 md:h-51 rounded-full object-cover border border-neutral-700 shadow-md mx-auto mb-6"
    />
    <h1 className="font-title text-3xl md:text-4xl text-neutral-100">
      Hola! soy Sebastián Vallejo Bezzubikoff
    </h1>
    <h2 className="font-subtitle text-lg md:text-xl text-neutral-400 mt-2">
      Full Stack web developer
    </h2>

    <ul className="flex gap-6 justify-center mt-6">
      <li>
        <a
          href="https://www.linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-blue-500 transition-transform transform hover:scale-110 duration-200"
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
          className="text-neutral-300 hover:text-white transition-transform transform hover:scale-110 duration-200"
        >
          <FaGithub className="text-3xl" />
        </a>
      </li>
    </ul>
  </div>
</section>
    </>
  );
}

