import React from "react";
import Filter from "../../components/Filter/Filter";
import "./AllProducts.css";
import { Link } from "react-router-dom";

// Array Datas
import products from "../../components/Arrays/ProductArray";
import Products from "../../components/Products/Products";

const AllProducts = () => {
  return (
    <div className="filter-products-main">
      <div className="body-head d-flex justify-content-between align-items-center flex-wrap mb-2">
        <h6 className="d-flex align-items-center column-gap-2 mb-3">
          <Link to="/">
            Home <i className="fas fa-chevron-right ps-1"></i>
          </Link>
          <Link>
            Womens <i className="fas fa-chevron-right ps-1"></i>
          </Link>
          <Link className="active">Jeggings</Link>
        </h6>
        <h4 className="mb-3">Jeggings</h4>
        <div className="form select-div mb-3">
            <label htmlFor="sort" className="w-100">Sort By : </label>
            <select name="sort" id="sort" className="form-select">
              <option value="0">Default</option>
              <option value="1">Price: Low to High</option>
              <option value="2">Price: High to Low</option>
              <option value="3">New Arrivals</option>
              <option value="4">Popularity</option>
            </select>
        </div>
      </div>

      <div className="filter-product-flex">
        <div className="filter-product-left">
          <Filter />
        </div>

        <div className="filter-product-right">
          <div className="filter-product-grid">
            {products.map((item, index) => (
              <Products key={index} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
