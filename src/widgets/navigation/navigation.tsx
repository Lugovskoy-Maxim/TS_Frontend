"use client";
import { Button } from "@/shared/ui";
import { usePathname } from "next/navigation";

interface NavigationProps {
  column?: boolean;
  className?: string;
}

export default function Navigation({ column = false, className = "" }: NavigationProps) {
  const pathname = usePathname();
  
  const navItems = [
    { text: "Главная", link: "/" },
    { text: "О нас", link: "/about" },
    { text: "Ресурсы", link: "/resources" },
    { text: "Вакансии", link: "/career" },
  ];

  return (
    <nav className={className}>
      <ul className={`flex gap-4 ${column ? "flex-col" : "flex-row"}`}>
        {navItems.map((item) => (
          <li key={item.link}>
            <Button
              text={item.text}
              link={item.link}
              active={pathname === item.link}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}