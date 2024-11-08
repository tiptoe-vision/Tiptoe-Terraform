import React from 'react';
import { Link } from '../components/Link';
import { FeaturedCategoryListings } from '../components/FeaturedCategoryListings';

interface Country {
  code: string;
  name: string;
  flag: string;
}

interface HomePageProps {
  country: Country;
}

const featuredCategories = [
  'Electronics',
  'Vehicles',
  'Property',
  'Fashion',
  'Home & Garden'
];

export function HomePage({ country }: HomePageProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="space-y-16">
        {featuredCategories.map((category) => (
          <FeaturedCategoryListings
            key={category}
            category={category}
            countryCode={country.code}
          />
        ))}
      </section>

      <section className="mt-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Start selling today
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of sellers who trust MarketHub to sell their items.
            It's free to list, and you only pay when you sell.
          </p>
          <div className="mt-8">
            <Link
              href="/sell"
              className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Start Selling
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}