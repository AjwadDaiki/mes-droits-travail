export interface FaqItem {
  question: string
  answer: string
}

interface FaqProps {
  items: FaqItem[]
}

export default function Faq({ items }: FaqProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className="mt-10" aria-label="Questions fréquentes">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Questions fréquentes
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <details
            key={index}
            className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
          >
            <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-800 hover:text-primary list-none">
              <span>{item.question}</span>
              <svg
                className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
