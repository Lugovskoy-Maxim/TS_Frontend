interface ManagementSystemSectionProps {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}

const ResourcesManagementSystemSection = ({
  title,
  items,
}: ManagementSystemSectionProps) => {
  return (
    <section className="mb-16 bg-muted/50 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesManagementSystemSection;
