// // src/pages/TrackOrder.jsx
// import React from 'react';
// import StatsSection from '../../components/StatsSection/StatsSection';

// const TrackOrder = () => {
//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Track your order.</h2>
//         <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base">
//           To track your order please enter your Order ID in the box below and press the "Track" button.
//           This was given to you on your receipt and in the confirmation email you should have received.
//         </p>

//         <div className="mb-6 text-left">
//           <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Order ID</label>
//           <input
//             type="text"
//             placeholder="Found in your order confirmation email."
//             className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//         </div>

//         <div className="mb-6 text-left">
//           <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Billing email</label>
//           <input
//             type="email"
//             placeholder="Email you used during checkout."
//             className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//         </div>

//         <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded font-semibold transition duration-200">
//           Track
//         </button>
//       </div>

//       <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto text-center">
//         <StatsSection />
//       </div>
//     </div>
//   );
// };

// export default TrackOrder;



// src/pages/TrackOrder.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatsSection from '../../components/StatsSection/StatsSection';

const TrackOrder = () => {
  const navigate = useNavigate();

  const handleTrackClick = () => {
    // You can also add validation logic here before navigating
    navigate('/order-tracking');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Track your order.</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base">
          To track your order please enter your Order ID in the box below and press the "Track" button.
          This was given to you on your receipt and in the confirmation email you should have received.
        </p>

        <div className="mb-6 text-left">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Order ID</label>
          <input
            type="text"
            placeholder="Found in your order confirmation email."
            className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="mb-6 text-left">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Billing email</label>
          <input
            type="email"
            placeholder="Email you used during checkout."
            className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* ✅ Track button with navigate link */}
        <button
          onClick={handleTrackClick}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded font-semibold transition duration-200"
        >
          Track
        </button>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto text-center">
        <StatsSection />
      </div>
    </div>
  );
};

export default TrackOrder;
