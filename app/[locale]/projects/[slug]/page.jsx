import { notFound } from 'next/navigation';
import { getProject, getAllProjects } from './data';

/**
 * 動態路由專案頁面
 * 使用 Next.js 的動態路由功能，根據 slug 參數生成不同的專案頁面
 *
 * 功能：
 * - 支援多語系內容
 * - 使用統一的頁面模板
 * - 自動生成靜態頁面
 *
 * @param {Object} params - 路由參數
 * @param {string} params.slug - 專案的唯一識別符
 * @param {string} params.locale - 當前語言設定
 */
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
          <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="prose max-w-none">{project.content[locale]}</div>
    </div>
  );
}
