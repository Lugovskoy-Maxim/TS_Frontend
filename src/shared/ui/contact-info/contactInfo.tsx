import { ContactItem } from "./contactItem";
// import { MailIcon, PhoneIcon } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex gap-[20px]">
      <ContactItem
        title="Почта для связи"
        value="info@ts186.ru"
        // icon={<MailIcon className="w-4 h-4 mr-2" />}
        href="mailto:info@ts186.ru"
      />

      <ContactItem
        title="Телефон в Сургуте"
        value="+7 (3462) 555-090"
        // icon={<PhoneIcon className="w-4 h-4 mr-2" />}
        href="tel:+73462555090"
      />
    </div>
  );
}
