// src/components/ui/SectionHeader.jsx
import FadeInView from './FadeInView';

export default function SectionHeader({ index, title, aside }) {
  return (
    <FadeInView className="flex items-end justify-between gap-6 border-b border-ink pb-5 mb-12 sm:mb-16">
      <h2 className="font-medium tracking-[-0.03em] leading-none text-[clamp(2.25rem,6vw,5rem)]">
        {title}
      </h2>
      <p className="label text-ink-soft text-right pb-1">
        <span className="text-accent">{index}</span>
        {aside && <span className="hidden sm:inline"> · {aside}</span>}
      </p>
    </FadeInView>
  );
}
