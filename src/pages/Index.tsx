import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const productCategories = [
    {
      title: "Бензин",
      icon: "Car",
      description: "Экологически чистый бензин с низким содержанием серы",
      products: [
        { name: "Бензин АИ-92 ЭКО", price: "52.80", eco: "Евро-5" },
        { name: "Бензин АИ-95 ЭКО", price: "56.20", eco: "Евро-6" },
        { name: "Бензин АИ-98 Премиум", price: "62.90", eco: "Класс К5" },
      ],
    },
    {
      title: "Дизельное топливо",
      icon: "Truck",
      description: "Дизтопливо с улучшенными экологическими показателями",
      products: [
        { name: "ДТ Евро-5", price: "55.40", eco: "Евро-5" },
        { name: "ДТ Арктическое", price: "57.80", eco: "Класс 3" },
        { name: "ДТ Зимнее ЭКО", price: "56.90", eco: "Евро-6" },
      ],
    },
    {
      title: "Газовое топливо",
      icon: "Flame",
      description: "СПГ и КПГ для экологичного транспорта",
      products: [
        { name: "Метан КПГ", price: "28.50", eco: "CO2 -25%" },
        { name: "СПГ для грузовиков", price: "32.10", eco: "CO2 -20%" },
        { name: "Пропан автомобильный", price: "26.80", eco: "Класс А" },
      ],
    },
    {
      title: "Биотопливо",
      icon: "Leaf",
      description: "Возобновляемые виды топлива из биомассы",
      products: [
        { name: "Биодизель B20", price: "58.90", eco: "CO2 -40%" },
        { name: "Этанол E85", price: "45.20", eco: "CO2 -60%" },
        { name: "Биометан", price: "29.90", eco: "CO2 -80%" },
      ],
    },
  ];

  const services = [
    {
      icon: "Search",
      title: "Подбор топлива",
      description: "Поможем выбрать оптимальный вид топлива для ваших задач",
    },
    {
      icon: "Users",
      title: "Поиск поставщиков",
      description: "Найдем надежных поставщиков экологичного топлива",
    },
    {
      icon: "Truck",
      title: "Организация доставки",
      description: "Логистика с соблюдением экологических стандартов",
    },
    {
      icon: "Recycle",
      title: "Утилизация отходов",
      description: "Экологичная переработка нефтепродуктов",
    },
    {
      icon: "Award",
      title: "Сертификация",
      description: "Помощь в получении экологических сертификатов",
    },
    {
      icon: "Calculator",
      title: "Экологический след",
      description: "Расчет и снижение углеродного следа",
    },
  ];

  const ecoInitiatives = [
    {
      title: "Восстановление лесов",
      progress: 85,
      target: "10,000 деревьев",
      icon: "TreePine",
    },
    {
      title: "Очистка водоемов",
      progress: 60,
      target: "50 км береговой линии",
      icon: "Waves",
    },
    {
      title: "Солнечная энергия",
      progress: 75,
      target: "100 МВт мощности",
      icon: "Sun",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-green-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Leaf" size={32} className="text-green-600" />
                <span className="text-2xl font-bold text-gray-900">
                  ЭкоТопливо
                </span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Каталог
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Услуги
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Экология
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Блог
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  О нас
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex relative">
                <input
                  type="text"
                  placeholder="Поиск нефтепродуктов..."
                  className="w-80 px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Icon
                  name="Search"
                  size={20}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Icon name="Calculator" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button className="bg-green-600 hover:bg-green-700">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Экологичное топливо — <br />
              <span className="text-green-600">для чистого будущего!</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Платформа посреднических услуг в сфере экологически чистых
              нефтепродуктов. Соединяем поставщиков и потребителей ради
              устойчивого развития планеты
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Перейти в каталог
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать экослед
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Партнеров-поставщиков</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  -40%
                </div>
                <div className="text-gray-600">Снижение CO₂ выбросов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  50М л
                </div>
                <div className="text-gray-600">Экотоплива поставлено</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Каталог экологичных нефтепродуктов
            </h2>
            <p className="text-xl text-gray-600">
              Широкий выбор сертифицированного топлива с низким углеродным
              следом
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-green-100"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={category.icon}
                      size={32}
                      className="text-green-600"
                    />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    {category.title}
                  </CardTitle>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.products.map((product, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors"
                      >
                        <div>
                          <div className="font-medium text-gray-900">
                            {product.name}
                          </div>
                          <div className="text-sm text-green-600 font-medium">
                            {product.eco}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">
                            {product.price} ₽/л
                          </div>
                          <Button
                            size="sm"
                            className="mt-1 bg-green-600 hover:bg-green-700"
                          >
                            Заказать
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Посреднические услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг для экологически ответственного бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-green-100"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={service.icon}
                      size={28}
                      className="text-green-600"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eco Initiatives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Экологические инициативы
            </h2>
            <p className="text-xl text-gray-600">
              Наш вклад в сохранение планеты для будущих поколений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ecoInitiatives.map((initiative, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-green-100"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Icon
                        name={initiative.icon}
                        size={24}
                        className="text-green-600"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {initiative.title}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Прогресс</span>
                      <span>{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    <strong>Цель:</strong> {initiative.target}
                  </p>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    <Icon name="Heart" size={16} className="mr-2" />
                    Поддержать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Присоединяйтесь к экологической революции
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Каждый литр экологичного топлива — это шаг к чистому будущему.
            Начните свой путь к углеродной нейтральности уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <Icon name="UserPlus" size={20} className="mr-2" />
              Стать партнером
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Icon name="MapPin" size={20} className="mr-2" />
              Карта инициатив
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Leaf" size={24} className="text-green-400" />
                <span className="text-xl font-bold">ЭкоТопливо</span>
              </div>
              <p className="text-gray-400 mb-4">
                Экологическая платформа для торговли нефтепродуктами
              </p>
              <div className="flex space-x-3">
                <Icon
                  name="Facebook"
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Twitter"
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Icon
                  name="Linkedin"
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Бензин ЭКО
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Дизельное топливо
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Газовое топливо
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Биотопливо
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Подбор топлива
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Логистика
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Сертификация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Утилизация
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (800) 555-01-01
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@ecotoplivo.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, Лубянский пр., 20с1
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 ЭкоТопливо. Все права защищены. | Создано для
              устойчивого будущего
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
