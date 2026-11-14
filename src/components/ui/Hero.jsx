// src/components/ui/Hero.jsx
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { useLocalTime } from '../../hooks/useLocalTime';

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const pill = 'inline-flex items-center min-h-12 px-7 rounded-full text-base transition-colors duration-300';

export default function Hero() {
  const time = useLocalTime();

  return (
    <section className="min-h-[calc(100svh-4rem)] flex flex-col justify-between pt-10 sm:pt-14 pb-8">
      <motion.div {...fade(0.1)} className="flex justify-between gap-4 label text-ink-soft">
        <span>Zyle Doctolero · Full stack developer</span>
        {/* Local time tells a remote recruiter which timezone they are writing to */}
        <span>Davao City, PH · {time} PHT</span>
      </motion.div>

      <h1 className="my-12 font-medium tracking-[-0.04em] leading-[0.98] text-[clamp(2.5rem,7.4vw,7.25rem)]">
        <Reveal delay={0.2} text="I build web platforms at EMIGMA, from the database to the screen." />
      </h1>

      <div className="grid md:grid-cols-12 gap-8 items-end border-t border-line pt-8">
        <motion.p {...fade(0.9)} className="md:col-span-6 lg:col-span-5 text-lg sm:text-xl leading-relaxed text-ink">
          Full stack developer working in React, TypeScript and Supabase. Before EMIGMA I built
          tools for the Davao City Water District's leak system. Open to full stack roles.
        </motion.p>

        <motion.div {...fade(1.05)} className="md:col-span-6 lg:col-span-7 flex flex-wrap md:justify-end items-center gap-3">
          <a href="mailto:drzyle@gmail.com" className={`${pill} bg-ink text-on-ink hover:bg-accent`}>
            Email me
          </a>
          <a href="/#work" className={`${pill} border border-ink text-ink hover:bg-ink hover:text-on-ink`}>
            See the work
          </a>
          <a
            href="/Zyle-Doctolero-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-12 px-3 text-base text-ink"
          >
            <span className="link-draw !bg-[length:100%_1px]">Résumé (PDF)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
