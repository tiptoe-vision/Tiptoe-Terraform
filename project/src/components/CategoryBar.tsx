import React, { useState } from 'react';
import { Link } from './Link';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Category {
  name: string;
  subcategories: string[];
}

const categories: Category[] = [
  {
    name: 'Electronics',
    subcategories: ['Phones & Tablets', 'Computers', 'Gaming', 'Cameras', 'Audio & Music']
  },
  {
    name: 'Vehicles',
    subcategories: ['Cars', 'Motorcycles', 'Trucks', 'Auto Parts', 'Rentals']
  },
  {
    name: 'Property',
    subcategories: ['Houses', 'Apartments', 'Land', 'Commercial', 'Short Lets']
  },
  {
    name: 'Fashion',
    subcategories: ['Clothing', 'Shoes', 'Watches', 'Bags', 'Jewelry']
  },
  {
    name: 'Home & Garden',
    subcategories: ['Furniture', 'Kitchen', 'Garden', 'Home Decor', 'Tools']
  },
  {
    name: 'Sports',
    subcategories: ['Fitness', 'Outdoor Sports', 'Team Sports', 'Cycling', 'Water Sports']
  },
  {
    name: 'Toys & Games',
    subcategories: ['Video Games', 'Board Games', 'Toys', 'Collectibles', 'Outdoor Play']
  },
  {
    name: 'Business',
    subcategories: ['Equipment', 'Office Supplies', 'Commercial', 'Retail', 'Industrial']
  },
  {
    name: 'Jobs',
    subcategories: ['Full Time', 'Part Time', 'Remote', 'Internship', 'Gigs']
  },
  {
    name: 'Services',
    subcategories: ['Home Services', 'Professional', 'Events', 'Lessons', 'Repairs']
  }
];

export function CategoryBar() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <Link
                href={`/category/${category.name.toLowerCase()}`}
                className="flex items-center text-gray-600 whitespace-nowrap hover:text-indigo-600 text-sm font-medium group"
              >
                {category.name}
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                  hoveredCategory === category.name ? 'rotate-180' : ''
                }`} />
              </Link>

              {hoveredCategory === category.name && (
                <div className="absolute top-full left-0 z-50 w-56 mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory}
                      href={`/category/${category.name.toLowerCase()}/${subcategory.toLowerCase()}`}
                      className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      {subcategory}
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-100">
                    <Link
                      href={`/category/${category.name.toLowerCase()}`}
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      View All {category.name}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}