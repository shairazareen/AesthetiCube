// pages/NeckpiecesSet.jsx
import React from "react";
import { neckpiecesData } from "../../data/neckpieces";
import CategoryProductCard from "../../components/CategoryProductCard/CategoryProductCard";

const NeckpiecesSet = () => (
  <div className="max-w-7xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6 text-center">Neckpieces Collection</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {neckpiecesData.map((item) => (
        <CategoryProductCard key={item.id} product={item} />
      ))}
    </div>
  </div>
);

export default NeckpiecesSet;
