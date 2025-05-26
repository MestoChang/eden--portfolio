import { customProject } from './data';

/**
 * 自訂專案頁面
 * 這是一個完全自訂的專案頁面，不依賴於動態路由
 *
 * 特點：
 * - 獨立的資料管理
 * - 完全自訂的頁面結構
 * - 支援多語系內容
 * - 可以根據需求自由設計
 *
 * @param {Object} params - 路由參數
 * @param {string} params.locale - 當前語言設定
 */
export default function CustomProjectPage({ params }) {
  const locale = params.locale || 'zh-TW';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">{customProject.title[locale]}</h1>
      <div className="prose max-w-none">
        <p className="mb-6 text-lg">{customProject.description[locale]}</p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            {customProject.sections.features.title[locale]}
          </h2>
          <ul className="list-disc pl-6">
            {customProject.sections.features.items[locale].map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">
            {customProject.sections.details.title[locale]}
          </h2>
          <p>{customProject.sections.details.content[locale]}</p>
        </section>
      </div>
    </div>
  );
}
