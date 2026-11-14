// src/components/ui/ProjectStage.jsx
// The coloured panel a project's screenshots sit on. Opens from a cropped inset as it enters view.
import { motion } from 'framer-motion';
import { BrowserFrame, PhoneFrame } from './Frames';

export default function ProjectStage({ project }) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(10% 5% 10% 5% round 28px)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 28px)' }}
      viewport={{ once: true, margin: '0px 0px -20% 0px' }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className={`${project.stage} overflow-hidden px-6 py-12 sm:px-16 sm:py-20`}
    >
      {project.frame === 'phone' ? (
        <div className="flex justify-center items-center gap-4 sm:gap-10">
          {project.images.map((img, i) => (
            <div key={img.src} className={`w-1/3 max-w-[13.5rem] ${i === 1 ? '' : 'translate-y-8 sm:translate-y-12'}`}>
              <PhoneFrame {...img} />
            </div>
          ))}
        </div>
      ) : (
        <BrowserFrame {...project.images[0]} label={project.frameLabel} className="max-w-4xl mx-auto" />
      )}
    </motion.div>
  );
}
