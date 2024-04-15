import React, { useState, useEffect } from "react";
import Data from "../utils/restaurentdata.json";
import CategoryitmList from "./CategoryitmList";

const Categoryitems = ({ categorySelectedIndex }) => {
  const elements = [];
  const [openIndex, setopenIndex] = useState(null);

  useEffect(() => {
    if (categorySelectedIndex !== null) {
      elements[categorySelectedIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setopenIndex(categorySelectedIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelectedIndex]);

  const toggleAccodion = (index) => {
    setopenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {Data.itemsCategory.map((items, index) => {
        return (
          <div
            key={index}
            className="m-2 flex flex-col md:flex-col justify-center items-center"
          >
            <div
              ref={(ref) => elements.push(ref)}
              className="flex justify-between bg-slate-200 w-full md:w-6/12 p-3 rounded"
            >
              <h2 className="font-extrabold justify-start">
                {items.categoryName}
              </h2>
              <h2
                className="cursor-pointer"
                onClick={() => {
                  toggleAccodion(index);
                }}
              >
                {openIndex === index ? "▿" : "▹"}
              </h2>
            </div>
            <CategoryitmList
              index={index}
              openIndex={openIndex}
              items={items}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Categoryitems;
