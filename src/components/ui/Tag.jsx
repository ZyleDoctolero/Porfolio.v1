// src/components/ui/Tag.jsx
export default function Tag({ children, dark = false }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full border font-mono text-[11px] uppercase tracking-wider ${
        dark ? 'border-on-ink-soft/40 text-on-ink-soft' : 'border-line text-ink-soft'
      }`}
    >
      {children}
    </span>
  );
}
