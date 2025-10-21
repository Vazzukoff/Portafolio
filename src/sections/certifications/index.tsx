import { motion } from 'framer-motion';
import { itemVariants } from '@/animations/variants';
import SectionDivider from '@/components/section.divider';
import { GrCertificate } from "react-icons/gr";

interface CertificationsProps {
  certificateRef: React.RefObject<HTMLDivElement | null>;
}


export default function Certifications({certificateRef}: CertificationsProps) {
  return (
    <motion.section 
      ref={certificateRef}
      className="py-20 px-5 md:px-20 lg:px-40"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileInView="visible"
    >
      <div className="text-center mb-12">
        <motion.h2
          className="font-title text-4xl md:text-5xl text-white tracking-tight mb-2 inline-block"
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
        className="max-w-6xl mx-auto"
        variants={itemVariants}
      >
        <div className="bg-black/40 backdrop-blur-sm border border-white/30 hover:border-emerald-400/60 rounded-2xl p-8 shadow-2xl transition-all duration-500 hover:bg-black/60 group">
          {/* Header con icono y título */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center group-hover:bg-emerald-400/20 transition-colors duration-300">
                <GrCertificate className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-white tracking-wide group-hover:text-emerald-400 transition-colors duration-300">
                  Desarrollo Web Full Stack
                </h3>
                <p className="text-white/70 font-light text-sm">
                  Codeable
                </p>
              </div>
            </div>

            {/* Enlace a verificación */}
            <a
              href="https://certificados.codeable.la/certificates/2025-CP25100006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 hover:bg-emerald-400/20 hover:border-emerald-400/50 font-medium text-sm tracking-wide transition-all duration-300"
            >
              <span>Verificar</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Visor del certificado PDF */}
          <div className="rounded-xl overflow-hidden border border-white/20 group-hover:border-emerald-400/40 transition-colors duration-300 bg-white/5">
            <img
              src="/assets/images/Certificado.png"
              className="w-full h-[600px] md:h-[700px]"
              title="Certificado en Desarrollo Web Full Stack - Codeable"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}