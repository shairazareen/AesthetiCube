import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const inspirationData = [
  {
    section: "Azza'h Picks",
    products: [
      {
        id: 1,
        title: 'Tugaty Art',
        price: '33.88',
        image: 'https://i.postimg.cc/hhFGwPLc/star.jpg',
        link: '/products/6',
      },
      {
        id: 2,
        title: 'Necklace',
        price: '54.17',
        image: 'https://i.postimg.cc/NFxH1XhZ/cretivity.jpg',
        link: '/products/2',
      },
      {
        id: 3,
        title: 'Print Art',
        price: '18.93',
        image: 'https://i.postimg.cc/B6HDnymS/clay.jpg',
        link: '/products/3',
      },
      {
        id: 4,
        title: 'Pendant',
        price: '87.76',
        image: 'https://i.postimg.cc/DztLFFdp/boo.jpg',
        link: '/products/4',
      },
      {
        id: 5,
        title: 'Cushion Cover',
        price: '92.68',
        image: 'https://i.postimg.cc/L85x89Lm/small.jpg',
        link: '/products/5',
      },
    ],
  },
  {
    section: 'Birthday Gift Boxes',
    products: [
      {
        id: 6,
        title: 'Gift Box A',
        price: '34.99',
        image: 'https://i.postimg.cc/BZmwsCTn/y-p-e.jpg',
        link: '/products/10',
      },
      {
        id: 7,
        title: 'Luxury Box',
        price: '18.25',
        image: 'https://i.postimg.cc/4NSfKVgJ/demin-eaa.jpg',
        link: '/products/11',
      },
      {
        id: 8,
        title: 'Just for You',
        price: '17.80',
        image: 'https://i.postimg.cc/j2BH2CqZ/p-w-e.jpg',
        link: '/products/12',
      },
      {
        id: 9,
        title: 'Vintage Set',
        price: '22.25',
        image: 'https://i.postimg.cc/W4r1c3xs/demin-earr.jpg',
        link: '/products/13',
      },
      {
        id: 10,
        title: 'Gift Mug Set',
        price: '43.81',
        image: 'https://i.postimg.cc/Jh4fSQYJ/Mandala.jpg',
        link: '/products/14',
      },
    ],
  },
];

const GetInspired = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center">
        <p className="text-gray-500 text-sm">Perfect gifts for every occasion</p>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-10">Thoughtful Birthday ideas</h1>
      </div>

      {inspirationData.map((section, index) => (
        <div key={index} className="mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-center">{section.section}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {section.products.map((product) => (
              <Link
                to={product.link}
                key={product.id}
                className="relative group block overflow-hidden rounded shadow hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition">
                  <FaHeart className="text-red-500 hover:scale-125 duration-300" />
                </div>
                <div className="absolute bottom-2 left-2 bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-semibold">
                  BDT {product.price}
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Link
              to="/earrings"
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
            >
              Show more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetInspired;
