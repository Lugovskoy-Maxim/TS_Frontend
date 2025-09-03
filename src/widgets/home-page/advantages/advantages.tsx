import Banner from "../../../../public/banners/3.png";
import Image from "next/image";

const Advantages = () => {
  const advantages = [
    {
      title: "Частные проекты",
      description:
        "Реализуем коммерческие объекты любой сложности с применением современных технологий",
    },
    {
      title: "ГЧП проекты",
      description:
        "Специализируемся на государственно-частном партнерстве для реализации инфраструктурных проектов",
    },
    {
      title: "Комплексные решения",
      description:
        "Предлагаем полный цикл услуг от проектирования до ввода объектов в эксплуатацию",
    },
    {
      title: "Инновации",
      description:
        "Внедряем передовые технологии и sustainable-решения в строительстве",
    },
  ];

  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden">
      {/* Фоновое изображение с затемнением */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Banner}
          alt="Строительная инфраструктура"
          fill
          className="object-cover object-center"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Затемнение */}
      </div>

      {/* Контент */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Заголовок */}
        <div className="flex flex-col mb-16 text-center justify-center items-center">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl max-w-2/3">
            Мы воплощаем в жизнь инфраструктурные проекты
            <span className="block text-blue-400">разной сложности</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Благодаря государственно-частному партнерству и многолетнему опыту
          </p>
        </div>

        {/* Список преимуществ */}
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <li key={index} className="group max-w-[250px]">
              <div className="flex h-full flex-col items-center text-center transition-all duration-300 group-hover:scale-105">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {advantage.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-200">
                  {advantage.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
