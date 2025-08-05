// src/pages/Categories/HairClips.jsx
import React, { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import RelatedSearches from "../../components/SearchesRelated/RelatedProduct";
import Pagination from "../../components/Pagination/Pagination";
import products from "../../data/products";

const HairClips = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const productsPerPage = 8;
  const category = "hair clips";

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.category?.toLowerCase() === category.toLowerCase() &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
        <div className='pt-[190px]'>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Hair Clips</h2>

      {/* 🔍 Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search in Hair Clips..."
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 🖼 Product Grid */}
      {currentProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}

      {/* 🔗 Related Searches */}
      <RelatedSearches />

      {/* 📄 Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
    </div>
  );
};

export default HairClips;
