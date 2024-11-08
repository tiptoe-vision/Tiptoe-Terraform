import React, { useState } from 'react';
import { Heart, Star, Share2, X } from 'lucide-react';
import { Link } from './Link';
import { formatCurrency } from '../utils/currency';

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

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);

  const shareUrl = `${window.location.origin}/listing/${listing.id}`;
  const shareTitle = `Check out ${listing.title} on MarketHub`;

  const shareOptions = [
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(`${shareTitle}\n${shareUrl}`)}`,
      color: 'bg-[#25D366] hover:bg-[#128C7E]'
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'bg-[#1877F2] hover:bg-[#166FE5]'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-[#1DA1F2] hover:bg-[#1A91DA]'
    },
    {
      name: 'Telegram',
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: 'bg-[#0088CC] hover:bg-[#0077B5]'
    },
    {
      name: 'TikTok',
      url: `https://www.tiktok.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      color: 'bg-[#000000] hover:bg-[#333333]'
    },
    {
      name: 'Snapchat',
      url: `https://www.snapchat.com/share?url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-[#FFFC00] hover:bg-[#F7E800] text-black'
    }
  ];

  const handleShare = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    setShowShareMenu(false);
  };

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
      <Link href={`/listing/${listing.id}`} className="block">
        <div className="relative aspect-square">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute top-3 right-3 flex space-x-2">
            <button 
              className="p-2 rounded-full bg-white/90 hover:bg-white shadow-sm hover:shadow-md transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                // Handle wishlist toggle
              }}
            >
              <Heart className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              className="p-2 rounded-full bg-white/90 hover:bg-white shadow-sm hover:shadow-md transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                setShowShareMenu(!showShareMenu);
              }}
            >
              {showShareMenu ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Share2 className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
          {showShareMenu && (
            <div className="absolute top-14 right-3 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-10">
              <div className="p-2 space-y-1">
                {shareOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={(e) => {
                      e.preventDefault();
                      handleShare(option.url);
                    }}
                    className={`w-full px-4 py-2 text-sm rounded-md ${option.color} ${
                      option.name === 'Snapchat' ? 'text-black' : 'text-white'
                    } transition-colors`}
                  >
                    Share on {option.name}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-lg font-semibold text-white">
              {formatCurrency(listing.price, listing.countryCode)}
            </p>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {listing.title}
          </h3>
          
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-gray-500">{listing.condition}</span>
            <span className="text-gray-500">{listing.location}</span>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{listing.seller.rating}</span>
            </div>
            <span className="text-xs text-gray-500">
              {new Date(listing.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}