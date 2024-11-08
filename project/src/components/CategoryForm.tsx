import React, { useState } from 'react';
import { Category, FormField } from '../data/categories';
import { formatCurrency } from '../utils/currency';

interface CategoryFormProps {
  category: Category;
  onSubmit: (data: Record<string, any>) => void;
  countryCode: string;
}

export function CategoryForm({ category, onSubmit, countryCode }: CategoryFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [files, setFiles] = useState<FileList | null>(null);

  const handleChange = (field: FormField, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field.id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      images: files
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {category.fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          <div className="mt-1">
            {field.type === 'select' ? (
              <select
                id={field.id}
                value={formData[field.id] || ''}
                onChange={(e) => handleChange(field, e.target.value)}
                required={field.required}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select {field.label}</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.id}
                value={formData[field.id] || ''}
                onChange={(e) => handleChange(field, e.target.value)}
                required={field.required}
                rows={4}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder={field.placeholder}
              />
            ) : field.type === 'file' ? (
              <input
                type="file"
                id={field.id}
                onChange={(e) => setFiles(e.target.files)}
                required={field.required}
                multiple
                accept="image/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            ) : field.type === 'number' ? (
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">
                    {formatCurrency(0, countryCode).charAt(0)}
                  </span>
                </div>
                <input
                  type="number"
                  id={field.id}
                  value={formData[field.id] || ''}
                  onChange={(e) => handleChange(field, e.target.value)}
                  required={field.required}
                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>
            ) : (
              <input
                type={field.type}
                id={field.id}
                value={formData[field.id] || ''}
                onChange={(e) => handleChange(field, e.target.value)}
                required={field.required}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder={field.placeholder}
              />
            )}
          </div>
        </div>
      ))}
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            List Item
          </button>
        </div>
      </div>
    </form>
  );
}