import Image from "next/image";
import bgImage from "../../../../public/banners/2.jpg";

const Age = () => {
  return (
    <section className="flex relative items-center justify-center min-h-[500px] overflow-hidden">
      {/* Фоновое изображение с затемнением */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={bgImage}
          alt="Age"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      </div>

      {/* Контент */}
      <div className="relative z-10 flex items-end justify-center text-white text-center h-full">
        {/* Большая цифра */}
        <div className="flex relative items-end justify-end h-full">
          <span className="leading-92 h-max text-[280px] md:text-[340px] lg:text-[600px] font-bold ">
            11
          </span>
        </div>
        
        {/* Текст справа от цифры */}
        <div className="flex flex-col items-start justify-end h-full ">
          <p className="leading-38 text-[120px] md:text-[160px] lg:text-[200px] font-light uppercase tracking-wider">
            Лет
          </p>
          <p className="text-[22px] md:text-[26px] lg:text-[32px] font-serif italic max-w-md">
            успешной работы компании
          </p>
        </div>
      </div>

      {/* Декоративные элементы (опционально) */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-2xl  h-0.5 bg-white/60 mx-auto" />
      </div> */}
    </section>
  );
};

export default Age;