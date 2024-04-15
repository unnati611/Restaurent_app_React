import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container-fluid px-0 top-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <h1 className="px-6 ">Good food choices are good investment</h1>
                <p className="px-6 m-2">
                  A restaurant (sometimes known as a diner) is a place where
                  cooked food is sold to the public, and where people sit down
                  to eat it. It is also a place where people go to enjoy the
                  time and to eat a meal. Restaurant in Paris The Palm Court at
                  the Ritz Hotel, London Typical hotel restaurant.
                </p>
                <div className="px-6">
                  <Link to="/Restaurent_app_React/menu">
                    <button className="px-6 m-2 main-btn ">
                      Order now
                      <i className="fa-solid fa-basket-shopping ps-3"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
