const CareerContactsSection = () => {
  return (
    <section className="bg-muted/50 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Контакты отдела кадров
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Рекрутинг</h3>
          <p className="mb-4">
            По вопросам трудоустройства обращайтесь в отдел кадров:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="font-medium mr-2">Телефон:</span>
              +7 (3462) 55-50-90 (доб. 15)
            </li>
            <li className="flex items-center">
              <span className="font-medium mr-2">Email:</span>
              personal@ts186.ru
            </li>
            <li className="flex items-center">
              <span className="font-medium mr-2">Адрес:</span>
              г. Сургут, ул. Маяковского, 40, кабинет `Отдел кадров`
            </li>
            <li className="flex items-center">
              <span className="font-medium mr-2">Время работы:</span>
              Пн-Пт: 9:00-17:00 (перерыв 13:00-14:00)
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Отправьте документы</h3>
          <p className="mb-4">
            Для рассмотрения вашей кандидатуры подготовьте:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Резюме с описанием опыта работы</li>
            <li>Копии документов об образовании</li>
            <li>Копии сертификатов и свидетельств (при наличии)</li>
            <li>Рекомендательные письма (при наличии)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CareerContactsSection;
