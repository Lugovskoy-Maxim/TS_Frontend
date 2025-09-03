import { ResourceCategory } from "@/types/equipment";
import Image from "next/image";

interface ResourceCardProps {
  resource: ResourceCategory;
  isSelected: boolean;
  onSelect: (categoryName: string) => void;
}

export default function ResourceCard({ resource, isSelected, onSelect }: ResourceCardProps) {
  return (
    <li className="group">
      <button
        onClick={() => onSelect(resource.name)}
        className={`w-full flex flex-col items-center p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-1 ${
          isSelected
            ? "border-blue-900 scale-105"
            : "hover:border-blue-300"
        }`}
      >
        <div className="flex justify-center items-center mb-3 p-2 rounded-md group-hover:scale-110 transition-transform duration-300 h-[80px] w-[100px]">
          <Image
            src={resource.logo}
            alt={resource.name}
            width={80}
            height={60}
            className="object-contain contrast-10"
          />
        </div>
        <span className="text-lg font-bold text-center mb-1">
          {resource.name}
        </span>
        <span className="text-sm text-gray-600 text-center">
          {resource.count}
        </span>
      </button>
    </li>
  );
}