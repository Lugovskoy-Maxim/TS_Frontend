import { StaticImageData } from 'next/image';
import sam_logo from '../../public/icons/sam.webp';
import exc_logo from '../../public/icons/exc.webp';
import buld_logo from '../../public/icons/buld.webp';
import kran_logo from '../../public/icons/kran.webp';
import bort_logo from '../../public/icons/bort.webp';
import kat_logo from '../../public/icons/kat.webp';

export interface Equipment {
  id: number;
  brand: string;
  model: string;
  type: string;
  category: string;
  licensePlate: string;
  year: number;
}

export interface ResourceCategory {
  id: number;
  name: string;
  logo: StaticImageData;
  count: string;
  equipment: Equipment[];
}

export const RESOURCES_DATA: ResourceCategory[] = [
  {
    id: 1,
    name: "Самосвалы",
    logo: sam_logo,
    count: "3 единицы",
    equipment: [
      { id: 1, brand: "КАМАЗ", model: "65115", type: "Самосвал", category: "Самосвалы", licensePlate: "А123БВ", year: 2020 },
      { id: 2, brand: "Volvo", model: "FMX", type: "Самосвал", category: "Самосвалы", licensePlate: "В456ГД", year: 2021 },
      { id: 3, brand: "MAN", model: "TGS", type: "Самосвал", category: "Самосвалы", licensePlate: "Е789ЖЗ", year: 2019 },
    ]
  },
  {
    id: 2,
    name: "Экскаваторы",
    logo: exc_logo,
    count: "2 единицы",
    equipment: [
      { id: 4, brand: "Hitachi", model: "ZX350", type: "Гусеничный", category: "Экскаваторы", licensePlate: "И012КЛ", year: 2022 },
      { id: 5, brand: "Caterpillar", model: "320D", type: "Гусеничный", category: "Экскаваторы", licensePlate: "М345НО", year: 2020 },
    ]
  },
  {
    id: 3,
    name: "Бульдозеры",
    logo: buld_logo,
    count: "2 единицы",
    equipment: [
      { id: 6, brand: "ЧТЗ", model: "Б10M", type: "Бульдозер", category: "Бульдозеры", licensePlate: "П678РС", year: 2018 },
      { id: 7, brand: "Shantui", model: "SD16", type: "Бульдозер", category: "Бульдозеры", licensePlate: "Т901УФ", year: 2021 },
    ]
  },
  {
    id: 4,
    name: "Краны",
    logo: kran_logo,
    count: "2 единицы",
    equipment: [
      { id: 8, brand: "Liebherr", model: "LTM 1100", type: "Автокран", category: "Краны", licensePlate: "Ф234ХЦ", year: 2023 },
      { id: 9, brand: "XCMG", model: "QY25K", type: "Автокран", category: "Краны", licensePlate: "Ч567ШЩ", year: 2020 },
    ]
  },
  {
    id: 5,
    name: "Бортовые",
    logo: bort_logo,
    count: "2 единицы",
    equipment: [
      { id: 10, brand: "ГАЗ", model: "3309", type: "Бортовой", category: "Бортовые", licensePlate: "Щ890ЪЫ", year: 2019 },
      { id: 11, brand: "ЗИЛ", model: "4331", type: "Бортовой", category: "Бортовые", licensePlate: "Ь123ЭЮ", year: 2017 },
    ]
  },
  {
    id: 6,
    name: "Катки",
    logo: kat_logo,
    count: "2 единицы",
    equipment: [
      { id: 12, brand: "Bomag", model: "BW 202", type: "Виброкаток", category: "Катки", licensePlate: "Я456АБ", year: 2022 },
      { id: 13, brand: "Dynapac", model: "CC500", type: "Виброкаток", category: "Катки", licensePlate: "В789ГД", year: 2021 },
    ]
  },
];