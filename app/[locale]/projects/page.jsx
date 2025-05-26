'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { getAllProjects } from './[slug]/data';

const ProjectsPage = () => {
  const t = useTranslations('projects');
  const projects = getAllProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">{t('title')}</h1>
        <p className="text-xl text-gray-500">{t('description')}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div
            key={project.slug}
            className="overflow-hidden rounded-lg bg-gray-950 shadow-lg transition-transform hover:scale-105"
          >
            <div className="h-48 w-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="p-6">
              <h2 className="mb-2 text-xl font-semibold">{project.title['zh-TW']}</h2>
              <p className="mb-4 text-gray-600">{project.description['zh-TW']}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.metadata.tags['zh-TW'].map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-primary hover:text-primary/80 inline-block font-medium"
                >
                  {t('viewProject')} →
                </Link>
                {project.metadata.github && (
                  <a
                    href={project.metadata.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 inline-block font-medium"
                  >
                    GitHub →
                  </a>
                )}
                {project.metadata.demo && (
                  <a
                    href={project.metadata.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 inline-block font-medium"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
