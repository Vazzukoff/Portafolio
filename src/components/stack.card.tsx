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
      className="bg-black/40 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-white/30 hover:border-emerald-400/60 transition-all duration-500 hover:bg-black/60 group min-w-[280px]"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-2xl font-subtitle text-white mb-6 tracking-tight border-b border-emerald-400/30 pb-4 group-hover:text-emerald-400 transition-colors duration-300">
        {title}
      </h3>
      <ul
        className={
          gridCols
            ? `grid ${gridCols} gap-x-8 gap-y-5 font-light`
            : "grid grid-cols-2 gap-x-8 gap-y-5 font-light"
        }
      >
        {technologies.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <li
              key={tech.name}
              className="flex items-center gap-3 text-white/90 transition-colors duration-300 group/item cursor-default hover:text-emerald-400"
            >
              <div className="flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                <IconComponent
                  color={tech.color}
                />
              </div>
              <span className="text-base font-body tracking-wide">
                {tech.name}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}