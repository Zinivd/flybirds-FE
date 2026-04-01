import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Category from "../../components/Category/Category";
import Products from "../../components/Products/Products";
import Collection from "../../components/Collection/Collection";

// Array Datas
import category from "../../components/Arrays/CategoryArray";
import products from "../../components/Arrays/ProductArray";
import collections from "../../components/Arrays/CollectionArray";

const Home = () => {
  return (
    <div className="home-page my-2">
      {/* Category */}
      <div className="category-main">
        <div className="category-div">
          <div className="body-head mb-4">
            <h4 className="text-center">Shop By Category</h4>
            <h6 className="text-center">
              Find your perfect fit form our diverse collection
            </h6>
          </div>
          {/* Category Grid */}
          <div className="home-category-grid">
            {category.map((item, index) => (
              <Category key={index} category={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-main">
        <div className="product-div">
          <div className="body-head mb-4">
            <h4 className="text-center">Best Sellers</h4>
          </div>

          <ul className="product-tabs nav nav-tabs my-4 border-0" id="productTab" role="tablist">
            <li className="nav-item mb-2" role="presentation">
              <button className="tab-btn active" data-bs-toggle="tab" type="button" data-bs-target="#all">All</button>
            </li>
            <li className="nav-item mb-2" role="presentation">
              <button className="tab-btn" data-bs-toggle="tab" type="button" data-bs-target="#denimjeggings">Denim Jeggings</button>
            </li>
            <li className="nav-item mb-2" role="presentation">
              <button className="tab-btn" data-bs-toggle="tab" type="button" data-bs-target="#kurtipant">Kurti Pant</button>
            </li>
            <li className="nav-item mb-2" role="presentation">
              <button className="tab-btn" data-bs-toggle="tab" type="button" data-bs-target="#yogashorts">Yoga Shorts</button>
            </li>
          </ul>

          <div className="home-product-grid">
            {products.map((item, index) => (
              <Products key={index} product={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="collection-main">
        <div className="collection-div">
          <div className="body-head mb-4">
            <h4 className="text-center">Best Collections</h4>
          </div>

          <div className="collection-grid">
            {collections.map((item, index) => (
              <Collection key={index} collection={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
