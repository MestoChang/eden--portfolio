export const projects = [
  {
    slug: 'project-1',
    title: '專案一',
    description: '這是專案一的描述',
    content: '專案一的詳細內容...',
    metadata: {
      date: '2024-03-20',
      category: '網頁開發',
      tags: ['React', 'Next.js', 'TailwindCSS'],
    },
  },
  {
    slug: 'project-2',
    title: '專案二',
    description: '這是專案二的描述',
    content: '專案二的詳細內容...',
    metadata: {
      date: '2024-03-21',
      category: '行動應用',
      tags: ['React Native', 'TypeScript'],
    },
  },
];

export function getProject(slug) {
  return projects.find(project => project.slug === slug);
}

export function getAllProjects() {
  return projects;
}
