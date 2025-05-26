/**
 * 標題組件
 * 用於顯示區塊標題和副標題
 * 支援響應式設計
 */

import React from 'react';

/**
 * @param {Object} props - 組件屬性
 * @param {string} props.title - 主要標題
 * @param {string} [props.sub] - 可選的副標題
 */
const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* 副標題區塊 */}
      {sub && (
        <p className="w-fit rounded-full bg-gray-950/80 px-4 py-2 text-sm text-nowrap md:text-base">
          {sub}
        </p>
      )}

      {/* 主要標題 */}
      <div className="text-center text-2xl font-semibold md:text-4xl">{title}</div>
    </div>
  );
};

export default TitleHeader;
