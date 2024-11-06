import React from "react";

const ProductFilter = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filter Products</h2>

      {/* Filter by Category */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm">
          Category
        </label>
        <select
          id="category"
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>
      </div>

      {/* Filter by Price Range */}
      <div className="mb-4">
        <label htmlFor="price-range" className="block text-sm">
          Price Range
        </label>
        <input
          type="range"
          id="price-range"
          min="0"
          max="1000"
          className="w-full"
        />
        <div className="flex justify-between text-sm">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>

      {/* Apply Filter Button */}
      <button className="w-full bg-blue-500 text-white py-2 rounded-md">
        Apply Filter
      </button>
    </div>
  );
};

export default ProductFilter;
