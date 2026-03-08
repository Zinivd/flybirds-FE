import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/assets/images/Logo-Dark.png";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import "./Navbar.css";

const Navbar = () => {
  // Toggler Icon Animation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const tabButton = document.querySelector(`[data-bs-target="${hash}"]`);
      if (tabButton) {
        tabButton.click();
      }
    }
  }, []);
  return (
    <>
      <div className="free-shipping">
        <h6 className="mb-0">Free Shipping on all orders above Rs. 599</h6>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Resposnive Navbar */}
          <div className="responsive-div">
            <div className="responsive-button">
              <div className="logo-div d-flex align-items-center column-gap-2">
                <a href="/">
                  <img src={Logo} height="50px" title="" alt="" />
                </a>
              </div>
              <div className="icons-div d-lg-none align-items-center">
                <NavLink to="">
                  <i className="bx bx-search"></i>
                </NavLink>
                <NavLink to="/wishlist">
                  <i className="bx bx-heart"></i>
                </NavLink>
                <NavLink to="/orders">
                  <i className="bx bx-shopping-bag"></i>
                </NavLink>
                <NavLink to="/profile">
                  <i className="bx bx-user"></i>
                </NavLink>
              </div>
            </div>
            <ul className="navbar-nav flex-row align-items-center justify-content-between mt-3 response-nav-content">
              <li className="nav-item" id="home">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/womens">
                  Womens
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/kids">
                  Kids
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/new-arrivals">
                  New Arrivals
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Web Navbar */}
          <div
            className="navbar-collapse d-lg-flex justify-content-evenly align-items-center collapse"
            id="navbarcontent"
          >
            {/* Logo */}
            <div className="navbar-brand col-lg-1 me-0">
              <a href="/">
                <img src={Logo} height="55px" title="" alt="" />
              </a>
            </div>

            {/* Header Content */}
            <ul className="navbar-nav col-lg-5 align-items-lg-center justify-content-lg-evenly navbarNav">
              <li className="nav-item" id="home">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/womens">
                  Womens
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/kids">
                  Kids
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/new-arrivals">
                  New Arrivals
                </NavLink>
              </li>
            </ul>

            {/* Search Div */}
            <ul className="navbar-nav col-lg-3 mb-0">
              <li className="search-bar">
                <i className="bx bx-search text-center"></i>
                <input
                  type="text"
                  className="form-control border-0"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
              </li>
            </ul>

            {/* Icon Div */}
            <ul className="navbar-nav col-lg-3 d-flex align-items-center flex-row icon-end">
              <li className="nav-item">
                <NavLink className="nav-link nav-icon-btn" to="/wishlist">
                  <i className="bx bx-heart" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-icon-btn" to="/orders">
                  <i className="bx bx-shopping-bag" />
                </NavLink>
              </li>
              <li className="nav-item" id="cart">
                <NavLink className="nav-link" to="">
                  <button type="button" className="nav-btn">
                    Sign In
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
