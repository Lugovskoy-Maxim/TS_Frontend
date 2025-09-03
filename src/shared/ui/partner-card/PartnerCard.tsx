import Image, { StaticImageData } from "next/image";

interface ImageProps {
  name: string;
  src: StaticImageData;
}

const PartnerCard = ({ name, src }: ImageProps) => {
  return (
    <li
      className="flex flex-col gap-2 items-center justify-between bg-[var(--card)] grayscale
    hover:grayscale-0 transition-all duration-400 ease-in-out 
    rounded-lg shadow-lg p-4 h-full" 
    >
      <Image src={src} alt={name} height={100} width={100} className="h-[100px] min-h-[100px] w-[100px]"></Image>
      <h3 className="text-[10px] uppercase">{name}</h3>
    </li>
  );
};

export default PartnerCard;
