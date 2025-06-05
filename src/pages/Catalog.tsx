import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";

const Catalog = () => {
  const { addItem } = useCart();

  const allProducts = [
    {
      category: "Бензин",
      icon: "Car",
      products: [
        {
          id: "ai-92",
          name: "Бензин АИ-92 ЭКО",
          price: "52.80",
          eco: "Евро-5",
        },
        {
          id: "ai-95",
          name: "Бензин АИ-95 ЭКО",
          price: "56.20",
          eco: "Евро-6",
        },
        {
          id: "ai-98",
          name: "Бензин АИ-98 Премиум",
          price: "62.90",
          eco: "Класс К5",
        },
        {
          id: "ai-100",
          name: "Бензин АИ-100 Спорт",
          price: "69.50",
          eco: "Класс К5+",
        },
      ],
    },
    {
      category: "Дизельное топливо",
      icon: "Truck",
      products: [
        { id: "dt-euro5", name: "ДТ Евро-5", price: "55.40", eco: "Евро-5" },
        {
          id: "dt-arctic",
          name: "ДТ Арктическое",
          price: "57.80",
          eco: "Класс 3",
        },
        {
          id: "dt-winter",
          name: "ДТ Зимнее ЭКО",
          price: "56.90",
          eco: "Евро-6",
        },
        {
          id: "dt-summer",
          name: "ДТ Летнее ЭКО",
          price: "54.60",
          eco: "Евро-6",
        },
      ],
    },
    {
      category: "Газовое топливо",
      icon: "Flame",
      products: [
        { id: "metan", name: "Метан КПГ", price: "28.50", eco: "CO2 -25%" },
        {
          id: "spg",
          name: "СПГ для грузовиков",
          price: "32.10",
          eco: "CO2 -20%",
        },
        {
          id: "propan",
          name: "Пропан автомобильный",
          price: "26.80",
          eco: "Класс А",
        },
        {
          id: "butan",
          name: "Бутан технический",
          price: "25.90",
          eco: "Класс А",
        },
      ],
    },
    {
      category: "Биотопливо",
      icon: "Leaf",
      products: [
        {
          id: "biodiesel",
          name: "Биодизель B20",
          price: "58.90",
          eco: "CO2 -40%",
        },
        { id: "ethanol", name: "Этанол E85", price: "45.20", eco: "CO2 -60%" },
        { id: "biometan", name: "Биометан", price: "29.90", eco: "CO2 -80%" },
        {
          id: "biogas",
          name: "Биогаз очищенный",
          price: "31.40",
          eco: "CO2 -85%",
        },
      ],
    },
  ];

  const handleAddToCart = (product: any, category: string) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      eco: product.eco,
      category: category,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Каталог экологичных нефтепродуктов
          </h1>
          <p className="text-xl text-gray-600">
            Полный ассортимент сертифицированного топлива с гарантией качества
          </p>
        </div>

        <div className="space-y-12">
          {allProducts.map((category, index) => (
            <div key={index}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Icon
                    name={category.icon}
                    size={24}
                    className="text-green-600"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, idx) => (
                  <Card
                    key={idx}
                    className="hover:shadow-lg transition-shadow border-green-100"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <div className="text-green-600 font-medium">
                        {product.eco}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900 mb-2">
                            {product.price} ₽/л
                          </div>
                          <div className="text-sm text-gray-500">
                            За литр с НДС
                          </div>
                        </div>
                        <Button
                          onClick={() =>
                            handleAddToCart(product, category.category)
                          }
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Icon name="Plus" size={16} className="mr-2" />В
                          корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
