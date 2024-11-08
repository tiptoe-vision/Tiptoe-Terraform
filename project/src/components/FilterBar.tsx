import React from 'react';
import { Sliders } from 'lucide-react';

export function FilterBar() {
  return (
    <div className="flex items-center space-x-4 overflow-x-auto pb-4 scrollbar-hide">
      <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium">
        <Sliders className="h-4 w-4 mr-2" />
        Filters
      </button>
      
      {['Price Range', 'Condition', 'Location', 'Seller Rating'].map((filter) => (
        <button
          key={filter}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap transition-colors"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}