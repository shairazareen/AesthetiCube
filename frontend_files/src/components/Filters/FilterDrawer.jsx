import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; 

const FilterDrawer = ({ isOpen, onClose }) => {
  const [selectedShip, setSelectedShip] = useState("Anywhere");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [country, setCountry] = useState('');
  const [showMoreMaterials, setShowMoreMaterials] = useState(false);
  const [showJewelry, setShowJewelry] = useState(false);
  const [showEarrings, setShowEarrings] = useState(false);
  const [showMoreCategories, setShowMoreCategories] = useState(false);

  const handleReset = () => {
    setSelectedShip("Anywhere");
    setMinPrice(0);
    setMaxPrice(100);
    setCountry('');
    setShowMoreMaterials(false);
    setShowJewelry(false);
    setShowEarrings(false);
    setShowMoreCategories(false);
  };

  const materialOptions = [
    "Solid yellow gold",
    "Solid white gold",
    "Solid rose gold",
    "Sterling silver",
    "Platinum",
    ...(showMoreMaterials ? [
      "Brass",
      "Gold filled",
      "Gold plated",
      "Gold vermeil",
    ] : [])
  ];

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex justify-end">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative w-full max-w-md bg-white shadow-2xl p-6 overflow-y-auto">

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100 transition"
              >
                <XMarkIcon className="h-5 w-5 text-gray-500 hover:text-black" />
              </button>

              {/* Header */}
              <div className="flex justify-between items-center mb-5 mt-2 pr-10">
  <h2 className="text-xl font-bold">All Filters</h2>
  <Link
    to="/products" // change this to your desired reset path
    onClick={handleReset}
    className="text-sm text-gray-600 bg-gray-200 hover:bg-gray-300 px-4 py-1.5 rounded-full transition"
  >
    Reset
  </Link>
</div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Categories</h3>
                <ul className="ml-2 space-y-1 text-sm text-gray-700">
                  <li><a href="/accessories" className="hover:underline">Accessories</a></li>

                  <li>
                    <button
                      type="button"
                      onClick={() => setShowJewelry(prev => !prev)}
                      className="ml-1 font-medium text-left hover:underline"
                    >
                      Jewelry
                    </button>
                    {showJewelry && (
                      <ul className="ml-5 mt-1 space-y-1">
                        <li>
                          <button
                            onClick={() => setShowEarrings(prev => !prev)}
                            className="text-left hover:underline"
                          >
                            Earrings
                          </button>
                          {showEarrings && (
                            <ul className="ml-5 space-y-1">
                              <li><a href="/earrings/dangle-drop" className="hover:underline">Dangle & Drop Earrings</a></li>
                              <li><a href="/earrings/stud" className="hover:underline">Stud Earrings</a></li>
                              <li><a href="/earrings/hoop" className="hover:underline">Hoop Earrings</a></li>
                              <li><a href="/earrings/clip-on" className="hover:underline">Clip-On Earrings</a></li>
                              <li><a href="/earrings/chandelier" className="hover:underline">Chandelier Earrings</a></li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    )}
                  </li>

                  <li><a href="/canvas-art" className="hover:underline">Canvas Art</a></li>
                  <li><a href="/handmade-bags" className="hover:underline">Handmade Bags</a></li>
                  <li><a href="/neckpieces" className="hover:underline">Neckpieces Set</a></li>
                  <li><a href="/hair-clip" className="hover:underline">Hair Clip</a></li>

                  {showMoreCategories && (
                    <>
                      <li><a href="/key-rings" className="hover:underline">Key Rings</a></li>
                      <li><a href="/paper-craft-diy-kids" className="hover:underline">Paper Craft DIY Kids</a></li>
                    </>
                  )}

                  <li>
                    <button
                      onClick={() => setShowMoreCategories(prev => !prev)}
                      className="underline text-gray-500 mt-1"
                    >
                      {showMoreCategories ? "Show Less" : "Show more"}
                    </button>
                  </li>
                </ul>
              </div>

              {/* Ships from */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Ships from</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  {["Anywhere", "Bangladesh", "Another location"].map(option => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="ship"
                        checked={selectedShip === option}
                        onChange={() => setSelectedShip(option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                  {selectedShip === "Another location" && (
                    <select
                      className="border mt-2 px-3 py-2 w-full rounded text-sm"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="">Choose a country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="BD">Bangladesh</option>
                      <option value="IN">India</option>
                    </select>
                  )}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="font-semibold mb-2">Price</h3>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="border rounded px-3 py-2 w-1/2 text-sm"
                    placeholder="$ Min"
                  />
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="border rounded px-3 py-2 w-1/2 text-sm"
                    placeholder="$ Max"
                  />
                </div>
              </div>

              {/* Show Results Button */}
              <button
                onClick={onClose}
                className="w-full py-3 bg-black hover:bg-gray-900 text-white rounded-full font-medium text-sm transition mb-8"
              >
                Show results (1,000+ items)
              </button>

              {/* === New Filters After Results Button === */}

              {/* Item format */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Item format</h3>
                <div className="flex flex-col gap-2 text-sm text-gray-700">
                  {["All", "Physical items", "Digital downloads"].map(item => (
                    <label key={item} className="flex items-center gap-2">
                      <input type="radio" name="item_format" className="rounded-full" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special offers */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Special offers</h3>
                <div className="flex flex-col gap-2 text-sm text-gray-700">
                  <label><input type="checkbox" className="mr-2" />Free shipping</label>
                  <label><input type="checkbox" className="mr-2" />On sale</label>
                </div>
              </div>

              {/* Azza'h Best */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Azza'h Best</h3>
                <div className="flex flex-col gap-2 text-sm text-gray-700">
                  <label><input type="checkbox" className="mr-2" />Azza'h Picks</label>
                  <label><input type="checkbox" className="mr-2" />Star Seller</label>
                </div>
              </div>

              {/* Materials */}
              <div className="mb-10">
                <h3 className="font-semibold mb-2">Materials</h3>
                <div className="flex flex-col gap-2 text-sm text-gray-700">
                  {materialOptions.map(material => (
                    <label key={material}><input type="checkbox" className="mr-2" />{material}</label>
                  ))}
                </div>
                <button
                  onClick={() => setShowMoreMaterials(prev => !prev)}
                  className="text-sm underline text-gray-500 mt-2"
                >
                  {showMoreMaterials ? "Show Less" : "Show more"}
                </button>
              </div>

            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default FilterDrawer;
