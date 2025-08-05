import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const EarringsCard = ({ earring, onFavorite }) => {
  const [liked, setLiked] = useState(
    JSON.parse(localStorage.getItem('favorites'))?.includes(earring.id) || false
  );
  const [showToast, setShowToast] = useState(false);

  const handleWishlist = () => {
    const newVal = !liked;
    setLiked(newVal);
    onFavorite(earring.id, newVal);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-sm hover:shadow-lg transition relative">
      {showToast && (
        <div className="fixed top-4 right-4 bg-white border border-orange-400 text-orange-700 px-4 py-2 rounded-md shadow-lg z-50">
          <p className="text-sm font-semibold">
            {liked ? "❤️ Added to Favorites" : "❌ Removed from Favorites"}
          </p>
        </div>
      )}

       <button
  onClick={handleWishlist}
  className={`wishlist-btn absolute top-2 right-2 bg-white p-2 rounded-full z-10 shadow-md transition-all duration-300 ease-in-out ${
    liked ? 'animate-ping-once' : ''
  }`}
>
            <span className="transition-transform duration-300 ease-in-out hover:scale-110">
              {liked ? (
                <FaHeart className="text-orange-500 animate-like-bounce" />
              ) : (
                <FaRegHeart className="text-gray-600" />
              )}
            </span>
          </button>
      <img
        src={earring.images?.[0] || "https://via.placeholder.com/300x300?text=No+Image"}
        alt={earring.name}
        className="w-full h-60 md:h-72 object-cover rounded-md"
      />

      <h3 className="mt-2 font-semibold text-lg text-gray-800">{earring.name}</h3>
      <p className="text-sky-600 font-bold">${earring.price.toFixed(2)}</p>

      <div className="flex items-center gap-1 text-sm mt-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < Math.round(earring.rating) ? "text-yellow-500" : "text-gray-300"}
          />
        ))}
        <span className="text-gray-500 text-xs ml-1">({earring.rating.toFixed(1)})</span>
      </div>

      <Link to={`/product/${earring.id}`}>
        <button className="mt-4 w-full bg-sky-600 text-white py-2 rounded-3xl hover:bg-sky-700 transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default EarringsCard;
