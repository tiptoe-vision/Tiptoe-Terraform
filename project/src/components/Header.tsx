import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Globe } from 'lucide-react';
import { Link } from './Link';
import { MobileNav } from './MobileNav';

interface Country {
  code: string;
  name: string;
  flag: string;
}

interface HeaderProps {
  selectedCountry: Country;
  onChangeCountry: () => void;
}

export function Header({ selectedCountry, onChangeCountry }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 -ml-2 lg:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-500" />
              ) : (
                <Menu className="h-6 w-6 text-gray-500" />
              )}
            </button>
            <Link href="/" className="text-2xl font-bold text-indigo-600">MarketHub</Link>
          </div>
          
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search for anything..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={onChangeCountry}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl">{selectedCountry.flag}</span>
              <span className="hidden sm:inline text-sm font-medium text-gray-700">
                {selectedCountry.name}
              </span>
            </button>
            
            <Link href="/sell" className="hidden sm:block px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              Sell
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-500" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Link>
            <Link href="/profile">
              <User className="h-6 w-6 text-gray-500" />
            </Link>
          </div>
        </div>
      </div>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}