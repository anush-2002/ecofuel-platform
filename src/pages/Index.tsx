import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      title: "Для дома",
      icon: "Home",
      subcategories: [
        { name: "Мебель", count: 1200, icon: "Armchair" },
        { name: "Текстиль", count: 890, icon: "Shirt" },
        { name: "Декор", count: 650, icon: "Palette" },
        { name: "Освещение", count: 320, icon: "Lightbulb" },
      ],
    },
    {
      title: "Для сада",
      icon: "TreePine",
      subcategories: [
        { name: "Мебель", count: 450, icon: "Chair" },
        { name: "Инструменты", count: 780, icon: "Wrench" },
        { name: "Растения", count: 920, icon: "Flower" },
        { name: "Декор", count: 340, icon: "Sparkles" },
      ],
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Диван угловой 'Комфорт'",
      price: 45990,
      originalPrice: 52990,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      badge: "Хит продаж",
    },
    {
      id: 2,
      name: "Комплект постельного белья",
      price: 2990,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1615887024303-74d325b9b7ad?w=400",
      badge: "Новинка",
    },
    {
      id: 3,
      name: "Садовый стол из тика",
      price: 18990,
      originalPrice: 22990,
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=400",
      badge: "Скидка",
    },
    {
      id: 4,
      name: "Торшер 'Уют'",
      price: 7990,
      originalPrice: null,
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400",
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Home" size={28} className="text-green-600" />
                <span className="text-2xl font-bold text-gray-900">
                  Уютный Дом
                </span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Для дома
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Для сада
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-600 font-medium"
                >
                  Акции
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
                  placeholder="Поиск товаров..."
                  className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Icon
                  name="Search"
                  size={20}
                  className="absolute right-3 top-3 text-gray-400"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Icon name="Heart" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Создайте дом своей мечты с <br />
              <span className="text-green-600">Уютным Домом</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Более 5000 товаров для дома и сада. Мебель, текстиль, декор,
              освещение — всё для создания уютной атмосферы в вашем доме
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
              >
                <Icon name="Gift" size={20} className="mr-2" />
                Идеи для подарков
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Каталог товаров
            </h2>
            <p className="text-xl text-gray-600">
              Выберите категорию для покупок
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon
                      name={category.icon}
                      size={32}
                      className="text-green-600"
                    />
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.subcategories.map((sub, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <Icon
                          name={sub.icon}
                          size={20}
                          className="text-gray-600"
                        />
                        <div>
                          <div className="font-medium text-gray-900">
                            {sub.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {sub.count} товаров
                          </div>
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

      {/* Featured Products */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Рекомендуемые товары
            </h2>
            <p className="text-xl text-gray-600">
              Популярные товары этого месяца
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full ${
                        product.badge === "Хит продаж"
                          ? "bg-red-100 text-red-800"
                          : product.badge === "Новинка"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-xl font-bold text-gray-900">
                        {product.price.toLocaleString()} ₽
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {product.originalPrice.toLocaleString()} ₽
                        </span>
                      )}
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />В
                    корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: "Truck",
                title: "Быстрая доставка",
                desc: "Доставим за 1-3 дня",
              },
              {
                icon: "Shield",
                title: "Гарантия качества",
                desc: "2 года гарантии",
              },
              {
                icon: "CreditCard",
                title: "Удобная оплата",
                desc: "Наличные и карты",
              },
              {
                icon: "Headphones",
                title: "Поддержка 24/7",
                desc: "Всегда на связи",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={item.icon}
                    size={32}
                    className="text-orange-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Home" size={24} className="text-green-400" />
                <span className="text-xl font-bold">Уютный Дом</span>
              </div>
              <p className="text-gray-400">
                Создаем уют в каждом доме с 2020 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Мебель
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Текстиль
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Декор
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Сад
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Гарантия
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>📞 +7 (800) 123-45-67</div>
                <div>📧 info@uyutdom.ru</div>
                <div>📍 Москва, ул. Уютная, 1</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
