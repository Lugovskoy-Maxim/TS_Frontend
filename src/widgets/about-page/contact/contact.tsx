import { MapPin, Phone, Mail, Clock } from "lucide-react";

const AboutContactSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-muted/50 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Контакты</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-4 text-blue-600">
            <MapPin className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Адрес</h3>
          <p className="text-[var(--secondary-foreground)]">г. Сургут, ул. Маяковского, 40</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4 text-blue-600">
            <Phone className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Телефон</h3>
          <p className="text-[var(--secondary-foreground)]">+7 (3462) 55-50-90</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4 text-blue-600">
            <Mail className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-[var(--secondary-foreground)]">info@ts186.ru</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4 text-blue-600">
            <Clock className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Режим работы</h3>
          <p className="text-[var(--secondary-foreground)]">Пн-Пт: 9:00-17:00</p>
        </div>
      </div>
    </section>
  );
};

export default AboutContactSection;
