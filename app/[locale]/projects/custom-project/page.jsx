export default function CustomProjectPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">自訂專案頁面</h1>
      <div className="prose max-w-none">
        <p className="mb-6 text-lg">
          這是一個使用獨立路由的專案頁面範例。這種方式適合於需要完全自訂的專案頁面，
          可以根據需求自由設計頁面結構和內容。
        </p>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">專案特色</h2>
          <ul className="list-disc pl-6">
            <li>完全自訂的頁面結構</li>
            <li>獨特的設計和佈局</li>
            <li>可以包含特定的互動元素</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">專案細節</h2>
          <p>
            這個頁面可以包含任何您需要的內容，不受模板限制。 您可以根據專案需求自由設計頁面結構。
          </p>
        </section>
      </div>
    </div>
  );
}
