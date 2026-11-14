// src/components/ui/Reveal.jsx
// Headline reveal: each word rises out of a clipped line. Words stay inline, so wrapping is natural.
import { motion } from 'framer-motion';

export default function Reveal({ text, delay = 0 }) {
  return (
    <span aria-label={text} role="text">
      {text.split(' ').map((word, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] mr-[0.22em]">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.9, delay: delay + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
