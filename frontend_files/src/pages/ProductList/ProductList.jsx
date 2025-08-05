// import { useState } from 'react';
// import products from '../../data/products';
// import ProductCard from '../../components/ProductCard/ProductCard';

// const ProductList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterCategory, setFilterCategory] = useState('all');

//   // Derive categories dynamically from product data
//   const categories = ['all', ...new Set(products.map((p) => p.category))];

//   // Filtered products based on search and category filter
//   const filteredProducts = products.filter((product) => {
//     const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
//     const matchesSearch =
//       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.description.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
//         {/* Search Input */}
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="border border-gray-300 rounded px-4 py-2 flex-grow"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {/* Category Filter */}
//         <select
//           className="border border-gray-300 rounded px-4 py-2"
//           value={filterCategory}
//           onChange={(e) => setFilterCategory(e.target.value)}
//         >
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Product Grid */}
//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">No products found.</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;


// import { useState } from 'react';
// import products from '../../data/products';
// import ProductCard from '../../components/ProductCard/ProductCard';

// const ProductList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterCategory, setFilterCategory] = useState('all');

//   // Get unique categories
//   const categories = ['all', ...new Set(products.map((p) => p.category))];

//   // Filter products safely
//   const filteredProducts = products.filter((product) => {
//     const matchesCategory =
//       filterCategory === 'all' || product.category === filterCategory;

//     const nameMatch = product.name?.toLowerCase().includes(searchTerm.toLowerCase());
//     const descMatch = product.description?.toLowerCase().includes(searchTerm.toLowerCase());

//     return matchesCategory && (nameMatch || descMatch);
//   });

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
//         {/* Search Input */}
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="border border-gray-300 rounded px-4 py-2 flex-grow"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {/* Category Filter */}
//         <select
//           className="border border-gray-300 rounded px-4 py-2"
//           value={filterCategory}
//           onChange={(e) => setFilterCategory(e.target.value)}
//         >
//           {categories.map((cat, index) => (
//             <option key={`${cat}-${index}`} value={cat}>
//               {cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Product Grid */}
//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product, index) => (
//             <ProductCard key={`${product.id}-${index}`} product={product} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">No products found.</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;



// Final Step: ProductList.jsx (integrating ProductCard, RelatedSearches, and Pagination)

// import React, { useState } from "react";
// import ProductCard from "../../components/ProductCard/ProductCard";
// import RelatedSearches from "../../components/SearchesRelated/RelatedProduct";
// import Pagination from "../../components/Pagination/Pagination";
// import products from "../../data/products"; // or wherever your products array is

// const ProductList = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 8;

//   // Pagination Logic
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//        <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
//         {/* Search Input */}
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="border border-gray-300 rounded px-4 py-2 flex-grow"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {/* Category Filter */}
//         <select
//           className="border border-gray-300 rounded px-4 py-2"
//           value={filterCategory}
//           onChange={(e) => setFilterCategory(e.target.value)}
//         >
//           {categories.map((cat, index) => (
//             <option key={`${cat}-${index}`} value={cat}>
//               {cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </option>
//           ))}
//         </select>
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {currentProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       {/* Product Grid */}
//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product, index) => (
//             <ProductCard key={`${product.id}-${index}`} product={product} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">No products found.</p>
//       )}

//       {/* Related Searches */}
//       <RelatedSearches />
      
//       {/* Pagination */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={Math.ceil(products.length / productsPerPage)}
//         onPageChange={(page) => setCurrentPage(page)}
//       />
//     </div>
//     </div>
//     </div>
//   );
// };

// export default ProductList;


// import React, { useState } from "react";
// import ProductCard from "../../components/ProductCard/ProductCard";
// import RelatedSearches from "../../components/SearchesRelated/RelatedProduct";
// import Pagination from "../../components/Pagination/Pagination";
// import products from "../../data/products";

// const ProductList = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterCategory, setFilterCategory] = useState("");

//   const productsPerPage = 8;

//   // 🧠 All unique categories from your products
//   const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

//   // 🔍 Filter Logic
//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       filterCategory === "All" || filterCategory === ""
//         ? true
//         : product.category === filterCategory;
//     return matchesSearch && matchesCategory;
//   });

//   // 📄 Pagination Logic
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       {/* 🔍 Search & Filter */}
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="border border-gray-300 rounded px-4 py-2 flex-grow w-full sm:w-1/2"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <select
//           className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/3"
//           value={filterCategory}
//           onChange={(e) => setFilterCategory(e.target.value)}
//         >
//           {categories.map((cat, index) => (
//             <option key={index} value={cat}>
//               {cat.charAt(0).toUpperCase() + cat.slice(1)}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* 🖼 Product Grid */}
//       {currentProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {currentProducts.map((product, index) => (
//             <ProductCard key={`${product.id}-${index}`} product={product} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">No products found.</p>
//       )}

//       {/* 🔗 Related Searches */}
//       <RelatedSearches />

//       {/* 📄 Pagination */}
//       <Pagination
//         currentPage={currentPage}
//         totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
//         onPageChange={(page) => setCurrentPage(page)}
//       />
//     </div>
//   );
// };

// export default ProductList;


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import RelatedSearches from "../../components/SearchesRelated/RelatedProduct";
import Pagination from "../../components/Pagination/Pagination";
import products from "../../data/products";

const ProductList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const categoryQuery = query.get("category");

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  const productsPerPage = 8;

  // Get unique categories from products
  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  // Set category from URL query if exists
  useEffect(() => {
    if (categoryQuery) {
      const decoded = decodeURIComponent(categoryQuery);
      setFilterCategory(decoded);
    }
  }, [categoryQuery]);

  // Filter logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || filterCategory === ""
        ? true
        : product.category &&
          product.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-[225px]">
      {/* 🔍 Search & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded px-4 py-2 flex-grow w-full sm:w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/3"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {typeof cat === "string"
                ? cat.charAt(0).toUpperCase() + cat.slice(1)
                : cat}
            </option>
          ))}
        </select>
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
  );
};

export default ProductList;

