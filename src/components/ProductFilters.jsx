import React from "react";
import { Filter, X } from "lucide-react";

export default function ProductFilters({
  categories,
  activeCategory,
  onCategoryChange,
  onClearFilters,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Filters</h3>
        </div>
        {activeCategory && (
          <button
            onClick={onClearFilters}
            className="text-sm text-gray-600 hover:text-pink-600 flex items-center gap-1"
          >
            <X className="h-4 w-4" />
            Clear filters
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? "bg-pink-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}
