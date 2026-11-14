// src/components/ui/AboutPanel.jsx
import SectionHeader from './SectionHeader';
import FadeInView from './FadeInView';
import { about } from '../../data/about';
import { education } from '../../data/education';

export default function AboutPanel() {
  return (
    <section id="about">
      <SectionHeader index="03" title="About" />

      <div className="grid md:grid-cols-12 gap-10 md:gap-8">
        <FadeInView className="md:col-span-7">
          <p className="font-serif text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.15] tracking-[-0.01em]">
            {about.lead}
          </p>
        </FadeInView>

        <FadeInView className="md:col-span-4 md:col-start-9 space-y-4">
          {about.bio.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
          <div className="pt-6 mt-6 border-t border-line">
            <p className="label text-ink-soft">Education</p>
            <p className="text-lg font-medium mt-2 leading-snug">{education.degree}</p>
            <p className="text-base text-ink-soft">{education.school}</p>
            <p className="text-sm text-ink-soft mt-1">
              {education.period} · Graduated {education.graduated}
            </p>
          </div>
        </FadeInView>
      </div>

    </section>
  );
}
