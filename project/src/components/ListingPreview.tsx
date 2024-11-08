import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import { formatCurrency } from '../utils/currency';

interface ListingPreviewProps {
  data: Record<string, any>;
  category: string;
  countryCode: string;
}

export function ListingPreview({ data, category, countryCode }: ListingPreviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        {data.images && data.images[0] && (
          <img
            src={URL.createObjectURL(data.images[0])}
            alt={data.title}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="absolute top-4 right-4 space-x-2">
          <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
            <Share2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{data.title}</h1>
            <p className="mt-1 text-lg font-semibold text-indigo-600">
              {formatCurrency(Number(data.price), countryCode)}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-900">Details</h2>
          <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
            {Object.entries(data).map(([key, value]) => {
              if (key === 'images' || key === 'description') return null;
              return (
                <div key={key} className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 capitalize">
                    {key.replace(/_/g, ' ')}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">{String(value)}</dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-900">Description</h2>
          <p className="mt-2 text-gray-600 whitespace-pre-wrap">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}