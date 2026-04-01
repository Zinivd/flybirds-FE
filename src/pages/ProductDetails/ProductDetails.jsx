import React from "react";
import { Link } from "react-router-dom";
import "./ProductDetails.css";
import ProductContent from "../../components/ProductContent/ProductContent";

// Array Datas
import products from "../../components/Arrays/ProductArray";
import Products from "../../components/Products/Products";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import Review from "../../components/Review/Review";

const ProductDetails = () => {
  return (
    <div className="produt-details my-4">
      <div className="body-head mb-4">
        <h6 className="d-flex align-items-center column-gap-2 mb-0">
          <Link to="/">
            Home <i className="fas fa-chevron-right ps-1"></i>
          </Link>
          <Link>
            Womens <i className="fas fa-chevron-right ps-1"></i>
          </Link>
          <Link className="active">Jeggings</Link>
        </h6>
      </div>

      <div className="product-details-main">
        <ProductContent />
      </div>

      <hr />

      <div className="product-description-main">
        <ProductDescription />
      </div>

      <div className="product-review-main">
        <div className="product-review-div">
          <div className="body-head mb-4">
            <h4 className="text-center">Customer Reviews</h4>
          </div>

          <Review />
        </div>
      </div>

      {/* Product Grid */}
      <div className="product-main">
        <div className="product-div w-100">
          <div className="body-head mb-4">
            <h4 className="text-center">Similar Products</h4>
          </div>

          <div className="home-product-grid">
            {products.map((item, index) => (
              <Products key={index} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
