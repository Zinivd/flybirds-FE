import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <div className="product-box">
      <div className="product-img">
        <img src={product.image} alt={product.title} />
        <span className="product-badge">{product.badge}</span>
        <div className="product-cart-btn">
          <button className="add-cart-btn">
            <i className="bx bx-shopping-bag" /> Add to Bag
          </button>
        </div>
      </div>
      <div className="product-box-content">
        <h4 className="mb-0"><i className="fas fa-star text-warning"></i> {product.rating} ({product.review} Reviews)</h4>
        <h3 className="mb-0">{product.title}</h3>
        <h6 className="mb-0">{product.subtitle}</h6>
        <div className="product-colors-main d-flex align-items-center justify-content-center column-gap-2 mb-0">
          <div className="product-colors-div">
            <div className="colors-round green"></div>
            <div className="colors-round red"></div>
            <div className="colors-round orange"></div>
            <div className="colors-round blue"></div>
          </div>
          <span>5+ Colors</span>
        </div>
        <h5 className="mb-0">Rs {product.sp} <span className="ms-1">Rs {product.mrp}</span></h5>
        <p className="mb-0">You'll save Rs 21</p>
        <button className="add-cart-btn-2 w-100">
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default Products;
