/**
 * 多語言導航設定
 * 提供多語言環境下的導航功能
 *
 * 主要功能：
 * - 提供多語言連結元件
 * - 處理語言切換
 * - 保持當前語言設定
 *
 * 導出的工具：
 * - Link: 多語言連結元件
 * - redirect: 多語言重定向函數
 * - usePathname: 獲取當前路徑的 Hook
 * - useRouter: 多語言路由 Hook
 * - getPathname: 獲取當前路徑的函數
 */

import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
