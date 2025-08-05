import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import inspirationData from '../../data/inspirationData'; // Make sure this exists

const tabs = [
  { name: 'Orders', path: '/return/orders' },
  { name: 'Buy Again', path: '/return/buy-again' },
  { name: 'Not Yet Shipped', path: '/return/not-yet-shipped' },
  { name: 'Digital Orders', path: '/return/digital-orders' },
  { name: 'Cancelled Orders', path: '/return/cancelled-orders' },
];

const ReturnOrders = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth / 1.5;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
        <div className='pt-[190px]'>
    <div className="p-6 max-w-7xl mx-auto font-sans">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-2">
        <span className="text-blue-600 cursor-pointer">Your Account</span> &gt; <span>Your Orders</span>
      </div>

      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-6 border-b mb-4">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            className={`pb-2 border-b-2 ${
              location.pathname === tab.path
                ? 'border-sky-500 text-sky-600'
                : 'border-transparent text-gray-700 hover:text-sky-400'
            } font-medium`}
          >
            {tab.name}
          </Link>
        ))}
      </div>

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <div>
          <span className="text-sm">0 orders placed in </span>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm">
            <option>past 3 months</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search all orders"
            className="border border-gray-300 rounded px-3 py-1 text-sm w-64"
          />
          <button className="bg-gray-100 border border-gray-300 rounded px-3 py-1 text-sm font-medium hover:bg-gray-200">
            Search Orders
          </button>
        </div>
      </div>

      {/* Empty State */}
      <div className="text-center text-gray-600 my-10">
        Looks like you haven’t placed an order in the last 3 months.{' '}
        <span className="text-blue-600 underline cursor-pointer">View orders in 2025</span>
      </div>

      {/* Sponsored Banner */}
      <div className="flex justify-center mb-8">
        <img
          src="https://via.placeholder.com/728x90?text=Ad+Banner"
          alt="Sponsored Ad"
          className="w-full max-w-2xl"
        />
      </div>

      {/* Recommended Products Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Recommended based on your shopping trends</h2>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            <FaChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-4 px-8"
          >
            {inspirationData.flatMap((section) =>
              section.products.map((product) => (
                <Link
  to={product.link}
  key={product.id}
  className="flex-shrink-0 w-[240px] bg-white rounded-2xl overflow-hidden group transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(160,160,160,0.25)] relative"
>
  <div className="relative">
    <img
      src={product.image || 'https://via.placeholder.com/300x300?text=No+Image'}
      alt={product.title}
      className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
    />
    <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
      <FaHeart className="text-gray-400 hover:text-red-500 transition-colors duration-300" />
    </div>
  </div>
  <div className="p-3">
    <div className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug mb-1">
      {product.title}
    </div>
    <div className="text-sky-600 font-bold text-sm">BDT {product.price}</div>
  </div>
</Link>

              ))
            )}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ReturnOrders;
