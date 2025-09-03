import PARTNERS from "@/constants/partners";
import { PartnerCard } from "@/shared/ui/";
const Partners = () => {
  // Дублируем массив 3 раза для плавной анимации
  const tripledPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="flex flex-col items-center justify-center space-y-8 py-12 bg-muted/50">
      <h2 className="text-3xl font-bold text-[var(--primary)]">Нам доверяют</h2>

      <div className="w-full overflow-hidden relative">
        <div className="animate-scroll-partners flex gap-8 py-4">
          {tripledPartners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <PartnerCard name={partner.name} src={partner.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
