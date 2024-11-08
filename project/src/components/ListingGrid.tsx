import React from 'react';
import { ListingCard } from './ListingCard';
import { FilterBar } from './FilterBar';
import { SortDropdown } from './SortDropdown';

interface Listing {
  id: string;
  title: string;
  price: number;
  image: string;
  condition: string;
  location: string;
  createdAt: string;
  seller: {
    name: string;
    rating: number;
  };
}

interface ListingGridProps {
  listings: Listing[];
  title: string;
  showFilters?: boolean;
}

export function ListingGrid({ listings, title, showFilters = true }: ListingGridProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {showFilters && (
          <div className="flex items-center space-x-4">
            <SortDropdown />
          </div>
        )}
      </div>

      {showFilters && <FilterBar />}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}