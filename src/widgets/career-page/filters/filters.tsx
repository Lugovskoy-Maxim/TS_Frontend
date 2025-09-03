import { categories } from "@/constants/career";

interface FiltersSectionProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  vacanciesCount: number;
}

const CareerFiltersSection = ({
  activeCategory,
  setActiveCategory,
  vacanciesCount,
}: FiltersSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold text-center mb-8">Открытые вакансии</h2>

      <div className="flex flex-col justify-end w-full p-2">
        <select
          id="category"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          className="w-max px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">Все категории</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="text-start mt-2">
          <p className="">
            Найдено вакансий:{" "}
            <span className="font-bold">{vacanciesCount}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerFiltersSection;
