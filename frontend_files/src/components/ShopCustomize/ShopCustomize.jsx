import React from "react";
import { Link } from "react-router-dom";

const shopItems = [
  { id: 1, img: "https://via.placeholder.com/150?text=Silver", text: "earrings dangle silver" },
  { id: 2, img: "https://via.placeholder.com/150?text=Boho", text: "earrings dangle boho" },
  { id: 3, img: "https://via.placeholder.com/150?text=Gold", text: "earrings dangle gold" },
  { id: 4, img: "https://via.placeholder.com/150?text=Handmade", text: "earrings dangle boho handmade" },
  { id: 5, img: "https://via.placeholder.com/150?text=Flower", text: "earrings dangle flower" },
  { id: 6, img: "https://via.placeholder.com/150?text=Stones", text: "earrings dangle stones" },
];

const RelatedSearches = () => {
  return (
    <div className="my-20">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Related Searches</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
        {shopItems.map((item, index) => (
          <div key={index} className="text-center">
            <Link to={`/product/${item.id}`} className="block w-[150px] h-[150px] rounded-lg overflow-hidden shadow group hover:shadow-lg transition duration-300 ease-in-out bg-white">
              <img
                src={item.img}
                alt={item.text}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
              />
            </Link>
            <Link to={`/product/${item.id}`} className="block mt-2 text-sm text-gray-800 hover:underline w-[150px]">
              {item.text.split(" ").map((word, i) => (
                <span key={i} className={i === item.text.split(" ").length - 1 ? "font-semibold" : ""}>
                  {word} {" "}
                </span>
              ))}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCustomize;