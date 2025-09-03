const AboutMapSection = () => {
  return (
    <section className="w-full pt-8">
      <h2 className="text-3xl font-bold text-center">Офис компании</h2>
      <div>
        <p className="text-center mb-4 pt-2">
          находится в г. Сургуте, ул. Маяковского, 40
        </p>
        <div className="flex w-full gap-8">
          <iframe
            src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=73.423216%2C61.264621&mode=search&oid=40026629784&ol=biz&z=17.29"
            width="560"
            height="400"
            allowFullScreen
            className="w-full"
          />
          <iframe
            className="w-full"
            src="https://yandex.ru/maps-reviews-widget/40026629784?comments"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMapSection;
