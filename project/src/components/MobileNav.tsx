import React from 'react';
import { Link } from './Link';
import { categories } from '../data/categories';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white">
        <div className="h-full flex flex-col">
          <div className="px-4 py-6 space-y-6">
            <nav className="space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-indigo-600"
                  onClick={onClose}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            <div className="space-y-6">
              <Link
                href="/sell"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={onClose}
              >
                Start Selling
              </Link>
              <Link
                href="/help"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                onClick={onClose}
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}