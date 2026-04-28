import { useContext } from "react";
import StoreContext from "../context/StoreContext";

const ProductFilters = () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error("StoreContext not found");
  }

  const {
    allCategory,
    selectedCategory,
    handleCategory,
    // productData,
  } = store;

  return (
<div className="flex gap-6 p-5 bg-gray-200 rounded-2xl">

  {/* 🔹 Sidebar Filter */}
  <div className="w-64 bg-white/80 backdrop-blur-md rounded-2xl p-5 
    shadow-lg border border-gray-200 transition-all duration-300 bg-gray-800">

    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-gray-800 tracking-wide">
        Filters
      </h3>
      <span className="text-xs text-gray-400">
        {selectedCategory.length} selected
      </span>
    </div>

    {/* Divider */}
    <div className="border-b border-gray-200 mb-4"></div>

    {/* Categories */}
    <div className="mb-5">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Categories
      </p>

      <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
        {allCategory.map((cat) => {
          const isSelected = selectedCategory.includes(cat);

          return (
            <label
              key={cat}
              className={`flex items-center justify-between cursor-pointer 
                p-2.5 rounded-xl transition-all duration-200
                ${
                  isSelected
                    ? "bg-blue-50 border border-blue-200 shadow-sm"
                    : "hover:bg-gray-100"
                }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleCategory(cat)}
                  className="w-4 h-4 accent-blue-600 cursor-pointer"
                />
                <span className="text-sm text-gray-700 font-medium">
                  {cat}
                </span>
              </div>

              {/* Selected Indicator */}
              {isSelected && (
                <span className="text-xs text-blue-600 font-semibold">
                  ✓
                </span>
              )}
            </label>
          );
        })}
      </div>
    </div>

    {/* Clear Filters */}
    <button
      onClick={() =>
        selectedCategory.forEach((cat) => handleCategory(cat))
      }
      className="w-full mt-2 py-2.5 rounded-xl text-sm font-semibold 
        bg-gradient-to-r from-red-500 to-red-600 
        hover:from-red-600 hover:to-red-700 
        text-white shadow-md hover:shadow-lg 
        transition-all duration-200 active:scale-95"
    >
      Clear Filters
    </button>
  </div>

</div>

  );
};

export default ProductFilters;
