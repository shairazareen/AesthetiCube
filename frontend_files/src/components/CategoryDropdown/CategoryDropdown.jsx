// ✅ CategoryDropdown.jsx
import React, { useState } from "react";
import { FaAngleDown, FaPaintBrush, FaShoppingBag, FaCogs, FaImage, FaGem, FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
  { name: "Canvas Art", path: "/products?category=Canvas Art", icon: <FaPaintBrush /> },
  { name: "Handmade Bags", path: "/products?category=Handmade Bags", icon: <FaShoppingBag /> },
  { name: "Craft Supplies", path: "/products?category=Craft Supplies", icon: <FaCogs /> },
  { name: "Wall Decor", path: "/products?category=Wall Decor", icon: <FaImage /> },
  { name: "Jewelry", path: "/products?category=Jewelry", icon: <FaGem /> },
  { name: "Gift Items", path: "/products?category=Gift Items", icon: <FaGift /> },
];

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium bg-white dark:bg-gray-900 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-md hover:bg-sky-50 dark:hover:bg-gray-800 transition"
      >
        Categories
        <FaAngleDown className="text-xs" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {categories.map((cat, index) => (
              <li key={index}>
                <Link
                  to={cat.path}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-sky-100 dark:hover:bg-gray-700 transition"
                >
                  {cat.icon}
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
