// import React from 'react';
// import { Heart, Star } from 'lucide-react';

// const WishlistCard = ({ item }) => {
//   return (
//     <div className="bg-white shadow rounded-lg p-3 w-[300px]">
//       <div className="relative">
//         <img src={item.image} alt={item.name} className="rounded-md w-full h-56 object-cover" />
//         <div className="absolute top-2 left-2 bg-white text-sm px-2 py-1 rounded shadow">
//           {item.popularity}
//         </div>
//         <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-red-100">
//           <Heart size={18} className="text-red-500 fill-red-500" />
//         </button>
//         <div className="absolute bottom-2 right-2 bg-white p-1 rounded-md flex items-center gap-1 shadow text-sm">
//           <Star size={14} className="text-yellow-500 fill-yellow-500" />
//           {item.rating}
//         </div>
//       </div>
//       <div className="mt-3 text-sm">
//         <p className="font-medium line-clamp-2">{item.name}</p>
//         <div className="mt-1 flex items-center gap-2">
//           <span className="text-green-600 font-bold">BDT {item.price}</span>
//           <span className="line-through text-gray-400 text-sm">BDT {item.originalPrice}</span>
//           <span className="text-green-700 bg-green-100 text-xs px-2 py-0.5 rounded">
//             {item.discount}% off
//           </span>
//         </div>
//         <p className="text-xs mt-1 text-gray-500">Shipping: {item.shipping}</p>
//         <p className="text-xs text-gray-500">Est. delivery: {item.delivery}</p>
//         <p className="text-xs text-gray-500">Returns: {item.returns}</p>
//         <div className="flex gap-2 mt-2 flex-wrap">
//           {item.tags.map((tag, i) => (
//             <span key={i} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
//               {tag}
//             </span>
//           ))}
//         </div>
//         <button className="w-full mt-3 py-1.5 border rounded-full hover:bg-gray-100 text-sm">
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WishlistCard;


// import React from "react";
// import { Heart, Star, X } from "lucide-react";
// import { useWishlist } from "../../context/WishlistContext";

// const WishlistCard = ({ item }) => {
//   const { removeFromWishlist } = useWishlist();

//   return (
//     <div className="bg-white shadow rounded-lg p-3 w-[300px] relative">
//       <div className="relative">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="rounded-md w-full h-56 object-cover"
//         />
//         <div className="absolute top-2 left-2 bg-white text-sm px-2 py-1 rounded shadow">
//           {item.popularity}
//         </div>
//        <button
//         onClick={() => removeFromWishlist(item.name)}
//         className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-red-100"
//         aria-label="Remove from wishlist"
//       >
//         <X size={18} className="text-red-500" />
//       </button>
//         <div className="absolute bottom-2 right-2 bg-white p-1 rounded-md flex items-center gap-1 shadow text-sm">
//           <Star size={14} className="text-yellow-500 fill-yellow-500" />
//           {item.rating}
//         </div>
//       </div>
//       <div className="mt-3 text-sm">
//         <p className="font-medium line-clamp-2">{item.name}</p>
//         <div className="mt-1 flex items-center gap-2">
//           <span className="text-green-600 font-bold">BDT {item.price}</span>
//           <span className="line-through text-gray-400 text-sm">
//             BDT {item.originalPrice}
//           </span>
//           <span className="text-green-700 bg-green-100 text-xs px-2 py-0.5 rounded">
//             {item.discount}% off
//           </span>
//         </div>
//         <p className="text-xs mt-1 text-gray-500">Shipping: {item.shipping}</p>
//         <p className="text-xs text-gray-500">Est. delivery: {item.delivery}</p>
//         <p className="text-xs text-gray-500">Returns: {item.returns}</p>
//         <div className="flex gap-2 mt-2 flex-wrap">
//           {item.tags.map((tag, i) => (
//             <span key={i} className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
//               {tag}
//             </span>
//           ))}
//         </div>
//         <button className="w-full mt-3 py-1.5 border rounded-full hover:bg-gray-100 text-sm">
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WishlistCard;


// import React from "react";
// import { X } from "lucide-react";
// import { useWishlist } from "../../context/WishlistContext"; // ✅ CORRECT PATH

// const WishlistCard = ({ item }) => {
//   const { removeFromWishlist } = useWishlist();

//   return (
//     <div className="bg-white shadow p-4 rounded-lg relative">
//       <button
//         className="absolute top-2 right-2 bg-red-100 p-1 rounded-full"
//         onClick={() => removeFromWishlist(item.id)}
//       >
//         <X className="text-red-500" size={16} />
//       </button>

//       <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
//       <h3 className="mt-3 text-lg font-medium">{item.name}</h3>
//       <p className="text-sm text-gray-500">{item.price}</p>
//     </div>
//   );
// };

// export default WishlistCard;



// import React from "react";
// import { X, Heart, Star } from "lucide-react"; // Import Star icon
// import { useWishlist } from "../../context/WishlistContext";

// const WishlistCard = ({ item }) => {
//   const { removeFromWishlist, addToWishlist, wishlistItems } = useWishlist();

//   // Determine if the item is currently in the wishlist
//   const isItemInWishlist = wishlistItems.some(
//     (i) => i.id === item.id && i.image === item.image
//   );

//   const handleWishlistToggle = () => {
//     if (isItemInWishlist) {
//       removeFromWishlist(item.id);
//     } else {
//       addToWishlist(item);
//     }
//   };

//   // Dummy data for design replication (replace with actual item data if available)
//   // Ensure your 'item' object passed from WishlistPage includes these properties
//   const currentPrice = item.price || 13.16; // Example default
//   const originalPrice = item.originalPrice || 19.24; // Example default
//   const discountPercentage = item.discountPercentage || Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
//   const shippingCost = item.shippingCost || 0.99;
//   const estimatedDelivery = item.estimatedDelivery || "Jul 30 - Aug 15";
//   const returnsAccepted = item.returnsAccepted !== undefined ? item.returnsAccepted : true; // Default to true
//   const inCartsCount = item.inCartsCount || 20; // Example default
//   const rating = item.rating || 4.9; // Example default

//   return (
//     <div className="bg-white shadow-md rounded-lg relative overflow-hidden group border border-gray-200">
//       {/* "In 20+ carts" and Rating */}
//       <div className="absolute top-2 left-2 flex items-center bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full z-10">
//         <span className="mr-1">In {inCartsCount}+ carts</span>
//       </div>

//       {/* Discount Badge (Moved to top right as per new screenshot) */}
//       {discountPercentage && (
//         <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
//           {discountPercentage}% off
//         </span>
//       )}

//       {/* Image with Rating Overlay */}
//       <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-lg">
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute bottom-2 right-2 flex items-center bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
//           <Star size={12} fill="currentColor" className="text-yellow-400 mr-1" />
//           <span>{rating.toFixed(1)}</span>
//         </div>
//       </div>


//       <div className="p-4">
//         <h3 className="text-base font-medium text-gray-800 leading-tight mb-2 line-clamp-2">
//           {item.name}
//         </h3>
//         <div className="flex items-baseline mt-1">
//           <p className="text-xl font-bold text-gray-900 mr-2">
//             USD {currentPrice.toFixed(2)}
//           </p>
//           {originalPrice > currentPrice && ( // Only show if there's a discount
//             <p className="text-sm text-gray-500 line-through">
//               USD {originalPrice.toFixed(2)}
//             </p>
//           )}
//           {discountPercentage && originalPrice > currentPrice && ( // Show discount percentage next to original price
//               <span className="ml-2 text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
//                   {discountPercentage}% off
//               </span>
//           )}
//         </div>
//         <p className="text-xs text-gray-600 mt-2">
//           Shipping: USD {shippingCost.toFixed(2)}
//         </p>
//         <p className="text-xs text-gray-600">
//           Est. delivery: {estimatedDelivery}
//         </p>
//         <p className="text-xs text-gray-600 mt-1">
//           Returns: {returnsAccepted ? "Accepted" : "Not Accepted"}
//         </p>

//         <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
//           {item.multipleOptions && (
//             <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
//               Multiple options
//             </span>
//           )}
//           {item.personalizable && (
//             <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
//               Personalizable
//             </span>
//           )}
//         </div>

//         <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm font-semibold">
//           Add to cart
//         </button>

//         {/* Remove from Wishlist Button (X icon - appears on hover) */}
//         <button
//           className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           onClick={() => removeFromWishlist(item.id)}
//           aria-label="Remove from wishlist"
//         >
//           <X className="text-gray-600 hover:text-red-500" size={18} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WishlistCard;


// import React, { useState } from "react";
// import { X, Star } from "lucide-react";
// import { useWishlist } from "../../context/WishlistContext";

// const WishlistCard = ({ item }) => {
//   const { removeFromWishlist } = useWishlist();
//   const [imageError, setImageError] = useState(false);

//   // Improved image URL handling
//   const getImageUrl = (url) => {
//     if (!url) return null;
//     // Handle relative paths if needed
//     if (url.startsWith('/')) {
//       return `${window.location.origin}${url}`;
//     }
//     return url;
//   };

//   const imageUrl = getImageUrl(item.image);

//   return (
//     <div className="bg-white border rounded-lg p-4 relative shadow hover:shadow-md transition">
//       <button
//         onClick={() => removeFromWishlist(item.id)}
//         className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
//       >
//         <X className="w-5 h-5" />
//       </button>

//       <div className="w-full h-48 bg-gray-100 rounded-t-lg mb-3 flex items-center justify-center overflow-hidden">
//         {imageUrl ? (
//           <img
//             src={imageUrl}
//             alt={item.name}
//             className="w-full h-full object-contain"
//             onError={() => {
//               console.error(`Failed to load image: ${imageUrl}`);
//               setImageError(true);
//             }}
//             loading="lazy"
//           />
//         ) : (
//           <div className="text-gray-400 text-sm p-4 text-center">
//             No Image Available
//             <div className="text-xs mt-1">(Product ID: {item.id})</div>
//           </div>
//         )}
//       </div>

//       {/* Rest of your card content remains the same */}
//       <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
//       <div className="flex items-center text-sm text-yellow-500 my-1">
//         <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 mr-1" />
//         {item.rating || 4.8}
//       </div>
//       <p className="text-gray-700 font-semibold">${item.price?.toFixed(2)}</p>
//       <p className="text-xs text-gray-500 mt-1">
//         Delivery: {item.estimatedDelivery || "Jul 30 - Aug 15"}
//       </p>
//       <p className="text-xs text-gray-500">
//         {item.returnsAccepted ? "Returns accepted" : "Final sale"}
//       </p>
//     </div>
//   );
// };

// export default WishlistCard;



import React, { useState } from "react";
import { X, Star } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import { Link } from "react-router-dom";

const WishlistCard = ({ item }) => {
  const { removeFromWishlist } = useWishlist();
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all">
      {/* Remove button */}
      <button
        onClick={() => removeFromWishlist(item.id)}
        className="absolute top-2 right-2 z-10 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="w-4 h-4 text-gray-600 hover:text-red-500" />
      </button>

      {/* Product Image */}
      <Link to={`/product/${item.id}`} className="block">
        <div className="h-48 bg-gray-100 overflow-hidden">
          {item.image && !imageError ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/product/${item.id}`}>
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{item.name}</h3>
        </Link>
        
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">{item.rating || 4.8}</span>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 line-through">USD {item.price?.toFixed(2)}</p>
            <p className="font-bold text-gray-900">${(item.price * 0.7).toFixed(2)}</p>
          </div>
        </div>

        <div className="text-xs text-gray-500 space-y-1 mb-4">
          <p>Est. delivery: {item.estimatedDelivery || "Jul 31 - Aug 18"}</p>
          <p>Returns: {item.returnsAccepted ? "Accepted" : "Not accepted"}</p>
        </div>

        <Link 
          to={`/product/${item.id}`}
          className="block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition-colors text-sm"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default WishlistCard;