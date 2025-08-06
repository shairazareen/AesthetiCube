// src/pages/CategoriesPage.js
import React, { useState } from 'react';
import './../styles/CategoriesPage.css'; // Import the CSS

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [priceRange, setPriceRange] = useState(150);

  // Mock product data
  const products = [
    { id: 1, name: 'Artistic Ceramic Vase', price: 85.0, image: 'https://via.placeholder.com/150?text=Vase' },
    { id: 2, name: 'Ocean Wave Sculpture', price: 120.0, image: 'https://via.placeholder.com/150?text=Sculpture' },
    { id: 3, name: 'Personalized Ceramic Bowl', price: 50.0, image: 'https://via.placeholder.com/150?text=Bowl' },
    { id: 4, name: 'Textured Decorative Bowl', price: 75.0, image: 'https://via.placeholder.com/150?text=Bowl' },
    { id: 5, name: 'Custom Stoneware Plate', price: 70.0, image: 'https://via.placeholder.com/150?text=Plate' },
    { id: 6, name: 'Ocean Waves Dinner Plate', price: 45.0, image: 'https://via.placeholder.com/150?text=Plate' },
    { id: 7, name: 'Colorful Glazed Bowl', price: 35.0, image: 'https://via.placeholder.com/150?text=Bowl' },
    { id: 8, name: 'Artisan Stoneware Mugs', price: 60.0, image: 'https://via.placeholder.com/150?text=Mug' },
    { id: 9, name: 'Custom Artistic Sculpture', price: 150.0, image: 'https://via.placeholder.com/150?text=Sculpture' },
  ];

  const categories = [
    'All Products',
    'Abstract Art',
    'Sculpture',
    'Portrait Paintings',
    'Landscape Paintings',
    'Digital Art',
    'Painting Supplies',
    'Wall Decals',
  ];

  // Filter products by category and price
  const filteredProducts = products.filter((product) => {
    const inCategory = selectedCategory === 'All Products' || product.name.toLowerCase().includes(selectedCategory.toLowerCase());
    const inPrice = product.price <= priceRange;
    return inCategory && inPrice;
  });

  return (
    <div className="categories-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Browse by</h3>
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category}>
              <button
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-section">
          <h3>Filter by</h3>
          <div className="filter-item">
            <label htmlFor="price">Price</label>
            <input
              type="range"
              id="price"
              min="0"
              max="150"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="slider"
            />
            <span className="price-label">BDT 35 – BDT {priceRange}</span>
          </div>
          <button className="filter-button">Color</button>
          <button className="filter-button">Options</button>
          <button className="filter-button">Size</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        <h1>All Products</h1>
        <p className="description">
          This is your category description. It's a great place to tell customers what this category is about, connect with your audience, and draw attention to your products.
        </p>

        {/* Sort & Count */}
        <div className="sort-header">
          <div className="sort-options">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" className="select">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Popularity</option>
            </select>
          </div>
          <div className="product-count">{filteredProducts.length} products</div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">BDT {product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoriesPage;