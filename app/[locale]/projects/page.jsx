'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getAllProjects } from './[slug]/data';
import ProjectCard from '@/components/pages/ProjectCard';

const ProjectsPage = () => {
  const t = useTranslations('projects');
  const projects = getAllProjects();
  const params = useParams();
  const locale = params.locale || 'zh-TW';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">{t('title')}</h1>
        <p className="text-xl text-gray-500">{t('description')}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <ProjectCard key={project.slug} project={project} slug={project.slug} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
