import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface Category {
  id: string;
  name: string;
}

interface SearchFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (id: string) => void;
  onSearchChange: (value: string) => void;
}

export default function SearchFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  onSearchChange
}: SearchFiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by name, category, or location..."
            onChange={(e) => onSearchChange(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
          />
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
          <SlidersHorizontal className="h-5 w-5 mr-2" />
          Filters
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}