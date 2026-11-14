// src/components/ui/ActionBar.jsx
import { useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import NavActions from './NavActions';
import AvailabilityBadge from './AvailabilityBadge';
import { useActiveSection } from '../../hooks/useActiveSection';

export default function ActionBar() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();
  const { scrollYProgress } = useScroll();

  return (
    <header className="sticky top-0 z-50 w-full bg-paper/85 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16 px-5 sm:px-10">
        <a href="/" className="inline-flex items-center min-h-11 text-base font-medium tracking-tight">
          Zyle Doctolero<span className="text-accent" aria-hidden="true">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Sections">
          <NavActions activeSection={activeSection} />
          <AvailabilityBadge />
        </nav>

        <button
          className="md:hidden inline-flex items-center min-h-11 px-2 label text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            aria-label="Sections"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-line"
            onClick={() => setOpen(false)}
          >
            <div className="px-5 py-4 space-y-3">
              <NavActions activeSection={activeSection} />
              <AvailabilityBadge />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Reading progress */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-line" aria-hidden="true">
        <motion.div style={{ scaleX: scrollYProgress }} className="h-full bg-accent origin-left" />
      </div>
    </header>
  );
}
