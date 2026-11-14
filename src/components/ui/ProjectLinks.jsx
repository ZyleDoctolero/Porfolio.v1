// src/components/ui/ProjectLinks.jsx
import { Link } from 'react-router-dom';

const cls = 'inline-flex items-center min-h-11 text-base';
const Underlined = ({ children }) => <span className="link-draw !bg-[length:100%_1px]">{children}</span>;

/** Links for a project. `withCase` adds the internal case-study link when the project has one. */
export default function ProjectLinks({ project, withCase = false }) {
  if (!project.liveUrl && !project.repoUrl && !(withCase && project.caseStudy)) return null;
  return (
    <div className="flex flex-wrap gap-x-6">
      {withCase && project.caseStudy && (
        <Link to={`/work/${project.slug}`} className={cls}>
          <Underlined>Read case study →</Underlined>
        </Link>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={cls}>
          <Underlined>Visit live site ↗</Underlined>
        </a>
      )}
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={cls}>
          <Underlined>View source ↗</Underlined>
        </a>
      )}
    </div>
  );
}
