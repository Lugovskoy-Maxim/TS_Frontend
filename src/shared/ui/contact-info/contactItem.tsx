import Link from "next/link";
import { ReactNode } from "react";

interface ContactItemProps {
  title: string;
  value: string;
  icon?: ReactNode;
  href?: string;
}

export const ContactItem = ({ title, value, icon, href }: ContactItemProps) => {
  return (
    <div className="flex flex-col items-start">
      <span className="text-sm font-serif font-light italic text-[#909090]">
        {title}
      </span>
      {href ? (
        <Link
          href={href}
          className="flex item-center justify-center text-base font-medium transition-colors hover:text-[var(--secondary-color)]"
        >
          {icon}
          {value}
        </Link>
      ) : (
        <span className="flex item-center justify-center text-base font-medium">
          {icon}
          {value}
        </span>
      )}
    </div>
  );
};
