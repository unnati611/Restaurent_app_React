import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAddressinput } from "../utils/cartSlice";
import { updateContactinput } from "../utils/cartSlice";
import { updateNameinput } from "../utils/cartSlice";

const OrderForm = () => {
  const dispatch = useDispatch();
  const nameError = useSelector((store) => store.cart.nameInput.isError);
  console.log(nameError);
  const addressError = useSelector((store) => store.cart.addressInput.isError);
  const contactError = useSelector((store) => store.cart.contactInput.isError);

  return (
    <div className="flex  flex-col w-full md:w-7/12 justify-start">
      <div className="flex justify-between ">
        <label className=" m-2 font-bold text-2xl">Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-8/12 border px-4 py-2 m-2"
          onChange={(e) => {
            dispatch(updateNameinput(e.target.value));
          }}
        />
      </div>
      {nameError === true && (
        <p className="font-bold text-xl text-red-600 sm:w-full sm:pl-4 md: py-4 lg:pl-72">
          **Please Enter Your name
        </p>
      )}
      <div className="flex justify-between">
        <label className=" m-2 font-bold text-2xl">Contact Number</label>
        <input
          type="text"
          placeholder="Contact Number"
          className="w-8/12 border px-4 py-2 m-2"
          onChange={(e) => {
            dispatch(updateContactinput(e.target.value));
          }}
        />
      </div>
      {contactError === true && (
        <p className="font-bold text-xl text-red-600 sm:w-full sm:pl-4 md: py-4 lg:pl-72">
          **Please Enter Your Contact Number
        </p>
      )}
      <div className="flex justify-between">
        <label className=" m-2 font-bold text-2xl">Address</label>
        <input
          type="text"
          placeholder="Address"
          className="w-8/12 border px-4 py-2 m-2"
          onChange={(e) => {
            dispatch(updateAddressinput(e.target.value));
          }}
        />
      </div>
      {addressError === true && (
        <p className="font-bold text-xl text-red-600 sm:w-full sm:pl-4 md: py-4 lg:pl-72">
          **Please Enter Your Address
        </p>
      )}
    </div>
  );
};

export default OrderForm;
