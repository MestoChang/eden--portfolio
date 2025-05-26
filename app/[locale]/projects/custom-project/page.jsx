import { customProject } from './data';

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
