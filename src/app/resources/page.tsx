// app/resources/page.tsx
"use client";

import { useState } from "react";
import { BreadcrumbWithCustomSeparator } from "@/shared/ui";
import { Header, Footer, ResourcesHeroSection, ResourcesStatsSection, ResourcesGrid, ResourcesManagementSystemSection, ResourcesMapSection } from "@/widgets";

import { RESOURCES_DATA } from "@/constants/equipment";
import { STATS_DATA } from "@/constants/resources";

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isTableVisible, setIsTableVisible] = useState(false);

  const selectedEquipment = selectedCategory
    ? RESOURCES_DATA.find((resource) => resource.name === selectedCategory)
        ?.equipment || []
    : [];

  const handleCategorySelect = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setIsTableVisible(false);
      setTimeout(() => setSelectedCategory(null), 300);
    } else {
      setSelectedCategory(categoryName);
      setIsTableVisible(true);
    }
  };

  const handleTableClose = () => {
    setIsTableVisible(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };



  // Данные для системы управления
  const managementSystemData = [
    {
      title: "Мониторинг в реальном времени",
      description: "Мы используем современную GPS-систему мониторинга техники, которая позволяет оптимизировать маршруты перемещения, контролировать расход топлива, обеспечивать безопасность эксплуатации и планировать техническое обслуживание."
    },
    {
      title: "Квалификация персонала",
      description: "Наши водители и механики проходят регулярное обучение и аттестацию. Средний стаж работы специалистов составляет более 7 лет, что гарантирует профессиональное использование техники и соблюдение всех норм безопасности."
    }
  ];

  return (
    <div className="flex gap-[20px] justify-start items-center flex-col min-h-screen max-w-[1300px] w-full">
      <Header />

      <div className="w-full px-5">
        <BreadcrumbWithCustomSeparator
          items={[
            { label: "Главная", href: "/" },
            { label: "Ресурсы", isCurrent: true },
          ]}
          className=""
          separator={<span className="mx-2">›</span>}
        />
      </div>

      <main className="flex w-full flex-1 flex-col px-5">
        <ResourcesHeroSection
          title="Ресурсы компании"
          description="Наша компания обладает современной материально-технической базой, позволяющей реализовывать проекты любой сложности. Мы постоянно инвестируем в обновление и расширение парка техники, что обеспечивает высокое качество работ и соблюдение сроков."
        />

        <ResourcesStatsSection stats={STATS_DATA} />

        <ResourcesGrid
          resources={RESOURCES_DATA}
          selectedCategory={selectedCategory}
          isTableVisible={isTableVisible}
          selectedEquipment={selectedEquipment}
          onCategorySelect={handleCategorySelect}
          onTableClose={handleTableClose}
        />

        <ResourcesManagementSystemSection
          title="Система управления"
          items={managementSystemData}
        />

        <ResourcesMapSection
          title="Производственная база"
          description="Наша производственная база площадью 15 га включает ремонтные мастерские с современным оборудованием, складские помещения и теплые боксы для обслуживания техники."
          mapSrc="https://yandex.ru/map-widget/v1/?ll=73.463352%2C61.261314&mode=whatshere&whatshere%5Bpoint%5D=73.463619%2C61.261515&whatshere%5Bzoom%5D=18.29&z=18.29"
        />
      </main>

      <Footer />
    </div>
  );
}