import Image from "next/image";
import careerImage from "../../../../public/career/career.png";

const CareerHeroSection = () => {
  return (
    <section className="text-center mb-16">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={careerImage}
          alt="Карьера в Трансстрой"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">
              Построй карьеру в Трансстрой
            </h1>
            <h2 className="text-2xl font-semibold mb-2">
              Станьте частью нашей команды!
            </h2>
            <p className="text-lg">
              Мы ищем талантливых и целеустремленных специалистов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHeroSection;