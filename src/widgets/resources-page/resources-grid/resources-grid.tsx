// widgets/resources-page/resources-grid/resources-grid.tsx
import { ResourceCard } from "@/shared/ui";
import { EquipmentTable } from "@/widgets";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Equipment, ResourceCategory } from "@/types/equipment";

interface ResourcesGridProps {
  resources: ResourceCategory[] ;
  selectedCategory: string | null;
  isTableVisible: boolean;
  selectedEquipment: Equipment[];
  onCategorySelect: (categoryName: string) => void;
  onTableClose: () => void;
}

const ResourcesGrid = ({
  resources,
  selectedCategory,
  isTableVisible,
  selectedEquipment,
  onCategorySelect,
  onTableClose,
}: ResourcesGridProps) => {
  return (
    <section className="mb-16 px-2">
      <h2 className="text-2xl font-bold text-center mb-8">Основная техника</h2>

      {/* Карточки категорий */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {resources.slice(0, 6).map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            isSelected={selectedCategory === resource.name}
            onSelect={onCategorySelect}
          />
        ))}
      </ul>

      {/* Таблица с техникой */}
      <EquipmentTable
        category={selectedCategory || ""}
        equipment={selectedEquipment}
        isVisible={isTableVisible}
        onClose={onTableClose}
      />

      {/* Кнопка просмотра всех ресурсов */}
      <div className="flex justify-end mb-8 w-full">
        <Button variant={"link"}>
          <Link href="/resources/all">
            <span>Посмотреть все ресурсы →</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ResourcesGrid;
