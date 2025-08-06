import React from 'react';
import { FaCheckCircle, FaShippingFast, FaBoxOpen, FaMapMarkedAlt } from 'react-icons/fa';

const OrderTracking = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Order Tracking Details
        </h2>

        {/* Order summary */}
        <div className="bg-white dark:bg-gray-700 rounded-md shadow p-6 mb-10">
          <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
            <div>
              <p className="font-medium text-gray-700 dark:text-gray-300">Order ID:</p>
              <p className="text-gray-900 dark:text-white">#ORD123456789</p>
            </div>
            <div>
              <p className="font-medium text-gray-700 dark:text-gray-300">Date Placed:</p>
              <p className="text-gray-900 dark:text-white">July 2, 2025</p>
            </div>
            <div>
              <p className="font-medium text-gray-700 dark:text-gray-300">Shipping To:</p>
              <p className="text-gray-900 dark:text-white">Sadia Siddika, Dhaka, Bangladesh</p>
            </div>
            <div>
              <p className="font-medium text-gray-700 dark:text-gray-300">Estimated Delivery:</p>
              <p className="text-gray-900 dark:text-white">July 7, 2025</p>
            </div>
          </div>
        </div>

        {/* Tracking Steps */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-green-500 text-xl" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Order Confirmed</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">We have received your order.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaBoxOpen className="text-yellow-500 text-xl" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Packed</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your order is being prepared for shipping.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaShippingFast className="text-blue-500 text-xl animate-bounce" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Shipped</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your order is on the way to you.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkedAlt className="text-gray-500 text-xl" />
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">Out for Delivery</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">We’ll notify you when it’s nearby.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;




// // ✅ FINAL UPDATED OrderTracking.jsx with API, Toast, and Animated Progress
// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaShippingFast, FaBoxOpen, FaMapMarkedAlt } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// const statuses = [
//   { label: 'Order Confirmed', icon: <FaCheckCircle className="text-green-500 text-xl" />, value: 'confirmed' },
//   { label: 'Packed', icon: <FaBoxOpen className="text-yellow-500 text-xl" />, value: 'packed' },
//   { label: 'Shipped', icon: <FaShippingFast className="text-blue-500 text-xl animate-bounce" />, value: 'shipped' },
//   { label: 'Out for Delivery', icon: <FaMapMarkedAlt className="text-gray-500 text-xl" />, value: 'out_for_delivery' }
// ];

// const OrderTracking = () => {
//   const [orderId, setOrderId] = useState('');
//   const [email, setEmail] = useState('');
//   const [orderData, setOrderData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [progressStep, setProgressStep] = useState(0);

//   const handleTrack = async () => {
//     if (!orderId || !email) {
//       toast.error('Please fill out both fields.');
//       return;
//     }

//     try {
//       setLoading(true);
//       // Replace with your real API endpoint
//       const response = await axios.post('https://api.example.com/track-order', {
//         orderId,
//         email
//       });

//       const data = response.data;
//       setOrderData(data);

//       const stepIndex = statuses.findIndex(s => s.value === data.status);
//       setProgressStep(stepIndex);

//       toast.success('Order found successfully.');
//     } catch (error) {
//       toast.error('Order not found. Please check your ID and email.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">Track your order.</h2>
//         <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm sm:text-base">
//           Enter your Order ID and Billing Email to track your order.
//         </p>

//         <div className="mb-6 text-left">
//           <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Order ID</label>
//           <input
//             type="text"
//             value={orderId}
//             onChange={(e) => setOrderId(e.target.value)}
//             placeholder="Order ID from your email"
//             className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//         </div>

//         <div className="mb-6 text-left">
//           <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Billing Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email you used at checkout"
//             className="mt-2 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//         </div>

//         <button
//           onClick={handleTrack}
//           disabled={loading}
//           className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded font-semibold transition duration-200"
//         >
//           {loading ? 'Tracking...' : 'Track'}
//         </button>
//       </div>

//       {/* Order Tracking Steps */}
//       {orderData && (
//         <div className="max-w-3xl mx-auto mt-10 bg-gray-50 dark:bg-gray-800 shadow rounded-lg p-8">
//           <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
//             Order Status: {statuses[progressStep]?.label || 'Processing'}
//           </h3>

//           <div className="relative pt-2 pb-4">
//             <div className="flex justify-between items-center mb-8">
//               {statuses.map((step, index) => (
//                 <div key={step.value} className="flex flex-col items-center text-center w-1/4">
//                   <div
//                     className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
//                       index <= progressStep ? 'bg-sky-500 text-white' : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
//                     }`}
//                   >
//                     {step.icon}
//                   </div>
//                   <span
//                     className={`text-xs sm:text-sm font-medium ${
//                       index <= progressStep ? 'text-sky-600' : 'text-gray-500 dark:text-gray-400'
//                     }`}
//                   >
//                     {step.label}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full">
//               <div
//                 className="bg-sky-500 h-2 rounded-full transition-all duration-500"
//                 style={{ width: `${((progressStep + 1) / statuses.length) * 100}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderTracking;

