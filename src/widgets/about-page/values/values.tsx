import { values } from "@/constants/about";
const AboutValuesSection = () => {
  return (
    <section className="mb-16 bg-muted/50 p-8">
      <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white dark:bg-muted/50 rounded-lg shadow-sm"
          >
            <div className="flex justify-center mb-4 text-blue-600">
              <Icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-[var(--primary)]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutValuesSection;