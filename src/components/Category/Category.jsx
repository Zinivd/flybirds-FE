import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ category }) => {
  return (
    <Link>
      <div className="category-box mb-4">
        <img src={category.img} alt={category.name} className="mb-2" />
        <h6 className="mb-0">{category.name}</h6>
      </div>
    </Link>
  );
};

export default Category;
