import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { CategoryForm } from '../components/CategoryForm';
import { ListingPreview } from '../components/ListingPreview';

interface Country {
  code: string;
  name: string;
  flag: string;
}

interface SellPageProps {
  country: Country;
}

export function SellPage({ country }: SellPageProps) {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(c => c.id === categoryId);
  const [formData, setFormData] = useState<Record<string, any> | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = async (data: Record<string, any>) => {
    setFormData(data);
    setShowPreview(true);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', data);
  };

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Sell in {category.name}
        </h1>
        {formData && (
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100"
          >
            {showPreview ? 'Edit Listing' : 'Preview Listing'}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={showPreview ? 'hidden lg:block' : ''}>
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <CategoryForm category={category} onSubmit={handleSubmit} countryCode={country.code} />
            </div>
          </div>
        </div>

        {showPreview && formData && (
          <div className="lg:col-start-2">
            <ListingPreview 
              data={formData} 
              category={category.name} 
              countryCode={country.code}
            />
          </div>
        )}
      </div>
    </div>
  );
}