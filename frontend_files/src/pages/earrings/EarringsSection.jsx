// import React, { useState, useRef, useCallback, useEffect } from "react";
// import earringsData from "../../data/earrings";
// import EarringsCard from "../../components/EarringsCard/EarringsCard";
// import FilterDrawer from "../../components/Filters/FilterDrawer";

// const ITEMS_PER_BATCH = 12;

// const tags = ["Gold", "Stud", "Hoop", "Silver", "Dangle"];

// const Earrings = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false); // ✅ now inside component
//   const [visibleItems, setVisibleItems] = useState(ITEMS_PER_BATCH);
//   const [filterTags, setFilterTags] = useState([]);
//   const [sortBy, setSortBy] = useState("price-asc");
//   const [data, setData] = useState(earringsData);
//   const observer = useRef();

//   const handleFavoriteToggle = (id, add) => {
//     const fav = JSON.parse(localStorage.getItem("favorites")) || [];
//     const updated = add ? [...fav, id] : fav.filter((fid) => fid !== id);
//     localStorage.setItem("favorites", JSON.stringify(updated));
//   };

//   const lastRef = useCallback(node => {
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting && visibleItems < data.length) {
//         setVisibleItems(vis => vis + ITEMS_PER_BATCH);
//       }
//     });
//     if (node) observer.current.observe(node);
//   }, [visibleItems, data]);

//   const filtered = data.filter(e =>
//     filterTags.length ? e.tags.some(tag => filterTags.includes(tag)) : true
//   );

//   const sorted = filtered.sort((a, b) => {
//     if (sortBy === "price-asc") return a.price - b.price;
//     if (sortBy === "price-desc") return b.price - a.price;
//     if (sortBy === "rating") return b.rating - a.rating;
//     return 0;
//   });

//   useEffect(() => {
//     setVisibleItems(ITEMS_PER_BATCH);
//   }, [filterTags, sortBy]);

//   return (
//     <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-gray-50 min-h-screen">
//       {/* Filters */}
//       <div className="flex flex-wrap gap-2 mb-6">
//         {tags.map(tag => (
//           <button
//             key={tag}
//             onClick={() =>
//               setFilterTags(ft => ft.includes(tag) ? ft.filter(t => t !== tag) : [...ft, tag])
//             }
//             className={`px-3 py-1 text-sm rounded-full border ${
//               filterTags.includes(tag)
//                 ? "bg-blue-600 text-white"
//                 : "bg-white text-gray-800"
//             }`}
//           >
//             {tag}
//           </button>
//         ))}
//       </div>

//       <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
//         {/* Filter Tags */}
//         <div className="flex flex-wrap gap-2">
//           {/* All Filters button with icon */}
//           <button
//             onClick={() => setDrawerOpen(true)}
//             className="flex items-center gap-2 px-4 py-2 border-2 border-sky-500 text-black rounded-full hover:bg-gray-100 transition"
//           >
//             <svg className="h-5 w-5" viewBox="0 0 24 24">
//               <path fill="currentColor" d="M3 6h18v2H3V6zm4 5h10v2H7v-2zm-4 5h18v2H3v-2z" />
//             </svg>
//             All Filters
//           </button>

//           <FilterDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

//           {tags.map(tag => (
//             <button
//               key={tag}
//               onClick={() =>
//                 setFilterTags(ft => ft.includes(tag) ? ft.filter(t => t !== tag) : [...ft, tag])
//               }
//               className={`px-4 py-1.5 rounded-full border text-sm font-medium transition ${
//                 filterTags.includes(tag)
//                   ? "bg-black text-white border-black"
//                   : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
//               }`}
//             >
//               {tag}
//             </button>
//           ))}
//         </div>

//         {/* Sort Dropdown */}
//         <div className="relative inline-block">
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="appearance-none border border-gray-300 bg-white text-gray-700 px-4 py-2 pr-8 rounded-full shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 transition cursor-pointer"
//           >
//             <option value="price-asc">Price: Low to High</option>
//             <option value="price-desc">Price: High to Low</option>
//             <option value="rating">Top Rated</option>
//           </select>
//           <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
//             <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
//         {sorted.slice(0, visibleItems).map((earring, i) => {
//           const isLast = i === visibleItems - 1;
//           return (
//             <div ref={isLast ? lastRef : null} key={earring.id}>
//               <EarringsCard earring={earring} onFavorite={handleFavoriteToggle} />
//             </div>
//           );
//         })}
//       </div>

//       {visibleItems < sorted.length && (
//         <p className="text-center text-gray-500">Loading more earrings...</p>
//       )}
//     </div>
//   );
// };

// export default Earrings;



import React, { useState, useRef, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Hook to read URL params
import earringsData from "../../data/earrings"; // Import your products data
import EarringsCard from "../../components/EarringsCard/EarringsCard";
import FilterDrawer from "../../components/Filters/FilterDrawer";

const ITEMS_PER_BATCH = 12;

const tags = ["Gold", "Stud", "Hoop", "Silver", "Dangle"];

const Earrings = () => {
  const location = useLocation(); // Access the current URL
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_BATCH);
  const [filterTags, setFilterTags] = useState([]);
  const [sortBy, setSortBy] = useState("price-asc");
  const [data, setData] = useState(earringsData);
  const observer = useRef();

  const category = new URLSearchParams(location.search).get("category"); // Get category from URL
  console.log("Category from URL:", category); // Log the category to check if it's correct

  // Filter products based on the category in the URL
  const filteredData = category
    ? data.filter((item) => item.category.toLowerCase() === category.toLowerCase())
    : data;

  console.log("Filtered Data:", filteredData); // Log the filtered data to ensure it's correct

  const handleFavoriteToggle = (id, add) => {
    const fav = JSON.parse(localStorage.getItem("favorites")) || [];
    const updated = add ? [...fav, id] : fav.filter((fid) => fid !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const lastRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && visibleItems < filteredData.length) {
        setVisibleItems((vis) => vis + ITEMS_PER_BATCH);
      }
    });
    if (node) observer.current.observe(node);
  }, [visibleItems, filteredData]);

  const filtered = filteredData.filter(e =>
    filterTags.length ? e.tags.some(tag => filterTags.includes(tag)) : true
  );

  const sorted = filtered.sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  useEffect(() => {
    setVisibleItems(ITEMS_PER_BATCH);
  }, [filterTags, sortBy]);

  return (
        <div className='pt-[190px]'>
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 bg-gray-50 min-h-screen">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() =>
              setFilterTags(ft => ft.includes(tag) ? ft.filter(t => t !== tag) : [...ft, tag])
            }
            className={`px-3 py-1 text-sm rounded-full border ${
              filterTags.includes(tag)
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2">
          {/* All Filters button with icon */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border-2 border-sky-500 text-black rounded-full hover:bg-gray-100 transition"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 6h18v2H3V6zm4 5h10v2H7v-2zm-4 5h18v2H3v-2z" />
            </svg>
            All Filters
          </button>

          <FilterDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />

          {tags.map(tag => (
            <button
              key={tag}
              onClick={() =>
                setFilterTags(ft => ft.includes(tag) ? ft.filter(t => t !== tag) : [...ft, tag])
              }
              className={`px-4 py-1.5 rounded-full border text-sm font-medium transition ${
                filterTags.includes(tag)
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative inline-block">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none border border-gray-300 bg-white text-gray-700 px-4 py-2 pr-8 rounded-full shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 transition cursor-pointer"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
        {sorted.slice(0, visibleItems).map((earring, i) => {
          const isLast = i === visibleItems - 1;
          return (
            <div ref={isLast ? lastRef : null} key={earring.id}>
              <EarringsCard earring={earring} onFavorite={handleFavoriteToggle} />
            </div>
          );
        })}
      </div>

      {visibleItems < sorted.length && (
        <p className="text-center text-gray-500">Loading more earrings...</p>
      )}
    </div>
    </div>
  );
};

export default Earrings;