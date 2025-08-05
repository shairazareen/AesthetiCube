import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CanvasArtDetail = () => {
  const { id } = useParams(); // Optional for dynamic loading
  const { addToCart } = useCart();

  const product = {
    id: 1,
    title: "Sunset Serenity – Hand-Painted Canvas",
    image: "/images/sunset-canvas.jpg",
    price: 89.99,
    rating: 4.7,
    stock: true,
    sizeOptions: ["12x16", "16x20", "24x30"],
    frameOptions: ["No Frame", "Black Frame", "Wooden Frame"],
    description:
      "Bring warmth and tranquility into your space with this hand-painted sunset canvas. Perfect for bedrooms, living rooms, and creative corners. High-quality acrylic paint on premium canvas.",
    highlights: [
      "100% Handmade with acrylic paint",
      "High-resolution texture finish",
      "UV-protected coating",
      "Signed by the artist",
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right: Product Info */}
      <div className="space-y-5">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{product.title}</h1>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 space-x-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"} />
          ))}
          <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
        </div>

        {/* Price & Stock */}
        <div className="text-xl text-orange-600 font-semibold">${product.price}</div>
        <div className={product.stock ? "text-green-600" : "text-red-500"}>
          {product.stock ? "In Stock" : "Out of Stock"}
        </div>

        {/* Size Options */}
        <div>
          <label className="font-semibold text-gray-700">Size:</label>
          <div className="flex gap-2 mt-2">
            {product.sizeOptions.map((size) => (
              <button
                key={size}
                className="px-4 py-1 border rounded-md text-sm hover:bg-orange-50 dark:hover:bg-gray-800"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Frame Options */}
        <div>
          <label className="font-semibold text-gray-700">Frame:</label>
          <div className="flex gap-2 mt-2">
            {product.frameOptions.map((frame) => (
              <button
                key={frame}
                className="px-4 py-1 border rounded-md text-sm hover:bg-orange-50 dark:hover:bg-gray-800"
              >
                {frame}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <button className="px-6 py-2 border border-orange-600 text-orange-600 rounded-md hover:bg-orange-100">
            <FaHeart className="inline mr-1" /> Wishlist
          </button>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Product Description</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
        </div>

        {/* Highlights */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Highlights</h2>
          <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300">
            {product.highlights.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CanvasArtDetail;
