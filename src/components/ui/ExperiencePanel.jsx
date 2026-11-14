// src/components/ui/ExperiencePanel.jsx
import SectionHeader from './SectionHeader';
import FadeInView from './FadeInView';
import Tag from './Tag';
import { experience } from '../../data/experience';

export default function ExperiencePanel() {
  return (
    <section id="experience">
      <SectionHeader index="02" title="Experience" />
      <div className="divide-y divide-line">
        {experience.map((entry) => (
          <FadeInView key={entry.id} className="py-10 first:pt-0 last:pb-0">
            <article className="grid md:grid-cols-12 gap-6 md:gap-8">
              <p className="md:col-span-3 label text-ink-soft pt-2">{entry.period}</p>
              <div className="md:col-span-4">
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight">{entry.company}</h3>
                <p className="text-lg text-ink mt-1">{entry.role}</p>
                <p className="text-base text-ink-soft">{entry.context}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {entry.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
              <ul className="md:col-span-5 divide-y divide-line border-y border-line self-start">
                {entry.points.map((point) => (
                  <li key={point} className="py-3.5 text-base leading-relaxed text-ink-soft">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}
