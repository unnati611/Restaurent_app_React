// import React, { useState } from "react";
import { addItem, increseItemQty, decreseItemQty } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryitmList = ({ openIndex, index, items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handlAdditem = (item) => {
    //dispath an action
    // cartItems.indexOf(item.itemName);

    const addedItem = cartItems.findIndex(
      (name) => name.itemName === item.itemName
    );
    if (addedItem === -1) {
      dispatch(addItem(item));
    } else {
      dispatch(increseItemQty(addedItem));
    }
  };
  const handlRemoveitem = (item) => {
    //dispath an action
    const addedItem = cartItems.findIndex(
      (name) => name.itemName === item.itemName
    );

    dispatch(decreseItemQty(addedItem));
  };
  const getqty = (item) => {
    const addedItem = cartItems.findIndex(
      (name) => name.itemName === item.itemName
    );
    if (addedItem === -1) {
      return 0;
    } else {
      return cartItems[addedItem].qty;
    }
  };

  return (
    <div>
      {openIndex === index && (
        <div className="flex flex-col">
          {items.categoryItems.map((menu, itemIndex) => (
            <div
              key={itemIndex}
              className="flex  md:flex-row border w-full p-2"
            >
              <div className="p-2 m-2 w-full md:w-9/12">
                <h3>
                  {menu.itemType === "Vegetarian" && (
                    <img
                      className="w-6"
                      src="https://yenu.menu/demo/images/vegetarian.svg"
                      alt="Vegetarian"
                    />
                  )}
                  {menu.itemType === "Non Vegetarian" && (
                    <img
                      className="w-6"
                      src="https://yenu.menu/demo/images/non-vegetarian.svg"
                      alt="Non-Vegetarian"
                    />
                  )}
                  {menu.itemType === "Vegan" && (
                    <img
                      className="w-6"
                      src="https://yenu.menu/demo/images/vegan.svg"
                      alt="Non-Vegetarian"
                    />
                  )}
                </h3>
                <h2 className="font-bold py-2 text-2xl">{menu.itemName}</h2>
                <h2 className="font-bold text-xl">Rs.{menu.itemPrice}</h2>
                <p>{menu.itemDescription}</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="lg:w-24 md: w-36 my-2 md:my-0 sm:w-24"
                  src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
                  alt=""
                />
                <div className="p-2 md:mt-0 md:relative bg-gray-300 rounded w-20 lg:w-full md:w-32 ">
                  {getqty(menu) === 0 && (
                    <button
                      className="font-bold w-full"
                      onClick={() => handlAdditem(menu, itemIndex)}
                    >
                      Add
                    </button>
                  )}
                  {getqty(menu) !== 0 && (
                    <div className="flex justify-between w-full">
                      <div
                        className="font-bold cursor-pointer sm:"
                        onClick={() => handlRemoveitem(menu, itemIndex)}
                      >
                        -
                      </div>
                      <div className="font-bold">{getqty(menu)}</div>
                      <div
                        className="font-bold cursor-pointer"
                        onClick={() => handlAdditem(menu, itemIndex)}
                      >
                        +
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryitmList;
