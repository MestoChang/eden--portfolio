export const projects = [
  {
    slug: 'project-1',
    title: {
      'zh-TW': '專案一',
      en: 'Project One',
    },
    description: {
      'zh-TW': '這是專案一的描述',
      en: 'This is the description of Project One',
    },
    content: {
      'zh-TW': '專案一的詳細內容...',
      en: 'Detailed content of Project One...',
    },
    metadata: {
      date: '2024-03-20',
      category: {
        'zh-TW': '網頁開發',
        en: 'Web Development',
      },
      tags: {
        'zh-TW': ['React', 'Next.js', 'TailwindCSS'],
        en: ['React', 'Next.js', 'TailwindCSS'],
      },
    },
  },
  {
    slug: 'project-2',
    title: {
      'zh-TW': '專案二',
      en: 'Project Two',
    },
    description: {
      'zh-TW': '這是專案二的描述',
      en: 'This is the description of Project Two',
    },
    content: {
      'zh-TW': '專案二的詳細內容...',
      en: 'Detailed content of Project Two...',
    },
    metadata: {
      date: '2024-03-21',
      category: {
        'zh-TW': '行動應用',
        en: 'Mobile Application',
      },
      tags: {
        'zh-TW': ['React Native', 'TypeScript'],
        en: ['React Native', 'TypeScript'],
      },
    },
  },
];

export function getProject(slug) {
  return projects.find(project => project.slug === slug);
}

export function getAllProjects() {
  return projects;
}
