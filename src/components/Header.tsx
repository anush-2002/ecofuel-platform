import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";
import CartModal from "@/components/modals/CartModal";
import AuthModal from "@/components/modals/AuthModal";
import EcoCalculatorModal from "@/components/modals/EcoCalculatorModal";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: "Каталог", path: "/catalog" },
    { name: "Услуги", path: "/services" },
    { name: "Экология", path: "/ecology" },
    { name: "О нас", path: "/about" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-green-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Leaf" size={32} className="text-green-600" />
              <span className="text-2xl font-bold text-gray-900">
                ЭкоТопливо
              </span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    isActivePath(item.path)
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
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

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCalculatorOpen(true)}
            >
              <Icon name="Calculator" size={20} />
            </Button>

            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <Icon name="ShoppingCart" size={20} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Button>

            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{user?.phone}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="text-red-600 hover:text-red-700"
                >
                  Выйти
                </Button>
              </div>
            ) : (
              <Button
                className="bg-green-600 hover:bg-green-700"
                onClick={() => setIsAuthOpen(true)}
              >
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            )}
          </div>
        </div>
      </div>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <EcoCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </header>
  );
};

export default Header;
