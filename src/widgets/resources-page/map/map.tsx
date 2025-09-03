interface MapSectionProps {
  title: string;
  description: string;
  mapSrc: string;
}

const ResourcesMapSection = ({ title, description, mapSrc }: MapSectionProps) => {
  return (
    <section className="w-full pt-8">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <div>
        <p className="text-center mb-4 pt-2">{description}</p>
        <div className="flex w-full gap-8">
          <iframe
            src={mapSrc}
            width="560"
            height="400"
            frameBorder="1"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ResourcesMapSection;