// // ...your imports stay unchanged
// import { useState, useEffect } from "react";
// import {
//   FaMapMarkerAlt,
//   FaSearch,
//   FaShoppingCart,
//   FaAngleDown,
//   FaBars,
//   FaTimes,
//   FaRegHeart,
//   FaPhoneAlt,
//   FaBoxOpen,
//   FaGift,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useCart } from "../../context/CartContext";
// import { auth } from "../../firebase";
// import { onAuthStateChanged } from "firebase/auth";

// const Navbar = () => {
//   const [country, setCountry] = useState("Bangladesh");
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const { cartItems } = useCart();
//   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <header className="bg-white shadow-md dark:bg-gray-900 dark:text-white">
//       {/* 🔝 Moved: Black Top Bar */}
//       <div className="bg-black text-white text-sm px-4 md:px-8 lg:px-12 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
//         <div className="flex flex-wrap items-center gap-4">
//           <Link to="/track-order" className="flex items-center gap-1 hover:text-sky-400 transition">
//             <FaBoxOpen className="text-sm" />
//             Track Order
//           </Link>
//           <Link to="/contact" className="hover:text-sky-400 transition">Contact</Link>
//           <Link to="/faq" className="hover:text-sky-400 transition">FAQ</Link>
//         </div>
//         <div className="flex items-center gap-2 text-xs sm:text-sm font-medium whitespace-nowrap">
//           <FaPhoneAlt className="text-sky-400" />
//           <span>You can contact us 24/7: +8809639279070</span>
//         </div>
//       </div>

//       {/* 🍔 Primary Navbar (unchanged) */}
//       <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3  dark:border-gray-700 relative">
//         {/* Left: Logo + Hamburger */}
//         <div className="flex items-center gap-4 flex-shrink-0 w-auto">
//           <button
//             className="text-2xl text-sky-600 sm:hidden focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//           <div className="text-xl sm:text-2xl font-bold text-sky-600">ArtCanvas</div>
//         </div>

//         {/* Center: Delivery + Search */}
//         <div className="hidden lg:flex flex-grow flex-col lg:flex-row lg:items-center lg:gap-4 lg:px-6 max-w-4xl mx-auto">
//           <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
//             <FaMapMarkerAlt className="text-sky-600" />
//             <span>Delivery to</span>
//             <select
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               className="border-none bg-transparent focus:outline-none text-sm font-medium"
//             >
//               <option value="Bangladesh">Bangladesh</option>
//               <option value="USA">USA</option>
//               <option value="UK">UK</option>
//               <option value="India">India</option>
//             </select>
//           </div>

//           <div className="flex flex-grow max-w-full">
//             <select
//               className="border border-r-0 border-gray-300 bg-gray-100 text-sm px-2 rounded-l-md focus:outline-none dark:bg-gray-800 dark:border-gray-700"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option>Categories</option>
//               <option>Canvas Art</option>
//               <option>Handmade Bags</option>
//               <option>Craft Supplies</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="flex-grow px-3 py-2 border-t border-b border-gray-300 focus:outline-none dark:bg-gray-800 dark:border-gray-700 w-full"
//             />
//             <button className="bg-sky-600 p-4 rounded-r-md text-white">
//               <FaSearch />
//             </button>
//           </div>
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-4 text-sm flex-shrink-0">
//           <Link
//             to={user ? "#" : "/signin"}
//             className="hidden sm:flex items-center gap-2 cursor-pointer hover:border border-sky-800 p-2 rounded"
//           >
//             {user?.photoURL ? (
//               <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full object-cover" />
//             ) : (
//               <div className="w-8 h-8 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full text-lg font-bold">👤</div>
//             )}
//             <div className="flex flex-col leading-tight">
//               <span className="text-gray-500 dark:text-gray-300">
//                 Hello, {user ? user.displayName || user.email : "Sign in"}
//               </span>
//               <span className="font-bold">
//                 {user ? "My Account" : "Account"}
//               </span>
//             </div>
//           </Link>

//           <div className="hidden sm:flex flex-col cursor-pointer group-hover:border border-sky-800 p-2">
//             <span className="text-gray-500 dark:text-gray-300">Returns</span>
//             <span className="font-bold">& Orders</span>
//           </div>

//           <Link to="/wishlist" className="relative cursor-pointer">
//             <FaRegHeart className="text-2xl text-sky-600" />
//             <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
//               {totalItems}
//             </span>
//           </Link>

//           <Link to="/cart" className="relative cursor-pointer">
//             <FaShoppingCart className="text-2xl text-sky-600" />
//             <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
//               {totalItems}
//             </span>
//           </Link>
//         </div>
//       </div>

//       {/* 🧭 Bottom Light Navbar */}
// <div className="bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 py-2">
//   <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4 text-sm font-medium text-gray-700 dark:text-gray-200">
//     <Link
//       to="/"
//       className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600"
//     >
//       Home
//     </Link>
//     <Link
//       to="/products"
//       className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600"
//     >
//       Shop Now
//     </Link>
//     <Link
//       to="/about"
//       className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600"
//     >
//       About Us
//     </Link>
//     <Link
//       to="/discount"
//       className="px-4 py-2 rounded-full transition-all duration-300 hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600"
//     >
//       🎉 Discount
//     </Link>
//     <Link
//       to="/gifts"
//       className="flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300 hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600"
//     >
//       <FaGift className="text-sm" /> Gifts
//     </Link>
//   </div>
// </div>


//       {/* 📱 Mobile Menu */}
//       {menuOpen && (
//         <div className="sm:hidden px-4 py-4 space-y-6 bg-white dark:bg-gray-900 border-t dark:border-gray-700 transition-all duration-300 ease-in-out">
//           <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
//             <FaMapMarkerAlt className="text-sky-600" />
//             <span>Delivery to</span>
//             <select
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               className="border-none bg-transparent focus:outline-none text-sm font-medium"
//             >
//               <option value="Bangladesh">Bangladesh</option>
//               <option value="USA">USA</option>
//               <option value="UK">UK</option>
//               <option value="India">India</option>
//             </select>
//           </div>

//           <div className="flex">
//             <select
//               className="border border-r-0 border-gray-300 bg-gray-100 text-sm px-2 rounded-l-md focus:outline-none dark:bg-gray-800 dark:border-gray-700"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option>All</option>
//               <option>Canvas Art</option>
//               <option>Handmade</option>
//               <option>Craft Supplies</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="flex-grow px-3 py-2 border-t border-b border-gray-300 focus:outline-none dark:bg-gray-800 dark:border-gray-700"
//             />
//             <button className="bg-sky-600 p-2 rounded-r-md text-white">
//               <FaSearch />
//             </button>
//           </div>

//           <div className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
//             <div className="flex justify-between items-center">
//               <span>
//                 Hello, {user ? user.displayName || user.email : "Sign in"}
//               </span>
//               <FaAngleDown className="text-sky-600" />
//             </div>
//             <div className="flex justify-between items-center">
//               <span>Returns & Orders</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;




// import { useState, useEffect, useRef } from "react";
// import {
//   FaMapMarkerAlt,
//   FaSearch,
//   FaShoppingCart,
//   FaAngleDown,
//   FaBars,
//   FaTimes,
//   FaRegHeart,
//   FaPhoneAlt,
//   FaBoxOpen,
//   FaGift,
// } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// import { auth } from "../../firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useCart } from "../../context/CartContext";


// const Navbar = () => {
//   const [country, setCountry] = useState("Bangladesh");
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);
//   const { cartItems } = useCart();
//   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       console.log("User logged out successfully");
//       navigate("/");
//     } catch (error) {
//       console.error("Logout error:", error.message);
//     }
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <header className="bg-white shadow-md dark:bg-gray-900 dark:text-white">
//       {/* Top Black Bar */}
//       <div className="bg-black text-white text-sm px-4 md:px-8 lg:px-12 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
//         <div className="flex flex-wrap items-center gap-4">
//           <Link to="/track-order" className="flex items-center gap-1 hover:text-sky-400 transition">
//             <FaBoxOpen className="text-sm" />
//             Track Order
//           </Link>
//           <Link to="/contact" className="hover:text-sky-400 transition">Contact</Link>
//           <Link to="/faq" className="hover:text-sky-400 transition">FAQ</Link>
//         </div>
//         <div className="flex items-center gap-2 text-xs sm:text-sm font-medium whitespace-nowrap">
//           <FaPhoneAlt className="text-sky-400" />
//           <span>You can contact us 24/7: +8809639279070</span>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 dark:border-gray-700 relative">
//         {/* Logo & Hamburger */}
//         <div className="flex items-center gap-4 flex-shrink-0 w-auto">
//           <button
//             className="text-2xl text-sky-600 sm:hidden focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//           <div className="text-xl sm:text-2xl font-bold text-sky-600">Azza'hCrafts</div>
//         </div>

//         {/* Delivery & Search */}
//         <div className="hidden lg:flex flex-grow flex-col lg:flex-row lg:items-center lg:gap-4 lg:px-6 max-w-4xl mx-auto">
//           <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
//             <FaMapMarkerAlt className="text-sky-600" />
//             <span>Delivery to</span>
//             <select
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               className="border-none bg-transparent focus:outline-none text-sm font-medium"
//             >
//               <option value="Bangladesh">Bangladesh</option>
//               <option value="USA">USA</option>
//               <option value="UK">UK</option>
//               <option value="India">India</option>
//             </select>
//           </div>

//           {/* Etsy-Style Search Bar with Dropdown */}
//           <div className="flex flex-grow max-w-xl relative ml-4 mr-6" ref={dropdownRef}>
//             <input
//               type="text"

//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               onFocus={() => setShowDropdown(true)}
//               placeholder="Search for products, brands and more"
//               className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
//             />
//             <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-500 hover:text-sky-600">
//               <FaSearch />
//             </button>

//             {showDropdown && (
//               <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-b z-40">
//                 <ul className="p-4 space-y-2 text-sm">
//                   <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
//                     <img
//                       src="https://i.postimg.cc/4NqkT3Rq/keyword.jpg"
//                       alt="Handmade Abstract Canvas"
//                       className="w-10 h-10 object-cover rounded"
//                     />
//                     <span className="text-gray-800">Art Canvas</span>
//                   </li>
//                   <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
//                     <img
//                       src="https://i.postimg.cc/KzbgYzkD/gold-studs.jpg"
//                       alt="Personalized Couple Painting"
//                       className="w-10 h-10 object-cover rounded"
//                     />
//                     <span className="text-gray-800">Handmade Earrings</span>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-4 text-sm flex-shrink-0">

//           <Link
//             to={user ? "#" : "/signin"}
//             className="hidden sm:flex items-center gap-2 cursor-pointer hover:border border-sky-800 p-2 rounded"
//           >
//             {user?.photoURL ? (
//               <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full object-cover" />
//             ) : (
//               <div className="w-8 h-8 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full text-lg font-bold">👤</div>
//             )}
//             <div className="flex flex-col leading-tight">
//               <span className="text-gray-500 dark:text-gray-300">
//                 Hello, {user ? user.displayName || user.email : "Sign in"}
//               </span>
//               <span className="font-bold">
//                 {user ? (
//                   <>
//                     My Account
//                     <button
//                       onClick={handleLogout}
//                       className="text-xs text-red-500 underline mt-1 hover:text-red-600 transition"
//                     >
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   "Account"
//                 )}
//               </span>
//             </div>
//           </Link>

//           <div className="hidden sm:flex flex-col cursor-pointer group-hover:border border-sky-800 p-2">
//             <span className="text-gray-500 dark:text-gray-300">Returns</span>
//             <span className="font-bold">& Orders</span>
//           </div>

//           <Link to="/wishlist" className="relative cursor-pointer">
//             <FaRegHeart className="text-2xl text-sky-600" />
//             <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
//               {totalItems}
//             </span>
//           </Link>

//           <Link to="/cart" className="relative cursor-pointer">
//             <FaShoppingCart className="text-2xl text-sky-600" />
//             <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
//               {totalItems}
//             </span>
//           </Link>
//         </div>
//       </div>

//       {/* Bottom Light Nav */}
//       <div className="bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 py-2">
//         <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4 text-sm font-medium text-gray-700 dark:text-gray-200">
//           <Link to="/" className="px-4 py-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600">Home</Link>
//           <Link to="/about" className="px-4 py-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600">About Us</Link>
//           <Link to="/products" className="px-4 py-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600">Shop Now</Link>
          
//           <Link to="/discount" className="px-4 py-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600">🎉 Discount</Link>
//           <Link to="/gifts" className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600">
//             <FaGift className="text-sm" /> Gifts
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Menu (unchanged) */}
//       {menuOpen && (
//         <div className="sm:hidden px-4 py-4 space-y-6 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
//           <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
//             <FaMapMarkerAlt className="text-sky-600" />
//             <span>Delivery to</span>
//             <select
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               className="border-none bg-transparent focus:outline-none text-sm font-medium"
//             >
//               <option value="Bangladesh">Bangladesh</option>
//               <option value="USA">USA</option>
//               <option value="UK">UK</option>
//               <option value="India">India</option>
//             </select>
//           </div>

//           <div className="flex">
//             <select className="border border-r-0 border-gray-300 bg-gray-100 text-sm px-2 rounded-l-md focus:outline-none dark:bg-gray-800 dark:border-gray-700">
//               <option>Categories</option>
//               {/* options can be added */}
//             </select>
//             <input
//               type="text"
//               placeholder="Search..."

//               className="flex-grow px-3 py-2 border-t border-b border-gray-300 focus:outline-none dark:bg-gray-800 dark:border-gray-700"
//             />
//             <button className="bg-sky-600 p-2 rounded-r-md text-white">
//               <FaSearch />
//             </button>
//           </div>
          
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;





import { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaShoppingCart,

  FaBars,
  FaTimes,
  FaRegHeart,
  FaPhoneAlt,
  FaBoxOpen,
  FaGift,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FiSearch } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import products from "../../data/products"; // Adjust path if needed



const categories = [
  "Handmade Jewelry",
  "Home Decor",
  "Wedding Gifts",
  "Personalized Items",
  "Wall Art",
  "Earrings",
  "Bracelets",
  "Canvas",
  "Paintings",
  "Rings",
  "Gift Boxes",
];

const Navbar = () => {
  const [country, setCountry] = useState("Bangladesh");
  const [search, setSearch] = useState("");               // ✅ For input value
const [filteredProducts, setFilteredProducts] = useState([]); // ✅ For suggestion results
const [searchFocus, setSearchFocus] = useState(false);  // ✅ For dropdown show/hide


  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const dropdownRef = useRef(null);
  const megaMenuRef = useRef(null);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false); // ✅ this is what was missing


  const [showNavbar, setShowNavbar] = useState(true);
let lastScrollY = useRef(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 100) {
      setShowNavbar(true); // Always show when near top
    } else if (currentScrollY > lastScrollY.current) {
      setShowNavbar(false); // Scrolling down -> hide
    } else {
      setShowNavbar(true); // Scrolling up -> show
    }

    lastScrollY.current = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);

      navigate("/");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        megaMenuRef.current && !megaMenuRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
        setShowMegaMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
<header className={`bg-white shadow-md dark:bg-gray-900 dark:text-white fixed top-0 w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Top Black Bar */}
      <div className="bg-black text-white text-sm px-4 md:px-8 lg:px-12 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-4">
          {/* <Link to="/track" className="flex items-center gap-1 hover:text-sky-400 transition">
            <FaBoxOpen className="text-sm" />
            Track Order
          </Link> */}
          <Link
  to="/track" className="px-4 py-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600">
  📦 Track Order
</Link>

          <Link to="/contact" className="hover:text-sky-400 transition">Contact</Link>
          <Link to="/faq" className="hover:text-sky-400 transition">FAQ</Link>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium whitespace-nowrap">
          <FaPhoneAlt className="text-sky-400" />
          <span>You can contact us 24/7: +8809639279070</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 dark:border-gray-700 relative">
        {/* Logo & Hamburger */}
        <div className=" flex items-center gap-4 flex-shrink-0 w-auto">
          <button
            className="text-2xl text-sky-600 sm:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="text-xl sm:text-2xl font-bold text-sky-600">Azza'hCrafts</div>
        </div>

        {/* Delivery & Search */}
        <div className="hidden lg:flex flex-grow flex-col lg:flex-row lg:items-center lg:gap-4 lg:px-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
            <FaMapMarkerAlt className="text-sky-600" />
            <span>Delivery to</span>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border-none bg-transparent focus:outline-none text-sm font-medium"
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
            </select>
          </div>

           {/* Search Bar */}
        <div className="flex-1 mx-2 max-w-2xl relative">
          <div
            className={`border border-amber-50 rounded-full flex items-center overflow-hidden transition duration-400 ${
              searchFocus ? "ring-2 ring-sky-500" : "border-gray-300"
            }`}
          >
         {/* <input
  type="text"
  placeholder="Search for anything"
  value={search}
  onFocus={() => setSearchFocus(true)}
  onBlur={() => setTimeout(() => setSearchFocus(false), 200)}
  onChange={(e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().startsWith(keyword)
    );
    setFilteredProducts(filtered);
  }}
  className="flex-grow px-4 py-2 focus:outline-none text-sm"
/> */}

<input
  type="text"
  placeholder="Search for anything"
  value={search}
  onFocus={() => setSearchFocus(true)}
  onBlur={() => setTimeout(() => setSearchFocus(false), 200)}
  onChange={(e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(keyword)
    );
    setFilteredProducts(filtered);
  }}
  className="flex-grow px-4 py-2 focus:outline-none text-sm"
/>


            <button className="bg-sky-500 text-white px-4 py-3 hover:bg-sky-600">
              <FiSearch />
            </button>
          </div>

             {/* Search Suggestions */}
          {searchFocus && search && (
  <div className="absolute top-full left-0 w-full bg-white shadow-lg z-40 rounded-b max-h-80 overflow-y-auto">
    <ul className="p-4 space-y-2 text-sm">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <li
            key={product.id}
            className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition"
            onMouseDown={() => {
              navigate(`/product/${product.id}`);
              setSearch("");
              setSearchFocus(false);
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-10 h-10 object-cover rounded"
            />
            <span className="font-medium text-gray-800">{product.name}</span>
          </li>
        ))
      ) : (
        <li className="text-gray-500 px-2">No products found.</li>
      )}
    </ul>
  </div>
)}

          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-sm flex-shrink-0">
          {/* <Link to={user ? "#" : "/signin"} className="hidden sm:flex items-center gap-2 cursor-pointer hover:border border-sky-800 p-2 rounded"> */} 
          <Link to={user ? "#" : "/signin"} className="hidden sm:flex items-center gap-2 cursor-pointer hover:border border-sky-800 p-2 rounded">

            {/* {user?.photoURL ? (
              <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full object-cover" />
            ) : (
              <div className="w-8 h-8 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full text-lg font-bold">👤</div>
            )} */}
            {user ? (
  <img
    src={user.photoURL || ""}
    alt="User"
    className="w-8 h-8 rounded-full object-cover"
    onError={(e) => {
      e.target.onerror = null;
      e.target.src = "https://cdn-icons-png.flaticon.com/512/847/847969.png"; // fallback icon
    }}
  />
) : (
  <div className="w-8 h-8 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full text-lg font-bold">👤</div>
)}

            <div className="flex flex-col leading-tight">
              <span className="text-gray-500 dark:text-gray-300">
                Hello, {user ? user.displayName || user.email : "Sign in"}
              </span>
              <span className="font-bold">
                {user ? (
                  <>
                    My Account
                    <button
                      onClick={handleLogout}
                      className="text-xs text-red-500 underline mt-1 hover:text-red-600 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  "Account"
                )}
              </span>
            </div>
          </Link>

          <Link to="/return" className="hidden sm:flex items-center gap-2 cursor-pointer hover:border border-sky-800 p-2 rounded">
          <div className="hidden sm:flex flex-col cursor-pointer group-hover:border border-sky-800 p-2">
            <span className="text-gray-500 dark:text-gray-300">Returns</span>
            <span className="font-bold">& Orders</span>
          </div>
          </Link>

          <Link to="/wishlist" className="relative cursor-pointer">
            <FaRegHeart className="text-2xl text-sky-600" />
          </Link>

          <Link to="/cart" className="relative cursor-pointer">
            <FaShoppingCart className="text-2xl text-sky-600 " />
            <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Light Nav with Mega Menu */}

     {/* Bottom Light Nav with Mobile Support */}
<div className="w-full bg-[#fafafa] border-t border-gray-200">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-12 relative">
        {/* 🔽 Categories Dropdown Button */}
        <div className="relative z-50">
          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="inline-flex items-center text-gray-800 font-semibold hover:text-black focus:outline-none"
          >
            Categories
            <FaChevronDown className="ml-1 w-4 h-4" />
          </button>

          {categoryOpen && (
  <div className="absolute left-0 mt-2 w-[90vw] sm:w-[800px] bg-white border border-gray-200 shadow-lg rounded transition-all duration-300 z-50">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      
      {/* Column 1 */}
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-3">Jewelry</h4>
        <ul className="space-y-2 text-sm text-sky-700">
          <li><Link to="/neckpieces" className="hover:text-black">Necklaces</Link></li>
          <li><Link to="/category/bangles" className="hover:text-black">Bangles</Link></li>
          <li><Link to="/category/bracelets" className="hover:text-black">Bracelets</Link></li>
          <li><Link to="/earrings" className="hover:text-black">Earrings</Link></li>
          <li><Link to="/category/rings" className="hover:text-black">Rings</Link></li>
          <li><Link to="/category/anklet" className="hover:text-black">Anklet</Link></li>
          <li><Link to="/category/brooch" className="hover:text-black">Brooch</Link></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-3">Accessories</h4>
        <ul className="space-y-2 text-sm text-sky-700">
          <li><Link to="bags" className="hover:text-black">Bags & Purses</Link></li>
          <li><Link to="/neckpieces" className="hover:text-black">Neckpieces</Link></li>
          <li><Link to="/hair-clips" className="hover:text-black">Claw Clips</Link></li>
          <li><Link to="/bags" className="hover:text-black">Wallet</Link></li>
          <li><Link to="/category/sunglasses" className="hover:text-black">Sunglasses</Link></li>
          <li><Link to="/category/shoes" className="hover:text-black">Shoes</Link></li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h4 className="text-sm font-bold text-gray-900 mb-3">Home & Gifts</h4>
        <ul className="space-y-2 text-sm text-sky-700">
          <li><Link to="/products" className="hover:text-black">Wall Art</Link></li>
          <li><Link to="/category/candles" className="hover:text-black">Candles</Link></li>
          <li><Link to="/category/vases" className="hover:text-black">Vases</Link></li>
          <li><Link to="/category/gift-cards" className="hover:text-black">Gift Cards</Link></li>
          <li><Link to="/key-rings" className="hover:text-black">Key Rings</Link></li>
          <li><Link to="/paper-craft-diy-for-kids" className="hover:text-black">Paper Craft DIY for Kids</Link></li>
        </ul>
      </div>

    </div>
  </div>
)}

        </div>

        {/* 🔗 Right Nav Links */}
        <div className="hidden sm:flex space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="px-4 py-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600">Home</Link>
          <Link to="/products" className="px-4 py-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600">Shop Now</Link>
          <Link to="/discount" className="px-4 py-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600">🎉 Discount</Link>
          <Link to="/gifts" className="flex items-center gap-1 px-4 py-2 rounded-full hover:bg-sky-100 dark:hover:bg-sky-900 hover:text-sky-600">
            <FaGift className="text-sm" /> Gifts
          </Link>
        </div>

        {/* 📱 Mobile Menu Toggle
        <div className="sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center text-gray-800 font-semibold hover:text-black focus:outline-none"
          >
            <svg className="w-5 h-5 mr-1 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Menu
          </button>
        </div> */}
      </div>

      {/* 📱 Mobile Dropdown Menu
      {mobileMenuOpen && (
        <div className="sm:hidden mt-3 bg-white border border-gray-200 rounded-md shadow-lg p-4 space-y-4 z-40">
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="hover:text-black cursor-pointer">Necklaces</li>
              <li className="hover:text-black cursor-pointer">Bracelets</li>
              <li className="hover:text-black cursor-pointer">Earrings</li>
              <li className="hover:text-black cursor-pointer">Rings</li>
              <li className="hover:text-black cursor-pointer">Bags & Purses</li>
              <li className="hover:text-black cursor-pointer">Scarves</li>
              <li className="hover:text-black cursor-pointer">Candles</li>
              <li className="hover:text-black cursor-pointer">Gift Cards</li>
            </ul>
          </div>

          <div className="border-t pt-3">
            <ul className="space-y-2 text-sm font-medium text-gray-700">
              <li><Link to="/gifts" className="hover:text-black">Gifts</Link></li>
              <li><Link to="/products" className="hover:text-black">For Her</Link></li>
              <li><Link to="/products" className="hover:text-black">For Him</Link></li>
              <li><Link to="/products" className="hover:text-black">Jewelry</Link></li>
              <li><Link to="/products" className="hover:text-black">Wedding</Link></li>
              <li><Link to="/products" className="hover:text-black">Home & Living</Link></li>
            </ul>
          </div>
        </div>
      )} */}
    </div>
</div>




      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 py-4 space-y-6 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
            <FaMapMarkerAlt className="text-sky-600" />
            <span>Delivery to</span>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border-none bg-transparent focus:outline-none text-sm font-medium"
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
            </select>
          </div>

          <div className="flex">
            <select className="border border-r-0 border-gray-300 bg-gray-100 text-sm px-2 rounded-l-md focus:outline-none dark:bg-gray-800 dark:border-gray-700">
              <option>Categories</option>

            </select>
            <input
              type="text"
              placeholder="Search..."

              className="flex-grow px-3 py-2 border-t border-b border-gray-300 focus:outline-none dark:bg-gray-800 dark:border-gray-700"
            />
            <button className="bg-sky-600 p-2 rounded-r-md text-white">
              <FaSearch />
            </button>
          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;



