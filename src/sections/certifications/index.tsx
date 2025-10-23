import { motion } from 'framer-motion';
import { itemVariants } from '@/animations/variants';
import SectionDivider from '@/components/section.divider';
import { GrCertificate } from "react-icons/gr";

interface CertificationsProps {
  certificateRef: React.RefObject<HTMLDivElement | null>;
}

export default function Certifications({ certificateRef }: CertificationsProps) {
  return (
    <motion.section
      ref={certificateRef}
      className="py-16 px-4 sm:px-8 md:px-16 lg:px-32"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileInView="visible"
    >
      <div className="text-center mb-10 sm:mb-12">
        <motion.h2
          className="font-title text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3 inline-block"
          variants={itemVariants}
        >
          Mis{' '}
          <span className="text-emerald-400 transition-colors duration-300 hover:text-emerald-300">
            certificaciones
          </span>
        </motion.h2>
        <SectionDivider />
      </div>

      <motion.div
        className="max-w-5xl mx-auto"
        variants={itemVariants}
      >
        <div className="bg-black/40 backdrop-blur-sm border border-white/20 hover:border-emerald-400/50 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-500 hover:bg-black/60 group">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors duration-300">
                <GrCertificate className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-wide group-hover:text-emerald-400 transition-colors duration-300">
                  Desarrollo Web Full Stack
                </h3>
                <p className="text-white/70 font-light text-sm sm:text-base">
                  Codeable
                </p>
              </div>
            </div>

            <a
              href="https://certificados.codeable.la/certificates/2025-CP25100006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20 hover:border-emerald-400/50 font-medium text-sm sm:text-base tracking-wide transition-all duration-300"
            >
              <span>Verificar</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 group-hover:border-emerald-400/40 transition-colors duration-300 bg-white/5">
            <img
              src="/assets/images/Certificado.png"
              className="w-full h-52 sm:h-72 md:h-[600px] object-cover md:object-contain"
              title="Certificado en Desarrollo Web Full Stack - Codeable"
              alt="Certificado de Codeable"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}