"use client";

import { useState } from "react";
import { BreadcrumbWithCustomSeparator } from "@/shared/ui";
import { Header, Footer, CareerHeroSection, CareerFiltersSection, CareerVacanciesList, CareerHiringProcess, CareerContactsSection } from "@/widgets";
import { vacancies } from "@/constants/career";


export default function Vacancies() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredVacancies =
    activeCategory === "all"
      ? vacancies
      : vacancies.filter((vacancy) => vacancy.category === activeCategory);

  return (
    <div className="flex gap-[20px] justify-start items-center flex-col min-h-screen max-w-[1300px] w-full">
      <Header />

      <div className="w-full px-5">
        <BreadcrumbWithCustomSeparator
          items={[
            { label: "Главная", href: "/" },
            { label: "Вакансии", isCurrent: true },
          ]}
          className="mb-1"
          separator={<span className="mx-2">›</span>}
        />
      </div>

      <main className="flex w-full flex-1 flex-col px-5 pb-12">
        <CareerHeroSection />
        <CareerFiltersSection
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          vacanciesCount={filteredVacancies.length}
        />
        <CareerVacanciesList activeCategory={activeCategory} />
        <CareerHiringProcess />
        <CareerContactsSection />
      </main>

      <Footer />
    </div>
  );
}