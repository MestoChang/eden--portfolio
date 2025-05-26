/**
 * 多語言工具函數
 * 提供多語言相關的實用功能
 */

import { notFound } from 'next/navigation';

/**
 * 獲取指定語言的翻譯訊息
 *
 * @param {string} locale - 語言代碼
 * @returns {Promise<Object>} 包含所有翻譯的物件
 * @throws {Error} 當無法載入翻譯時拋出錯誤
 */
export async function getMessages(locale) {
  try {
    const messages = {
      common: (await import(`../messages/${locale}/common.json`)).default,
      home: (await import(`../messages/${locale}/home.json`)).default,
      about: (await import(`../messages/${locale}/about.json`)).default,
      projects: (await import(`../messages/${locale}/projects.json`)).default,
      error: (await import(`../messages/${locale}/error.json`)).default,
    };
    return messages;
  } catch (error) {
    throw new Error(`Failed to load messages for locale: ${locale}`);
  }
}

/**
 * 處理翻譯載入錯誤
 *
 * @param {Error} error - 錯誤物件
 * @throws {Error} 當錯誤不是 Error 實例時重新拋出
 */
export function handleMessagesError(error) {
  if (error instanceof Error) {
    notFound();
  }
  throw error;
}

// 錯誤處理工具函數
export function handleError(error, locale) {
  if (error instanceof Error) {
    // 如果是找不到頁面的錯誤
    if (error.message.includes('Failed to load messages for locale')) {
      notFound();
    }
    // 其他錯誤則拋出，由 error.jsx 處理
    throw error;
  }
  return null;
}
