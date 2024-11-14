import React from 'react';
import { ChevronRight } from 'lucide-react';
import { categoryHierarchy } from '../../data/categories';

interface CategorySelectorProps {
  selectedMainCategory: string;
  selectedSubCategory: string;
  onMainCategoryChange: (id: string) => void;
  onSubCategoryChange: (id: string) => void;
}

export default function CategorySelector({
  selectedMainCategory,
  selectedSubCategory,
  onMainCategoryChange,
  onSubCategoryChange
}: CategorySelectorProps) {
  const selectedCategory = categoryHierarchy.find(cat => cat.id === selectedMainCategory);

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* Main Categories */}
        <div className="border-r border-gray-200">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Browse Categories</h3>
            <div className="space-y-1">
              {categoryHierarchy.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onMainCategoryChange(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center justify-between ${
                    selectedMainCategory === category.id
                      ? 'bg-purple-50 text-purple-700 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category.name}
                  <ChevronRight className={`h-4 w-4 ${
                    selectedMainCategory === category.id ? 'text-purple-700' : 'text-gray-400'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Subcategories */}
        <div className="col-span-3 bg-gray-50">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              {selectedCategory?.name || 'Select a Category'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedCategory?.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => onSubCategoryChange(sub.id)}
                  className={`p-4 rounded-lg text-left transition-all ${
                    selectedSubCategory === sub.id
                      ? 'bg-white shadow-sm ring-1 ring-purple-600'
                      : 'bg-white hover:shadow-sm'
                  }`}
                >
                  <span className="block font-medium text-gray-900">{sub.name}</span>
                  <span className="mt-1 text-sm text-gray-500">{sub.count} creators</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}