import { notFound } from 'next/navigation';
import { getProject, getAllProjects } from './data';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);
  const locale = params.locale || 'zh-TW';

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">{project.title[locale]}</h1>
      <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
        <span>{project.metadata.date}</span>
        <span>•</span>
        <span>{project.metadata.category[locale]}</span>
      </div>
      <p className="mb-6 text-lg">{project.description[locale]}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {project.metadata.tags[locale].map(tag => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="prose max-w-none">{project.content[locale]}</div>
    </div>
  );
}
