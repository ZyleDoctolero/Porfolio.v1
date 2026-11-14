// src/components/ui/ProjectsPanel.jsx
import SectionHeader from './SectionHeader';
import FadeInView from './FadeInView';
import Tag from './Tag';
import ProjectStage from './ProjectStage';
import ProjectLinks from './ProjectLinks';
import { projects } from '../../data/projects';

function ProjectCase({ project, index }) {
  return (
    <article>
      <FadeInView className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 mb-6">
        <h3 className="font-medium tracking-[-0.03em] leading-none text-[clamp(1.9rem,4.6vw,3.75rem)]">
          <span className="text-accent mr-4">{String(index + 1).padStart(2, '0')}</span>
          {project.title}
        </h3>
        <p className="label text-ink-soft">{project.role}</p>
      </FadeInView>

      <ProjectStage project={project} />

      <FadeInView className="grid md:grid-cols-12 gap-8 mt-8">
        <div className="md:col-span-5 space-y-5">
          <p className="text-xl sm:text-2xl leading-snug tracking-tight">{project.summary}</p>
          <ProjectLinks project={project} withCase />
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-6">
          <ul className="divide-y divide-line border-y border-line">
            {project.points.map((point) => (
              <li key={point} className="py-3.5 text-base leading-relaxed text-ink-soft">
                {point}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
          {project.note && <p className="text-sm text-ink-soft">{project.note}</p>}
        </div>
      </FadeInView>
    </article>
  );
}

export default function ProjectsPanel() {
  return (
    <section id="work">
      <SectionHeader index="01" title="Selected work" aside={`${projects.length} projects`} />
      <div className="space-y-24 sm:space-y-36">
        {projects.map((project, i) => (
          <ProjectCase key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
