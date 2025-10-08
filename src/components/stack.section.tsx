import { motion } from 'framer-motion';
import { itemVariants, stackCardsVariants } from '@/animations/variants';
import { stackData } from '@/data/stack.data';
import SectionDivider from '@/components/section.divider';
import StackCard from '@/components/stack.card';

export default function StackSection() {
  return (
    <motion.div
      className="text-center"
      variants={itemVariants}
    >
      <motion.h2
        className="font-light text-4xl md:text-5xl text-white tracking-tight mb-2 group inline-block"
        variants={itemVariants}
      >
        Stack{' '}
        <span className="text-emerald-400 transition-colors duration-300 hover:text-emerald-300">
          tecnológico
        </span>
      </motion.h2>
      
      <SectionDivider />
      
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto"
        variants={stackCardsVariants}
      >
        {stackData.map((category) => (
          <StackCard
            key={category.title}
            category={category}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}