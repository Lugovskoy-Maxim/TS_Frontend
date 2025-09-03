import { Button } from "@/components/ui/button";

const CareerHiringProcess = () => {
  return (
    <section className="mb-16 bg-gray-50 dark:bg-muted/50 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Как устроиться к нам на работу
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-white dark:bg-muted/50 rounded-lg">
          <div className="text-3xl font-bold text-[var(--primary)] mb-4">
            1
          </div>
          <h3 className="text-xl font-semibold mb-3">Отправьте резюме</h3>
          <p className="text-gray-600">
            Заполните форму на сайте или отправьте резюме на нашу почту с
            указанием желаемой должности.
          </p>
        </div>
        <div className="text-center p-6 bg-white dark:bg-muted/50 rounded-lg">
          <div className="text-3xl font-bold text-[var(--primary)] mb-4">
            2
          </div>
          <h3 className="text-xl font-semibold mb-3">Собеседование</h3>
          <p className="text-gray-600">
            Мы свяжемся с вами для проведения собеседования с HR.
          </p>
        </div>
        <div className="text-center p-6 bg-white dark:bg-muted/50 rounded-lg">
          <div className="text-3xl font-bold text-[var(--primary)] mb-4">
            3
          </div>
          <h3 className="text-xl font-semibold mb-3">Трудоустройство</h3>
          <p className="text-gray-600">
            После успешного прохождения собеседования мы предложим вам
            оформить все необходимые документы.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">
          Отправьте свое резюме
        </h3>
        <p className="mb-6">
          Если вы не нашли подходящую вакансию, но хотите работать в нашей
          компании, отправьте свое резюме и мы рассмотрим его при появлении
          новых позиций.
        </p>
        <Button variant="default">Отправить резюме</Button>
      </div>
    </section>
  );
};

export default CareerHiringProcess;
