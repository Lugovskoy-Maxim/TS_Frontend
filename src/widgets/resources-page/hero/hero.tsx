interface HeroSectionProps {
  title: string;
  description: string;
}

const ResourcesHeroSection = ({ title, description }: HeroSectionProps) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg max-w-3xl mx-auto">{description}</p>
    </div>
  );
};

export default ResourcesHeroSection;
