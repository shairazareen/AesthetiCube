// import { useCart } from "../../context/CartContext";
// import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   const { addToCart } = useCart();
//   const [liked, setLiked] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");

//   const handleWishlist = () => {
//     const isNowLiked = !liked;
//     setLiked(isNowLiked);

//     setToastMessage(isNowLiked ? "❤️ Added to Favorites" : "❌ Removed from Favorites");
//     setShowToast(true);

//     setTimeout(() => {
//       setShowToast(false);
//     }, 2500);
//   };

//   return (
//     <>
//       {/* Global Toast */}
//       {showToast && (
//         <div className="fixed top-4 right-4 bg-white border border-orange-400 text-orange-700 px-4 py-2 rounded-md shadow-lg z-[9999] animate-slide-in">
//           <p className="text-sm font-semibold">{toastMessage}</p>
//         </div>
//       )}

//       {/* Product Card */}
//       <div className="p-4 rounded-md shadow-sm hover:shadow-lg transition duration-300 ease-in-out bg-white relative">
//         <div className="relative overflow-hidden group">
//           {/* Wishlist Icon */}
//           <button
//             onClick={handleWishlist}
//             className={`wishlist-btn absolute top-2 right-2 bg-white p-2 rounded-full z-10 shadow-md transition-all duration-300 ease-in-out ${
//               liked ? "animate-ping-once" : ""
//             }`}
//           >
//             <span className="transition-transform duration-300 ease-in-out hover:scale-110">
//               {liked ? (
//                 <FaHeart className="text-orange-500 animate-like-bounce" />
//               ) : (
//                 <FaRegHeart className="text-gray-600" />
//               )}
//             </span>
//           </button>

//           {/* Product Image Link */}
//           <Link to={`/product/${product.id}`}>
//             <img
//               src={product.images?.[0] || "https://via.placeholder.com/300x300?text=No+Image"}
//               alt={product.name}
//               className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110 rounded"
//             />
//           </Link>
//         </div>

//         {/* Product Name Link */}
//         <Link to={`/product/${product.id}`}>
//           <h2 className="text-lg font-semibold mt-2 hover:underline">{product.name}</h2>
//         </Link>
//         <p className="text-sky-600 font-bold">${product.price}</p>

//         {/* Rating */}
//         <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
//           {[...Array(5)].map((_, index) => {
//             const fullStar = index + 1 <= Math.floor(product.rating);
//             const halfStar =
//               index + 1 > Math.floor(product.rating) && index < product.rating;

//             return (
//               <span key={index}>
//                 {fullStar ? (
//                   <FaStar className="text-yellow-500" />
//                 ) : halfStar ? (
//                   <FaStar className="text-yellow-500 opacity-50" />
//                 ) : (
//                   <FaStar className="text-gray-300" />
//                 )}
//               </span>
//             );
//           })}
//           <span className="ml-1 text-gray-500 text-xs">({product.rating})</span>
//         </div>

//         {/* View Details Button */}
//         <Link to={`/product/${product.id}`}>
//           <button className="mt-4 w-full bg-sky-600 text-white py-2 rounded-3xl hover:bg-sky-700 transition">
//             View Details
//           </button>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default ProductCard;



// Step 1: ProductCard.jsx (unchanged, but export default used below the card)

// import { useCart } from "../../context/CartContext";
// import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishlistContext";

// const ProductCard = ({ product }) => {
  
//   const { addToCart } = useCart();
//   const [liked, setLiked] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");

//   const handleWishlist = () => {
//     const isNowLiked = !liked;
//     setLiked(isNowLiked);

//     setToastMessage(isNowLiked ? "❤️ Added to Favorites" : "❌ Removed from Favorites");
//     setShowToast(true);

//     setTimeout(() => {
//       setShowToast(false);
//     }, 2500);
//   };

//   return (
//     <>
//       {showToast && (
//         <div className="fixed top-4 right-4 bg-white border border-orange-400 text-orange-700 px-4 py-2 rounded-md shadow-lg z-[9999] animate-slide-in">
//           <p className="text-sm font-semibold">{toastMessage}</p>
//         </div>
//       )}

//       <div className="p-4 rounded-md shadow-sm hover:shadow-lg transition duration-300 ease-in-out bg-white relative">
//         <div className="relative overflow-hidden group">
//           <button
//             onClick={handleWishlist}
//             className={`wishlist-btn absolute top-2 right-2 bg-white p-2 rounded-full z-10 shadow-md transition-all duration-300 ease-in-out ${
//               liked ? "animate-ping-once" : ""
//             }`}
//           >
//             <span className="transition-transform duration-300 ease-in-out hover:scale-110">
//               {liked ? (
//                 <FaHeart className="text-orange-500 animate-like-bounce" />
//               ) : (
//                 <FaRegHeart className="text-gray-600" />
//               )}
//             </span>
//           </button>

//           <Link to={`/product/${product.id}`}>
//             <img
// src={product?.images?.[0] || product?.image || "https://via.placeholder.com/300x300?text=No+Image"}
//               alt={product.name}
//               className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110 rounded"
//             />
//           </Link>
//         </div>

//         <Link to={`/product/${product.id}`}>
//           <h2 className="text-lg font-semibold mt-2 hover:underline">{product.name}</h2>
//         </Link>
//         <p className="text-sky-600 font-bold">${product.price}</p>

//         <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
//           {[...Array(5)].map((_, index) => {
//             const fullStar = index + 1 <= Math.floor(product.rating);
//             const halfStar = index + 1 > Math.floor(product.rating) && index < product.rating;

//             return (
//               <span key={index}>
//                 {fullStar ? (
//                   <FaStar className="text-yellow-500" />
//                 ) : halfStar ? (
//                   <FaStar className="text-yellow-500 opacity-50" />
//                 ) : (
//                   <FaStar className="text-gray-300" />
//                 )}
//               </span>
//             );
//           })}
//           <span className="ml-1 text-gray-500 text-xs">({product.rating})</span>
//         </div>

//         <Link to={`/product/${product.id}`}>
//           <button className="mt-4 w-full bg-sky-600 text-white py-2 rounded-3xl hover:bg-sky-700 transition">
//             View Details
//           </button>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default ProductCard;



import { useCart } from "../../context/CartContext";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist } = useWishlist();

  const [liked, setLiked] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

 const handleWishlist = () => {
  const isNowLiked = !liked;
  setLiked(isNowLiked);

  if (isNowLiked) {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images?.[0] || product.image, // Use first image or main image
      rating: product.rating,
      inStock: product.stock > 0,
      estimatedDelivery: "Jul 30 - Aug 15", // Add default delivery estimate
      returnsAccepted: true // Or use product.returnsAccepted if available
    });
    setToastMessage("❤️ Added to Favorites");
  } else {
    removeFromWishlist(product.id);
    setToastMessage("❌ Removed from Favorites");
  }

  setShowToast(true);
  setTimeout(() => {
    setShowToast(false);
  }, 2500);
};

  return (
    <>
      {showToast && (
        <div className="fixed top-4 right-4 bg-white border border-orange-400 text-orange-700 px-4 py-2 rounded-md shadow-lg z-[9999] animate-slide-in">
          <p className="text-sm font-semibold">{toastMessage}</p>
        </div>
      )}

      <div className="p-4 rounded-md shadow-sm hover:shadow-lg transition duration-300 ease-in-out bg-white relative">
        <div className="relative overflow-hidden group">
          <button
            onClick={handleWishlist}
            className={`wishlist-btn absolute top-2 right-2 bg-white p-2 rounded-full z-10 shadow-md transition-all duration-300 ease-in-out ${
              liked ? "animate-ping-once" : ""
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

          <Link to={`/product/${product.id}`}>
            <img
              src={product?.images?.[0] || product?.image || "https://via.placeholder.com/300x300?text=No+Image"}
              alt={product.name}
              className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110 rounded"
            />
          </Link>
        </div>

        <Link to={`/product/${product.id}`}>
          <h2 className="text-lg font-semibold mt-2 hover:underline">{product.name}</h2>
        </Link>
        <p className="text-sky-600 font-bold">${product.price}</p>

        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
          {[...Array(5)].map((_, index) => {
            const fullStar = index + 1 <= Math.floor(product.rating);
            const halfStar = index + 1 > Math.floor(product.rating) && index < product.rating;

            return (
              <span key={index}>
                {fullStar ? (
                  <FaStar className="text-yellow-500" />
                ) : halfStar ? (
                  <FaStar className="text-yellow-500 opacity-50" />
                ) : (
                  <FaStar className="text-gray-300" />
                )}
              </span>
            );
          })}
          <span className="ml-1 text-gray-500 text-xs">({product.rating})</span>
        </div>

        <Link to={`/product/${product.id}`}>
          <button className="mt-4 w-full bg-sky-600 text-white py-2 rounded-3xl hover:bg-sky-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
