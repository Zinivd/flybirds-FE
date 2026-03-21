import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Category from "../../components/Category/Category";
import Products from "../../components/Products/Products";
import Collection from "../../components/Collection/Collection";

import Category_Ankle from "../../../public/assets/images/Category/Ankle.png";
import Category_Capri from "../../../public/assets/images/Category/Capri.png";
import Category_Denim from "../../../public/assets/images/Category/Denim.png";
import Category_FullLength from "../../../public/assets/images/Category/FullLength.png";
import Category_Kids from "../../../public/assets/images/Category/Kids.png";
import Category_Kurti from "../../../public/assets/images/Category/Kurti.png";
import Category_Lounge from "../../../public/assets/images/Category/Lounge.png";
import Category_Metallic from "../../../public/assets/images/Category/Metallic.png";
import Category_Palazzo from "../../../public/assets/images/Category/Palazzo.png";
import Category_Saree from "../../../public/assets/images/Category/Saree.png";
import Category_Shimmer from "../../../public/assets/images/Category/Shimmer.png";
import Category_Yoga from "../../../public/assets/images/Category/Yoga.png";

import Product_1 from "../../../public/assets/images/Products/1.png";
import Product_2 from "../../../public/assets/images/Products/2.png";
import Product_3 from "../../../public/assets/images/Products/3.png";
import Product_4 from "../../../public/assets/images/Products/4.png";

import Collection_Ankle from "../../../public/assets/images/Collection/Ankle.png";
import Collection_Jeggings from "../../../public/assets/images/Collection/Jeggings.png";
import Collection_Shimmer from "../../../public/assets/images/Collection/Shimmer.png";
import Collection_SareeShaper from "../../../public/assets/images/Collection/SareeShaper.png";

const Home = () => {
  const category = [
    {
      id: 1,
      name: "Ankle Leggings",
      img: Category_Ankle,
    },
    {
      id: 2,
      name: "Capri Leggings",
      img: Category_Capri,
    },
    {
      id: 3,
      name: "Denim Jeggings",
      img: Category_Denim,
    },
    {
      id: 4,
      name: "Full Length Leggings",
      img: Category_FullLength,
    },
    {
      id: 5,
      name: "Kids Leggings",
      img: Category_Kids,
    },
    {
      id: 6,
      name: "Kurti Pant",
      img: Category_Kurti,
    },
    {
      id: 7,
      name: "Loungewear",
      img: Category_Lounge,
    },
    {
      id: 8,
      name: "Metallic Pant",
      img: Category_Metallic,
    },
    {
      id: 9,
      name: "Palazzo Pant",
      img: Category_Palazzo,
    },
    {
      id: 10,
      name: "Saree Shaper",
      img: Category_Saree,
    },
    {
      id: 11,
      name: "Shimmer Leggings",
      img: Category_Shimmer,
    },
    {
      id: 12,
      name: "Yoga Shorts",
      img: Category_Yoga,
    },
  ];
  const products = [
    {
      id: 1,
      image: Product_1,
      title: "Light Grey Yoga Shorts",
      subtitle: "Seamless fitting | Comfortable",
      mrp: "190",
      sp: "129",
      rating: 4.7,
      review: "202",
      badge: "Trending Now",
    },
    {
      id: 2,
      image: Product_2,
      title: "Light Grey Yoga Shorts",
      subtitle: "Seamless fitting | Comfortable",
      mrp: "190",
      sp: "129",
      rating: 4.7,
      review: "202",
      badge: "Trending Now",
    },
    {
      id: 3,
      image: Product_3,
      title: "Light Grey Yoga Shorts",
      subtitle: "Seamless fitting | Comfortable",
      mrp: "190",
      sp: "129",
      rating: 4.7,
      review: "202",
      badge: "Trending Now",
    },
    {
      id: 4,
      image: Product_4,
      title: "Light Grey Yoga Shorts",
      subtitle: "Seamless fitting | Comfortable",
      mrp: "190",
      sp: "129",
      rating: 4.7,
      review: "202",
      badge: "Trending Now",
    },
    {
      id: 5,
      image: Product_1,
      title: "Light Grey Yoga Shorts",
      subtitle: "Seamless fitting | Comfortable",
      mrp: "190",
      sp: "129",
      rating: 4.7,
      review: "202",
      badge: "Trending Now",
    },
    {
      id: 6,
      image: Product_2,
      title: "Light Grey Yoga Shorts",
      subtitle: "Seamless fitting | Comfortable",
      mrp: "190",
      sp: "129",
      rating: 4.7,
      review: "202",
      badge: "Trending Now",
    },
    {
      id: 7,
      image: Product_3,
      title: "Light Grey Yoga Shorts",
      subtitle: "Seamless fitting | Comfortable",
      mrp: "190",
      sp: "129",
      rating: 4.7,
      review: "202",
      badge: "Trending Now",
    },
    {
      id: 8,
      image: Product_4,
      title: "Light Grey Yoga Shorts",
      subtitle: "Seamless fitting | Comfortable",
      mrp: "190",
      sp: "129",
      rating: 4.7,
      review: "202",
      badge: "Trending Now",
    },
  ];
  const collections = [
    {
      id: 1,
      name: "Ankle",
      img: Collection_Ankle,
    },
    {
      id: 2,
      name: "Jeggings",
      img: Collection_Jeggings,
    },
    {
      id: 3,
      name: "Shimmer",
      img: Collection_Shimmer,
    },
    {
      id: 4,
      name: "Saree Shaper",
      img: Collection_SareeShaper,
    }
  ];
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
          <div className="category-grid">
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

          <div className="product-grid">
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
