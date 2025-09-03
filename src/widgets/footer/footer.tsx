import { Button, Logo } from "@/shared/ui";
import { ContactItem } from "@/shared/ui/contact-info/contactItem";
import Navigation from "../navigation/navigation";

const Footer = () => {
  return (
    <footer className="mt-[20px] w-full">
      {/* Основной контент футера */}
      <div className="mx-auto w-full px-4 pt-12 pb-6 sm:px-6 lg:px-8 justify-between">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Лого и описание компании */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            {/* <p className="text-sm font-serif font-light italic text-[#909090]">
              Реализуем инфраструктурные проекты любой сложности через
              государственно-частное партнерство. Строим будущее вместе.
            </p> */}
          </div>

          {/* Навигация */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Навигация</h4>

            <Navigation column={true} />
          </div>
          {/* <div>
            <h4 className="mb-4 text-lg font-semibold">Компания</h4>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <Button text="Главная" link="/" />
              </li>
              <li>
                <Button text="О нас" link="/about" />
              </li>
              <li>
                <Button text="Мат. Часть" link="/contact" />
              </li>
              <li>
                <Button text="Вакансии" link="/signin" />
              </li>
            </ul>
          </div> */}

          {/* Контакты */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Контакты</h4>
            <div className="flex flex-col gap-[10px]">
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
              <ContactItem
                title="Адрес"
                value="  г. Сургут, ул. Маяковского, 40, 2 этаж"
                // icon={<PhoneIcon className="w-4 h-4 mr-2" />}
                // href="tel:+73462555090"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <p className="text-sm text-gray-400">
              © 2025 Трансстрой. Все права защищены.
            </p>
            {/* <div className="mt-4 flex space-x-6 text-sm text-gray-400 md:mt-0">
              <Link href="/privacy" className="transition hover:text-blue-400">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="transition hover:text-blue-400">
                Пользовательское соглашение
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
