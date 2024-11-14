import React from 'react';
import { X } from 'lucide-react';

interface Filter {
  id: string;
  label: string;
  value: string;
}

interface ActiveFiltersProps {
  filters: Filter[];
  onRemoveFilter: (id: string) => void;
  onClearAll: () => void;
}

export default function ActiveFilters({ filters, onRemoveFilter, onClearAll }: ActiveFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-700">Active Filters:</h3>
        <button
          onClick={onClearAll}
          className="text-sm text-purple-600 hover:text-purple-700"
        >
          Clear all
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <span
            key={filter.id}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700"
          >
            <span>{filter.label}: {filter.value}</span>
            <button
              onClick={() => onRemoveFilter(filter.id)}
              className="ml-2 hover:text-purple-900"
            >
              <X className="h-4 w-4" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}