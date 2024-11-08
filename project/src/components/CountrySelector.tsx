import React, { useState } from 'react';
import { Globe, ChevronDown, MapPin } from 'lucide-react';

interface Country {
  code: string;
  name: string;
  flag: string;
}

const countries: Country[] = [
  // African Nations
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'GH', name: 'Ghana', flag: '🇬🇭' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
  { code: 'EG', name: 'Egypt', flag: '🇪🇬' },
  { code: 'MA', name: 'Morocco', flag: '🇲🇦' },
  { code: 'ET', name: 'Ethiopia', flag: '🇪🇹' },
  { code: 'TZ', name: 'Tanzania', flag: '🇹🇿' },
  { code: 'UG', name: 'Uganda', flag: '🇺🇬' },
  { code: 'RW', name: 'Rwanda', flag: '🇷🇼' },
  // Other Major Markets
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
];

interface CountrySelectorProps {
  onSelect: (country: Country) => void;
}

export function CountrySelector({ onSelect }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg">
          <div className="px-4 pb-4 pt-5 sm:p-6">
            <div className="mb-6 text-center">
              <Globe className="mx-auto h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                Choose your location
              </h3>
              <p className="mt-2 text-gray-500">
                Select your country to see relevant listings and prices
              </p>
            </div>

            <div className="relative mb-4">
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div className="max-h-60 overflow-y-auto rounded-lg border border-gray-200">
              {filteredCountries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => onSelect(country)}
                  className="flex w-full items-center px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-200 last:border-0"
                >
                  <span className="text-2xl mr-3">{country.flag}</span>
                  <span className="flex-1 text-left font-medium text-gray-900">
                    {country.name}
                  </span>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}