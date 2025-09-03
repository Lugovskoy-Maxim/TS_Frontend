import Image from "next/image";
import projectImage from "../../../../public/about/projectImage.png";

const AboutMissionSection = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
          <p className="text-lg mb-4">
            Мы создаем современную инфраструктуру, которая улучшает качество
            жизни людей и способствует экономическому развитию регионов.
            Наша цель - реализовывать проекты, которые становятся точкой
            роста для территорий.
          </p>
          <p className="text-lg">
            Через государственно-частное партнерство мы объединяем ресурсы
            для реализации масштабных инфраструктурных проектов, которые
            преобразуют города и создают новые возможности для бизнеса и
            жителей.
          </p>
        </div>
        <div className="relative h-80 overflow-hidden">
          <Image
            src={projectImage}
            alt="Строительный проект"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
