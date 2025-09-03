"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Briefcase,
  Clock,
  RussianRuble,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { vacancies } from "@/constants/career";

interface VacanciesListProps {
  activeCategory: string;
}

const CareerVacanciesList = ({ activeCategory }: VacanciesListProps) => {
  const [expandedVacancy, setExpandedVacancy] = useState<number | null>(null);

  const toggleVacancy = (id: number) => {
    setExpandedVacancy(expandedVacancy === id ? null : id);
  };

  const filteredVacancies =
    activeCategory === "all"
      ? vacancies
      : vacancies.filter((vacancy) => vacancy.category === activeCategory);

  if (filteredVacancies.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 dark:bg-muted/50 rounded-lg">
        <p className="text-gray-500 text-lg">
          В выбранной категории пока нет вакансий
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Попробуйте выбрать другую категорию или отправьте свое резюме с желаемой должностью нам
        </p>
      </div>
    );
  }

  return (
    <section className="mb-16">
      <div className="space-y-6">
        {filteredVacancies.map((vacancy) => (
          <div
            key={vacancy.id}
            className="bg-white dark:bg-muted/50 rounded-lg shadow-md overflow-hidden m-2"
          >
            <button
              onClick={() => toggleVacancy(vacancy.id)}
              className="w-full p-6 text-left flex justify-between items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{vacancy.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {vacancy.location}
                  </span>
                  <span className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    {vacancy.type}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {vacancy.experience}
                  </span>
                  {vacancy.salary && (
                    <span className="flex items-center">
                      <RussianRuble className="h-4 w-4 mr-1" />
                      {vacancy.salary}
                    </span>
                  )}
                </div>
              </div>
              <div className="ml-4">
                {expandedVacancy === vacancy.id ? (
                  <ChevronUp className="h-6 w-6" />
                ) : (
                  <ChevronDown className="h-6 w-6" />
                )}
              </div>
            </button>

            {expandedVacancy === vacancy.id && (
              <div className="px-6 pb-6">
                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-2">Описание вакансии:</h4>
                  <p className="mb-4">{vacancy.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Требования:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {vacancy.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Условия:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {vacancy.conditions.map((cond, idx) => (
                          <li key={idx}>{cond}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button variant="default">Отправить документы</Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerVacanciesList;