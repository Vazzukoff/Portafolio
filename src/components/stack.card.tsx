import { motion } from 'framer-motion';
import { cardVariants } from '../animations/variants';
import type { StackCategory } from '@/data/stack.data';

interface StackCardProps {
  category: StackCategory;
}

export default function StackCard({ category }: StackCardProps) {
  const { title, technologies, gridCols = "" } = category;
  
  return (
    <motion.div
      className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/30 hover:border-emerald-400/60 transition-all duration-500 hover:bg-black/60 group"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-2xl font-light text-white mb-5 tracking-tight border-b border-emerald-400/30 pb-3 group-hover:text-emerald-400 transition-colors duration-300">
        {title}
      </h3>
      
      <ul
        className={
          gridCols
            ? `grid ${gridCols} gap-x-6 gap-y-4 font-light`
            : "grid grid-cols-2 gap-x-6 gap-y-4 font-light"
        }
      >
        {technologies.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <li
              key={tech.name}
              className="flex items-center gap-3 text-white/90 hover:text-emerald-400 transition-colors duration-300 group/item"
            >
              <div className="flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                <IconComponent
                  color={tech.color}
                />
              </div>
              <span className="text-base font-medium tracking-wide">
                {tech.name}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}