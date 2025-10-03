import { motion } from 'framer-motion';
import { containerVariants } from '@/animations/variants';
import AboutSection from '@/components/about/about.section';
import StackSection from '@/components/stack.section';

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

export default function About({ aboutRef }: AboutProps) {
  return (
    <motion.section
      ref={aboutRef}
      className="flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-20 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-full max-w-6xl space-y-12 md:space-y-16">
        <AboutSection />
        <StackSection />
      </div>
    </motion.section>
  );
}