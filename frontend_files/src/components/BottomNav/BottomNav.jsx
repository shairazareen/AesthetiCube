// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

// const categories = [
//   {
//     name: "Categories",
//     subCategories: [
//       "Art Canvas",
//       "Handmade Earrings",
//       "Neckpieces Set",
//       "Hair Clip",
//       "Key Rings",
//       "Paper Craft DIY Kids",
//       "Accessories",
//       "Gift ideas for girls",
//       "Birthday special box",
//       "Gift for him",
//       "Gift for kids",
//     ],
//   },
// ];

// const BottomNav = () => {
//   const [hoveredCategory, setHoveredCategory] = useState(null);

//   return (
//     <div className="bg-[#fafafa] border-t border-b border-gray-200 shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex gap-6 py-3 text-sm font-medium text-gray-700">
//           {categories.map((cat, index) => (
//             <div
//               key={index}
//               className="relative"
//               onMouseEnter={() => setHoveredCategory(cat.name)}
//               onMouseLeave={() => setHoveredCategory(null)}
//             >
//               <button className="flex items-center gap-1 hover:text-black transition">
//                 {cat.name}
//                 {cat.subCategories && (
//                   <ChevronDownIcon className="h-4 w-4" />
//                 )}
//               </button>

//               {/* Dropdown */}
//               {hoveredCategory === cat.name && cat.subCategories && (
//                 <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-lg z-50 p-4 grid grid-cols-1 gap-2">
//                   {cat.subCategories.map((sub, i) => (
//                     <Link
//                       to={`/category/${sub.toLowerCase().replace(/\s+/g, "-")}`}
//                       key={i}
//                       className="hover:text-pink-600 text-sm text-gray-700 transition"
//                     >
//                       {sub}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BottomNav;
