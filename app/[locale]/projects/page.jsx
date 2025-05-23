'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const projects = [
  {
    id: 1,
    titleKey: 'project1.title',
    descriptionKey: 'project1.description',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    titleKey: 'project2.title',
    descriptionKey: 'project2.description',
    technologies: ['React', 'TypeScript', 'Node.js'],
    link: 'https://github.com/yourusername/project2',
  },
  // 可以添加更多專案
];

const ProjectsPage = () => {
  const t = useTranslations('projects');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">{t('title')}</h1>
        <p className="text-xl text-gray-500">{t('description')}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div
            key={project.id}
            className="overflow-hidden rounded-lg bg-gray-950 shadow-lg transition-transform hover:scale-105"
          >
            <div className="h-48 w-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="p-6">
              <h2 className="mb-2 text-xl font-semibold">{t(project.titleKey)}</h2>
              <p className="mb-4 text-gray-600">{t(project.descriptionKey)}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="rounded-full bg-gray-950 px-3 py-1 text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 inline-block font-medium"
              >
                {t('viewProject')} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
