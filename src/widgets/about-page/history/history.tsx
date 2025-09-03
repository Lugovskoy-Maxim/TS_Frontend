// widgets/about-page/history-section/history-section.tsx
import { history } from "@/constants/about";

const AboutHistorySection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">История компании</h2>
      <div className="relative">
        {/* Вертикальная линия */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

        {/* События */}
        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-400"></div>

          {/* События */}
          <div className="space-y-6">
            {history.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-start gap-8`}
              >
                {/* Точка на линии */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center border-4 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Карточка события */}
                <div className="md:w-1/2 mt-2 md:mt-0 md:pl-2">
                  <div className="bg-white dark:bg-muted/50 p-6 m-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-[var(--border)] group">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.year} год
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistorySection;