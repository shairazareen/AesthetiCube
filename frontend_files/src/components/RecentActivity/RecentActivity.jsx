import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Dream Big Dreams",
    image: "https://i.postimg.cc/pTW2jj36/single-1.jpg",
    price: 10.0,
    originalPrice: 40.0,
    link: "/product/9",
  },
  {
    id: 2,
    name: "Worm Enamel Pin",
    image: "https://i.postimg.cc/W4VGDMPZ/slide-10.jpg",
    price: 12.24,
    link: "/product/10",
  },
  {
    id: 3,
    name: "Calligraphy Guide",
    image: "https://i.postimg.cc/Y9XJ9rZ5/single-3.jpg",
    price: 25.82,
    link: "/product/11",
  },
  {
    id: 4,
    name: "People I Wish I Could Be Notebook",
    image: "https://i.postimg.cc/Mpd4tKKv/single-4.jpg",
    price: 4.79,
    link: "/product/12",
  },
  {
    id: 5,
    name: "Love Letters Zine",
    image: "https://i.postimg.cc/bYV96DQX/slide-9.jpg",
    price: 4.79,
    link: "/product/13",
  },
  {
    id: 6,
    name: "Personal Letter",
    image: "https://i.postimg.cc/vTTLYbwS/slide-8.jpg",
    price: 14.28,
    link: "/product/14",
  },
  {
    id: 7,
    name: "Hydrangea Print",
    image: "https://i.postimg.cc/xdGPg6Pg/slide-7.jpg",
    price: 18.75,
    originalPrice: 25.0,
    isFavorited: true,
    link: "/product/15",
  },
];

const RecentActivity = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-10 xl:px-16 py-10 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Recent Activity</h2>
        <div className="text-sm text-gray-600 space-x-2 mt-2 sm:mt-0">
          <Link to="/recently-viewed" className="text-blue-600 hover:underline">
            Recently viewed
          </Link>
          <span>and</span>
          <Link to="/wishlist" className="text-blue-600 hover:underline">
            Favorited items
          </Link>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
        {products.map((product) => (
          <Link
            to={product.link}
            key={product.id}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
              />

              {/* Favorite Icon */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white p-1.5 rounded-full shadow text-gray-500 hover:text-red-500">
                <FiHeart size={18} />
              </div>
            </div>

            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-800 truncate">{product.name}</h3>

              {/* Price */}
              <div className="mt-2 text-sm font-semibold text-gray-900 flex items-center">
                <span>BDT {product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-gray-400 text-xs line-through">
                    BDT {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;
