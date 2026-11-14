// src/components/ui/NavActions.jsx
import { SECTIONS } from '../../hooks/useActiveSection';

export default function NavActions({ activeSection = '' }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1">
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <a
            key={sec.id}
            href={`/#${sec.id}`}
            aria-current={isActive ? 'true' : undefined}
            className={`inline-flex items-center min-h-11 text-sm transition-colors ${
              isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
            }`}
          >
            <span className={`link-draw ${isActive ? '!bg-[length:100%_1px]' : ''}`}>{sec.name}</span>
          </a>
        );
      })}
    </div>
  );
}
