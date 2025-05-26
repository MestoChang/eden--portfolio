import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const ProjectCard = ({ project, slug, locale }) => {
  const t = useTranslations('projects');

  const renderHeader = () => (
    <>
      <h2 className="mb-2 text-xl font-semibold">{project.title[locale]}</h2>
      <p className="mb-4 text-gray-600">{project.description[locale]}</p>
    </>
  );

  const renderTags = () => (
    <div className="mb-4 flex flex-wrap gap-2">
      {project.metadata.tags[locale].map(tag => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );

  const renderLinks = () => (
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
  );

  return (
    <div
      key={project.slug}
      className="overflow-hidden rounded-lg bg-gray-950 shadow-lg transition-transform hover:scale-105"
    >
      <div className="h-48 w-full bg-gradient-to-r from-blue-500 to-purple-500" />
      <div className="p-6">
        {renderHeader()}
        {renderTags()}
        {renderLinks()}
      </div>
    </div>
  );
};

export default ProjectCard;
