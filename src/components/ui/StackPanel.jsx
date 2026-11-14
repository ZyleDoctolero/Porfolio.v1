// src/components/ui/StackPanel.jsx
import SectionHeader from './SectionHeader';
import FadeInView from './FadeInView';
import { stack } from '../../data/stack';

export default function StackPanel() {
  return (
    <section id="stack">
      <SectionHeader index="04" title="Stack" />
      <div className="grid md:grid-cols-3 gap-10 md:gap-8">
        {stack.map((group, g) => (
          <FadeInView key={group.title}>
            <h3 className="label text-ink-soft pb-4 border-b border-line">{group.title}</h3>
            <ul className="mt-4 space-y-1">
              {group.items.map((name) => (
                <li
                  key={name}
                  className={`leading-tight tracking-tight ${
                    g === 0 ? 'text-3xl sm:text-4xl font-medium' : 'text-2xl sm:text-3xl text-ink-soft'
                  }`}
                >
                  {name}
                </li>
              ))}
            </ul>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
