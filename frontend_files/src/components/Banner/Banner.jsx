// // Banner.jsx

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


// import { Autoplay, Pagination, Navigation } from "swiper/modules";



// const Banner = () => {
//   const slides = [
//     {
//       img: "https://i.postimg.cc/nhNCnXgQ/back-0-2.jpg",
//       alt: "Elegant Canvas 1",
//     },
//     {
//       img: "https://i.postimg.cc/RFWmhdtS/back-2.jpg",
//       alt: "Elegant Canvas 2",
//     },
//     {
//       img: "https://i.postimg.cc/tT0NGGsb/Untitled-design-8.jpg",
//       alt: "Elegant Canvas 3",
//     },
//   ];

//   return (
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       modules={[Autoplay, Pagination, Navigation]}
//       className="mySwiper"
//     >
//       {slides.map((slide, index) => (
//         <SwiperSlide key={index}>
//           <div
//             className="relative w-full min-h-[80vh] md:min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
//             style={{ backgroundImage: `url(${slide.img})` }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-[#E6BAA3] opacity-20"></div>

//             {/* Optional Centered Text (currently commented out) */}
//             {/* <div className="relative z-10 text-center text-white px-4">
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold drop-shadow-lg">
//                 Your Elegant Tagline Here
//               </h1>
//               <p className="mt-4 text-base sm:text-lg drop-shadow">
//                 Add an optional description about the artwork or offer.
//               </p>
//             </div> */}
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Banner;



// src/components/Banner/Banner.jsx
import { Link } from "react-router-dom";

const Banner = () => {


  return (
    <section className="px-4 sm:px-6 lg:px-12 py-6">
  <div className="flex flex-col md:flex-row gap-6 p-0 md:p-6 justify-center items-center">
    
    {/* Left Hero Card */}
    <div className="relative w-full md:w-[896px] h-[400px] bg-[#ffe2c6] rounded-2xl overflow-hidden shadow-xl group transition-transform duration-500 hover:scale-[1.01]">
      <div className="flex flex-col justify-center items-start px-6 py-10 sm:p-10 z-10 w-full md:w-1/2 h-full">
        <h1 className="text-3xl sm:text-4xl md:text-3xl font-serif text-black ">
          Discover special
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 mt-2">
          So many amazing and original pieces
        </p>

        {/* Button */}
        <div className="mt-6 w-full flex md:justify-start justify-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-3 text-sm font-semibold bg-black text-white px-6 py-3 sm:py-4 rounded-full shadow hover:bg-sky-600 transition duration-400"
          >
            Start here
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <Link to='/products/8' className="hidden md:block w-1/2 h-full absolute right-0 top-0">
        <img
          src="https://i.postimg.cc/v87rbwv8/combo.jpg"
          alt="Lamp Decor"
          className="w-full h-full object-cover"
        />
      </Link>
    </div>

    {/* Right Hero Card */}
    <Link
      to="/products/9"
      className="relative w-full md:w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-xl group transition-transform duration-500 hover:scale-[1.03]"
    >
      <img
        src="https://i.postimg.cc/pTW2jj36/single-1.jpg"
        alt="Tees"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-6 left-6 z-10 text-white max-w-[90%] sm:max-w-[75%]">
        <h2 className="text-xl sm:text-2xl font-bold drop-shadow">
          Personalized Craft
        </h2>
        <div className="mt-2">
          <span className="inline-flex items-center gap-3 text-sm font-semibold bg-white/10 backdrop-blur px-5 sm:px-6 py-3 sm:py-4 rounded-full shadow hover:bg-white/20 transition duration-300">
            Shop now
            <svg
              className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0" />
    </Link>
  </div>
</section>

  );
};

export default Banner;
































// // src/components/Banner/Banner.jsx
// import React from 'react';

// const Banner = () => {
//   return (
//     <div id="default-carousel" className="relative w-full" data-carousel="slide">
//       {/* Carousel wrapper */}
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {/* Item 1 */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img src="https://i.postimg.cc/XJLB8vnh/36180b30bd2a639ee2a6e6245209ac59.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>
//         {/* Item 2 */}
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//           <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
//         </div>
//         {/* Add other items similarly... */}
//       </div>

//       {/* Slider indicators */}
//       <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//         <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//         {/* Add more indicators... */}
//       </div>
//     </div>
//   );
// };

// export default Banner;
