import { motion } from 'framer-motion';
import { itemVariants } from '@/animations/variants';

interface SectionDividerProps {
  maxWidth?: string;
}

export default function SectionDivider({ maxWidth = "max-w-[600px]" }: SectionDividerProps) {
  return (
    <motion.div
      className={`relative w-full mb-10 ${maxWidth} h-[2px] mx-auto my-6`}
      variants={itemVariants}
    >
      <div className="absolute inset-0 mx-auto h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent scale-y-150 blur-[1px] rounded-full" />
      <div className="absolute inset-0 mx-auto h-full bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent rounded-full" />
    </motion.div>
  );
}