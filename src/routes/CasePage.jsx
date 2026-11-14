// src/routes/CasePage.jsx — one project's case study at /work/:slug
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import FadeInView from '../components/ui/FadeInView';
import Reveal from '../components/ui/Reveal';
import Tag from '../components/ui/Tag';
import ProjectStage from '../components/ui/ProjectStage';
import ProjectLinks from '../components/ui/ProjectLinks';
import { BrowserFrame, PhoneFrame } from '../components/ui/Frames';
import { projects } from '../data/projects';

const withPages = projects.filter((p) => p.caseStudy);

function Block({ label, children }) {
  return (
    <FadeInView className="grid md:grid-cols-12 gap-4 md:gap-8 border-t border-line pt-8">
      <h2 className="md:col-span-3 label text-ink-soft">{label}</h2>
      <div className="md:col-span-8 md:col-start-5">{children}</div>
    </FadeInView>
  );
}

const bigLink =
  'block mt-3 font-medium tracking-[-0.03em] leading-none text-[clamp(2rem,6vw,5rem)] group-hover:text-accent transition-colors duration-300';

export default function CasePage() {
  const { slug } = useParams();
  const project = withPages.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return (
      <div className="py-32 space-y-6">
        <title>Not found | Zyle Doctolero</title>
        <h1 className="font-medium tracking-[-0.04em] text-[clamp(2.5rem,7vw,6rem)] leading-none">No page here.</h1>
        <a href="/" className="inline-flex items-center min-h-11 text-base">
          <span className="link-draw !bg-[length:100%_1px]">← Back to all work</span>
        </a>
      </div>
    );
  }

  const cs = project.caseStudy;
  const next = withPages[(withPages.indexOf(project) + 1) % withPages.length];

  return (
    <article className="pt-10 sm:pt-14 space-y-16 sm:space-y-24">
      <title>{`${project.title} | Zyle Doctolero`}</title>

      <header className="space-y-8">
        <div className="flex flex-wrap justify-between items-center gap-4 label text-ink-soft">
          <a href="/#work" className="inline-flex items-center min-h-11 hover:text-ink transition-colors">
            ← All work
          </a>
          <span>{project.role}</span>
        </div>
        <h1 className="font-medium tracking-[-0.04em] leading-[0.98] text-[clamp(2.75rem,9vw,8.5rem)]">
          <Reveal key={project.slug} delay={0.1} text={project.title} />
        </h1>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-end">
          <p className="md:col-span-7 text-xl sm:text-2xl leading-snug tracking-tight">{project.summary}</p>
          <div className="md:col-span-5 md:justify-self-end">
            <ProjectLinks project={project} />
          </div>
        </div>
      </header>

      <ProjectStage key={project.slug} project={project} />

      <Block label="Overview">
        <div className="space-y-5">
          {cs.overview.map((p, i) => (
            <p key={p} className={i === 0 ? 'text-xl sm:text-2xl leading-snug tracking-tight' : 'text-lg leading-relaxed text-ink-soft'}>
              {p}
            </p>
          ))}
        </div>
      </Block>

      {cs.facts?.length > 0 && (
        <Block label="At a glance">
          <dl className="divide-y divide-line border-b border-line -mt-3.5">
            {cs.facts.map(([label, value]) => (
              <div key={label} className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-3.5">
                <dt className="text-base text-ink-soft">{label}</dt>
                <dd className="text-base">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </Block>
      )}

      {cs.steps?.length > 0 && (
        <Block label="How it works">
          <ol className="divide-y divide-line border-b border-line -mt-4">
            {cs.steps.map((step, i) => (
              <li key={step} className="grid grid-cols-[3rem_1fr] gap-4 py-4 text-lg leading-relaxed">
                <span className="text-accent font-medium tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Block>
      )}

      {cs.decisions?.length > 0 && (
        <Block label="Decisions">
          <div className="space-y-8">
            {cs.decisions.map((d) => (
              <div key={d.title}>
                <h3 className="text-xl font-medium tracking-tight">{d.title}</h3>
                <p className="mt-2 text-lg leading-relaxed text-ink-soft">{d.body}</p>
              </div>
            ))}
          </div>
        </Block>
      )}

      {cs.gallery?.length > 0 && (
        <Block label="More screens">
          <div className="flex flex-wrap gap-6 sm:gap-8">
            {cs.gallery.map((img) =>
              img.frame === 'phone' ? (
                <div key={img.src} className="w-40 sm:w-56">
                  <PhoneFrame src={img.src} alt={img.alt} />
                </div>
              ) : (
                <BrowserFrame key={img.src} src={img.src} alt={img.alt} className="w-full" />
              )
            )}
          </div>
        </Block>
      )}

      <nav aria-label="More work" className="border-t border-ink pt-8">
        {next !== project ? (
          <Link to={`/work/${next.slug}`} className="group block">
            <span className="label text-ink-soft">Next project</span>
            <span className={bigLink}>{next.title} →</span>
          </Link>
        ) : (
          <a href="/#work" className="group block">
            <span className="label text-ink-soft">Back</span>
            <span className={bigLink}>All work →</span>
          </a>
        )}
      </nav>
    </article>
  );
}
