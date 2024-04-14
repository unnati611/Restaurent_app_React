import React from "react";
import DATA from "../utils/restaurentdata.json";

const Category = ({ onClick }) => {
  return (
    <div className="sticky top-0 flex justify-center items-center bg-white z-10 flex-wrap w-full overflow-auto">
      {DATA.itemsCategory.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => onClick(index)}
            className="bg-gray-300 px-4 py-2 mx-2 my-2 rounded-md text-sm md:text-base lg:text-lg font-normal "
          >
            {item.categoryName}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
