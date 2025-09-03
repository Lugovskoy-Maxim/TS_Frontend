interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
}

const ResourcesStatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section className="mb-16 bg-muted/50 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Наши ресурсы в цифрах
      </h2>
      <div className="flex flex-wrap gap-8 justify-between">
        {stats.map((stat, index) => (
          <div key={index} className="text-center flex-1 min-w-[150px]">
            <div className="text-4xl font-bold text-[var(--primary)]">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesStatsSection;
