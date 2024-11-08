import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import { Package2, Car, Home, Shirt, Flower2, Dumbbell, Gamepad2, Briefcase, Building2, Wrench } from 'lucide-react';

const categoryIcons = {
  electronics: Package2,
  vehicles: Car,
  property: Home,
  fashion: Shirt,
  home_garden: Flower2,
  sports: Dumbbell,
  toys_games: Gamepad2,
  business: Briefcase,
  jobs: Building2,
  services: Wrench,
};

export function CategorySelectPage() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        What are you selling?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
          return (
            <button
              key={category.id}
              onClick={() => navigate(`/sell/${category.id}`)}
              className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4 text-left">
                <h3 className="text-lg font-medium text-gray-900">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {category.fields.length} fields to fill
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}