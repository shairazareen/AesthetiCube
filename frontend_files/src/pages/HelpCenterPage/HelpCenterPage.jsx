import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaShoppingBag, FaCreditCard, FaBox, FaUser } from 'react-icons/fa';

const HelpCenter = () => {
  const isLoggedIn = true;
  const [activeTab, setActiveTab] = useState("shopping");

  const shoppingArticles = [
    { category: 'Shopping & Gifting', title: 'What is Azzah Insider?' },
    { category: 'After You Purchase', title: "What's the Status of My Order?" },
    { category: 'Shopping & Gifting', title: 'How to Contact a Shop' },
    { category: 'Searching for Items', title: 'How to Find the Best Items for You on Azzah' },
    { category: 'Order Issues & Returns', title: 'How to Get Help with An Order' },
    { category: 'Shopping & Gifting', title: 'How to Buy an Azzah Gift Card' },
    { category: 'Searching for Items', title: 'How to Search for Items and Shops on Azzah' },
    { category: 'After You Purchase', title: 'How Do I Change My Shipping Address?' },
    { category: 'Shopping & Gifting', title: 'How to Purchase an Item On Azzah' }
  ];

  const sellingArticles = [
    { category: 'Azzah Rules & Regulations', title: "What is Azzah's Purchase Protection for Sellers?" },
    { category: 'Shop Management Tools', title: 'How to Manage Your Shop In Case of Emergency' },
    { category: 'Discounts & Promotions', title: 'How to Set Up Sales and Discounts for Your Shop' },
    { category: 'Creating a Listing', title: 'How to Set Up Shipping Information' },
    { category: 'Order Processing Times', title: 'How to Set Up Estimated Delivery Dates' },
    { category: 'Taxes on Sales & Imports', title: 'How to Update Your Legal Name and Taxpayer Information' },
    { category: 'Taxes on Sales & Imports', title: 'How Is the Total on My 1099-K Calculated?' },
    { category: 'Taxes on Sales & Imports', title: 'What Do I Need to Know About My 1099-K Tax Form?' },
    { category: 'Azzah Ads & Offsite Ads', title: 'How to Set Up and Manage an Azzah Ads Campaign' }
  ];

  const currentArticles = activeTab === "shopping" ? shoppingArticles : sellingArticles;

  return (
        <div className='pt-[190px]'>
    <div className="text-gray-800 dark:text-white">
        {/* Cookie Notice */} 
      <div className="border border-white bg-white text-black text-sm px-4 py-2 border-b text-center">
  By browsing Azzah you agree to our use of{' '}
  <a
    href="/cookies-policy"
    className="text-blue-600 underline underline-offset-2 hover:text-blue-800 transition"
  >
    cookies
  </a>.
</div>


      {/* Header */}
      <div
        className="bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('https://i.postimg.cc/9ML2w5Zz/Pink-Blue-Painted-Blank-Canvas-Minimalist-Desktop-Wallpaper.jpg')`,
          paddingTop: '40px',
          paddingBottom: '60px'
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <p className="text-black font-medium text-lg">
            Azzah{' '}
            <Link to="/" className="relative hover:underline underline-offset-4">
              Help Center
            </Link>
          </p>
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
            <FaUserCircle className="text-2xl text-gray-800" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-black mt-6">
          How can we help?
        </h2>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mt-6 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Type your question"
              className="w-full px-5 py-3 rounded-full shadow-md text-gray-800 focus:outline-none"
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Help Box */}
      <div className="bg-sky-100 py-4 text-center px-4">
        <p className="text-sm text-gray-800 mb-2">
          Having problems with an order? Reach out to the seller with a help request.
        </p>
        <Link
          to="/order-help"
          className="inline-block bg-white text-sm font-medium text-gray-800 px-4 py-2 rounded-full border border-gray-300 hover:bg-sky-200 transition duration-300"
        >
          Get help with an order
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 text-gray-700 mt-6 border-b border-gray-300 pb-2 text-sm font-medium">
        <button
          className={`pb-1 ${activeTab === "shopping" ? 'border-b-2 border-black text-black' : 'hover:text-black'}`}
          onClick={() => setActiveTab("shopping")}
        >
          Shopping on Azzah
        </button>
        <button
          className={`pb-1 ${activeTab === "selling" ? 'border-b-2 border-black text-black' : 'hover:text-black'}`}
          onClick={() => setActiveTab("selling")}
        >
          Selling with Azzah
        </button>
      </div>

      {/* 7. Featured Articles */}
<div className="max-w-6xl mx-auto px-4 py-10">
  <h3 className="text-xl font-semibold mb-6 text-center">Featured articles</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {currentArticles.map((article, index) => (
      <div
        key={index}
        className="p-5 rounded-lg shadow-md hover:shadow-xl transform hover:scale-[1.03] transition duration-300 cursor-pointer bg-white dark:bg-gray-800"
      >
        <p className="text-gray-500 text-xs mb-1">{article.category}</p>
        <p className="text-sky-700 dark:text-sky-400 hover:text-black font-medium">
          {article.title}
        </p>
      </div>
    ))}
  </div>
</div>


      {/* Shop on Azzah Section (Shopping Only) */}
      {activeTab === "shopping" && (
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Shop on Azzah</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-sky-700">
            <div>
              <h4 className="text-gray-800 font-bold mb-2 flex items-center gap-2">
                <FaShoppingBag className="animate-bounce text-pink-500" /> Buying on Azzah
              </h4>
              <ul className="space-y-1">
                <li>Shopping & Gifting</li>
                <li>Searching for Items</li>
                <li>Buying Safely</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 font-bold mb-2 flex items-center gap-2">
                <FaCreditCard className="animate-pulse text-emerald-600" /> Cart & Payment
              </h4>
              <ul className="space-y-1">
                <li>Using Gift Cards & Coupons</li>
                <li>Taxes & Customs Fees</li>
                <li>Checkout</li>
                <li>Payment Options</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 font-bold mb-2 flex items-center gap-2">
                <FaBox className="animate-bounce text-indigo-600" /> Your Orders
              </h4>
              <ul className="space-y-1">
                <li>After You Purchase</li>
                <li>Order Issues & Returns</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 font-bold mb-2 flex items-center gap-2">
                <FaUser className="animate-pulse text-yellow-500" /> Your Azzah Account
              </h4>
              <ul className="space-y-1">
                <li>Sign In & Password</li>
                <li>Account Settings</li>
                <li>Regional Settings</li>
                <li>Contacting Azzah</li>
                <li>Account Safety & Privacy</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default HelpCenter;
