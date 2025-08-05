// src/pages/Discount.jsx
// import React, { useState, useRef } from "react";
// import FilterDrawer from "../../components/Filters/FilterDrawer";
// import {
//   ChevronLeft,
//   ChevronRight,
//   HelpCircle,
//   PlayCircle,
//   ArrowRight,
// } from "lucide-react";

// const allTags = [
//   "Under USD 10",
//   "Star Seller",
//   "Ships from BD",
//   "Stickers",
//   "Framed Prints",
//   "Birthday Cards",
//   "Funny",
//   "Cute",
//   "Cat Theme",
//   "Occasion",
//   "Recipient",
//   "Mystery Pack",
// ];

// const products = [
//   {
//     id: "baguette-1",
//     images: [
//     'https://i.postimg.cc/m2jp7gPM/gifts6.jpg',
//     { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752564205/57c6b523d54e0e744dc1176b896234c7_jtyiui.mp4' },
//   ],
//     title: "Vintage Y2K Charles David calfskin-pink",
//     shop: "Azza'h seller",
//     isAd: true,
//     rating: 5.0,
//     reviews: 302,
//     price: 86.43,
//     original: 115.24,
//     discount: "25% off",
//     type: "Physical",
//     popular: true,
//   },
//   {
    
//     id: "discount-1",
//     images: [
//     'https://i.postimg.cc/J4vShRY8/dis1.jpg',
//     { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//   ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
//   {
    
//     id: "discount-2",
//     images: [
//     'https://i.postimg.cc/rwSdnFvF/dis2.jpg',
//     { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//   ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
// ];

// export default function Discount() {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [filterTags, setFilterTags] = useState([]);
//   const [sortOption, setSortOption] = useState("Most relevant");
//   const scrollRef = useRef(null);

//   const scroll = (offset) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: offset,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="pt-[190px]">
//       <section className="pt-24 pb-8 px-4 md:px-8 lg:px-16 bg-gray-50">
//         {/* Filter Row */}
//         <div className="flex items-center gap-3 mb-4 overflow-hidden">
//           {/* Filters Button */}
//           <button
//             onClick={() => setDrawerOpen(true)}
//             className="flex items-center gap-2 px-4 py-2 border-2 border-sky-500 text-black rounded-full hover:bg-gray-100 transition shrink-0"
//           >
//             <svg className="h-5 w-5" viewBox="0 0 24 24">
//               <path
//                 fill="currentColor"
//                 d="M3 6h18v2H3V6zm4 5h10v2H7v-2zm-4 5h18v2H3v-2z"
//               />
//             </svg>
//             All Filters
//           </button>
//           <FilterDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

//           {/* Left Arrow */}
//           {/* <button
//             onClick={() => scroll(-200)}
//             className="p-2 bg-white shadow rounded-full hover:bg-gray-100"
//           >
//             <ChevronLeft className="w-4 h-4" />
//           </button> */}

//           {/* Tag Scroll Area */}
//           <div
//             ref={scrollRef}
//             className="flex overflow-x-auto no-scrollbar gap-2 flex-1 scroll-smooth"
//           >
//             {allTags.map((tag) => (
//               <button
//                 key={tag}
//                 onClick={() =>
//                   setFilterTags((prev) =>
//                     prev.includes(tag)
//                       ? prev.filter((t) => t !== tag)
//                       : [...prev, tag]
//                   )
//                 }
//                 className={`px-4 py-1.5 text-sm rounded-full border transition whitespace-nowrap ${
//                   filterTags.includes(tag)
//                     ? "bg-black text-white border-black"
//                     : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
//                 }`}
//               >
//                 {tag}
//               </button>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={() => scroll(200)}
//             className="p-2 bg-white shadow rounded-full hover:bg-gray-100"
//           >
//             <ChevronRight className="w-4 h-4" />
//           </button>

//           {/* Right Info */}
//           <div className="ml-auto flex items-center gap-2 text-sm text-gray-600 shrink-0">
//             <span className="whitespace-nowrap">1,000+ items with ads</span>
//             <HelpCircle className="w-4 h-4" />
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="font-medium cursor-pointer bg-transparent focus:outline-none"
//             >
//               <option>Most relevant</option>
//               <option>Lowest price</option>
//               <option>Highest price</option>
//               <option>Best reviews</option>
//               <option>Newest</option>
//             </select>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((p) => (
//             <div
//               key={p.id}
//               className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden group relative"
//             >
//               <div className="relative w-full h-48">
//   {/* Show first image from images array */}
//   {p.images &&
//     Array.isArray(p.images) &&
//     p.images.find(img => typeof img === "string") && (
//       <img
//         src={p.images.find(img => typeof img === "string")}
//         alt={p.title}
//         className="absolute w-full h-full object-cover group-hover:hidden"
//       />
//     )}

//   {/* Show first video on hover from images array */}
//   {p.images &&
//     Array.isArray(p.images) &&
//     p.images.find(media => media?.type === "video") && (
//       <video
//         src={p.images.find(media => media?.type === "video")?.url}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute w-full h-full object-cover hidden group-hover:block"
//       />
//     )}
// </div>


//               <div className="p-4">
//                 <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
//                   {p.title}
//                 </h3>
//                 <div className="text-xs text-gray-600 mb-2 flex items-center space-x-2">
//                   <span>{p.shop}</span>
//                   {p.rating && (
//                     <>
//                       <span>·</span>
//                       <span>
//                         {p.rating}★ ({p.reviews})
//                       </span>
//                     </>
//                   )}
//                 </div>

//                 <div className="text-sm font-semibold text-gray-900 mb-3">
//                   USD {p.price.toFixed(2)}
//                   {p.original && (
//                     <span className="text-gray-500 line-through text-xs ml-1">
//                       USD {p.original.toFixed(2)}
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex items-center justify-between gap-2">
//                   <button className="flex-1 text-sm border border-gray-300 rounded px-2 py-2 hover:bg-gray-100 transition">
//                     + Add to cart
//                   </button>
//                   <ArrowRight className="w-4 h-4 text-gray-600" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



// import React, { useState, useRef } from "react";
// import FilterDrawer from "../../components/Filters/FilterDrawer";
// import {
//   ChevronLeft,
//   ChevronRight,
//   HelpCircle,
//   ArrowRight,
//   Heart,
//   Star,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const allTags = [
//   "Under USD 10",
//   "Star Seller",
//   "Ships from BD",
//   "Stickers",
//   "Framed Prints",
//   "Birthday Cards",
//   "Funny",
//   "Cute",
//   "Cat Theme",
//   "Occasion",
//   "Recipient",
//   "Mystery Pack",
// ];

// const products = [
//   {
//     id: "baguette-1",
//     images: [
//       'https://i.postimg.cc/m2jp7gPM/gifts6.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752564205/57c6b523d54e0e744dc1176b896234c7_jtyiui.mp4' },
//     ],
//     title: "Vintage Y2K Charles David calfskin-pink",
//     shop: "Azza'h seller",
//     isAd: true,
//     rating: 5.0,
//     reviews: 302,
//     price: 86.43,
//     original: 115.24,
//     discount: "25% off",
//     type: "Physical",
//     popular: true,
//   },
//   {
//     id: "discount-1",
//     images: [
//       'https://i.postimg.cc/J4vShRY8/dis1.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//     ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
//   {
//     id: "discount-2",
//     images: [
//       'https://i.postimg.cc/rwSdnFvF/dis2.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//     ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
//   // Add more products as needed
// ];

// export default function Discount() {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [filterTags, setFilterTags] = useState([]);
//   const [sortOption, setSortOption] = useState("Most relevant");
//   const [wishlist, setWishlist] = useState([]);
//   const scrollRef = useRef(null);

//   const scroll = (offset) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: offset,
//         behavior: "smooth",
//       });
//     }
//   };

//   const toggleWishlist = (productId) => {
//     setWishlist(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId) 
//         : [...prev, productId]
//     );
//   };

//   return (
//     <div className="pt-[190px] bg-gray-50 min-h-screen">
//       <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         {/* Filter Row */}
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
//           <div className="flex items-center gap-3 w-full md:w-auto overflow-hidden">
//             {/* Filters Button */}
//             <button
//               onClick={() => setDrawerOpen(true)}
//               className="flex items-center gap-2 px-4 py-2 border-2 border-sky-500 text-black rounded-full hover:bg-gray-100 transition shrink-0"
//             >
//               <svg className="h-5 w-5" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M3 6h18v2H3V6zm4 5h10v2H7v-2zm-4 5h18v2H3v-2z"
//                 />
//               </svg>
//               All Filters
//             </button>
//             <FilterDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

//             {/* Tag Scroll Area */}
//             <div className="relative flex-1">
//               <div className="absolute inset-y-0 left-0 flex items-center">
//                 <button
//                   onClick={() => scroll(-200)}
//                   className="p-2 bg-white shadow rounded-full hover:bg-gray-100 z-10"
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </button>
//               </div>
              
//               <div
//                 ref={scrollRef}
//                 className="flex overflow-x-auto no-scrollbar gap-2 pl-10 pr-14 scroll-smooth"
//               >
//                 {allTags.map((tag) => (
//                   <button
//                     key={tag}
//                     onClick={() =>
//                       setFilterTags((prev) =>
//                         prev.includes(tag)
//                           ? prev.filter((t) => t !== tag)
//                           : [...prev, tag]
//                       )
//                     }
//                     className={`px-4 py-1.5 text-sm rounded-full border transition whitespace-nowrap ${
//                       filterTags.includes(tag)
//                         ? "bg-black text-white border-black"
//                         : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
//                     }`}
//                   >
//                     {tag}
//                   </button>
//                 ))}
//               </div>

//               <div className="absolute inset-y-0 right-0 flex items-center">
//                 <button
//                   onClick={() => scroll(200)}
//                   className="p-2 bg-white shadow rounded-full hover:bg-gray-100"
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>


//           {/* Right Info */}
//           <div className="flex items-center gap-2 text-sm text-gray-600 w-full md:w-auto justify-between md:justify-end">
//             <span className="whitespace-nowrap">1,000+ items with ads</span>
//             <HelpCircle className="w-4 h-4" />
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="font-medium cursor-pointer bg-transparent focus:outline-none border rounded px-2 py-1"
//             >
//               <option>Most relevant</option>
//               <option>Lowest price</option>
//               <option>Highest price</option>
//               <option>Best reviews</option>
//               <option>Newest</option>
//             </select>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group relative"
//             >
//               {/* Wishlist Button */}
//               <button
//                 onClick={() => toggleWishlist(product.id)}
//                 className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all ${
//                   wishlist.includes(product.id)
//                     ? "text-red-500 bg-white/90"
//                     : "text-gray-400 bg-white/80 hover:text-red-500"
//                 }`}
//               >
//                 <Heart 
//                   className="w-5 h-5" 
//                   fill={wishlist.includes(product.id) ? "currentColor" : "none"}
//                 />
//               </button>

//               {/* Discount Badge */}
//               {product.discount && (
//                 <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
//                   {product.discount}
//                 </div>
//               )}

//               {/* Product Media */}
//               <Link to={`/product/${product.id}`} className="block">
//                 <div className="relative w-full aspect-square overflow-hidden">
//                   {/* Image */}
//                   {product.images?.find(img => typeof img === "string") && (
//                     <img
//                       src={product.images.find(img => typeof img === "string")}
//                       alt={product.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:opacity-0"
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
//                       }}
//                     />
//                   )}
                  
//                   {/* Video */}
//                   {product.images?.find(media => media?.type === "video") && (
//                     <video
//                       src={product.images.find(media => media?.type === "video")?.url}
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     />
//                   )}
//                 </div>
//               </Link>

//               {/* Product Info */}
//               <div className="p-4">
//                 <Link to={`/product/${product.id}`} className="block">
//                   <h3 className="font-medium text-gray-900 line-clamp-2 mb-1 hover:text-blue-600">
//                     {product.title}
//                   </h3>
//                 </Link>
                
//                 <div className="flex items-center text-sm text-gray-600 mb-2">
//                   <span>{product.shop}</span>
//                   {product.rating && (
//                     <div className="flex items-center ml-2">
//                       <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
//                       <span>{product.rating}</span>
//                       <span className="text-gray-400 ml-1">({product.reviews})</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex items-center justify-between mb-3">
//                   <div>
//                     <span className="font-bold text-gray-900">
//                       ${product.price.toFixed(2)}
//                     </span>
//                     {product.original && (
//                       <span className="text-gray-500 line-through text-sm ml-2">
//                         ${product.original.toFixed(2)}
//                       </span>
//                     )}
//                   </div>
//                   {product.type && (
//                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                       {product.type}
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button className="flex-1 bg-black text-white text-sm font-medium py-2 px-4 rounded hover:bg-gray-800 transition">
//                     Add to cart
//                   </button>
//                   <Link 
//                     to={`/product/${product.id}`} 
//                     className="p-2 text-gray-600 hover:text-blue-600 transition"
//                   >
//                     <ArrowRight className="w-5 h-5" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         <div className="mt-10 text-center">
//           <button className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-100 transition">
//             Load more
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }



// import React, { useState, useRef, useEffect } from "react";
// import FilterDrawer from "../../components/Filters/FilterDrawer";
// import {
//   ChevronRight,
//   HelpCircle,
//   ArrowRight,
//   Heart,
//   Star,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const allTags = [
//   "Under USD 10",
//   "Star Seller",
//   "Ships from BD",
//   "Vases",
//   "Candles",
//   "Gift Cards",
//   "Wall Art",
//   "Brooch",
// ];

// const products = [
//   {
//     id: "baguette-1",
//     images: [
//       'https://i.postimg.cc/m2jp7gPM/gifts6.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752564205/57c6b523d54e0e744dc1176b896234c7_jtyiui.mp4' },
//     ],
//     title: "Vintage Y2K Charles David calfskin-pink",
//     shop: "Azza'h seller",
//     isAd: true,
//     rating: 5.0,
//     reviews: 302,
//     price: 86.43,
//     original: 115.24,
//     discount: "25% off",
//     type: "Physical",
//     popular: true,
//   },
//   {
//     id: "discount-1",
//     images: [
//       'https://i.postimg.cc/J4vShRY8/dis1.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//     ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
//   {
//     id: "discount-2",
//     images: [
//       'https://i.postimg.cc/rwSdnFvF/dis2.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//     ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
// ];

// export default function Discount() {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [filterTags, setFilterTags] = useState([]);
//   const [sortOption, setSortOption] = useState("Most relevant");
//   const [wishlist, setWishlist] = useState([]);
//   const [showRightScroll, setShowRightScroll] = useState(false);
//   const scrollRef = useRef(null);

//   const checkScroll = () => {
//     if (scrollRef.current) {
//       const hasScroll = scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
//       setShowRightScroll(hasScroll);
//     }
//   };

//   useEffect(() => {
//     checkScroll();
//     window.addEventListener('resize', checkScroll);
//     return () => window.removeEventListener('resize', checkScroll);
//   }, []);

//   const scroll = (offset) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: offset,
//         behavior: "smooth",
//       });
//     }
//   };

//   const toggleWishlist = (productId) => {
//     setWishlist(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId) 
//         : [...prev, productId]
//     );
//   };

//   return (
//     <div className="pt-[190px] bg-gray-50 min-h-screen">
//       <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         {/* Filter Row */}
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
//           <div className="flex items-center gap-3 w-full md:w-auto overflow-hidden relative">
//             {/* Filters Button */}
//             <button
//               onClick={() => setDrawerOpen(true)}
//               className="flex items-center gap-2 px-4 py-2 border-2 border-sky-500 text-black rounded-full hover:bg-gray-100 transition shrink-0"
//             >
//               <svg className="h-5 w-5" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M3 6h18v2H3V6zm4 5h10v2H7v-2zm-4 5h18v2H3v-2z"
//                 />
//               </svg>
//               All Filters
//             </button>
//             <FilterDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

//             {/* Tag Scroll Area */}
// <div className="relative flex-1">
//   {/* Right-side scroll button */}
//   <div className="absolute right-0 top-0 h-full flex items-center bg-gradient-to-l from-white to-transparent w-16 pl-4 pointer-events-none">
//     <button
//       onClick={() => scroll(200)}
//       className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100 pointer-events-auto"
//     >
//       <ChevronRight className="w-4 h-4 text-gray-600" />
//     </button>
//   </div>

//   {/* Scrollable content */}
//   <div
//     ref={scrollRef}
//     className="flex overflow-x-auto gap-2 pr-10 scroll-smooth no-scrollbar"
//     onScroll={checkScroll}
//   >
//     {allTags.map((tag) => (
//       <button
//         key={tag}
//         onClick={() =>
//           setFilterTags((prev) =>
//             prev.includes(tag)
//               ? prev.filter((t) => t !== tag)
//               : [...prev, tag]
//           )
//         }
//         className={`px-4 py-1.5 text-sm rounded-full border transition whitespace-nowrap shrink-0 ${
//           filterTags.includes(tag)
//             ? "bg-black text-white border-black"
//             : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
//         }`}
//       >
//         {tag}
//       </button>
//     ))}
//   </div>
// </div>
// </div>

//           {/* Right Info */}
//           <div className="flex items-center gap-2 text-sm text-gray-600 w-full md:w-auto justify-between md:justify-end">
//             <span className="whitespace-nowrap">1,000+ items with ads</span>
//             <HelpCircle className="w-4 h-4" />
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="font-medium cursor-pointer bg-transparent focus:outline-none border rounded px-2 py-1"
//             >
//               <option>Most relevant</option>
//               <option>Lowest price</option>
//               <option>Highest price</option>
//               <option>Best reviews</option>
//               <option>Newest</option>
//             </select>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group relative"
//             >
//               {/* Wishlist Button */}
//               <button
//                 onClick={() => toggleWishlist(product.id)}
//                 className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all ${
//                   wishlist.includes(product.id)
//                     ? "text-red-500 bg-white/90"
//                     : "text-gray-400 bg-white/80 hover:text-red-500"
//                 }`}
//               >
//                 <Heart 
//                   className="w-5 h-5" 
//                   fill={wishlist.includes(product.id) ? "currentColor" : "none"}
//                 />
//               </button>

//               {/* Discount Badge */}
//               {product.discount && (
//                 <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
//                   {product.discount}
//                 </div>
//               )}

//               {/* Product Media */}
//               <Link to={`/product/${product.id}`} className="block">
//                 <div className="relative w-full aspect-square overflow-hidden">
//                   {/* Image */}
//                   {product.images?.find(img => typeof img === "string") && (
//                     <img
//                       src={product.images.find(img => typeof img === "string")}
//                       alt={product.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:opacity-0"
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
//                       }}
//                     />
//                   )}
                  
//                   {/* Video */}
//                   {product.images?.find(media => media?.type === "video") && (
//                     <video
//                       src={product.images.find(media => media?.type === "video")?.url}
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     />
//                   )}
//                 </div>
//               </Link>

//               {/* Product Info */}
//               <div className="p-4">
//                 <Link to={`/product/${product.id}`} className="block">
//                   <h3 className="font-medium text-gray-900 line-clamp-2 mb-1 hover:text-blue-600">
//                     {product.title}
//                   </h3>
//                 </Link>
                
//                 <div className="flex items-center text-sm text-gray-600 mb-2">
//                   <span>{product.shop}</span>
//                   {product.rating && (
//                     <div className="flex items-center ml-2">
//                       <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
//                       <span>{product.rating}</span>
//                       <span className="text-gray-400 ml-1">({product.reviews})</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex items-center justify-between mb-3">
//                   <div>
//                     <span className="font-bold text-gray-900">
//                       ${product.price.toFixed(2)}
//                     </span>
//                     {product.original && (
//                       <span className="text-gray-500 line-through text-sm ml-2">
//                         ${product.original.toFixed(2)}
//                       </span>
//                     )}
//                   </div>
//                   {product.type && (
//                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                       {product.type}
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button className="flex-1 bg-black text-white text-sm font-medium py-2 px-4 rounded hover:bg-gray-800 transition">
//                     Add to cart
//                   </button>
//                   <Link 
//                     to={`/product/${product.id}`} 
//                     className="p-2 text-gray-600 hover:text-blue-600 transition"
//                   >
//                     <ArrowRight className="w-5 h-5" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         <div className="mt-10 text-center">
//           <button className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-100 transition">
//             Load more
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }


// import React, { useState, useRef } from "react";
// import FilterDrawer from "../../components/Filters/FilterDrawer";
// import {
//   ChevronLeft,
//   ChevronRight,
//   HelpCircle,
//   ArrowRight,
//   Heart,
//   Star,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const allTags = [
//   "Under USD 10",
//   "Star Seller",
//   "Ships from BD",
//   "Stickers",
//   "Framed Prints",
//   "Birthday Cards",
//   "Funny",
//   "Cute",
//   "Cat Theme",
//   "Occasion",
//   "Recipient",
//   "Mystery Pack",
// ];

// const products = [
//   {
//     id: "baguette-1",
//     images: [
//       'https://i.postimg.cc/m2jp7gPM/gifts6.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752564205/57c6b523d54e0e744dc1176b896234c7_jtyiui.mp4' },
//     ],
//     title: "Vintage Y2K Charles David calfskin-pink",
//     shop: "Azza'h seller",
//     isAd: true,
//     rating: 5.0,
//     reviews: 302,
//     price: 86.43,
//     original: 115.24,
//     discount: "25% off",
//     type: "Physical",
//     popular: true,
//   },
//   {
//     id: "discount-1",
//     images: [
//       'https://i.postimg.cc/J4vShRY8/dis1.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//     ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
//   {
//     id: "discount-2",
//     images: [
//       'https://i.postimg.cc/rwSdnFvF/dis2.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//     ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
//   // Add more products as needed
// ];

// export default function Discount() {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [filterTags, setFilterTags] = useState([]);
//   const [sortOption, setSortOption] = useState("Most relevant");
//   const [wishlist, setWishlist] = useState([]);
//   const scrollRef = useRef(null);

//   const scroll = (offset) => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: offset,
//         behavior: "smooth",
//       });
//     }
//   };

//   const toggleWishlist = (productId) => {
//     setWishlist(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId) 
//         : [...prev, productId]
//     );
//   };

//   return (
//     <div className="pt-[190px] bg-gray-50 min-h-screen">
//       <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         {/* Filter Row */}
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
//           <div className="flex items-center gap-3 w-full md:w-auto overflow-hidden">
//             {/* Filters Button */}
//             <button
//               onClick={() => setDrawerOpen(true)}
//               className="flex items-center gap-2 px-4 py-2 border-2 border-sky-500 text-black rounded-full hover:bg-gray-100 transition shrink-0"
//             >
//               <svg className="h-5 w-5" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M3 6h18v2H3V6zm4 5h10v2H7v-2zm-4 5h18v2H3v-2z"
//                 />
//               </svg>
//               All Filters
//             </button>
//             <FilterDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

//             {/* Tag Scroll Area */}
//             <div className="relative flex-1">
//               <div className="absolute inset-y-0 left-0 flex items-center">
//                 <button
//                   onClick={() => scroll(-200)}
//                   className="p-2 bg-white shadow rounded-full hover:bg-gray-100 z-10"
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </button>
//               </div>
              
//               <div
//                 ref={scrollRef}
//                 className="flex overflow-x-auto no-scrollbar gap-2 pl-10 pr-14 scroll-smooth"
//               >
//                 {allTags.map((tag) => (
//                   <button
//                     key={tag}
//                     onClick={() =>
//                       setFilterTags((prev) =>
//                         prev.includes(tag)
//                           ? prev.filter((t) => t !== tag)
//                           : [...prev, tag]
//                       )
//                     }
//                     className={`px-4 py-1.5 text-sm rounded-full border transition whitespace-nowrap ${
//                       filterTags.includes(tag)
//                         ? "bg-black text-white border-black"
//                         : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
//                     }`}
//                   >
//                     {tag}
//                   </button>
//                 ))}
//               </div>

//               <div className="absolute inset-y-0 right-0 flex items-center">
//                 <button
//                   onClick={() => scroll(200)}
//                   className="p-2 bg-white shadow rounded-full hover:bg-gray-100"
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Right Info */}
//           <div className="flex items-center gap-2 text-sm text-gray-600 w-full md:w-auto justify-between md:justify-end">
//             <span className="whitespace-nowrap">1,000+ items with ads</span>
//             <HelpCircle className="w-4 h-4" />
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="font-medium cursor-pointer bg-transparent focus:outline-none border rounded px-2 py-1"
//             >
//               <option>Most relevant</option>
//               <option>Lowest price</option>
//               <option>Highest price</option>
//               <option>Best reviews</option>
//               <option>Newest</option>
//             </select>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group relative"
//             >
//               {/* Wishlist Button */}
//               <button
//                 onClick={() => toggleWishlist(product.id)}
//                 className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all ${
//                   wishlist.includes(product.id)
//                     ? "text-red-500 bg-white/90"
//                     : "text-gray-400 bg-white/80 hover:text-red-500"
//                 }`}
//               >
//                 <Heart 
//                   className="w-5 h-5" 
//                   fill={wishlist.includes(product.id) ? "currentColor" : "none"}
//                 />
//               </button>

//               {/* Discount Badge */}
//               {product.discount && (
//                 <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
//                   {product.discount}
//                 </div>
//               )}

//               {/* Product Media */}
//               <Link to={`/product/${product.id}`} className="block">
//                 <div className="relative w-full aspect-square overflow-hidden">
//                   {/* Image */}
//                   {product.images?.find(img => typeof img === "string") && (
//                     <img
//                       src={product.images.find(img => typeof img === "string")}
//                       alt={product.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:opacity-0"
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
//                       }}
//                     />
//                   )}
                  
//                   {/* Video */}
//                   {product.images?.find(media => media?.type === "video") && (
//                     <video
//                       src={product.images.find(media => media?.type === "video")?.url}
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     />
//                   )}
//                 </div>
//               </Link>

//               {/* Product Info */}
//               <div className="p-4">
//                 <Link to={`/product/${product.id}`} className="block">
//                   <h3 className="font-medium text-gray-900 line-clamp-2 mb-1 hover:text-blue-600">
//                     {product.title}
//                   </h3>
//                 </Link>
                
//                 <div className="flex items-center text-sm text-gray-600 mb-2">
//                   <span>{product.shop}</span>
//                   {product.rating && (
//                     <div className="flex items-center ml-2">
//                       <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
//                       <span>{product.rating}</span>
//                       <span className="text-gray-400 ml-1">({product.reviews})</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex items-center justify-between mb-3">
//                   <div>
//                     <span className="font-bold text-gray-900">
//                       ${product.price.toFixed(2)}
//                     </span>
//                     {product.original && (
//                       <span className="text-gray-500 line-through text-sm ml-2">
//                         ${product.original.toFixed(2)}
//                       </span>
//                     )}
//                   </div>
//                   {product.type && (
//                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                       {product.type}
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button className="flex-1 bg-black text-white text-sm font-medium py-2 px-4 rounded hover:bg-gray-800 transition">
//                     Add to cart
//                   </button>
//                   <Link 
//                     to={`/product/${product.id}`} 
//                     className="p-2 text-gray-600 hover:text-blue-600 transition"
//                   >
//                     <ArrowRight className="w-5 h-5" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         <div className="mt-10 text-center">
//           <button className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-100 transition">
//             Load more
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }



//--------------

// import React, { useState, useRef, useEffect } from "react";
// import FilterDrawer from "../../components/Filters/FilterDrawer";
// import {
//   ChevronRight,
//   HelpCircle,
//   ArrowRight,
//   Heart,
//   Star,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const allTags = [
//   "Under BDT 99",
//   "Star Seller",
//   "Ships from BD",
//   "Vases",
//   "Candles",
//   "Gift Cards",
//   "Wall Art",
//   // "Brooch",
// ];

// const products = [
//   {
//     id: "baguette-1",
//     images: [
//       'https://i.postimg.cc/m2jp7gPM/gifts6.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752564205/57c6b523d54e0e744dc1176b896234c7_jtyiui.mp4' },
//     ],
//     title: "Vintage Y2K Charles David calfskin-pink",
//     shop: "Azza'h seller",
//     isAd: true,
//     rating: 5.0,
//     reviews: 302,
//     price: 86.43,
//     original: 115.24,
//     discount: "25% off",
//     type: "Physical",
//     popular: true,
//   },
//   {
//     id: "discount-1",
//     images: [
//       'https://i.postimg.cc/J4vShRY8/dis1.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//     ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
//   {
//     id: "discount-2",
//     images: [
//       'https://i.postimg.cc/rwSdnFvF/dis2.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//     ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
// ];

// export default function Discount() {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [filterTags, setFilterTags] = useState([]);
//   const [sortOption, setSortOption] = useState("Most relevant");
//   const [wishlist, setWishlist] = useState([]);
//   const scrollRef = useRef(null);
//   const [hasOverflow, setHasOverflow] = useState(false);

//   const checkOverflow = () => {
//     if (scrollRef.current) {
//       const hasOverflowing = scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
//       setHasOverflow(hasOverflowing);
//     }
//   };

//   useEffect(() => {
//     checkOverflow();
//     window.addEventListener('resize', checkOverflow);
//     return () => window.removeEventListener('resize', checkOverflow);
//   }, []);

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: 200, // Adjust this value as needed
//         behavior: "smooth",
//       });
//     }
//   };

//   const toggleWishlist = (productId) => {
//     setWishlist(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId) 
//         : [...prev, productId]
//     );
//   };

//   return (
//     <div className="pt-[190px] bg-gray-50 min-h-screen">
//       <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         {/* Filter Row */}
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
//           <div className="flex items-center gap-3 w-full md:w-auto overflow-hidden relative">
//             {/* Filters Button */}
//             <button
//               onClick={() => setDrawerOpen(true)}
//               className="flex items-center gap-2 px-4 py-2 border-2 border-sky-500 text-black rounded-full hover:bg-gray-100 transition shrink-0"
//             >
//               <svg className="h-5 w-5" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M3 6h18v2H3V6zm4 5h10v2H7v-2zm-4 5h18v2H3v-2z"
//                 />
//               </svg>
//               All Filters
//             </button>
//             <FilterDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

//             {/* Tag Scroll Area */}
//             <div className="relative flex-1">
//               {/* Scrollable content */}
//               <div
//                 ref={scrollRef}
//                 className="flex overflow-x-auto gap-2 pr-4 scroll-smooth no-scrollbar"
//               >
//                 {allTags.map((tag) => (
//                   <button
//                     key={tag}
//                     onClick={() =>
//                       setFilterTags((prev) =>
//                         prev.includes(tag)
//                           ? prev.filter((t) => t !== tag)
//                           : [...prev, tag]
//                       )
//                     }
//                     className={`px-4 py-1.5 text-sm rounded-full border transition whitespace-nowrap shrink-0 ${
//                       filterTags.includes(tag)
//                         ? "bg-black text-white border-black"
//                         : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
//                     }`}
//                   >
//                     {tag}
//                   </button>
//                 ))}
//               </div>

//               {/* Right scroll button - always visible if there's overflow */}
//               {hasOverflow && (
//                 <button
//                   onClick={scrollRight}
//                   className="absolute right-0 top-1/2 -translate-y-1/2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
//                 >
//                   <ChevronRight className="w-5 h-5 text-gray-600" />
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Right Info */}
//           <div className="flex items-center gap-2 text-sm text-gray-600 w-full md:w-auto justify-between md:justify-end">
//             <span className="whitespace-nowrap">1,000+ items with ads</span>
//             <HelpCircle className="w-4 h-4" />
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="font-medium cursor-pointer bg-transparent focus:outline-none border rounded px-2 py-1"
//             >
//               <option>Most relevant</option>
//               <option>Lowest price</option>
//               <option>Highest price</option>
//               <option>Best reviews</option>
//               <option>Newest</option>
//             </select>
//           </div>
//         </div>

//         {/* Rest of your component remains the same */}
//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group relative"
//             >
//               {/* Wishlist Button */}
//               <button
//                 onClick={() => toggleWishlist(product.id)}
//                 className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all ${
//                   wishlist.includes(product.id)
//                     ? "text-red-500 bg-white/90"
//                     : "text-gray-400 bg-white/80 hover:text-red-500"
//                 }`}
//               >
//                 <Heart 
//                   className="w-5 h-5" 
//                   fill={wishlist.includes(product.id) ? "currentColor" : "none"}
//                 />
//               </button>

//               {/* Discount Badge */}
//               {product.discount && (
//                 <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
//                   {product.discount}
//                 </div>
//               )}

//               {/* Product Media */}
//               <Link to={`/product/${product.id}`} className="block">
//                 <div className="relative w-full aspect-square overflow-hidden">
//                   {/* Image */}
//                   {product.images?.find(img => typeof img === "string") && (
//                     <img
//                       src={product.images.find(img => typeof img === "string")}
//                       alt={product.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:opacity-0"
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
//                       }}
//                     />
//                   )}
                  
//                   {/* Video */}
//                   {product.images?.find(media => media?.type === "video") && (
//                     <video
//                       src={product.images.find(media => media?.type === "video")?.url}
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     />
//                   )}
//                 </div>
//               </Link>

//               {/* Product Info */}
//               <div className="p-4">
//                 <Link to={`/product/${product.id}`} className="block">
//                   <h3 className="font-medium text-gray-900 line-clamp-2 mb-1 hover:text-blue-600">
//                     {product.title}
//                   </h3>
//                 </Link>
                
//                 <div className="flex items-center text-sm text-gray-600 mb-2">
//                   <span>{product.shop}</span>
//                   {product.rating && (
//                     <div className="flex items-center ml-2">
//                       <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
//                       <span>{product.rating}</span>
//                       <span className="text-gray-400 ml-1">({product.reviews})</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex items-center justify-between mb-3">
//                   <div>
//                     <span className="font-bold text-gray-900">
//                       ${product.price.toFixed(2)}
//                     </span>
//                     {product.original && (
//                       <span className="text-gray-500 line-through text-sm ml-2">
//                         ${product.original.toFixed(2)}
//                       </span>
//                     )}
//                   </div>
//                   {product.type && (
//                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                       {product.type}
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button className="flex-1 bg-black text-white text-sm font-medium py-2 px-4 rounded hover:bg-gray-800 transition">
//                     Add to cart
//                   </button>
//                   <Link 
//                     to={`/product/${product.id}`} 
//                     className="p-2 text-gray-600 hover:text-blue-600 transition"
//                   >
//                     <ArrowRight className="w-5 h-5" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         <div className="mt-10 text-center">
//           <button className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-100 transition">
//             Load more
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }



// final
// import React, { useState, useRef, useEffect } from "react";
// import FilterDrawer from "../../components/Filters/FilterDrawer";
// import {
//   ChevronRight,
//   HelpCircle,
//   ArrowRight,
//   Heart,
//   Star,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const allTags = [
//   "Under BDT 99",
//   "Star Seller",
//   "Ships from BD",
//   "Vases",
//   "Candles",
//   "Gift Cards",
//   "Wall Art",
//   "Brooch",
// ];

// const initialVisibleCount = 6;

// const products = [
//   {
//     id: "baguette-1",
//     images: [
//       'https://i.postimg.cc/m2jp7gPM/gifts6.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752564205/57c6b523d54e0e744dc1176b896234c7_jtyiui.mp4' },
//     ],
//     title: "Vintage Y2K Charles David calfskin-pink",
//     shop: "Azza'h seller",
//     isAd: true,
//     rating: 5.0,
//     reviews: 302,
//     price: 86.43,
//     original: 115.24,
//     discount: "25% off",
//     type: "Physical",
//     popular: true,
//   },
//   {
//     id: "discount-1",
//     images: [
//       'https://i.postimg.cc/J4vShRY8/dis1.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//     ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
//   {
//     id: "discount-2",
//     images: [
//       'https://i.postimg.cc/rwSdnFvF/dis2.jpg',
//       { type: 'video', url: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4' },
//     ],
//     title: "Glass Cup Jar",
//     shop: "Azza'h seller",
//     isAd: true,
//     price: 200,
//     discount: null,
//     type: "Digital Download",
//     popular: false,
//   },
// ];

// export default function Discount() {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const [filterTags, setFilterTags] = useState([]);
//   const [sortOption, setSortOption] = useState("Most relevant");
//   const [wishlist, setWishlist] = useState([]);
//   const [visibleTagCount, setVisibleTagCount] = useState(initialVisibleCount);

//   const toggleWishlist = (productId) => {
//     setWishlist((prev) =>
//       prev.includes(productId)
//         ? prev.filter((id) => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const visibleTags = allTags.slice(0, visibleTagCount);

//   const handleTagExpand = () => {
//     setVisibleTagCount(allTags.length);
//   };

//   return (
//     <div className="pt-[190px] bg-gray-50 min-h-screen">
//       <section className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         {/* Filter Row */}
//         <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
//           <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
//             <button
//               onClick={() => setDrawerOpen(true)}
//               className="flex items-center gap-2 px-4 py-2 border-2 border-sky-500 text-black rounded-full hover:bg-gray-100 transition"
//             >
//               <svg className="h-5 w-5" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M3 6h18v2H3V6zm4 5h10v2H7v-2zm-4 5h18v2H3v-2z"
//                 />
//               </svg>
//               All Filters
//             </button>
//             <FilterDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

//             {visibleTags.map((tag) => (
//               <Link
//                 to={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
//                 key={tag}
//               >
//                 <button
//                   onClick={() =>
//                     setFilterTags((prev) =>
//                       prev.includes(tag)
//                         ? prev.filter((t) => t !== tag)
//                         : [...prev, tag]
//                     )
//                   }
//                   className={`px-4 py-1.5 text-sm rounded-full border transition whitespace-nowrap shrink-0 ${
//                     filterTags.includes(tag)
//                       ? "bg-black text-white border-black"
//                       : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
//                   }`}
//                 >
//                   {tag}
//                 </button>
//               </Link>
//             ))}

//             {visibleTagCount < allTags.length && (
//               <button
//                 onClick={handleTagExpand}
//                 className="ml-2 p-2 bg-white rounded-full shadow border border-gray-300 hover:bg-gray-100"
//               >
//                 <ChevronRight className="w-5 h-5 text-gray-600" />
//               </button>
//             )}
//           </div>

//           {/* Right Info */}
//           <div className="flex items-center gap-2 text-sm text-gray-600 w-full md:w-auto justify-between md:justify-end">
//             <span className="whitespace-nowrap">1,000+ items with ads</span>
//             <HelpCircle className="w-4 h-4" />
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="font-medium cursor-pointer bg-transparent focus:outline-none border rounded px-2 py-1"
//             >
//               <option>Most relevant</option>
//               <option>Lowest price</option>
//               <option>Highest price</option>
//               <option>Best reviews</option>
//               <option>Newest</option>
//             </select>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group relative"
//             >
//               <button
//                 onClick={() => toggleWishlist(product.id)}
//                 className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all ${
//                   wishlist.includes(product.id)
//                     ? "text-red-500 bg-white/90"
//                     : "text-gray-400 bg-white/80 hover:text-red-500"
//                 }`}
//               >
//                 <Heart
//                   className="w-5 h-5"
//                   fill={wishlist.includes(product.id) ? "currentColor" : "none"}
//                 />
//               </button>

//               {product.discount && (
//                 <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
//                   {product.discount}
//                 </div>
//               )}

//               <Link to={`/product/${product.id}`} className="block">
//                 <div className="relative w-full aspect-square overflow-hidden">
//                   {product.images?.find((img) => typeof img === "string") && (
//                     <img
//                       src={product.images.find((img) => typeof img === "string")}
//                       alt={product.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:opacity-0"
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
//                       }}
//                     />
//                   )}

//                   {product.images?.find((media) => media?.type === "video") && (
//                     <video
//                       src={product.images.find((media) => media?.type === "video")?.url}
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                     />
//                   )}
//                 </div>
//               </Link>

//               <div className="p-4">
//                 <Link to={`/product/${product.id}`} className="block">
//                   <h3 className="font-medium text-gray-900 line-clamp-2 mb-1 hover:text-blue-600">
//                     {product.title}
//                   </h3>
//                 </Link>

//                 <div className="flex items-center text-sm text-gray-600 mb-2">
//                   <span>{product.shop}</span>
//                   {product.rating && (
//                     <div className="flex items-center ml-2">
//                       <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
//                       <span>{product.rating}</span>
//                       <span className="text-gray-400 ml-1">({product.reviews})</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex items-center justify-between mb-3">
//                   <div>
//                     <span className="font-bold text-gray-900">
//                       ${product.price.toFixed(2)}
//                     </span>
//                     {product.original && (
//                       <span className="text-gray-500 line-through text-sm ml-2">
//                         ${product.original.toFixed(2)}
//                       </span>
//                     )}
//                   </div>
//                   {product.type && (
//                     <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
//                       {product.type}
//                     </span>
//                   )}
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button className="flex-1 bg-black text-white text-sm font-medium py-2 px-4 rounded hover:bg-gray-800 transition">
//                     Add to cart
//                   </button>
//                   <Link
//                     to={`/product/${product.id}`}
//                     className="p-2 text-gray-600 hover:text-blue-600 transition"
//                   >
//                     <ArrowRight className="w-5 h-5" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Load More Button */}
//         <div className="mt-10 text-center">
//           <button className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-100 transition">
//             Load more
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }






import React, { useState, useRef } from "react";
import FilterDrawer from "../../components/Filters/FilterDrawer";
import { useWishlist } from "../../context/WishlistContext"; // adjust the path
import { Link } from "react-router-dom";
import {
  ChevronRight,
  HelpCircle,
  ArrowRight,
  Heart,
  Star,
} from "lucide-react";

const allTags = [
  "Under BDT 50",
  "Star Seller",
  "Ships from BD",
  "Vases",
  "Candles",
  "Gift Cards",
  "Wall Art",
  "Brooch",
  "Anklet",
  "Bracelets",
  "Rings",
  "Claw Clips",
];

const products = [
  {
    id: "discount-10",
    images: [
      "https://i.postimg.cc/SsNXSDKj/dis9.jpg",
      {
        type: "video",
        url: "https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752844139/80f1b9d3f64bb935dd9a8e7d22c00cd6_z3t2vr.mp4",
      },
      "https://i.postimg.cc/vBBBFTPV/dis0-9.jpg"
    ],
    title: "Pookie🎀Glass Jar",
    shop: "Azza'h seller",
    isAd: true,
    rating: 4.8,
    reviews: 302,
    price: 250,
    original: 300,
    discount: "25% off",
    type: "Trending",
    popular: true,
  },
  {
    id: "discount-1",
    images: [
      "https://i.postimg.cc/J4vShRY8/dis1.jpg",
      {
        type: "video",
        url: "https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752753460/b6a802376ec82ce65e0f6f21a3338c6b_hfkx7j.mp4",
      },
    ],
    title: "Glass Cup Jar",
    shop: "Azza'h seller",
    isAd: true,
    price: 200,
    discount: null,
    type: "Digital Download",
    popular: false,
  },
  {
    id: "discount-2",
    images: [
      "https://i.postimg.cc/rwSdnFvF/dis2.jpg",
      {
        type: "video",
        url: "https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752838367/f658335c6d4fbc87ab6b2937c06cf3fb_r0u3nn.mp4",
      },
    ],
    title: "Cherry🍒Glass Jar",
    shop: "Azza'h seller",
    isAd: true,
    price: 180,
    discount: null,
    type: "Digital Download",
    popular: false,
  },
  {
    id: "discount-3",
    images: [
      "https://i.postimg.cc/nL4RKv6Y/dis3.jpg",
      {
        type: "video",
        url: "https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752837059/8f0bcfa5d0d4580e009d4292c0af0c96_zhdlqi.mp4",
      },
      "https://i.postimg.cc/qvTpxdRP/dis0-3.jpg"
    ],
    title: "Sunflower🌻Glass Jar",
    shop: "Azza'h seller",
    isAd: true,
    price: 220,
    discount: null,
    type: "Digital Download",
    popular: false,
  },
  {
    id: "discount-4",
    images: [
      "https://i.postimg.cc/jd4n0cGJ/dis4.jpg",
      {
        type: "video",
        url: "https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752838367/f658335c6d4fbc87ab6b2937c06cf3fb_r0u3nn.mp4",
      },
      "https://i.postimg.cc/WpB0p4pL/dis0-4.jpg"
    ],
    title: "Strawberry🍓Glass Cup Jar",
    shop: "Azza'h seller",
    isAd: true,
    price: 220,
    discount: null,
    type: "Digital Download",
    popular: false,
  },
  {
    id: "discount-5",
    images: [
      "https://i.postimg.cc/W3J6Sqp8/dis0-5.jpg",
      {
        type: "video",
        url: "https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752840103/a3f22d7812c79c324f441cc240fe4e53_owa1de.mp4",
      },
      "https://i.postimg.cc/4xJPZ3w4/dis5.jpg"
    ],
    title: "Non Disney Glass Jar",
    shop: "Azza'h seller",
    isAd: true,
    price: 180,
    discount: null,
    type: "Digital Download",
    popular: false,
  },
  {
    id: "discount-6",
    images: [
      "https://i.postimg.cc/k4ktT7Td/dis0-6.jpg",
      {
        type: "video",
        url: "https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752841357/506e039ef6da3857a219cde1cff28694_iywkig.mp4",
      },
      "https://i.postimg.cc/kgf6kQTs/dis-6.jpg"
    ],
    title: "Lemon🍋Glass Jar",
    shop: "Azza'h seller",
    isAd: true,
    price: 200,
    discount: null,
    type: "Digital Download",
    popular: false,
  },
  {
    id: "discount-7",
    images: [
      "https://i.postimg.cc/Y00MLF6r/Screenshot-2025-07-18-183520.png",
      {
        type: "video",
        url: "https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752842371/6508a3168c1b739ac8c72f18e90253e5_fzh48b.mp4",
      },
    ],
    title: "Cow🐮Glass Jar",
    shop: "Azza'h seller",
    isAd: true,
    price: 230,
    discount: null,
    type: "Digital Download",
    popular: false,
  },
  {
    id: "discount-8",
    images: [
      "https://i.postimg.cc/bJ58fJns/dis0-7.jpg",
      {
        type: "video",
        url: "https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752842950/9886ea903cd732846d053e9498e361b6_ucgrop.mp4",
      },
    ],
    title: "Daisy🌼Glass Jar",
    shop: "Azza'h seller",
    isAd: true,
    price: 220,
    discount: null,
    type: "Digital Download",
    popular: false,
  },
  {
    id: "discount-9",
    images: [
      "https://i.postimg.cc/J0PPyD1Q/dis8.jpg",
      {
        type: "video",
        url: "https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752843625/70768da431fe15fadf7a20d94c243c8c_xqgf6y.mp4",
      },
    ],
    title: "Pookie🎀Glass Jar",
    shop: "Azza'h seller",
    isAd: true,
    price: 250,
    discount: null,
    type: "Digital Download",
    popular: false,
  },
];

export default function Discount() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [filterTags, setFilterTags] = useState([]);
  const [sortOption, setSortOption] = useState("Most relevant");
  const scrollRef = useRef(null);

const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();

const handleWishlistToggle = (product) => {
  const alreadyInWishlist = wishlistItems.some((item) => item.id === product.id);
  if (alreadyInWishlist) {
    removeFromWishlist(product.id);
  } else {
    addToWishlist(product);
  }
};




  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-[150px]">
      <section className="pt-24 pb-8 px-4 md:px-8 lg:px-16 bg-gray-50">
        {/* Filter Row */}
        <div className="flex items-center gap-3 mb-4 overflow-hidden">
          {/* Filters Button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border-2 border-sky-500 text-black rounded-full hover:bg-gray-100 transition shrink-0"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3 6h18v2H3V6zm4 5h10v2H7v-2zm-4 5h18v2H3v-2z"
              />
            </svg>
            All Filters
          </button>
          <FilterDrawer
            isOpen={isDrawerOpen}
            onClose={() => setDrawerOpen(false)}
          />

          {/* Tag Scroll Area */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-2 flex-1 scroll-smooth"
          >
            {allTags.map((tag) => (
  <Link
    to={`/category/${encodeURIComponent(tag)}`}
    key={tag}
    className={`px-4 py-1.5 text-sm rounded-full border transition whitespace-nowrap ${
      filterTags.includes(tag)
        ? "bg-black text-white border-black"
        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
    }`}
    onClick={() =>
      setFilterTags((prev) =>
        prev.includes(tag)
          ? prev.filter((t) => t !== tag)
          : [...prev, tag]
      )
    }
  >
    {tag}
  </Link>
))}

          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll(200)}
            className="p-2 bg-white shadow rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Info + Sort */}
          <div className="ml-auto flex items-center gap-2 text-sm text-gray-600 shrink-0">
            <span className="whitespace-nowrap">1,000+ items with ads</span>
            <HelpCircle className="w-4 h-4" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="font-medium cursor-pointer bg-transparent focus:outline-none"
            >
              <option>Most relevant</option>
              <option>Lowest price</option>
              <option>Highest price</option>
              <option>Best reviews</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group relative"
            >
              {/* <button
                onClick={() => {}}
                className="absolute top-3 right-3 z-10 p-2 rounded-full transition-all text-gray-400 bg-white/80 hover:text-red-500"
              >
                <Heart className="w-5 h-5" />
              </button> */}

              <button
  onClick={() => {
    const alreadyInWishlist = wishlistItems.some((item) => item.id === product.id);
    if (alreadyInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }}
  className="absolute top-3 right-3 z-10 p-2 rounded-full transition-all text-gray-400 bg-white/80 hover:text-red-500"
>
  <Heart
    className={`w-5 h-5 ${
      wishlistItems.some((item) => item.id === product.id)
        ? "fill-red-500 text-red-500"
        : ""
    }`}
  />
</button>



              {product.discount && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  {product.discount}
                </div>
              )}

              <Link to={`/product/${product.id}`} className="block">
                <div className="relative w-full aspect-square overflow-hidden">
                  {product.images?.find((img) => typeof img === "string") && (
                    <img
                      src={product.images.find((img) => typeof img === "string")}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:opacity-0"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/300x300?text=No+Image";
                      }}
                    />
                  )}

                  {product.images?.find((media) => media?.type === "video") && (
                    <video
                      src={
                        product.images.find(
                          (media) => media?.type === "video"
                        )?.url
                      }
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  )}
                </div>
              </Link>

              <div className="p-4">
                <Link to={`/product/${product.id}`} className="block">
                  <h3 className="font-medium text-gray-900 line-clamp-2 mb-1 hover:text-blue-600">
                    {product.title}
                  </h3>
                </Link>

                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>{product.shop}</span>
                  {product.rating && (
                    <div className="flex items-center ml-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{product.rating}</span>
                      <span className="text-gray-400 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-bold text-gray-900">
                      BDT{product.price.toFixed(2)}
                    </span>
                    {product.original && (
                      <span className="text-gray-500 line-through text-sm ml-2">
                        BDT{product.original.toFixed(2)}
                      </span>
                    )}
                  </div>
                  {product.type && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {product.type}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button className="flex-1 bg-black text-white text-sm font-medium py-2 px-4 rounded hover:bg-gray-800 transition">
                    Add to cart
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="p-2 text-gray-600 hover:text-blue-600 transition"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-10 text-center">
          <button className="border border-gray-300 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-100 transition">
            Load more
          </button>
        </div>
      </section>
    </div>
  );
}
