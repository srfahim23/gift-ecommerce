import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, ChevronDown, Menu } from 'lucide-react';

interface NavItem {
  title: string;
  items: string[];
}

const navItems: NavItem[] = [
  {
    title: 'Occasions',
    items: ['Birthday', 'Anniversary', 'Wedding', 'Graduation', 'Baby Shower', 'Christmas']
  },
  {
    title: 'Recipients',
    items: ['For Him', 'For Her', 'Kids', 'Teens', 'Parents', 'Couples']
  },
  {
    title: 'Categories',
    items: ['Personalized', 'Home & Living', 'Jewelry', 'Electronics', 'Food & Drinks', 'Experience Gifts']
  }
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="border-b">
      <div className="bg-[#2c1810] text-white text-sm py-2">
        <div className="container mx-auto px-4 text-center">
          Free Shipping on orders over $75! Use code: FREESHIP75
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 md:hidden" />
            <div className="text-3xl font-bold text-[#e31837]">Gifts.com</div>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search gifts..."
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#e31837]"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Heart className="h-6 w-6 cursor-pointer hover:text-[#e31837]" />
            <div className="relative">
              <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-[#e31837]" />
              <span className="absolute -top-2 -right-2 bg-[#e31837] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </div>
          </div>
        </div>

        <nav className="hidden md:block mt-4">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center space-x-1 cursor-pointer hover:text-[#e31837]">
                  <span>{item.title}</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                {activeDropdown === item.title && (
                  <div className="absolute z-50 left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <span className="cursor-pointer hover:text-[#e31837]">Personalized</span>
            <span className="cursor-pointer hover:text-[#e31837]">Same Day Delivery</span>
            <span className="text-[#e31837] cursor-pointer hover:text-[#c41830]">Sale</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;