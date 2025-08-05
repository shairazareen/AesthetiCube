// import { useParams, useNavigate } from 'react-router-dom';
// import products from '../../data/products';
// import { useCart } from '../../context/CartContext';
// import { useState, useEffect } from 'react';
// import {
//   FaArrowLeft,
//   FaRegFlag,
//   FaStar,
//   FaRegClock,
//   FaTimes,
//   FaCheck,
//   FaChevronDown
// } from 'react-icons/fa';
// import { BsEmojiSunglasses } from 'react-icons/bs';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = products.find((p) => p.id === id);
//   const { addToCart } = useCart();

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(60 * 24 * 60 * 60);
//   const [zoomOpen, setZoomOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState("Suggested");

//   const imageSlides = product?.images || [];

//   const handlePrev = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imageSlides.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === imageSlides.length - 1 ? 0 : prevIndex + 1));
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const days = Math.floor(seconds / (3600 * 24));
//     const hrs = String(Math.floor((seconds % (3600 * 24)) / 3600)).padStart(2, '0');
//     const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
//     const secs = String(seconds % 60).padStart(2, '0');
//     return `${days}d ${hrs}:${mins}:${secs}`;
//   };

//   if (!product) {
//     return <div className="p-6 text-red-500 font-bold">Product not found.</div>;
//   }

//   return (
//     <>
//       <div className="max-w-7xl mx-auto p-4 md:p-10 grid md:grid-cols-2 gap-8">
//         {/* Left Column */}
//         <div className="relative space-y-4">
//           <div
//             className="text-sm text-blue-700 hover:underline cursor-pointer flex items-center gap-2"
//             onClick={() => navigate(-1)}
//           >
//             <FaArrowLeft /> Back to search results
//           </div>

//           <div className="relative cursor-zoom-in">
//             <img
//               src={imageSlides[currentImageIndex]}
//               alt={product.name}
//               className="w-full max-h-[500px] object-contain rounded shadow"
//               onClick={() => setZoomOpen(true)}
//             />
//             <button onClick={handlePrev} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200">❮</button>
//             <button onClick={handleNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200">❯</button>
//           </div>

//           <div className="text-sm text-blue-700 hover:underline flex items-center gap-2 cursor-pointer justify-end">
//             <FaRegFlag /> Report this item to ArtCanvas
//           </div>

//           {/* Reviews Summary */}
//           <div className="space-y-2">
//             <div className="mt-6 space-y-2">
//             <div className="flex items-center gap-2 text-gray-800 font-semibold text-lg">
//               <FaStar className="text-yellow-400" /> 4.9 out of 5 <span className="text-gray-500 font-normal">(609 reviews)</span>
//             </div>
//             <p className="text-sm text-gray-400">All reviews are from verified buyers</p>

//             <div className="flex flex-wrap gap-4 items-center">
//               <div className="flex flex-col items-center">
//                 <div className="w-10 h-10 flex items-center justify-center border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold">5/5</div>
//                 <span className="text-xs text-gray-700 mt-1">Item quality</span>
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="w-10 h-10 flex items-center justify-center border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold">5/5</div>
//                 <span className="text-xs text-gray-700 mt-1">Shipping</span>
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="w-10 h-10 flex items-center justify-center border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold">5/5</div>
//                 <span className="text-xs text-gray-700 mt-1">Customer Service</span>
//               </div>
//             </div>
//           </div>

//             <div className="flex items-center gap-2 font-semibold text-gray-700">
//               <BsEmojiSunglasses className="text-xl" /> Buyer highlights, summarized by AI
//             </div>
//             <div className="flex flex-wrap items-center text-sm text-gray-600 gap-y-2">
//   {["As described", "Fast shipping", "Beautiful", "Looks great", "Love it", "Perfect condition"].map((tag, i, arr) => (
//     <div key={i} className="flex items-center">
//       <span className="px-2">{tag}</span>
//       {i < arr.length - 1 && (
//         <span className="w-px h-4 bg-gray-300 mx-1 hidden sm:inline-block" />
//       )}
//     </div>
//   ))}
// </div>


//             <div className="flex flex-wrap gap-2">
//               {["Description accuracy (2)", "Shipping & Packaging (1)", "Appearance (1)", "Quality (1)"].map((item, i) => (
//                 <span key={i} className="px-3 py-1 text-sm border rounded-full hover:bg-gray-100 cursor-pointer">{item}</span>
//               ))}
//             </div>

//             <div className="relative w-48">
//               <select
//                 className="border rounded px-4 py-2 w-full appearance-none cursor-pointer text-sm"
//                 value={selectedSort}
//                 onChange={(e) => setSelectedSort(e.target.value)}
//               >
//                 {['Suggested', 'Most recent', 'Highest Rating', 'Lowest Rating'].map(option => (
//                   <option key={option} value={option}>{option}</option>
//                 ))}
//               </select>
//               <FaChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
//             </div>

//             {/* Review Cards */}
// <div className="divide-y divide-gray-200">
//   {[{
//     name: "Yvonne",
//     date: "May 25, 2025",
//     review: "This is such a lovely piece!!"
//   }, {
//     name: "Angela Saldana",
//     date: "Jan 27, 2025",
//     review: "Arrived on time and just as described!"
//   }, {
//     name: "Laura",
//     date: "Dec 9, 2024",
//     review: "Quality of image is extremely clear and beautiful in canvas."
//   }, {
//     name: "Tina Konerth",
//     date: "Nov 16, 2024",
//     review: "Nice behind my living room in canvas. Thanks."
//   }].map((r, i) => (
//     <div key={i} className="py-4 flex flex-col md:flex-row md:items-start md:gap-6">
//       {/* Left Side: Review content */}
//       <div className="flex-1 text-gray-700">
//         <div className="flex items-center gap-2 text-yellow-500 text-sm">
//           {Array.from({ length: 5 }).map((_, idx) => (
//             <FaStar key={idx} />
//           ))}
//           <span className="ml-1 font-semibold text-gray-600">5</span>
//           <span className="text-green-600 text-xs ml-2">✔ Recommends</span>
//         </div>
//         <p className="mt-2 text-sm text-gray-600">{r.review}</p>
//       </div>

//       {/* Right Side: Name + Date */}
//       <div className="mt-3 md:mt-0 pl-4 md:border-l border-gray-300 text-xs text-gray-500 min-w-[140px] text-left md:text-right">
//         <div className="font-medium text-gray-700">{r.name}</div>
//         {r.date && <div>{r.date}</div>}
//       </div>
//     </div>
//   ))}
// </div>

//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col justify-between space-y-4">
//           <div className="space-y-3">
//             <h1 className="text-xl font-bold text-gray-800">{product.name}</h1>

//             <div className="flex items-center gap-2 text-2xl font-bold text-sky-600">
//               BDT ${product.price.toFixed(2)}
//               <span className="line-through text-gray-400 text-base">BDT 9.28</span>
//               <span className="text-red-500 text-base font-semibold">40% off</span>
//             </div>

//             <div className="flex items-center gap-2 text-orange-600 font-semibold">
//               <FaRegClock /> Sale ends in <span className="text-black">{formatTime(timeLeft)}</span>
//             </div>

//             <div className="border border-sky-500 text-sky-500 p-2 rounded-md flex items-center gap-2 font-semibold">
//               <BsEmojiSunglasses className="text-xl" /> New markdown! Biggest sale in 60+ days
//             </div>

//             <p className="text-md text-gray-700">
//               Modern Abstract Wall Art -  Relaxing on light printed Striped Couch - Large Canvas Print for Vibrant Home Decor - Unique Line Drawing
//             </p>

//             <div className="text-sm text-blue-700 hover:underline flex items-center gap-2">
//               ArtCanvas <span className="flex text-yellow-400">{Array.from({ length: 5 }, (_, i) => (<FaStar key={i} />))}</span>
//             </div>
//           </div>

//           <button
//             onClick={() => addToCart(product)}
//             className="bg-sky-500 text-white py-3 px-6 rounded hover:bg-sky-600 transition w-full text-lg"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Zoom Modal */}
//       {zoomOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
//           onClick={() => setZoomOpen(false)}
//         >
//           <button
//             onClick={() => setZoomOpen(false)}
//             className="absolute top-6 right-6 text-white text-3xl p-2 hover:text-gray-300"
//             aria-label="Close zoom"
//           >
//             <FaTimes />
//           </button>
//           <img
//             src={imageSlides[currentImageIndex]}
//             alt={product.name}
//             className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductDetails;



import { useParams, useNavigate } from 'react-router-dom';
import products from '../../data/products';
import { useCart } from '../../context/CartContext';
import { useState, useEffect } from 'react';
import {
  FaArrowLeft,
  FaRegFlag,
  FaStar,
  FaRegClock,
  FaTimes,
  FaChevronDown,
  FaHeart,
  FaRegHeart,
} from 'react-icons/fa';
import { BsEmojiSunglasses } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveRecentlyViewedProduct } from '../../utils/recentlyViewed'; // ✅ Imported from utils
import { useWishlist } from "../../context/WishlistContext";


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();


  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 24 * 60 * 60);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // const [liked, setLiked] = useState(false);

  const isLiked = wishlistItems.some((i) => i.id === product.id);
const [showToast, setShowToast] = useState(false);
const [toastMessage, setToastMessage] = useState("");


  const imageSlides = product?.images || [];
  const handlePrev = () => setCurrentImageIndex((i) => (i === 0 ? imageSlides.length - 1 : i - 1));
  const handleNext = () => setCurrentImageIndex((i) => (i === imageSlides.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((t) => Math.max(t - 1, 0)), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hrs = String(Math.floor((seconds % 86400) / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${days}d ${hrs}:${mins}:${secs}`;
  };

  // ✅ Save product ID to localStorage
  useEffect(() => {
    if (product?.id) {
      saveRecentlyViewedProduct(product.id);
    }
  }, [product]);

  if (!product) {
    return <div className="p-6 text-red-500 font-bold">Product not found.</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) return toast.error('Please select a size before adding to cart');
    addToCart({ ...product, selectedSize, quantity });
    toast.success('Added to cart!');
    navigate('/cart');
  };

  const handleBuyNow = () => {
    if (!selectedSize) return toast.error('Please select a size before checkout');
    addToCart({ ...product, selectedSize, quantity });
    toast.success('Proceeding to checkout');
    navigate('/checkout');
  };

  const handleWishlist = () => {
  if (isLiked) {
    removeFromWishlist(product.id);
    setToastMessage("Removed from wishlist");
  } else {
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
    setToastMessage("Added to wishlist");
  }
  setShowToast(true);
  setTimeout(() => setShowToast(false), 2000);
};


  return (
    <>
    <div className="pt-[190px]">
      <div className="max-w-7xl mx-auto p-4 md:p-10 grid md:grid-cols-2 gap-8 ">
        {/* Left: Image Slider */}
        <div className="relative space-y-4">
          <div
            className="text-sm text-blue-700 hover:underline cursor-pointer flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft /> Back to search results
          </div>
          {/* <div className="relative cursor-zoom-in group">
            <img
              src={imageSlides[currentImageIndex]}
              alt={product.name}
              className="w-full max-h-[500px] object-contain rounded shadow"
              onClick={() => setZoomOpen(true)}
            />
            <button onClick={handlePrev} className="absolute top-1/2 left-2 p-2 bg-white rounded-full shadow hover:bg-gray-200">
              ❮
            </button>
            <button onClick={handleNext} className="absolute top-1/2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-200">
              ❯
            </button>
          </div> */}

         {/* Add This Right Below Main Image */}
          <div className="relative cursor-zoom-in group">
            {/* <img
              src={imageSlides[currentImageIndex]}
              alt={product.name}
              className="w-full max-h-[500px] object-contain rounded shadow"
              onClick={() => setZoomOpen(true)}
            /> */}
            {(() => {
  const currentSlide = imageSlides[currentImageIndex];
  const isVideo = typeof currentSlide === 'object' && currentSlide.type === 'video';
  const src = isVideo ? currentSlide.url : currentSlide;

  return isVideo ? (
    <video
      src={src}
  autoPlay
  muted
  loop
  controls
  className="w-full max-h-[500px] object-contain rounded shadow"
      onClick={(e) => e.stopPropagation()}
    />
  ) : (
    <img
      src={src}
      alt={product.name}
      className="w-full max-h-[500px] object-contain rounded shadow"
      onClick={() => setZoomOpen(true)}
    />
  );
})()}


            {/* ❤️ Wishlist Icon */}
<div className="absolute top-3 right-3 z-20">
  <button
  onClick={handleWishlist}
  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10 hover:scale-110 transition"
>
  {isLiked ? (
    <FaHeart className="text-orange-500" />
  ) : (
    <FaRegHeart className="text-gray-500" />
  )}
</button>
</div>

            <button onClick={handlePrev} className="absolute top-1/2 left-2 p-2 bg-white rounded-full shadow hover:bg-gray-200">
              ❮
            </button>
            <button onClick={handleNext} className="absolute top-1/2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-200">
              ❯
            </button>

            {/* Inside Thumbnail Image Slider */}
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {/* {imageSlides.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-20 w-20 object-cover rounded border cursor-pointer transition-transform duration-200 hover:scale-105 ${
                    idx === currentImageIndex ? 'border-sky-500 border-2' : 'border-gray-300'
                  }`}
                />
              ))} */}
              {/* {imageSlides.map((slide, idx) => {
  const isVideo = typeof slide === 'string' && slide.startsWith('VIDEO::');
  const thumbSrc = isVideo ? videoThumbnail : slide;

  return (
    <img
      key={idx}
      src={thumbSrc}
      alt={`Thumbnail ${idx + 1}`}
      onClick={() => setCurrentImageIndex(idx)}
      className={`h-20 w-20 object-cover rounded border cursor-pointer transition-transform duration-200 hover:scale-105 ${
        idx === currentImageIndex ? 'border-sky-500 border-2' : 'border-gray-300'
      }`}
    />
  ); 
})} */} 

{imageSlides.map((slide, idx) => {
    const isVideo = typeof slide === 'string' && slide.startsWith('VIDEO::');
    const videoUrl = isVideo ? slide.replace('VIDEO::', '') : null;
    
    // Use a proper video placeholder image or generate a thumbnail server-side
    const placeholderImage = 'https://i.postimg.cc/m2jp7gPM/gifts6.jpg'; // or public path
    const thumbnailSrc = isVideo ? placeholderImage : slide;

    return (
      <div
        key={idx}
        className={`relative h-20 w-20 rounded border cursor-pointer transition-transform duration-200 hover:scale-105 ${
          idx === currentImageIndex ? 'border-sky-500 border-2' : 'border-gray-300'
        }`}
        onClick={() => setCurrentImageIndex(idx)}
      >
        <img
          src={thumbnailSrc}
          alt={`Thumbnail ${idx + 1}`}
          className="h-full w-full object-cover rounded"
          onError={(e) => {
            e.currentTarget.src = 'https://i.postimg.cc/m2jp7gPM/gifts6.jpg'; // fallback
          }}
        />
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-6 h-6 text-white bg-black bg-opacity-50 rounded-full p-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
    );
  })}


            </div>
          </div>

          <div className="text-sm text-blue-700 hover:underline flex items-center gap-2 justify-end cursor-pointer">
            <FaRegFlag /> Report this item to ArtCanvas
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            {/* <div className="flex flex-wrap items-center gap-2 text-2xl font-bold text-sky-600">
              BDT ${product.price.toFixed(2)}
              <span className="line-through text-gray-400 text-base font-normal">BDT 9.28</span>
              <span className="text-red-500 text-base font-semibold">40% off</span>
            </div> */}
            <div className="flex flex-wrap items-center gap-2 text-2xl font-bold text-sky-600">
  BDT {product?.price ? product.price.toFixed(2) : '0.00'}
  <span className="line-through text-gray-400 text-base font-normal">BDT 9.28</span>
  <span className="text-red-500 text-base font-semibold">40% off</span>
</div>

            <div className="flex items-center gap-2 text-orange-600 font-medium">
              <FaRegClock /> Sale ends in <span className="text-black">{formatTime(timeLeft)}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <BsEmojiSunglasses className="text-lg text-blue-500" />
              <span className="font-medium text-gray-800">Limited Time Offer — Save Big Today</span>
            </div>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
            <div className="flex items-center gap-1 text-sm text-blue-600">
              ArtCanvas Store{' '}
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>

            {/* Size selector */}
            <div>
              <div className="mb-2 font-semibold">Select Size:</div>
              <div className="flex gap-3">
                {['8×10 in', '11×14 in'].map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-gray-300 text-black hover:bg-gray-200'
                    } transition`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity selector */}
            <div>
              <div className="mb-2 font-semibold">Quantity:</div>
              <div className="flex items-center gap-2 py-4">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-15 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-200 transition"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-15 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-200 transition"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3 py-8">
            <button
              onClick={handleAddToCart}
              className="bg-sky-500 text-white py-3 px-6 rounded-4xl w-full text-lg font-semibold hover:bg-sky-600 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-black text-white py-3 px-6 rounded-4xl w-full text-lg font-semibold hover:bg-black transition"
            >
              Buy it now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews & Summary */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 space-y-8 mb-16">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-800 font-semibold text-lg">
            <FaStar className="text-yellow-400" /> 4.9 out of 5{' '}
            <span className="text-gray-500 font-normal">(609 reviews)</span>
          </div>
          <p className="text-sm text-gray-400">All reviews are from verified buyers</p>
          <div className="flex flex-wrap gap-4 items-center">
            {['Item quality', 'Shipping', 'Customer Service'].map((label, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold">
                  5/5
                </div>
                <span className="text-xs text-gray-700 mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 font-semibold text-gray-700">
          <BsEmojiSunglasses className="text-xl" /> Buyer highlights, summarized by AI
        </div>
        <div className="flex flex-wrap items-center text-sm text-gray-600 gap-y-2">
          {['As described', 'Fast shipping', 'Beautiful', 'Looks great', 'Love it', 'Perfect condition'].map((tag, i) => (
            <div key={i} className="flex items-center">
              <span className="px-2">{tag}</span>
              {i < 5 && <span className="w-px h-4 bg-gray-300 mx-1 hidden sm:inline-block"></span>}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {['Description accuracy (2)', 'Shipping & Packaging (1)', 'Appearance (1)', 'Quality (1)'].map((item, i) => (
            <span key={i} className="px-3 py-1 text-sm border rounded-full hover:bg-gray-100 cursor-pointer">{item}</span>
          ))}
        </div>

        <div className="relative w-48">
          <select className="border rounded px-4 py-2 w-full appearance-none cursor-pointer text-sm">
            {['Suggested', 'Most recent', 'Highest Rating', 'Lowest Rating'].map(o => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <FaChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
        </div>

        <div className="divide-y divide-gray-200">
          {[{ name: 'Yvonne', date: 'May 25, 2025', review: 'This is such a lovely piece!!' },
            { name: 'Angela Saldana', date: 'Jan 27, 2025', review: 'Arrived on time and just as described!' },
            { name: 'Laura', date: 'Dec 9, 2024', review: 'Quality of image is extremely clear and beautiful in canvas.' },
            { name: 'Tina Konerth', date: 'Nov 16, 2024', review: 'Nice behind my living room in canvas. Thanks.' }
          ].map((r, i) => (
            <div key={i} className="py-4 flex flex-col md:flex-row md:items-start md:gap-6">
              <div className="flex-1 text-gray-700">
                <div className="flex items-center gap-2 text-yellow-500 text-sm">
                  {Array.from({ length: 5 }).map((_, idx) => <FaStar key={idx} />)}
                  <span className="ml-1 font-semibold text-gray-600">5</span>
                  <span className="text-green-600 text-xs ml-2">✔ Recommends</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{r.review}</p>
              </div>
              <div className="mt-3 md:mt-0 pl-4 md:border-l border-gray-300 text-xs text-gray-500 min-w-[140px] text-left md:text-right">
                <div className="font-medium text-gray-700">{r.name}</div>
                <div>{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Zoom Modal */}
      {/* {zoomOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out" onClick={() => setZoomOpen(false)}>
          <button onClick={() => setZoomOpen(false)} className="absolute top-6 right-6 text-white text-3xl p-2 hover:text-gray-300">
            <FaTimes />
          </button>
          <img
            src={imageSlides[currentImageIndex]}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )} */}
      {/* Fullscreen Zoom Modal with Slider */}
{zoomOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    onClick={() => setZoomOpen(false)}
  >
    <button
      onClick={() => setZoomOpen(false)}
      className="absolute top-6 right-6 text-white text-3xl p-2 hover:text-gray-300 z-50"
    >
      <FaTimes />
    </button>

    <div
      className="relative max-w-4xl w-full px-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* <img
        src={imageSlides[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="max-h-[80vh] w-full object-contain rounded shadow"
      /> */}
      
      {(() => {
  const currentSlide = imageSlides[currentImageIndex];
  const isVideo = typeof currentSlide === 'object' && currentSlide.type === 'video';
  const src = isVideo ? currentSlide.url : currentSlide;

  return isVideo ? (
    <video
      src={src}
      autoPlay
      muted
      loop
      controls
      className="max-h-[80vh] w-full object-contain rounded shadow"
      onClick={(e) => e.stopPropagation()}
    />
  ) : (
    <img
      src={src}
      alt={`Slide ${currentImageIndex + 1}`}
      className="max-h-[80vh] w-full object-contain rounded shadow"
      onClick={(e) => e.stopPropagation()}
    />
  );
})()}


     {/* Animated Prev Arrow */}
<button
  onClick={handlePrev}
  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-60 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 hover:bg-opacity-80 transition-all duration-300 ease-in-out shadow-lg"
>
  ❮
</button>

{/* Animated Next Arrow */}
<button
  onClick={handleNext}
  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-60 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 hover:bg-opacity-80 transition-all duration-300 ease-in-out shadow-lg"
>
  ❯
</button>


      {/* Thumbnail slider inside modal */}
      <div className="flex gap-2 mt-4 justify-center overflow-x-auto">
        {imageSlides.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumb ${idx + 1}`}
            onClick={() => setCurrentImageIndex(idx)}
            className={`h-20 w-20 object-cover rounded cursor-pointer border ${
              idx === currentImageIndex ? 'border-sky-500 border-2' : 'border-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
  
)}
</div>
    </>
  );
};

export default ProductDetails;






// // ✅ Step 1: All imports at the top
// import { useParams, useNavigate } from 'react-router-dom';
// import products from '../../data/products';
// import { useCart } from '../../context/CartContext';
// import { useState, useEffect } from 'react';
// import { FaArrowLeft, FaRegFlag, FaStar, FaRegClock, FaTimes, FaChevronDown } from 'react-icons/fa';
// import { BsEmojiSunglasses } from 'react-icons/bs';
// import { motion } from 'framer-motion';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const product = products.find((p) => p.id === id);
//   const { addToCart } = useCart();

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(60 * 24 * 60 * 60);
//   const [zoomOpen, setZoomOpen] = useState(false);
//   const [selectedSort, setSelectedSort] = useState('Suggested');
//   const [currentPage, setCurrentPage] = useState(1);
//   const reviewsPerPage = 2;

//   const imageSlides = product?.images || [];

//   // Dummy reviews with rating + date
//   const reviews = [
//     { name: "Yvonne", date: "2025-05-25", rating: 5, review: "This is such a lovely piece!!" },
//     { name: "Angela Saldana", date: "2025-01-27", rating: 4, review: "Arrived on time and just as described!" },
//     { name: "Laura", date: "2024-12-09", rating: 5, review: "Quality of image is extremely clear and beautiful in canvas." },
//     { name: "Tina Konerth", date: "2024-11-16", rating: 3, review: "Nice behind my living room in canvas. Thanks." }
//   ];

//   const handlePrev = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? imageSlides.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === imageSlides.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const days = Math.floor(seconds / (3600 * 24));
//     const hrs = String(Math.floor((seconds % (3600 * 24)) / 3600)).padStart(2, '0');
//     const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
//     const secs = String(seconds % 60).padStart(2, '0');
//     return `${days}d ${hrs}:${mins}:${secs}`;
//   };

//   const getSortedReviews = () => {
//     const sorted = [...reviews];
//     switch (selectedSort) {
//       case 'Most recent':
//         return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
//       case 'Highest Rating':
//         return sorted.sort((a, b) => b.rating - a.rating);
//       case 'Lowest Rating':
//         return sorted.sort((a, b) => a.rating - b.rating);
//       default:
//         return sorted;
//     }
//   };

//   const sortedReviews = getSortedReviews();
//   const totalPages = Math.ceil(sortedReviews.length / reviewsPerPage);
//   const paginatedReviews = sortedReviews.slice(
//     (currentPage - 1) * reviewsPerPage,
//     currentPage * reviewsPerPage
//   );

//   if (!product) return <div className="p-6 text-red-500 font-bold">Product not found.</div>;

//   return (
//     <>
//       <div className="max-w-7xl mx-auto p-4 md:p-10 grid md:grid-cols-2 gap-8">
//         {/* LEFT COLUMN - IMAGE */}
//         <div className="relative space-y-4">
//           <div className="text-sm text-blue-700 hover:underline cursor-pointer flex items-center gap-2" onClick={() => navigate(-1)}>
//             <FaArrowLeft /> Back to search results
//           </div>

//           <div className="relative cursor-zoom-in group">
//             <img src={imageSlides[currentImageIndex]} alt={product.name} className="w-full max-h-[500px] object-contain rounded shadow" onClick={() => setZoomOpen(true)} />
//             <button onClick={handlePrev} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">❮</button>
//             <button onClick={handleNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">❯</button>
//           </div>

//           <div className="text-sm text-blue-700 hover:underline flex items-center gap-2 cursor-pointer justify-end">
//             <FaRegFlag /> Report this item to ArtCanvas
//           </div>
//         </div>

//         {/* RIGHT COLUMN */}
//         <div className="flex flex-col justify-between space-y-6">
//           <div className="space-y-3">
//             <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
//             <div className="flex flex-wrap items-center gap-2 text-2xl font-bold text-sky-600">
//               BDT ${product.price.toFixed(2)}
//               <span className="line-through text-gray-400 text-base font-normal">BDT 9.28</span>
//               <span className="text-red-500 text-base font-semibold">40% off</span>
//             </div>
//             <div className="flex items-center gap-2 text-orange-600 font-medium">
//               <FaRegClock /> Sale ends in <span className="text-black">{formatTime(timeLeft)}</span>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               <BsEmojiSunglasses className="text-lg text-blue-500" />
//               <span className="font-medium text-gray-800">Limited Time Offer — Save Big Today</span>
//             </div>
//             <p className="text-gray-700 leading-relaxed">Modern Abstract Wall Art - Relaxing on light printed Striped Couch - Large Canvas Print for Vibrant Home Decor - Unique Line Drawing</p>
//             <div className="flex items-center gap-1 text-sm text-blue-600">
//               ArtCanvas Store
//               <span className="flex text-yellow-400">{Array.from({ length: 5 }, (_, i) => <FaStar key={i} />)}</span>
//             </div>
//           </div>
//           <button onClick={() => addToCart(product)} className="bg-sky-500 text-white py-3 px-6 rounded hover:bg-sky-600 transition w-full text-lg font-semibold">Add to Cart</button>
//         </div>
//       </div>

//       {/* REVIEW SECTION */}
//       <div className="max-w-5xl mx-auto p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold text-gray-800">Customer Reviews</h2>
//           <div className="relative w-48">
//             <select
//               className="border rounded px-4 py-2 w-full appearance-none cursor-pointer text-sm"
//               value={selectedSort}
//               onChange={(e) => {
//                 setSelectedSort(e.target.value);
//                 setCurrentPage(1);
//               }}
//             >
//               {['Suggested', 'Most recent', 'Highest Rating', 'Lowest Rating'].map(option => (
//                 <option key={option} value={option}>{option}</option>
//               ))}
//             </select>
//             <FaChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
//           </div>
//         </div>

//         <div className="space-y-4">
//           {paginatedReviews.map((r, i) => (
//             <motion.div
//               key={i}
//               className="py-4 border-b"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: i * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex items-center gap-2 text-yellow-500 text-sm">
//                 {Array.from({ length: r.rating }).map((_, idx) => <FaStar key={idx} />)}
//                 <span className="ml-1 font-semibold text-gray-600">{r.rating}</span>
//                 <span className="text-green-600 text-xs ml-2">✔ Recommends</span>
//               </div>
//               <p className="mt-2 text-sm text-gray-700">{r.review}</p>
//               <div className="text-xs text-gray-500 mt-1">{r.name} — {r.date}</div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="flex justify-center gap-2 mt-6">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-sky-600 transition`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ZOOM MODAL */}
//       {zoomOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out" onClick={() => setZoomOpen(false)}>
//           <button onClick={() => setZoomOpen(false)} className="absolute top-6 right-6 text-white text-3xl p-2 hover:text-gray-300" aria-label="Close zoom">
//             <FaTimes />
//           </button>
//           <img src={imageSlides[currentImageIndex]} alt={product.name} className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-lg" onClick={(e) => e.stopPropagation()} />
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductDetails;


