export const projects = [
  {
    slug: 'portfolio-website',
    title: {
      'zh-TW': '個人作品集網站',
      en: 'Portfolio Website',
    },
    description: {
      'zh-TW': '使用 Next.js 13 和 TailwindCSS 打造的現代化個人作品集網站，支援多語系和深色模式。',
      en: 'A modern portfolio website built with Next.js 13 and TailwindCSS, featuring multilingual support and dark mode.',
    },
    content: {
      'zh-TW': `這是一個使用最新技術打造的個人作品集網站。主要特點包括：

1. 使用 Next.js 13 App Router 進行開發
2. 整合 next-intl 實現多語系支援
3. 使用 TailwindCSS 實現響應式設計
4. 支援深色模式
5. 優化的 SEO 設定
6. 使用 TypeScript 確保程式碼品質

這個專案展示了現代網頁開發的最佳實踐，包括效能優化、可訪問性和使用者體驗的考量。`,
      en: `This is a personal portfolio website built with cutting-edge technologies. Key features include:

1. Developed using Next.js 13 App Router
2. Integrated next-intl for multilingual support
3. Responsive design with TailwindCSS
4. Dark mode support
5. Optimized SEO settings
6. TypeScript for code quality

This project demonstrates modern web development best practices, including performance optimization, accessibility, and user experience considerations.`,
    },
    metadata: {
      date: '2024-03-20',
      category: {
        'zh-TW': '網頁開發',
        en: 'Web Development',
      },
      tags: {
        'zh-TW': ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'i18n'],
        en: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'i18n'],
      },
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio.com',
    },
  },
  {
    slug: 'task-management-app',
    title: {
      'zh-TW': '任務管理應用程式',
      en: 'Task Management Application',
    },
    description: {
      'zh-TW':
        '一個功能完整的任務管理應用程式，使用 React Native 和 TypeScript 開發，支援離線使用和即時同步。',
      en: 'A full-featured task management application built with React Native and TypeScript, supporting offline usage and real-time synchronization.',
    },
    content: {
      'zh-TW': `這是一個功能豐富的任務管理應用程式，專注於提供最佳的使用者體驗。主要功能包括：

1. 任務的創建、編輯和刪除
2. 任務分類和標籤系統
3. 截止日期提醒
4. 離線使用支援
5. 即時同步功能
6. 深色模式支援

技術特點：
- 使用 React Native 進行跨平台開發
- TypeScript 確保程式碼品質
- Redux Toolkit 進行狀態管理
- Firebase 提供後端服務
- 使用 AsyncStorage 實現離線存儲`,
      en: `This is a feature-rich task management application focused on providing the best user experience. Key features include:

1. Task creation, editing, and deletion
2. Task categorization and tagging system
3. Deadline reminders
4. Offline support
5. Real-time synchronization
6. Dark mode support

Technical features:
- Cross-platform development with React Native
- TypeScript for code quality
- Redux Toolkit for state management
- Firebase for backend services
- AsyncStorage for offline storage`,
    },
    metadata: {
      date: '2024-03-21',
      category: {
        'zh-TW': '行動應用',
        en: 'Mobile Application',
      },
      tags: {
        'zh-TW': ['React Native', 'TypeScript', 'Redux', 'Firebase'],
        en: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
      },
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-manager-demo.com',
    },
  },
];

export function getProject(slug) {
  return projects.find(project => project.slug === slug);
}

export function getAllProjects() {
  return projects;
}
