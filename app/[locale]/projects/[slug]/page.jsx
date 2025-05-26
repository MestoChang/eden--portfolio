import { notFound } from 'next/navigation';
import { getProject, getAllProjects } from '../data';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
      <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
        <span>{project.metadata.date}</span>
        <span>•</span>
        <span>{project.metadata.category}</span>
      </div>
      <p className="mb-6 text-lg">{project.description}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {project.metadata.tags.map(tag => (
          <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="prose max-w-none">{project.content}</div>
    </div>
  );
}
