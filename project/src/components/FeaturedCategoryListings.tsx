import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ListingCard } from './ListingCard';

interface Listing {
  id: string;
  title: string;
  price: number;
  image: string;
  condition: string;
  location: string;
  createdAt: string;
  countryCode: string;
  seller: {
    name: string;
    rating: number;
  };
}

interface FeaturedCategoryListingsProps {
  category: string;
  countryCode: string;
}

export function FeaturedCategoryListings({ category, countryCode }: FeaturedCategoryListingsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Show 4 items per page

  // Mock featured listings for each category
  const getFeaturedListings = (): Listing[] => {
    switch (category.toLowerCase()) {
      case 'electronics':
        return [
          {
            id: `${category}-1`,
            title: 'MacBook Pro M2',
            price: 1499,
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
            condition: 'New',
            location: 'Lagos',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Tech Store', rating: 4.9 }
          },
          {
            id: `${category}-2`,
            title: 'iPhone 15 Pro',
            price: 999,
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
            condition: 'New',
            location: 'Accra',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Mobile Hub', rating: 4.8 }
          },
          {
            id: `${category}-3`,
            title: 'Sony A7 IV',
            price: 2499,
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
            condition: 'New',
            location: 'Nairobi',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Camera World', rating: 4.7 }
          },
          {
            id: `${category}-4`,
            title: 'Samsung QLED TV',
            price: 1299,
            image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
            condition: 'New',
            location: 'Cairo',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Electronics Hub', rating: 4.9 }
          }
        ];
      case 'vehicles':
        return [
          {
            id: `${category}-1`,
            title: '2023 Toyota Camry',
            price: 25000,
            image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
            condition: 'New',
            location: 'Cairo',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Auto Deals', rating: 4.7 }
          },
          {
            id: `${category}-2`,
            title: 'Mercedes-Benz C-Class',
            price: 35000,
            image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
            condition: 'Like New',
            location: 'Nairobi',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Luxury Motors', rating: 4.9 }
          },
          {
            id: `${category}-3`,
            title: 'BMW X5 2023',
            price: 45000,
            image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80',
            condition: 'New',
            location: 'Lagos',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Premium Cars', rating: 4.8 }
          },
          {
            id: `${category}-4`,
            title: 'Audi Q7',
            price: 55000,
            image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80',
            condition: 'New',
            location: 'Accra',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Auto Excellence', rating: 4.9 }
          }
        ];
      case 'property':
        return [
          {
            id: `${category}-1`,
            title: 'Luxury Apartment',
            price: 250000,
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
            condition: 'New',
            location: 'Johannesburg',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Prime Properties', rating: 4.8 }
          },
          {
            id: `${category}-2`,
            title: 'Beach Villa',
            price: 450000,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
            condition: 'Excellent',
            location: 'Cape Town',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Coastal Homes', rating: 4.9 }
          },
          {
            id: `${category}-3`,
            title: 'Modern Office Space',
            price: 350000,
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
            condition: 'New',
            location: 'Nairobi',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Commercial Realty', rating: 4.7 }
          },
          {
            id: `${category}-4`,
            title: 'Garden Townhouse',
            price: 280000,
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
            condition: 'Like New',
            location: 'Lagos',
            countryCode,
            createdAt: new Date().toISOString(),
            seller: { name: 'Urban Living', rating: 4.8 }
          }
        ];
      default:
        return [];
    }
  };

  const listings = getFeaturedListings();
  const totalPages = Math.ceil(listings.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  if (listings.length === 0) return null;

  const currentListings = listings.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900">
          Featured in {category}
        </h3>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentPage ? 'bg-indigo-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="relative group">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        {totalPages > 1 && (
          <>
            <button
              onClick={prevPage}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            <button
              onClick={nextPage}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}