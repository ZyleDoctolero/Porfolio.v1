// src/components/ui/ContactPanel.jsx
// Contact and footer in one dark closing block.
import { useState } from 'react';
import FadeInView from './FadeInView';

const EMAIL = 'drzyle@gmail.com';

export default function ContactPanel() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the mailto link above still works.
    }
  };

  return (
    <footer id="contact" className="bg-ink text-on-ink rounded-t-[28px] sm:rounded-t-[40px]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 pt-20 sm:pt-32 pb-8">
        <FadeInView>
          <p className="label text-on-ink-soft">
            <span className="text-accent">05</span> · Contact
          </p>
          <h2 className="mt-6 font-medium tracking-[-0.04em] leading-[0.95] text-[clamp(2.25rem,6.4vw,6rem)] max-w-5xl">
            Hiring a full stack developer? Email me.
          </h2>

          <div className="mt-12 sm:mt-16 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-4 text-[clamp(1.5rem,4.2vw,3.5rem)] tracking-tight leading-none min-h-12"
            >
              <span className="link-draw !bg-[length:100%_1px] group-hover:text-accent transition-colors duration-300">{EMAIL}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span>
            </a>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center min-h-11 px-5 rounded-full border border-on-ink-soft/50 text-sm hover:bg-on-ink hover:text-ink transition-colors duration-300"
            >
              <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
            </button>
          </div>
          <p className="mt-6 text-base text-on-ink-soft max-w-md">
            I'm open to full stack roles, remote or on-site. I reply within a day or two.
          </p>
        </FadeInView>

        <div className="mt-20 sm:mt-28 pt-6 border-t border-on-ink-soft/25 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 label text-on-ink-soft">
          <span>© 2026 Zyle Doctolero</span>
          <a href="https://github.com/ZyleDoctolero" target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-11 hover:text-on-ink transition-colors">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/zyle-adam-doctolero" target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-11 hover:text-on-ink transition-colors">
            LinkedIn ↗
          </a>
          <a href="/Zyle-Doctolero-CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-11 hover:text-on-ink transition-colors">
            Résumé ↗
          </a>
          <a href="#" className="inline-flex items-center min-h-11 hover:text-on-ink transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
