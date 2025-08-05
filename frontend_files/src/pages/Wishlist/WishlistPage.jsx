// // import React from 'react';
// // import WishlistCard from './WishlistCard';

// // const dummyWishlist = [
// //   {
// //     name: 'Best friend Bridesmaid earrings Gifts',
// //     image: 'https://i.etsystatic.com/18814608/r/il/f82d49/4725804787/il_794xN.4725804787_3tlp.jpg',
// //     price: '13.16',
// //     originalPrice: '20.24',
// //     discount: '35',
// //     shipping: 'BDT 6.99',
// //     delivery: 'Jul 21 – Aug 6',
// //     returns: 'Accepted',
// //     tags: ['Multiple options', 'Personalizable'],
// //     popularity: 'In 20+ carts',
// //     rating: '4.9',
// //   },
// //   // Add more dummy items if needed
// // ];

// // const WishlistPage = () => {
// //   return (
// //     <div className="p-4 md:p-8 max-w-6xl mx-auto">
// //       {/* Header */}
// //       <div className="flex justify-between items-start flex-wrap gap-4">
// //         <div>
// //           <div className="flex items-center gap-3">
// //             <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-xl font-bold">
// //               S
// //             </div>
// //             <div>
// //               <h2 className="text-2xl font-semibold">Sadia's Favorites</h2>
// //               <div className="text-sm text-gray-500 space-x-2">
// //                 <span>About</span>
// //                 <span>|</span>
// //                 <span>Settings</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Tabs */}
// //           <div className="mt-6 flex gap-6 items-center">
// //             <div className="border-b-2 border-black pb-1 font-medium">Items</div>
// //             <div className="text-gray-500 hover:text-black cursor-pointer">Collections</div>
// //             <div className="flex gap-2 items-center bg-gray-100 px-3 py-1 rounded-lg">
// //               <img
// //                 src="https://i.etsystatic.com/10239503/r/il/1a18f8/2703040882/il_340x270.2703040882_ap4p.jpg"
// //                 alt="Offer"
// //                 className="w-8 h-8 object-cover rounded"
// //               />
// //               <div>
// //                 <p className="text-xs font-medium">Sales & offers</p>
// //                 <span className="text-red-500 text-xs">●</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Search bar */}
// //         <div className="mt-2 md:mt-0">
// //           <input
// //             type="text"
// //             placeholder="Search your favorites"
// //             className="border border-gray-300 rounded-full px-4 py-2 w-72 focus:outline-none focus:ring-1 focus:ring-gray-400"
// //           />
// //         </div>
// //       </div>

// //       {/* Wishlist Items */}
// //       <div className="mt-10 flex flex-col gap-6">
// //         {dummyWishlist.map((item, idx) => (
// //           <WishlistCard key={idx} item={item} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default WishlistPage;



// // import React from "react";
// // import WishlistCard from "./WishlistCard";
// // import { useWishlist } from '../../context/WishlistContext';
// // const WishlistPage = () => {
// //   const { wishlistItems } = useWishlist();

// //   return (
// //     <div className="p-4 md:p-8 max-w-6xl mx-auto min-h-[60vh]">
        
// //       {/* Header */}
// //       <div className="flex justify-between items-start flex-wrap gap-4">
// //         <div>
// //           <div className="flex items-center gap-3">
// //             <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-xl font-bold">
// //               S
// //             </div>
// //             <div>
// //               <h2 className="text-2xl font-semibold">Sadia's Favorites</h2>
// //               <div className="text-sm text-gray-500 space-x-2">
// //                 <span>About</span>
// //                 <span>|</span>
// //                 <span>Settings</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Tabs */}
// //           <div className="mt-6 flex gap-6 items-center">
// //             <div className="border-b-2 border-black pb-1 font-medium">Items</div>
// //             <div className="text-gray-500 hover:text-black cursor-pointer">Collections</div>
// //             <div className="flex gap-2 items-center bg-gray-100 px-3 py-1 rounded-lg">
// //               <img
// //                 src="https://i.etsystatic.com/10239503/r/il/1a18f8/2703040882/il_340x270.2703040882_ap4p.jpg"
// //                 alt="Offer"
// //                 className="w-8 h-8 object-cover rounded"
// //               />
// //               <div>
// //                 <p className="text-xs font-medium">Sales & offers</p>
// //                 <span className="text-red-500 text-xs">●</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Search bar */}
// //         <div className="mt-2 md:mt-0">
// //           <input
// //             type="text"
// //             placeholder="Search your favorites"
// //             className="border border-gray-300 rounded-full px-4 py-2 w-72 focus:outline-none focus:ring-1 focus:ring-gray-400"
// //           />
// //         </div>
// //       </div>

// //       {/* Wishlist Items */}
// //        <div className="p-4 md:p-8 max-w-6xl mx-auto">
// //       {/* Your header here */}

// //       {/* Show message if wishlist is empty */}
// //       {wishlistItems.length === 0 ? (
// //         <p className="text-center mt-20 text-gray-500 text-lg">
// //           You have not added any items to your wishlist.
// //         </p>
// //       ) : (
// //         <div className="mt-10 flex flex-col gap-6">
// //           {wishlistItems.map((item, idx) => (
// //             <WishlistCard key={idx} item={item} />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //     </div>
// //   );
// // };

// // export default WishlistPage;

// import { useState } from "react";
// import React from "react";
// import { useWishlist } from "../../context/WishlistContext"; // ✅ CORRECT PATH
// import WishlistCard from "./WishlistCard";

// const WishlistPage = () => {
//   const { wishlistItems } = useWishlist();

//   const [sortOption, setSortOption] = useState("name-asc");
// const [showInStockOnly, setShowInStockOnly] = useState(false);


//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <h2 className="text-3xl font-semibold mb-6">Your Wishlist</h2>

//       {wishlistItems.length === 0 ? (
//         <p className="text-center text-gray-500">Your wishlist is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {wishlistItems.map((item) => (
//             <WishlistCard key={item.id} item={item} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WishlistPage;


// import React, { useState } from "react";
// import { useWishlist } from "../../context/WishlistContext"; // ✅ CORRECT PATH
// import WishlistCard from "./WishlistCard";

// const WishlistPage = () => {
//   const { wishlistItems } = useWishlist();

//   const [sortOption, setSortOption] = useState("name-asc");
//   const [showInStockOnly, setShowInStockOnly] = useState(false);

//   const sortedAndFilteredItems = [...wishlistItems]
//     .filter((item) => (showInStockOnly ? item.inStock !== false : true))
//     .sort((a, b) => {
//       if (sortOption === "name-asc") return a.name.localeCompare(b.name);
//       if (sortOption === "name-desc") return b.name.localeCompare(a.name);
//       if (sortOption === "price-asc") return a.price - b.price;
//       if (sortOption === "price-desc") return b.price - a.price;
//       return 0;
//     });

//   return (
//     <div className="pt-[190px]">
//     <div className="p-6 max-w-5xl mx-auto">
//       <h2 className="text-3xl font-semibold mb-6">Your Wishlist</h2>

//       {wishlistItems.length === 0 ? (
//         <p className="text-center text-gray-500">Your wishlist is empty.</p>
//       ) : (
//         <>
//           {/* 🔽 Sort + Filter Controls */}
//           <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="border border-gray-300 rounded px-3 py-2"
//             >
//               <option value="name-asc">Sort: Name A–Z</option>
//               <option value="name-desc">Sort: Name Z–A</option>
//               <option value="price-asc">Sort: Price Low → High</option>
//               <option value="price-desc">Sort: Price High → Low</option>
//             </select>

//             <label className="inline-flex items-center gap-2 text-sm">
//               <input
//                 type="checkbox"
//                 checked={showInStockOnly}
//                 onChange={() => setShowInStockOnly((prev) => !prev)}
//                 className="form-checkbox text-sky-600"
//               />
//               Show In Stock Only
//             </label>
//           </div>

//           {/* 💖 Wishlist Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {sortedAndFilteredItems.map((item) => (
//               <WishlistCard key={item.id} item={item} />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//     </div>
//   );
// };

// export default WishlistPage;




// import React, { useState } from "react";
// import { useWishlist } from "../../context/WishlistContext";
// import WishlistCard from "./WishlistCard";

// const WishlistPage = () => {
//   const { wishlistItems } = useWishlist();

//   const [sortOption, setSortOption] = useState("name-asc");
//   const [showInStockOnly, setShowInStockOnly] = useState(false);

//   const sortedAndFilteredItems = [...wishlistItems]
//     .filter((item) => (showInStockOnly ? item.inStock !== false : true))
//     .sort((a, b) => {
//       if (sortOption === "name-asc") return a.name.localeCompare(b.name);
//       if (sortOption === "name-desc") return b.name.localeCompare(a.name);
//       if (sortOption === "price-asc") return a.price - b.price;
//       if (sortOption === "price-desc") return b.price - a.price;
//       return 0;
//     });

//   return (
//         // Main container for the wishlist page content

//     <div className="pt-[190px]">
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
//         {/* Left Section: Items, Collections, What's new, Sales & offers */}
//         <aside className="w-full lg:w-64 flex-shrink-0">
//           {/* Top Info: Sadia's Favorites, About, Settings */}
//           <div className="hidden sm:flex items-center gap-4 mb-6">
//             <div className="bg-green-200 p-2 rounded-full">
//               <span className="text-green-700 font-bold text-lg">S</span>
//             </div>
//             <h1 className="text-2xl font-semibold text-gray-800">Sadia's Favorites</h1>
//             <nav className="flex space-x-4 text-gray-600 text-sm ml-4">
//               <a href="#" className="hover:text-sky-600">About</a>
//               <a href="#" className="hover:text-sky-600">Settings</a>
//             </nav>
//           </div>

//           {/* Search Bar for Sadia's Favorites (if needed on this page, otherwise remove) */}
//           {/* <div className="relative mb-6 hidden sm:block">
//             <input
//               type="text"
//               placeholder="Search your favorites"
//               className="border border-gray-300 rounded-full py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
//             />
//             <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
//           </div> */}

//           <nav className="bg-white shadow rounded-lg p-4 mb-6">
//             <div className="flex items-center text-gray-700 font-semibold text-lg py-2 px-3 bg-gray-100 rounded-lg">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" />
//               </svg>
//               Items
//             </div>
//             <div className="flex items-center text-gray-700 text-lg py-2 px-3 mt-2 hover:bg-gray-50 rounded-lg cursor-pointer">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zm3-4H6a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zm0 0V9m0-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V7z" />
//               </svg>
//               Collections
//               <span className="ml-auto text-sky-600">+</span>
//             </div>
//           </nav>

//           {/* "What's new" and "Sales & offers" sections */}
//           <div className="bg-white shadow rounded-lg p-4">
//             <h3 className="text-sm font-semibold mb-3">What's new</h3>
//             <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
//               <div className="flex items-center p-2 rounded-lg bg-gray-50 flex-grow">
//                 <img
//                   src="https://via.placeholder.com/60x60/a7d9f7/ffffff?text=Flower" // Placeholder image for "What's new"
//                   alt="What's new product"
//                   className="w-12 h-12 object-cover rounded mr-3"
//                 />
//                 <div className="flex-grow">
//                   <p className="text-sm font-medium">Sales & offers</p>
//                   <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">25% off</span>
//                 </div>
//               </div>
//               {/* If there's another item under "What's new", add it here. */}
//               {/* For now, replicating the single block shown in your new screenshot */}
//             </div>
//           </div>
//         </aside>

//         {/* Right Section: Wishlist Content */}
//         <main className="flex-1">
//           {wishlistItems.length === 0 ? (
//             <div className="bg-white shadow rounded-lg p-8 text-center">
//               <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
//             </div>
//           ) : (
//             <div className-="bg-white shadow rounded-lg p-4 sm:p-6">
//               {/* Sort + Filter Controls */}
//               <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
//                 <select
//                   value={sortOption}
//                   onChange={(e) => setSortOption(e.target.value)}
//                   className="border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full sm:w-auto"
//                 >
//                   <option value="name-asc">Sort: Name A–Z</option>
//                   <option value="name-desc">Sort: Name Z–A</option>
//                   <option value="price-asc">Sort: Price Low → High</option>
//                   <option value="price-desc">Sort: Price High → Low</option>
//                 </select>

//                 <label className="inline-flex items-center gap-2 text-sm text-gray-700">
//                   <input
//                     type="checkbox"
//                     checked={showInStockOnly}
//                     onChange={() => setShowInStockOnly((prev) => !prev)}
//                     className="form-checkbox h-4 w-4 text-sky-600 rounded"
//                   />
//                   Show In Stock Only
//                 </label>
//               </div>

//               {/* Wishlist Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//                 {sortedAndFilteredItems.map((item) => (
//                   <WishlistCard key={item.id} item={item} />
//                 ))}
//               </div>
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default WishlistPage;


// import React, { useState } from "react";
// import { useWishlist } from "../../context/WishlistContext";
// import WishlistCard from "./WishlistCard";

// const WishlistPage = () => {
//   const { wishlistItems } = useWishlist();
//   const [sortOption, setSortOption] = useState("name-asc");
//   const [showInStockOnly, setShowInStockOnly] = useState(false);

//   const filteredItems = wishlistItems
//     .filter((item) => (showInStockOnly ? item.inStock !== false : true))
//     .sort((a, b) => {
//       if (sortOption === "name-asc") return a.name.localeCompare(b.name);
//       if (sortOption === "name-desc") return b.name.localeCompare(a.name);
//       if (sortOption === "price-asc") return a.price - b.price;
//       if (sortOption === "price-desc") return b.price - a.price;
//       return 0;
//     });

//   return (
//     <div className="pt-[190px]">
//     <div className="pt-[120px] min-h-screen bg-gray-50 px-4 md:px-10 pb-10">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Your Wishlist</h2>

//           <div className="flex gap-3 flex-wrap">
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700"
//             >
//               <option value="name-asc">Sort: Name A–Z</option>
//               <option value="name-desc">Sort: Name Z–A</option>
//               <option value="price-asc">Sort: Price Low → High</option>
//               <option value="price-desc">Sort: Price High → Low</option>
//             </select>

//             <label className="inline-flex items-center gap-2 text-sm text-gray-700">
//               <input
//                 type="checkbox"
//                 checked={showInStockOnly}
//                 onChange={() => setShowInStockOnly((prev) => !prev)}
//                 className="form-checkbox text-sky-600"
//               />
//               Show In Stock Only
//             </label>
//           </div>
//         </div>

//         {filteredItems.length === 0 ? (
//           <div className="bg-white text-center text-gray-500 p-8 rounded-lg shadow">
//             Your wishlist is empty.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredItems.map((item) => (
//               <WishlistCard key={item.id} item={item} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default WishlistPage;



import React, { useState, useEffect } from "react";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { FiSearch, FiPlus } from "react-icons/fi";
import {ErrorBoundary} from "../../components/ErrorBoundary/ErrorBoundary";
import WishlistCard from "./WishlistCard";

const WishlistPage = () => {
  // Safe context access with defaults
  const { wishlistItems = [] } = useWishlist?.() || {};
  const { currentUser = null } = useAuth?.() || {};
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("items");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60); // 2 days in seconds

  // Countdown timer for sales
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time for display
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${mins}m ${secs}s`;
  };

  // Loading simulation
  useEffect(() => {
    try {
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, []);

  // Safe filtered items
  const getFilteredItems = () => {
    try {
      if (!Array.isArray(wishlistItems)) return [];
      return wishlistItems.filter(item =>
        item?.name?.toLowerCase()?.includes(searchQuery.toLowerCase())
      );
    } catch (err) {
      setError(err);
      return [];
    }
  };

  const filteredItems = getFilteredItems();

  // Safe username generation
  const getUserName = () => {
    try {
      if (!currentUser) return "Your";
      if (currentUser.displayName) return `${currentUser.displayName}'s`;
      if (currentUser.email) return `${currentUser.email.split('@')[0]}'s`;
      return "Your";
    } catch (err) {
      console.error("Error generating username:", err);
      return "Your";
    }
  };

  if (error) {
    return (
      <div className="pt-[150px] min-h-screen flex items-center justify-center">
        <div className="bg-red-50 text-red-600 p-6 rounded-lg max-w-md text-center">
          <h2 className="text-lg font-medium mb-2">Failed to load wishlist</h2>
          <p className="mb-4">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-white border border-red-200 px-4 py-2 rounded hover:bg-red-100"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="pt-[150px] min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading your favorites...</div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="pt-[100px]">
      <div className="pt-[150px] min-h-screen bg-white px-4 md:px-6 pb-10 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Header Section - Exact match to screenshot */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {getUserName()} Favorites
            </h1>
            
            <div className="flex gap-6 text-gray-600  pb-4 mb-6">
              <Link to="/about" className="hover:text-sky-600">About</Link>
              <Link to="/settings" className="hover:text-sky-600">Settings</Link>
            </div>
            
            {/* Search Bar - Added as per screenshot */}
            <div className="relative mb-6">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search your favorites"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Tab Navigation - Icon-based as requested */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`flex items-center gap-2 px-4 py-2 ${
                activeTab === 'items' ? 'text-sky-600 border-b-2 border-sky-600' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('items')}
            >
              <span>Items</span>
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 ${
                activeTab === 'collections' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('collections')}
            >
              <span>Collections</span>
              <FiPlus className="text-sm" />
            </button>
          </div>

          {/* Content Sections */}
          {activeTab === 'items' ? (
            <>
              {/* What's New Section */}
              {/* <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">What's new</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {filteredItems.slice(0, 4).map(item => (
                        <WishlistCard key={item.id} item={item} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-4">No new items found</p>
                  )}
                </div>
              </section> */}

              {/* All Items Section */}
              <section>
                <h2 className="text-xl font-semibold mb-4">All Items</h2>
                {filteredItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredItems.map((item) => (
                      <WishlistCard key={item.id} item={item} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-gray-500">No items match your search</p>
                    <Link 
                      to="/products" 
                      className="mt-4 inline-block text-blue-600 hover:underline"
                    >
                      Browse products
                    </Link>
                  </div>
                )}
              </section>
            </>
          ) : (
            /* Collections Tab Content */
            <section>
              <h2 className="text-xl font-semibold mb-4">Sales & offers</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-1">25% OFF</h3>
                    <p className="text-blue-600 mb-2">Special discount on selected favorites</p>
                    <p className="text-sm text-gray-500">Ends in: {formatTime(timeLeft)}</p>
                  </div>
                  <Link to="/discount" className="inline-block">
  <button 
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
  >
    Shop Now
  </button>
</Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map(item => (
                  <WishlistCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      </div>
    </ErrorBoundary>
  );
};

export default WishlistPage;
