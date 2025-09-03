import { ContactInfo, Logo } from "@/shared/ui";
import { Navigation } from "..";

export default function Header() {
  return (
    <header className="row-start-1 flex gap-auto flex-wrap items-end justify-between h-[56px] max-w-[1300px] w-full px-[20px]">
      <Logo />
      <Navigation />
      <ContactInfo />
    </header>
  );
}
