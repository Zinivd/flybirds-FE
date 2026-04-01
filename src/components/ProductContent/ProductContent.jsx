import React from "react";
import { Link } from "react-router-dom";
import "./ProductContent.css";

import Details_1 from "../../../public/assets/images/Details/1.png";
import Details_2 from "../../../public/assets/images/Details/2.png";
import Details_3 from "../../../public/assets/images/Details/3.png";
import Details_4 from "../../../public/assets/images/Details/4.png";
import Details_5 from "../../../public/assets/images/Details/5.png";
import Details_6 from "../../../public/assets/images/Details/6.png";

const ProductContent = () => {
  const colors = [
    { name: "Purple", code: "#8E44AD" },
    { name: "Black", code: "#000000" },
    { name: "Red", code: "#E74C3C" },
    { name: "Orange", code: "#E67E22" },
    { name: "Navy", code: "#2C3E50" },
    { name: "White", code: "#FFFFFF", border: true },
    { name: "Brown", code: "#D35400" },
    { name: "Green", code: "#27AE60" },
    { name: "Yellow", code: "#F1C40F" },
    { name: "Grey", code: "#BDC3C7" },
    { name: "Pink", code: "#F78FB3" },
  ];

  const shadecolors = [
    { name: "Parrot", code: "#3DC733" },
    { name: "Grass", code: "#84E401" },
    { name: "Chilly", code: "#259C42" },
    { name: "Mojito", code: "#49BC93" },
    { name: "Rama", code: "#1B8577" },
    { name: "Ice", code: "#B0F0B4" },
    { name: "Tea", code: "#C2E79A" },
    { name: "Lime", code: "#E5FB96" },
    { name: "Pista", code: "#B9CBA1" },
    { name: "Catepillar", code: "#CBCB4F" },
    { name: "Fern", code: "#9BA568" },
    { name: "Bottle", code: "#06402A" },
    { name: "Peacock", code: "#175D69" },
    { name: "Forest", code: "#374F2F" },
    { name: "Apricot", code: "#DDD100" },
  ];

  const sizes = [
    { size: "XS" },
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
    { size: "XXL" },
    { size: "3XL" },
    { size: "4XL" },
  ];

  const details = [
    { icon: "bx bx-cart", text: "100% Original Products" },
    { icon: "bx bx-truck", text: "Free Delivery on all orders above Rs.599" },
    { icon: "bx bx-handshake", text: "Easy 7 days returns and exchanges" },
    { icon: "bx bx-currency-note", text: "Cash on Delivery" },
  ];
  return (
    <div className="product-content">
      {/* Product Content Left */}
      <div className="product-content-left">
        <div className="product-content-img">
          <img src={Details_1} alt="" />
        </div>
        <div className="product-content-img">
          <img src={Details_2} alt="" />
        </div>
        <div className="product-content-img">
          <img src={Details_3} alt="" />
        </div>
        <div className="product-content-img">
          <img src={Details_4} alt="" />
        </div>
        <div className="product-content-img">
          <img src={Details_5} alt="" />
        </div>
        <div className="product-content-img">
          <img src={Details_6} alt="" />
        </div>
      </div>
      {/* Product Content Right */}
      <div className="product-content-right">
        <h4 className="mb-2 text-main">Leggings & Leggings</h4>
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <h2 className="mb-2">Bottle Green Ankle Leggings</h2>
          <div className="d-flex align-items-center column-gap-2 flex-wrap">
            <button className="nav-icon-btn mb-2">
              <i class="bx bx-arrow-out-up-square-half" />
            </button>
            <button className="nav-icon-btn mb-2">
              <i className="bx bx-heart"></i>
            </button>
          </div>
        </div>
        <h4 className="mb-3">Seamless fitting | Comfortable</h4>
        <h6 className="mb-3">
          <i className="fas fa-star text-warning"></i> 4.7 (202 Reviews)
        </h6>
        <div className="d-flex align-items-center column-gap-2 flex-wrap">
          <h3 className="mb-3">
            ₹ 499{" "}
            <span className="ms-2 text-decoration-line-through">₹ 599</span>
          </h3>
          <h5 className="mb-3 text-success">(10% OFF | You’ll save Rs 21)</h5>
        </div>
        <h6 className="mb-2">(Inclusive of all taxes)</h6>
        <hr />
        {/* Family Colors */}
        <h5 className="mb-3">Select Family Color</h5>
        <div className="colors-div mb-4">
          {colors.map((item, index) => (
            <div
              className="color-box"
              key={index}
              style={{
                backgroundColor: item.code,
                border: item.border ? "1px solid var(--border)" : "none",
              }}
            ></div>
          ))}
        </div>
        {/* Shade Colors */}
        <h5 className="mb-3">Select Shade</h5>
        <div className="colors-div mb-4">
          {shadecolors.map((item, index) => (
            <div
              className="color-box"
              key={index}
              style={{
                backgroundColor: item.code,
                border: item.border ? "1px solid var(--border)" : "none",
              }}
            ></div>
          ))}
        </div>
        <hr />
        {/* Sizes */}
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <h5 className="mb-3">Select Size</h5>
          <Link>
            <h6 className="mb-3 text-main">
              Size Guide <i className="fas fa-chevron-right"></i>
            </h6>
          </Link>
        </div>
        <div className="sizes-div mb-4">
          {sizes.map((item, index) => (
            <button className="size-btn" key={index}>
              {item.size}
            </button>
          ))}
        </div>
        <hr />
        {/* Check Delivery */}
        <h5 className="mb-3">Check Delivery</h5>
        <div className="d-flex align-items-center justify-content-between gap-2 mb-4">
          <input
            type="text"
            name="delivery"
            id="delivery"
            className="form-control w-75"
            placeholder="Enter Pincode"
          />
          <button type="button" className="form-btn w-25">
            Check
          </button>
        </div>
        <h6 className="mb-4">
          <i className="fas fa-truck-fast me-2"></i> Estimated delivery in 18th
          Oct
        </h6>
        {/* Buttons */}
        <div className="d-flex align-items-center column-gap-2">
          <button className="buy-btn w-50">Buy Now</button>
          <button className="cart-btn w-50">
            <i className="bx bx-shopping-bag" /> Add to Bag
          </button>
        </div>
        <hr />
        {/* Details */}
        {details.map((item, index) => (
          <div className="d-flex align-items-center column-gap-3 mb-3">
            <div className="nav-icon-btn rounded-2">
              <i className={item.icon} />
            </div>
            <h5 className="mb-0 text-secondary">{item.text}</h5>
          </div>
        ))}

        <h6 className="mt-4">
          (*Please note The item must be unused, unwashed, and in its original
          condition with all tags and packaging Fly Birds.)
        </h6>
      </div>
    </div>
  );
};

export default ProductContent;
