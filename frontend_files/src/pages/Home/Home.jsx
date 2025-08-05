// // src/pages/Home.jsx
// import React from 'react';
// import Banner from '../../components/Banner/Banner';
// import { Link } from 'react-router-dom';
// import products from '../../data/products';
// import ProductCard from '../../components/ProductCard/ProductCard';
// import { FaArrowRight } from 'react-icons/fa';

// const Home = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900">
//       {/* Banner + Hero Text Overlay */}
//       <div className="relative">
//         <Banner />

//         {/* Hero Text Overlay Centered */}
// <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-12 z-10">
//   <div className="bg-white/40 backdrop-blur-none rounded-xl p-6 sm:p-8 max-w-xl w-full text-center shadow-2xl shadow-gray-300/40">
//     <h2 className="text-2xl  font-bold text-black mb-4 drop-shadow-[0_2px_4px_rgba(255,255,255,0.7)]">
//       Explore Handmade Canvas Art
//     </h2>
//     <p className="text-black text-sm sm:text-base md:text-lg mb-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]">
//       Unique and creative handmade canvases crafted with love and passion.
//       Beautify your home or gift someone special.
//     </p>
//     <Link to="/products">
//       <button className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-lg shadow-md transition duration-300">
//         Shop Now
//       </button>
//     </Link>
//   </div>
// </div>

//       </div>

//       {/* Product Cards Section */}
//       <section className="py-16 px-8 sm:px-6 lg:px-40">
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
//             Featured Products
//           </h3>
//           <Link
//             to="/products"
//             className="text-sky-600 hover:underline flex items-center gap-1"
//           >
//             View All <FaArrowRight className="mt-0.5" />
//           </Link>
//         </div>

//         {products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
//             {products.slice(0, 6).map((product) => (
//               <div className="xl:col-span-2" key={product.id}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">No products found.</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Home;








// // src/pages/Home.jsx
// import React from 'react';
// import Banner from '../../components/Banner/Banner';
// import { Link } from 'react-router-dom';
// import products from '../../data/products';
// import ProductCard from '../../components/ProductCard/ProductCard';
// import { FaArrowRight } from 'react-icons/fa';
// import RecentActivity from '../../components/RecentActivity/RecentActivity';

// const Home = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900">
//       {/* Static Banner (now includes promo section) */}
//       <Banner />
//              <RecentActivity />

//       {/* 🛍 Featured Products */}
//       <section className="py-16 px-8 sm:px-6 lg:px-40">
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
//             Featured Products
//           </h3>
//           <Link
//             to="/products"
//             className="text-sky-600 hover:underline flex items-center gap-1"
//           >
//             View All <FaArrowRight className="mt-0.5" />
//           </Link>
//         </div>

//         {products.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
//             {products.slice(0, 6).map((product) => (
//               <div className="xl:col-span-2" key={product.id}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500">No products found.</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Home; 




// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';
import products from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import { FaArrowRight } from 'react-icons/fa';
import RecentActivity from '../../components/RecentActivity/RecentActivity';

const Home = () => {
  const sliderRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const cardWidth = 320; // Adjust if needed

    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;

      scrollAmount += cardWidth;

      if (
        scrollAmount + slider.offsetWidth >=
        scrollContainerRef.current.scrollWidth
      ) {
        scrollAmount = 0; // Reset to start
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 pt-[190px]">
      {/* 🖼 Static Banner */}
      <Banner />
      <RecentActivity />

      {/* 🛍 Featured Products */}
      <section className="py-16 px-8 sm:px-6 lg:px-40">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Featured Products
          </h3>
          <Link
            to="/products"
            className="text-sky-600 hover:underline flex items-center gap-1"
          >
            View All <FaArrowRight className="mt-0.5" />
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
            {products.slice(0, 6).map((product) => (
              <div className="xl:col-span-2" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </section>

      {/* 🎥 Promotional Video */}
      <section className="py-16 px-8 sm:px-6 lg:px-40 bg-gray-100 rounded-lg">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Watch Our Promotional Video
          </h3>
        </div>

        <div style={{ position: "relative", width: "100%", height: "0px", paddingBottom: "56.25%" }}>
          <iframe
            allow="fullscreen; autoplay"
            allowFullScreen
            height="100%"
            src="https://streamable.com/e/ryn88q?autoplay=1&muted=1"
            width="100%"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              position: "absolute",
              left: "0px",
              top: "0px",
              overflow: "hidden"
            }}
          ></iframe>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Discover more about our products and services in this promotional video.
        </p>
      </section>

      {/* 🎁 Etsy-Inspired Gift Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-20">
        {/* Header Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Left Column - Centered */}
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Art Canvas Gift Card Section
            </h3>
            <Link to="/inspiration">
              <button className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition">
                Get Inspired
              </button>
            </Link>
          </div>

          {/* Right Column - Auto-scrolling Slider */}
          <div className="overflow-x-auto scrollbar-hide" ref={sliderRef}>
            <div
              className="flex gap-4 w-max md:w-full"
              ref={scrollContainerRef}
            >
              {[
                {
                  image: 'https://i.postimg.cc/9fmsC3jn/fancy.jpg',
                  title: 'Gift Ideas for Girls',
                  link: '/earrings',
                  price: '$5.99'
                },
                {
                  image: 'https://i.postimg.cc/htLqKbQf/gift-box.jpg',
                  title: 'Birthday Surprise Boxes',
                  link: '/gifts',
                  price: '$1.00'
                },
                {
                  image: 'https://i.postimg.cc/Rh6jyczC/for-him.jpg',
                  title: 'Gift for Him',
                  // link: '/gift-for-him',
                  link: '/gifts',
                  price: '$28.50'
                },
                {
                  image: 'https://i.postimg.cc/c4fy0MPP/Paper-crafts-diy-kids.jpg',
                  title: 'Gift for Kids',
                  link: '/gifts',
                  price: '$28.50'
                },
              ].map((item, idx) => (
                <Link to={item.link} key={idx}>
                  <div
                    className="relative flex-shrink-0 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                    style={{ width: '315.5px', height: '250.54px' }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 p-3">
                      <h4 className="text-white text-sm font-semibold truncate">
                        {item.title}
                      </h4>
                    </div>
                    <span className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {item.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Craft Cards Grid */}
       <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
  {[
    {
              image: 'https://i.postimg.cc/yd7CbJL2/ear.jpg',
              title: 'Earrings',
              price: '$2.99',
              link: '/earrings?category=Earrings', // Redirect to Earrings page with category
            },
            {
              image: 'https://i.postimg.cc/QdZ4b24y/hair.jpg',
              title: 'Hair Clip',
              price: '$2.50',
              link: '/hair-clips',
            },
            {
              image: 'https://i.postimg.cc/5Ns5HZcz/black-neck.jpg',
              title: 'Neckpieces Set',
              price: '$5.99',
              link: '/neckpieces', // Example for other categories
            },
            {
              image: 'https://i.postimg.cc/s264tqmy/brg.jpg',
              title: 'Bags',
              price: '$12.25',
              link: '/bags',
            },
            {
              image: 'https://i.postimg.cc/JhGkBn3V/keyring.jpg',
              title: 'Key Rings',
              price: '$1.00',
              link: '/key-rings',
            },
            {
              image: 'https://i.postimg.cc/Z5j8d213/diy-kid.jpg',
              title: 'Paper Craft DIY Kids',
              price: '$1.75',
              link: '/paper-craft-diy-for-kids',
            },
    // Add other categories similarly
  ].map((item, idx) => (
    <Link to={item.link} key={idx}>
      <div className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-3">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
            {item.title}
          </h4>
        </div>
        <span className="absolute top-2 right-2 bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {item.price}
        </span>
      </div>
    </Link>
  ))}
</section>
      </section>
      {/* ✅ New Section: Etsy-style Info Block */}
      <section className="bg-sky-50 py-16 px-4 sm:px-8 lg:px-40">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-serif text-gray-800 mb-2">What is Azza'h Crafts?</h3>
          <Link to="/about" className="text-gray-700 underline hover:text-gray-900">
            Explore the world of handcrafted expression
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">A Community of Creators</h4>
            <p className="text-gray-700">
              Art Canvas is an online marketplace where artisans bring their passion to life through handmade pieces.
              From hand-painted canvases and elegant earrings to thoughtful gift boxes and kids’ crafts, every piece celebrates creativity.{' '}
              <Link to="/impact" className="underline hover:text-gray-900">
                Here are some of the ways we’re making a positive impact, together.
              </Link>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Support independent creators</h4>
            <p className="text-gray-700">
               Your privacy and trust are our top priorities. With secure shopping and reliable support,
              we make sure you always feel confident buying from Art Canvas.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Peace of mind</h4>
            <p className="text-gray-700">
              Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-gray-800 mb-4">
            Have a question? Well, we’ve got some answers.
          </p>
          <Link to="/help-center">
            <button className="px-6 py-2 border border-gray-700 rounded-full hover:bg-sky-100 transition">
              Go to Help Center
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;





