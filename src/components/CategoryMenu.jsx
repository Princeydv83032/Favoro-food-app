import React, { useEffect, useState } from 'react';
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';  // ✅ correct import

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const UniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(UniqueCategories);
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold text-gray-600 mx-6 my-3">
        Find the best Food
      </h3>
      <div className="my-5 flex gap-3 overflow-scroll scroll-smooth lg:overflow-hidden">
        {/* All button */}
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 font-bold rounded-lg mx-2 cursor-pointer transition duration-200 
            ${selectedCategory === "All" ? "bg-green-500 text-white" : "bg-gray-200 text-black hover:bg-green-500 hover:text-white"}`}
        >
          All
        </button>

        {/* Category buttons */}
        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`px-3 py-2 font-bold rounded-lg mx-2 cursor-pointer transition duration-200 
              ${selectedCategory === category ? "bg-green-500 text-white" : "bg-gray-200 text-black hover:bg-green-500 hover:text-white"}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
