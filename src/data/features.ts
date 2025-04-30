import { LucideIcon, Music, Headphones, Radio } from "lucide-react";

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const serviceFeatures: Feature[] = [
  {
    id: 1,
    title: "Огромная библиотека",
    description: "Миллионы треков от независимых артистов и известных исполнителей",
    icon: Music
  },
  {
    id: 2,
    title: "Персональные рекомендации",
    description: "Находите новую музыку на основе ваших предпочтений",
    icon: Radio
  },
  {
    id: 3,
    title: "Мощный плеер",
    description: "Высокое качество звука и удобный интерфейс для прослушивания",
    icon: Headphones
  }
];
