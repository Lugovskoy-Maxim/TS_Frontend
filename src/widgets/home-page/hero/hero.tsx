import Image from "next/image";
import previewBanner from "../../../../public/banners/1.png";
const Hero = () => {
  return (
    <section className="flex relative h-[500px] overflow-hidden">
      <Image src={previewBanner} alt="Превью" className="grayscale-40" />
      <div className="w-4/6 h-max absolute top-2/4 left-1/6 p-5 bg-clip-padding backdrop-filter backdrop-brightness-50 bg-opacity-10 border border-transparent rounded-md">
        <h2 className="font-sans italic text-[#dad9d9]">
          Опытный и надёжный партнер - это про нас!
        </h2>
        <p className="text-5xl text-[#dad9d9]">Бесперебойное производство. </p>
        <p className="text-5xl text-[#dad9d9]">Собственный большой автопарк.</p>
      </div>
    </section>
  );
};

export default Hero;
