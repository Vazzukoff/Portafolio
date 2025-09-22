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
        className="font-title text-4xl mb-4"
        variants={itemVariants}
      >
        Stack
      </motion.h2>
      
      <SectionDivider />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
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