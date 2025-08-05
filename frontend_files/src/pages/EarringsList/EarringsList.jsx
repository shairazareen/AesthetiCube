import { useState } from 'react';
import earrings from '../../data/earrings';
import EarringsCard from '../../components/EarringsCard/EarringsCard';

const EarringsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Get unique categories
  const categories = ['all', ...new Set(earrings.map((p) => p.category))];

  // Filter products safely
  const filteredProducts = earrings.filter((earring) => {
    const matchesCategory =
      filterCategory === 'all' || earring.category === filterCategory;

    const nameMatch = earring.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const descMatch = earring.description?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && (nameMatch || descMatch);
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded px-4 py-2 flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category Filter */}
        <select
          className="border border-gray-300 rounded px-4 py-2"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={`${cat}-${index}`} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((earring, index) => (
            <EarringsCard key={`${earring.id}-${index}`} earring={earring} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default EarringsList;