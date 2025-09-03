 const AboutHeroSection = () => {
  return (
    <section className="text-center mb-16">
      <h1 className="text-4xl font-bold mb-6">О компании</h1>
      <p className="text-lg max-w-3xl mx-auto mb-8">
        Строительная компания Трансстрой - это надежный партнер в реализации
        инфраструктурных проектов любой сложности. Мы работаем на рынке
        более 11 лет и за это время зарекомендовали себя как ответственный
        исполнитель.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-4 bg-muted/50">
          <div className="text-3xl font-bold text-blue-600">11+</div>
          <div className="text-sm">Лет на рынке</div>
        </div>
        <div className="text-center p-4 bg-muted/50">
          <div className="text-3xl font-bold text-blue-600">58+</div>
          <div className="text-sm">Реализованных проектов</div>
        </div>
        <div className="text-center p-4 bg-muted/50">
          <div className="text-3xl font-bold text-blue-600">100+</div>
          <div className="text-sm">Сотрудников</div>
        </div>
        <div className="text-center p-4 bg-muted/50">
          <div className="text-3xl font-bold text-blue-600">90+</div>
          <div className="text-sm">Единиц техники</div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;