"use client";

import { useState, useEffect } from "react";
import { BreadcrumbWithCustomSeparator } from "@/shared/ui";
import { Header, Footer } from "@/widgets";
import { RESOURCES_DATA } from "@/constants/equipment";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function AllResources() {
  // Собираем всю технику из всех категорий
  const allEquipment = RESOURCES_DATA.flatMap((resource) =>
    resource.equipment.map((item) => ({
      ...item,
      category: resource.name,
    }))
  );

  // Состояние для поиска и фильтрации
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Фильтрация техники
  const filteredEquipment = allEquipment.filter((equipment) => {
    const matchesSearch =
      equipment.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.licensePlate.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || equipment.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Пагинация
  const totalPages = Math.ceil(filteredEquipment.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredEquipment.slice(startIndex, endIndex);

  // Сброс страницы при изменении фильтров
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, itemsPerPage]);

  // Уникальные категории для фильтра
  const categories = ["all", ...new Set(RESOURCES_DATA.map((r) => r.name))];

  // Функции для пагинации
  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex gap-[20px] justify-start items-center flex-col min-h-screen max-w-[1300px] w-full">
      <Header />

      <div className="w-full px-5">
        <BreadcrumbWithCustomSeparator
          items={[
            { label: "Главная", href: "/" },
            { label: "Ресурсы", href: "/resources" },
            { label: "Вся техника", isCurrent: true },
          ]}
          className=""
          separator={<span className="mx-2">›</span>}
        />
      </div>

      <main className="flex w-full flex-1 flex-col px-5 pb-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Вся техника компании</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Полный перечень всей техники и оборудования, доступного в нашем
            парке. Используйте фильтры для быстрого поиска нужной техники.
          </p>
        </div>

        {/* Фильтры и поиск */}
        <section className="mb-8 bg-muted/50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Поиск */}
            <div>
              <label
                htmlFor="search"
                className="block text-sm font-medium mb-2"
              >
                Поиск техники
              </label>
              <input
                id="search"
                type="text"
                placeholder="Поиск по марке, модели или номеру..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Фильтр по категории */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium mb-2"
              >
                Фильтр по категории
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Все категории</option>
                {RESOURCES_DATA.map((resource) => (
                  <option key={resource.id} value={resource.name}>
                    {resource.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Таблица со всей техникой */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            {/* Управление пагинацией */}
            <div className="m-4 max-h-max flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Показывать по:</span>
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(value: never) =>
                    setItemsPerPage(Number(value))
                  }
                >
                  <SelectTrigger className="w-20">
                    <SelectValue placeholder="10" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="15">15</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-gray-600">записей</span>
              </div>

              <div className="text-sm text-gray-600">
                Показано {startIndex + 1}-
                {Math.min(endIndex, filteredEquipment.length)} из{" "}
                {filteredEquipment.length} записей
              </div>
            </div>
            <Button variant="outline" asChild>
              <Link href="/resources">← Вернуться к основным ресурсам</Link>
            </Button>
          </div>

          {filteredEquipment.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 dark:bg-muted/50 rounded-lg">
              <p className="text-gray-500 text-lg">Техника не найдена</p>
              <p className="text-sm text-gray-400 mt-2">
                Попробуйте изменить параметры поиска или выбрать другую
                категорию
              </p>
            </div>
          ) : (
            <>
              {/* Десктопная таблица */}
              <div className="hidden md:block border rounded-lg overflow-hidden">
                <Table>
                  <TableCaption>
                    Полный список всей техники компании
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-left">ID</TableHead>
                      <TableHead className="text-left">Категория</TableHead>
                      <TableHead className="text-left">Марка</TableHead>
                      <TableHead className="text-left">Модель</TableHead>
                      <TableHead className="text-left">Вид</TableHead>
                      <TableHead className="text-left">Год выпуска</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentItems.map((item) => (
                      <TableRow
                        key={`${item.category}-${item.id}`}
                        className="hover:bg-gray-50 dark:hover:bg-muted/50"
                      >
                        <TableCell className="text-left">{item.id}</TableCell>
                        <TableCell className="text-left">
                          {item.category}
                        </TableCell>
                        <TableCell className="font-semibold text-left">
                          {item.brand}
                        </TableCell>
                        <TableCell className="text-left">
                          {item.model}
                        </TableCell>
                        <TableCell className="text-left">{item.type}</TableCell>
                        <TableCell className="text-left">{item.year}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Мобильные карточки */}
              <div className="md:hidden space-y-4">
                {currentItems.map((item) => (
                  <div
                    key={`${item.category}-${item.id}`}
                    className="bg-white dark:bg-muted/50 p-1 rounded-lg border shadow-sm"
                  >
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm font-medium">ID:</div>
                      <div>{item.id}</div>

                      <div className="text-sm font-medium">Категория:</div>
                      <div>{item.category}</div>

                      <div className="text-sm font-medium">Марка:</div>
                      <div className="font-semibold">{item.brand}</div>

                      <div className="text-sm font-medium">Модель:</div>
                      <div>{item.model}</div>

                      <div className="text-sm font-medium">Вид:</div>
                      <div>{item.type}</div>
                      <div className="text-sm font-medium">Год выпуска:</div>
                      <div>{item.year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Пагинация */}
        {filteredEquipment.length > 0 && (
          <section className="mb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              Страница {currentPage} из {totalPages}
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-1 mx-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="icon"
                      onClick={() => goToPage(pageNum)}
                      className="w-10 h-10"
                    >
                      {pageNum}
                    </Button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="px-2">...</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => goToPage(totalPages)}
                      className="w-10 h-10"
                    >
                      {totalPages}
                    </Button>
                  </>
                )}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          </section>
        )}

        {/* Сводная статистика по категориям */}
        <section className="mb-16 bg-gray-50 dark:bg-muted/50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            Распределение по категориям
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES_DATA.map((resource) => {
              const categoryEquipment = allEquipment.filter(
                (e) => e.category === resource.name
              );
              return (
                <div
                  key={resource.id}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <h3 className="font-semibold mb-2">{resource.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      {categoryEquipment.length}
                    </span>
                    <span className="text-sm text-gray-500">единиц</span>
                  </div>
                  <div className="mt-2 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${
                          (categoryEquipment.length / allEquipment.length) * 100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Статистика */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center bg-white p-3 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {allEquipment.length}
              </div>
              <div className="text-sm text-gray-600">Всего единиц</div>
            </div>
            <div className="text-center bg-white p-3 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {RESOURCES_DATA.length}
              </div>
              <div className="text-sm text-gray-600">Категорий</div>
            </div>
            <div className="text-center bg-white p-3 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {new Set(allEquipment.map((e) => e.brand)).size}
              </div>
              <div className="text-sm text-gray-600">Брендов</div>
            </div>
            <div className="text-center bg-white p-3 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">2020</div>
              <div className="text-sm text-gray-600">Средний год выпуска</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
