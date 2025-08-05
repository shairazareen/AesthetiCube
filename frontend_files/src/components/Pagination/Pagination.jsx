// Step 3: Pagination.jsx component

import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center my-12">
      <ul className="flex items-center gap-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`w-10 h-10 rounded-full border text-sm font-medium transition-all duration-200 ease-in-out ${
                number === currentPage
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-full border border-gray-300 text-black hover:bg-gray-100 disabled:opacity-50"
          >
            →
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
