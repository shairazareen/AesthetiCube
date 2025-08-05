// src/utils/recentlyViewed.js

import products from '../data/products';

// Save a viewed product ID to localStorage
export const saveRecentlyViewedProduct = (productId) => {
  const viewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
  const updated = [productId, ...viewed.filter(id => id !== productId)].slice(0, 10);
  localStorage.setItem('recentlyViewed', JSON.stringify(updated));
};

// Retrieve product data from IDs in localStorage
export const getRecentlyViewedProducts = () => {
  const viewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
  return viewed
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean); // Remove nulls
};
