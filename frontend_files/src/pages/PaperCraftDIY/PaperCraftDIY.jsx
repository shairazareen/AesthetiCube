// pages/PaperCraftDIY.jsx
import React from "react";
import { papercraftData } from "../../data/papercraft";
import CategoryProductCard from "../../components/CategoryProductCard/CategoryProductCard";

const PaperCraftDIY = () => (
  <div className="max-w-7xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6 text-center">Paper Craft DIY Kits</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {papercraftData.map((item) => (
        <CategoryProductCard key={item.id} product={item} />
      ))}
    </div>
  </div>
);

export default PaperCraftDIY;
