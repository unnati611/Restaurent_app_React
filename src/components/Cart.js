import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  errorNameinput,
  errorContactinput,
  errorAddressinput,
  decreseItemQty,
  increseItemQty,
  addItem,
} from "../utils/cartSlice";
import { Link } from "react-router-dom";
import OrderForm from "./OrderForm";
import {} from "../";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handledelete = (item, index) => {
    dispatch(removeItem(item, index));
  };
  const nameInputItem = useSelector((store) => store.cart.nameInput);
  const contactInputItem = useSelector((store) => store.cart.contactInput);
  const addressInputItem = useSelector((store) => store.cart.addressInput);
  const handleValidation = () => {
    if (cartItems.length === 0) {
      alert("Oops!🙁 Your Cart is Empty");
      return;
    }
    if (nameInputItem.value === "") {
      dispatch(errorNameinput(true));
    } else {
      dispatch(errorNameinput(false));
    }
    contactInputItem.value === ""
      ? dispatch(errorContactinput(true))
      : dispatch(errorContactinput(false));
    addressInputItem.value === ""
      ? dispatch(errorAddressinput(true))
      : dispatch(errorAddressinput(false));

    if (
      nameInputItem.isError === false &&
      contactInputItem.isError === false &&
      addressInputItem.isError === false
    ) {
      alert("Order palced Successfully");
    } else {
      return;
    }
  };

  const [subtotal, setSubTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((element) => {
      total += element.itemPrice * element.qty;
    });
    setSubTotal(total);
  }, [cartItems]);

  const handlRemoveitem = (item) => {
    //dispath an action
    // cartItems.indexOf(item.itemName);
    debugger;
    const addedItem = cartItems.findIndex(
      (name) => name.itemName === item.itemName
    );

    dispatch(decreseItemQty(addedItem));
  };
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

  console.log(cartItems);
  return (
    <div className="flex items-center flex-col w-full justify-center md:w-full md:justify-start">
      {cartItems.length === 0 && (
        <div className="flex items-center w-7/12">
          <h1 className="p-2 m-2 font-bold text-3xl text-center">
            Oops !! Your Cart is Empty🙁! Go to Menu to Add Some Item😋
            <Link to="/Restaurent_app_React/menu" className="main-btn m-2">
              Go😋
            </Link>
          </h1>
        </div>
      )}
      {cartItems.map((item, index) => {
        return (
          <div
            key={item.itemName}
            className="flex border p-2 m-2 lg:w-7/12  md:w-7/12 w-full sm:font-normal"
          >
            <div className="flex items-center w-full md:w-9/12 sm:6/12">
              <img
                src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
                alt=""
                className="w-24"
              />
              <div>
                <h2 className="p-2 m-2 text-xl font-bold">{item.itemName}</h2>
                {/* <p className="p-2 m-2 text-l font-bold">
                  {item.itemDescription}
                </p> */}
              </div>
            </div>
            <div className="flex sm: flex-col justify-center items-center">
              <div className="p-2 m-2 text-2xl font-bold sm:py-2 my-2 text-l">
                Rs.{item.itemPrice}
              </div>
              <div className="flex justify-between bg-gray-300 px-4 py-1 rounded sm: w-20 ">
                <div
                  className="font-bold cursor-pointer sm:"
                  onClick={() => handlRemoveitem(item, index)}
                >
                  -
                </div>
                <div className="font-bold">{item.qty}</div>
                <div
                  className="font-bold cursor-pointer"
                  onClick={() => handlAdditem(item, index)}
                >
                  +
                </div>
              </div>
            </div>
            {/* <button
              className="p-2 mt-3"
              onClick={() => handledelete(item, index)}
              style={{
                color: "brown",
                height: "20px",
                width: "35px",
                display: "block",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </button> */}
          </div>
        );
      })}

      <div className="flex border p-2 m-2 w-full  md:w-7/12">
        <h2 className="text-3xl font-bold w-9/12">Subtotal</h2>
        <h2 className="text-3xl font-bold ">Rs.{subtotal}</h2>
      </div>
      <OrderForm />
      <div className="sticky bottom-0 flex p-2 m-2 w-full md:w-7/12  bg-white z-10 justify-between">
        <Link to="/Restaurent_app_React/">
          <button className="main-btn">Go To Home Page</button>
        </Link>
        <button className="main-btn" onClick={handleValidation}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
