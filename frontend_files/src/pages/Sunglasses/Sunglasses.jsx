import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import RelatedSearches from "../../components/SearchesRelated/RelatedProduct";
import Pagination from "../../components/Pagination/Pagination";
import products from "../../data/products";

const Sunglasses = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const productsPerPage = 8;
  const category = "sunglasses";

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = product.category?.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
        <div className='pt-[190px]'>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Sunglasses</h2>
      <input
        type="text"
        placeholder="Sunglasses..."
        className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2 mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      {currentProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
      <RelatedSearches />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
    </div>
  );
};

export default Sunglasses;
