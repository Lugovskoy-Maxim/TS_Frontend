import { StaticImageData } from 'next/image';

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