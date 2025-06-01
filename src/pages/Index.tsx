import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Leaf",
      title: "Подбор экологичного топлива",
      description:
        "Помощь в выборе оптимального топлива с учетом экологических требований и бюджета",
    },
    {
      icon: "Truck",
      title: "Организация доставки",
      description:
        "Логистические решения с соблюдением экологических стандартов транспортировки",
    },
    {
      icon: "ShieldCheck",
      title: "Экологическая сертификация",
      description:
        "Консультации и помощь в получении сертификатов экологической безопасности",
    },
    {
      icon: "Recycle",
      title: "Утилизация отходов",
      description:
        "Организация экологически безопасной утилизации нефтепродуктов",
    },
  ];

  const advantages = [
    {
      icon: "TreePine",
      title: "Экологическая ответственность",
      description:
        "Снижение углеродного следа на 30% благодаря экологичным решениям",
    },
    {
      icon: "Users",
      title: "Сообщество единомышленников",
      description:
        "Объединяем клиентов, поставщиков и экспертов, разделяющих наши ценности",
    },
    {
      icon: "Award",
      title: "Прозрачность и качество",
      description:
        "Открытая статистика, сертификаты качества и независимые исследования",
    },
  ];

  const partners = [
    "ЛУКОЙЛ",
    "Роснефть",
    "Газпром нефть",
    "Татнефть",
    "Новатэк",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Экологичное топливо — <br />
              <span className="text-green-600">для чистого будущего!</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Мы — компания, которая заботится об окружающей среде и предлагает
              экологически чистые виды топлива для вашего бизнеса и личного
              использования
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />В каталог
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Калькулятор экоследа
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Посреднические услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг для работы с экологически чистыми
              нефтепродуктами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-green-600"
                    />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши преимущества
            </h2>
            <p className="text-xl text-gray-600">
              Почему выбирают нашу платформу
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={advantage.icon}
                    size={40}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши партнеры
            </h2>
            <p className="text-xl text-gray-600">
              Работаем с ведущими нефтяными компаниями России
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="px-8 py-4 bg-gray-100 rounded-lg">
                <span className="text-xl font-semibold text-gray-700">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы перейти на экологичное топливо?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу компаний, которые заботятся о будущем
            планеты
          </p>
          <Button
            size="lg"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
          >
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
