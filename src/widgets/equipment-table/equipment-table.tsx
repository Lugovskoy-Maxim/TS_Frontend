"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Equipment } from "@/types/equipment";
import { motion, AnimatePresence } from "framer-motion";

interface EquipmentTableProps {
  category: string;
  equipment: Equipment[];
  isVisible: boolean;
  onClose: () => void;
}

export default function EquipmentTable({
  category,
  equipment,
  isVisible,
  onClose,
}: EquipmentTableProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsMounted(true);
    }
  }, [isVisible]);

  const handleAnimationComplete = () => {
    if (!isVisible) {
      setIsMounted(false);
    }
  };

  if (!isMounted && !isVisible) {
    return null;
  }

  return (
    <AnimatePresence onExitComplete={handleAnimationComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
          className="mt-8"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">
              Техника из категории: {category}
            </h3>
            <Button
              variant="outline"
              onClick={onClose}
              className="transition-all duration-300 hover:bg-gray-100"
            >
              Скрыть
            </Button>
          </div>
          
          {equipment.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-center text-gray-500 p-8 border rounded-lg"
            >
              Нет данных о технике для выбранной категории
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="border rounded-lg overflow-hidden"
            >
              <Table>
                <TableCaption>Список техники по выбранной категории</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Марка</TableHead>
                    <TableHead className="text-center">Модель</TableHead>
                    <TableHead className="text-center">Вид</TableHead>
                    <TableHead className="text-center">Категория</TableHead>
                    <TableHead className="text-center">Год выпуска</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {equipment.map((item, index) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="hover:bg-muted/50"
                    >
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.brand}</TableCell>
                      <TableCell className="text-center">{item.model}</TableCell>
                      <TableCell className="text-center">{item.type}</TableCell>
                      <TableCell className="text-center">{item.category}</TableCell>
                      <TableCell className="text-center">{item.year}</TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}