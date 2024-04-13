import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      <div className="lg:h-28 flex border flex-wrap items-center justify-between px-4 lg:px-0">
        <img
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg"
          alt="Logo"
          className="h-12"
        />
        <div className="lg:w-5/12 text-center lg:text-left">
          <h1 className="font-bold text-orange-800 pt-4 m-0 lg:m-4 text-3xl">
            Restaurant Menu
          </h1>
        </div>
        <ul className="flex justify-end w-full lg:w-auto">
          <li className="font-bold text-orange-800 p-4 m-0 lg:m-4 text-lg">
            <Link to="/Restaurent_app_React/">Home</Link>
          </li>
          <li className="font-bold text-orange-800 p-4 m-0 lg:m-4 text-lg">
            <Link to="/Restaurent_app_React/menu">Menu</Link>
          </li>
          <li className="font-bold text-orange-800 p-4 m-0 lg:m-4 text-lg">
            <Link to="/Restaurent_app_React/about">About us</Link>
          </li>
          <li className="font-bold text-orange-800 p-4 m-0 lg:m-4 text-lg">
            <Link to="/Restaurent_app_React/payus">Pay us</Link>
          </li>
          <li className="relative font-bold text-orange-800 p-4 m-0 lg:m-4 text-lg">
            <div className="absolute h-7 w-7 top-0 right-0 flex items-center justify-center bg-transparent">
              <p className="">{cartItems.length}</p>
            </div>
            <Link
              to="/Restaurent_app_React/cart"
              className="relative"
              style={{
                color: "brown",
                height: "20px",
                width: "35px",
                display: "block",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-6 w-6"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
