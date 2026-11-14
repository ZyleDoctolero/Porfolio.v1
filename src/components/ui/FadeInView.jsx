// src/components/ui/FadeInView.jsx
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

export default function FadeInView({ children, className = '' }) {
  const shouldReduce = useReducedMotion();
  const variants = shouldReduce
    ? { visible: { opacity: 1, y: 0 }, hidden: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
