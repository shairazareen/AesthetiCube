// pages/gifts.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GiCakeSlice,
  GiRingBox,
  GiBabyBottle
} from 'react-icons/gi';
import { MdPregnantWoman } from 'react-icons/md';
import {
  FaBirthdayCake,
  FaCalendarAlt,
  FaRegEnvelope,
  FaPrayingHands,
  FaHeartbeat,
  FaGift,
  FaHome
} from 'react-icons/fa';
import {
  AiOutlineHeart,
  AiFillPlayCircle,
  AiFillStar,
  AiOutlineStar
} from 'react-icons/ai';

const categories = [
  { name: 'Wedding', icon: <GiCakeSlice /> },
  { name: 'Birthday', icon: <FaBirthdayCake /> },
  { name: 'Anniversary', icon: <FaCalendarAlt /> },
  { name: 'Thank You', icon: <FaRegEnvelope /> },
  { name: 'Sympathy', icon: <FaPrayingHands /> },
  { name: 'Get Well', icon: <FaHeartbeat /> },
  { name: 'Engagement', icon: <GiRingBox /> },
  { name: 'New Baby', icon: <GiBabyBottle /> },
  { name: 'Expecting Parent', icon: <MdPregnantWoman /> },
  { name: 'Just Because', icon: <FaGift /> },
  { name: 'Housewarming', icon: <FaHome /> },
];

const interestTags = [
  'Travel','Minimalist Decor','Art','Astrology','Movies','Video Games',
  'Nature','Jewelry','Tech','Maximalist Decor','Collectibles','Plants',
  'Puzzles & Games','Science','Crafting','Hosting','Romance','More…'
];

// Sample data — swap these image paths & text for your real content
const sampleRows = [
  {
    shopAvatar: '/images/avatars/francophile.jpg',
    shopName: 'The Francophile',
    collectionName: 'Baguette Bags',
    items: [
      {
        title: 'Vintage Y2K Charles David calfskin-pink…',
        image: 'https://i.postimg.cc/8zJsCnFx/gifts1.jpg',
        rating: 4.5, reviews: 602,
        price: 362, original: 369, discount: '10% off',
        freeShipping: false, isVideo: false
      },
      {
        title: 'Baguette Bag 28" (72cm) long strap…',
        image: 'https://i.postimg.cc/m2jp7gPM/gifts6.jpg',
        videoUrl: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752564205/57c6b523d54e0e744dc1176b896234c7_jtyiui.mp4',
        isVideo: true,
        rating: 5, reviews: 4700,
        price: 20.00, original: null, discount: null,
        freeShipping: false, isVideo: true
      },
      {
        title: 'Green Woven Leather Shoulder Bag',
        image: 'https://i.postimg.cc/gkwGyLYZ/gifts2.jpg',
        rating: 4.8, reviews: 11,
        price: 101.51, original: 135.36, discount: '25% off', freeShipping: true, isVideo: false
      },
      {
        title: 'Baguette bag, linen bread bag…',
        image: 'https://i.postimg.cc/g2VjRLDK/gifts5.jpg',
        rating: 5, reviews: 873,
        price: 23.97, original: null, discount: null, freeShipping: false, isVideo: false
      },
      {
        title: 'Leather Baguette Bag, Trendy…',
        image: 'https://i.postimg.cc/HnwR3mPF/gifts3.jpg',
        rating: 4, reviews: 2,
        price: 75.00, original: 100.00, discount: '25% off', freeShipping: false, isVideo: false
      },
      {
        title: 'Burgundy Baguette Bag, Vegan…',
        image: 'https://i.postimg.cc/x8f3DS1w/gifts4.jpg',
        rating: 4.5, reviews: 17,
        price: 29.90, original: 59.80, discount: '50% off', freeShipping: false, isVideo: false
      },
    ],
  },
  {
    shopAvatar: '/images/avatars/cyclist.jpg',
    shopName: 'The Cyclist',
    collectionName: 'Weatherproof Cycling Bags',
    items: [
      {
        title: 'Custom Frame Bag for Bikepacking',
        image: 'https://i.postimg.cc/9ftrZwWh/man1.jpg',
        rating: 4.7, reviews: 337,
        price: 222.46, original: null, discount: null, freeShipping: false, isVideo: false
      },
      {
  title: 'Cycling Bag / Bogota Bag / Bike…',
  image: 'https://i.postimg.cc/5NJVZK1f/man0-7.jpg',
  videoUrl: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752561141/Untitled_video_-_Made_with_Clipchamp_4_jbnhpc.mp4', // or your Cloudinary/Streamable link
  rating: 4.5, reviews: 99,
  price: 97.42, original: null, discount: null,
  freeShipping: false, isVideo: true
},

      {
        title: 'Stem Bag / Feed bag / Cycling…',
        image: 'https://i.postimg.cc/KcCwHBR7/man3.jpg',
        rating: 4.9, reviews: 320,
        price: 27.00, original: null, discount: null, freeShipping: true, isVideo: false
      },
      {
        title: 'Custom full frame bag for bike…',
        image: 'https://i.postimg.cc/T1vjrd3b/man5.jpg',
        rating: 5, reviews: 155,
        price: 178.19, original: null, discount: null, freeShipping: false, isVideo: false
      },
      {
        title: 'Roly Poly Handlebar Bag',
        image: 'https://i.postimg.cc/RVrpRmDX/man4.jpg',
        rating: 4.3, reviews: 39,
        price: 135.00, original: null, discount: null, freeShipping: false, isVideo: false
      },
      {
        title: 'Oso Supply Co | Sitka Bike Frame…',
        image: 'https://i.postimg.cc/nrNkS42X/man2.jpg',
        rating: 4.9, reviews: 650,
        price: 29.99, original: null, discount: null, freeShipping: false, isVideo: false
      },
    ],
  },
  {
    shopAvatar: '/images/avatars/globetrotter.jpg',
    shopName: 'The Globetrotter',
    collectionName: 'Vintage Suitcase Decor',
    items: [
      {
        title: 'Vintage Tear Drop Shaped Train…',
        image: 'https://i.postimg.cc/QdVsvP5B/kids.jpg',
        rating: 5, reviews: 155,
        price: 30.00, original: null, discount: null, freeShipping: false, isVideo: false
      },
      {
        title: 'Vintage Towncraft Green Suitcase…',
        image: 'https://i.postimg.cc/Wz2c8fT1/kid1.jpg',
        rating: 4, reviews: 4,
        price: 30.00, original: null, discount: null, freeShipping: false, isVideo: false
      },
      {
        title: 'Vintage 1970s Blue Suitcase…',
        image: 'https://i.postimg.cc/3Nrzm4Fy/kids1.jpg',
        rating: 4.6, reviews: 15400,
        price: 110.56, original: null, discount: null, freeShipping: false, isVideo: false
      },
      {
        title: 'Vintage Select Air Montreal Suit…',
        image: 'https://i.postimg.cc/GpJMK32v/kid5.jpg',
        rating: 4.8, reviews: 375,
        price: 49.54, original: 58.28, discount: '15% off', freeShipping: false, isVideo: false
      },
      {
        title: 'vintage 70s suitcase Panda',
        image: 'https://i.postimg.cc/TP99mk79/kid4.jpg',
        rating: 4.2, reviews: 424,
        price: 15.00, original: null, discount: null, freeShipping: false, isVideo: false
      },
      {
        title: 'Choice of White Royal Traveller…',
        image: 'https://i.postimg.cc/NFTbyQWy/kids3.jpg',
        rating: 5, reviews: 903,
        price: 35.00, original: null, discount: null, freeShipping: false, isVideo: false
      },
    ],
  },
];

function RatingStars({ rating }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) return <AiFillStar key={i} />;
        if (i === full && half) return <AiFillStar key={i} />;
        return <AiOutlineStar key={i} />;
      })}
    </div>
  );
}

export default function GiftsPage() {
  const [selectedCat, setSelectedCat] = useState('Wedding');
  const [selectedInterest, setSelectedInterest] = useState('Travel');

 return (
  <div className='pt-[120px]'>
  <div className="pt-[120px] lg:pt-[190px] px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Hero */}
      <h2 className="text-3xl sm:text-4xl font-serif text-center mb-2">
        Extra-special gifting made extra-easy
      </h2>
      <p className="text-center text-base sm:text-lg text-gray-700 mb-8">
        Discover perfect picks for the occasion!
      </p>

      {/* Category Icons */}
      <div className="flex flex-wrap sm:flex-nowrap sm:space-x-6 gap-4 justify-center sm:justify-start overflow-x-auto sm:overflow-visible mb-8 no-scrollbar">
        {categories.map(cat => {
          const active = cat.name === selectedCat;
          return (
            <div
              key={cat.name}
              onClick={() => setSelectedCat(cat.name)}
              className="flex flex-col items-center text-sm cursor-pointer flex-shrink-0"
            >
              <div
                className={`p-3 rounded-full mb-1 transition ${
                  active
                    ? 'border border-black'
                    : 'border border-transparent hover:border-gray-300'
                }`}
              >
                {React.cloneElement(cat.icon, {
                  size: 24,
                  className: active ? 'text-black' : 'text-gray-500',
                })}
              </div>
              <span
                className={`whitespace-nowrap transition ${
                  active
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-gray-500'
                }`}
              >
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Interest Tags */}
      <p className="text-center font-medium mb-4">
        Browse by interest for the best gifts!
      </p>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {interestTags.map(tag => {
          const active = tag === selectedInterest;
          return (
            <button
              key={tag}
              onClick={() => setSelectedInterest(tag)}
              className={`px-4 py-1 rounded-full text-sm transition whitespace-nowrap ${
                active
                  ? 'border border-gray-800 bg-white text-gray-800'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Shop Rows */}
      {sampleRows.map((row, idx) => (
        <div key={idx} className="mb-12">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
            <div className="flex items-center space-x-2">
              <img
                src={row.shopAvatar}
                alt={row.shopName}
                className="w-6 h-6 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-600">{row.shopName}</p>
                <p className="text-lg font-medium">{row.collectionName}</p>
              </div>
            </div>
            <a href="#" className="text-sm text-gray-800 hover:underline mt-2 sm:mt-0">
              Browse all →
            </a>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-x-auto sm:overflow-visible">
            {row.items.map(item => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full group">
                  <div className="relative w-full h-44 sm:h-48 md:h-56">
                    {item.isVideo ? (
                      <>
                        <video
                          src={item.videoUrl}
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover rounded-t-xl hidden group-hover:block"
                          onMouseEnter={(e) => e.target.play()}
                          onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0;
                          }}
                        />
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover block group-hover:hidden rounded-t-xl"
                        />
                        <div className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow group-hover:opacity-100 opacity-0 transition-opacity">
                          <AiFillPlayCircle size={20} />
                        </div>
                      </>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-t-xl"
                      />
                    )}

                    {/* Heart Icon */}
                    <div className="absolute top-2 right-2 z-10">
                      <div className="bg-white p-1 rounded-full shadow-md">
                        <AiOutlineHeart size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <RatingStars rating={item.rating} />
                      <span className="ml-1">({item.reviews})</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 mt-1">
                      BDT {item.price.toFixed(2)}{' '}
                      {item.original && (
                        <span className="text-xs text-gray-500 line-through ml-1">
                          BDT {item.original.toFixed(2)}
                        </span>
                      )}
                      {item.discount && (
                        <span className="text-xs text-gray-500 ml-1">({item.discount})</span>
                      )}
                    </p>
                    {item.freeShipping && (
                      <p className="text-xs text-gray-500">Free shipping</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Show more ideas */}
      <div className="text-center mt-10">
        <button className="inline-flex items-center border border-gray-400 rounded-full px-6 py-2 hover:bg-gray-100 transition text-sm">
          Show more ideas
        </button>
      </div>
    </div>
  </div>
  </div>
);

}




// // pages/gifts.jsx
// import React, { useState } from 'react';
// import {
//   GiCakeSlice,
//   GiRingBox,
//   GiBabyBottle
// } from 'react-icons/gi';
// import { MdPregnantWoman } from 'react-icons/md';
// import {
//   FaBirthdayCake,
//   FaCalendarAlt,
//   FaRegEnvelope,
//   FaPrayingHands,
//   FaHeartbeat,
//   FaGift,
//   FaHome
// } from 'react-icons/fa';
// import {
//   AiOutlineHeart,
//   AiFillPlayCircle,
//   AiFillStar,
//   AiOutlineStar
// } from 'react-icons/ai';

// const categories = [
//   { name: 'Wedding', icon: <GiCakeSlice /> },
//   { name: 'Birthday', icon: <FaBirthdayCake /> },
//   { name: 'Anniversary', icon: <FaCalendarAlt /> },
//   { name: 'Thank You', icon: <FaRegEnvelope /> },
//   { name: 'Sympathy', icon: <FaPrayingHands /> },
//   { name: 'Get Well', icon: <FaHeartbeat /> },
//   { name: 'Engagement', icon: <GiRingBox /> },
//   { name: 'New Baby', icon: <GiBabyBottle /> },
//   { name: 'Expecting Parent', icon: <MdPregnantWoman /> },
//   { name: 'Just Because', icon: <FaGift /> },
//   { name: 'Housewarming', icon: <FaHome /> },
// ];

// const interestTags = [
//   'Travel','Minimalist Decor','Art','Astrology','Movies','Video Games',
//   'Nature','Jewelry','Tech','Maximalist Decor','Collectibles','Plants',
//   'Puzzles & Games','Science','Crafting','Hosting','Romance','More…'
// ];


// const sampleRows = [
//   {
//     shopAvatar: '/images/avatars/francophile.jpg',
//     shopName: 'The Francophile',
//     collectionName: 'Baguette Bags',
//     items: [
//       {
//         title: 'Vintage Y2K Charles David calfskin-pink…',
//         image: 'https://i.postimg.cc/rFFNrRdL/gifts.jpg',
//         rating: 4.5, reviews: 602,
//         price: 362, original: 369, discount: '10% off',
//         freeShipping: false, isVideo: false
//       },
//       {
//         title: 'Baguette Bag 28" (72cm) long strap…',
//         image: 'https://i.postimg.cc/rFFNrRdL/gifts.jpg',
//         videoUrl: 'https://res.cloudinary.com/dbm4aqhwi/video/upload/v1752497204/giftsv_y4aql6.mp4',
//         isVideo: true,
//         rating: 5, reviews: 4700,
//         price: 20.00
//       }
//     ]
//   }
// ];

// function RatingStars({ rating }) {
//   const full = Math.floor(rating);
//   const half = rating - full >= 0.5;
//   return (
//     <div className="flex text-yellow-500">
//       {Array.from({ length: 5 }).map((_, i) => {
//         if (i < full) return <AiFillStar key={i} />;
//         if (i === full && half) return <AiFillStar key={i} />;
//         return <AiOutlineStar key={i} />;
//       })}
//     </div>
//   );
// }

// export default function GiftsPage() {
//   const [selectedCat, setSelectedCat] = useState('Wedding');
//   const [selectedInterest, setSelectedInterest] = useState('Travel');

//   return (
//     <div className='pt-[190px]'>
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <h2 className="text-4xl font-serif text-center mb-2">
//           Extra-special gifting made extra-easy
//         </h2>
//         <p className="text-center text-lg text-gray-700 mb-8">
//           Discover perfect picks for the occasion!
//         </p>

//         <div className="flex space-x-6 overflow-x-auto mb-8 no-scrollbar">
//           {categories.map(cat => {
//             const active = cat.name === selectedCat;
//             return (
//               <div
//                 key={cat.name}
//                 onClick={() => setSelectedCat(cat.name)}
//                 className="flex-shrink-0 flex flex-col items-center text-sm cursor-pointer"
//               >
//                 <div
//                   className={
//                     `p-3 rounded-full mb-1 transition ` +
//                     (active ? 'border border-black' : 'border border-transparent hover:border-gray-300')
//                   }
//                 >
//                   {React.cloneElement(cat.icon, {
//                     size: 24,
//                     className: active ? 'text-black' : 'text-gray-500'
//                   })}
//                 </div>
//                 <span className={
//                   `whitespace-nowrap transition ` +
//                   (active ? 'text-black border-b-2 border-black pb-1' : 'text-gray-500')
//                 }>
//                   {cat.name}
//                 </span>
//               </div>
//             );
//           })}
//         </div>

//         <p className="text-center font-medium mb-4">
//           Browse by interest for the best gifts!
//         </p>
//         <div className="flex flex-wrap justify-center gap-2 mb-12">
//           {interestTags.map(tag => {
//             const active = tag === selectedInterest;
//             return (
//               <button
//                 key={tag}
//                 onClick={() => setSelectedInterest(tag)}
//                 className={
//                   `px-4 py-1 rounded-full text-sm whitespace-nowrap transition ` +
//                   (active ? 'border border-gray-800 bg-white text-gray-800' : 'bg-gray-200 text-gray-600')
//                 }
//               >
//                 {tag}
//               </button>
//             );
//           })}
//         </div>

//         {sampleRows.map((row, idx) => (
//           <div key={idx} className="mb-12">
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex items-center space-x-2">
//                 <img src={row.shopAvatar} alt={row.shopName} className="w-6 h-6 rounded-full" />
//                 <div>
//                   <p className="text-sm text-gray-600">{row.shopName}</p>
//                   <p className="text-lg font-medium">{row.collectionName}</p>
//                 </div>
//               </div>
//               <a href="#" className="text-sm text-gray-800 hover:underline">
//                 Browse all →
//               </a>
//             </div>
//             <div className="flex space-x-4 overflow-x-auto no-scrollbar pb-4">
//               {row.items.map(item => (
//                 <div key={item.title} className="w-56 flex-shrink-0">
//                   <div className="relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
//                     <div className="relative group">
//                       {item.isVideo && (
//                         <video
//                           src={item.videoUrl}
//                           poster={item.image}
//                           muted
//                           loop
//                           autoPlay
//                           playsInline
//                           className="w-full h-36 object-cover rounded-xl hidden group-hover:block"
//                         />
//                       )}
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className={`w-full h-36 object-cover rounded-xl ${item.isVideo ? 'group-hover:hidden' : ''}`}
//                       />
//                       {item.isVideo && (
//                         <div className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow">
//                           <AiFillPlayCircle size={16} />
//                         </div>
//                       )}
//                     </div>
//                     <div className="absolute top-2 right-2 text-white">
//                       <AiOutlineHeart size={16} />
//                     </div>
//                   </div>
//                   <div className="mt-2">
//                     <div className="flex items-center text-sm text-gray-600 mb-1">
//                       <RatingStars rating={item.rating} />
//                       <span className="ml-1">({item.reviews})</span>
//                     </div>
//                     <p className="text-sm font-medium text-gray-800">
//                       BDT {item.price.toFixed(2)}
//                       {item.original && (
//                         <span className="line-through text-gray-500 ml-1">
//                           BDT {item.original.toFixed(2)}
//                         </span>
//                       )}
//                       {item.discount && (
//                         <span className="ml-1 text-gray-500">({item.discount})</span>
//                       )}
//                     </p>
//                     {item.freeShipping && (
//                       <p className="text-xs text-gray-500">Free shipping</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         <div className="text-center">
//           <button className="inline-flex items-center border border-gray-400 rounded-full px-6 py-2 hover:bg-gray-100 transition">
//             Show more ideas
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
