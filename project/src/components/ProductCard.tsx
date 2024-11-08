import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from './Link';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  condition: string;
  location: string;
}

export function ProductCard({ id, title, price, image, condition, location }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/product/${id}`} className="block">
        <div className="relative aspect-square">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
            <Heart className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="mt-2 text-lg font-semibold text-gray-900">
            ${price.toLocaleString()}
          </p>
          <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
            <span>{condition}</span>
            <span>{location}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}