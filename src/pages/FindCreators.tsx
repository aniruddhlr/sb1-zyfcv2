import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import CategorySelector from '../components/creators/CategorySelector';
import CreatorCard from '../components/creators/CreatorCard';
import ActiveFilters from '../components/creators/ActiveFilters';
import { creators } from '../data/creators';
import { categoryHierarchy } from '../data/categories';

export default function FindCreators() {
  const [selectedMainCategory, setSelectedMainCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Array<{ id: string; label: string; value: string }>>([]);

  const filteredCreators = useMemo(() => {
    return creators.filter(creator => {
      const matchesCategory = !selectedSubCategory || 
        creator.category.toLowerCase() === selectedSubCategory.toLowerCase() ||
        creator.type === selectedSubCategory;

      const matchesSearch = !searchQuery || 
        creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        creator.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedSubCategory, searchQuery]);

  const handleMainCategoryChange = (categoryId: string) => {
    setSelectedMainCategory(categoryId);
    setSelectedSubCategory('');
  };

  const handleSubCategoryChange = (subCategoryId: string) => {
    setSelectedSubCategory(subCategoryId);
    const mainCategory = categoryHierarchy.find(cat => cat.id === selectedMainCategory);
    const subCategory = mainCategory?.subcategories.find(sub => sub.id === subCategoryId);
    
    if (mainCategory && subCategory) {
      setActiveFilters(prev => [
        ...prev.filter(f => f.id !== 'category'),
        { id: 'category', label: mainCategory.name, value: subCategory.name }
      ]);
    }
  };

  const removeFilter = (filterId: string) => {
    setActiveFilters(prev => prev.filter(f => f.id !== filterId));
    if (filterId === 'category') {
      setSelectedMainCategory('');
      setSelectedSubCategory('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Find the Perfect Creator</h1>
          <p className="mt-4 text-xl text-gray-600">Connect with talented creators who align with your brand</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, category, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Active Filters */}
        <ActiveFilters
          filters={activeFilters}
          onRemoveFilter={removeFilter}
          onClearAll={() => {
            setActiveFilters([]);
            setSelectedMainCategory('');
            setSelectedSubCategory('');
          }}
        />

        {/* Category Selector */}
        {showFilters && (
          <div className="mb-8">
            <CategorySelector
              selectedMainCategory={selectedMainCategory}
              selectedSubCategory={selectedSubCategory}
              onMainCategoryChange={handleMainCategoryChange}
              onSubCategoryChange={handleSubCategoryChange}
            />
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCreators.length} creators
            {selectedSubCategory && ' in selected category'}
          </p>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCreators.map((creator) => (
            <CreatorCard key={creator.id} {...creator} />
          ))}
        </div>

        {/* No Results */}
        {filteredCreators.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No creators found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}