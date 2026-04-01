import React from "react";
import "./ProductDescription.css";

import Details_1 from "../../../public/assets/images/Details/1.png";
import Details_2 from "../../../public/assets/images/Details/2.png";
import Details_3 from "../../../public/assets/images/Details/3.png";
import Details_4 from "../../../public/assets/images/Details/4.png";
import Details_5 from "../../../public/assets/images/Details/5.png";
import Details_6 from "../../../public/assets/images/Details/6.png";

import Icon_1 from "../../../public/assets/images/Icons/1.png";
import Icon_2 from "../../../public/assets/images/Icons/2.png";
import Icon_3 from "../../../public/assets/images/Icons/3.png";
import Icon_4 from "../../../public/assets/images/Icons/4.png";
import Icon_5 from "../../../public/assets/images/Icons/5.png";
import Icon_6 from "../../../public/assets/images/Icons/6.png";
import Icon_7 from "../../../public/assets/images/Icons/7.png";

const ProductDescription = () => {
  const variants = [
    { text: "Fluid with Liva Fabric", img: Details_2 },
    { text: "4-way Stretch", img: Details_3 },
    { text: "Moisture Wicking", img: Details_4 },
    { text: "Fluid with Liva Fabric", img: Details_5 },
    { text: "Fluid with Liva Fabric", img: Details_6 },
  ];

  const fabrics = [
    { text: "Machine Wash", img: Icon_1 },
    { text: "Do Not Tumble Dry", img: Icon_2 },
    { text: "Hand Wash", img: Icon_3 },
    { text: "Do Not Bleach", img: Icon_4 },
    { text: "Use Iron", img: Icon_5 },
    { text: "Wash with like colors", img: Icon_6 },
    { text: "Wash Inside Out", img: Icon_7 },
  ]
  return (
    <div className="product-description">
      <div className="product-description-left">
        <div className="body-head mb-4">
          <h4 className="mb-0 text-white">Detail Spotlight</h4>
        </div>
        <div className="description-img-column">
          <img src={Details_6} alt="" className="description-main-img" />
          <div className="d-block ms-auto">
            {variants.map((item, index) => (
              <div className="description-img-div mb-4" key={index}>
                <div className="description-img">
                    <img src={item.img} alt="" />
                </div>
                {/* <h6 className="mb-0">{item.text}</h6> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="product-description-right form">
        <h5 className="mb-3 text-main">Product Description</h5>
        <h6 className="mb-0">
            Complete any look, be it traditional or western with these Solid Cherry Leggings. Made from cotton & elastane, it has a elasticised waistband & has a slim fit.
        </h6>
        <hr />
        <h5 className="mb-3 text-main">Specifications</h5>
        <div className="row">
            <div className="col-md-6 col-lg-4 mb-3">
                <label>Length</label>
                <h6 className="mb-0">Ankle Length</h6>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
                <label>Fabrics</label>
                <h6 className="mb-0">Viscose Rayon, Elastane</h6>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
                <label>Fit</label>
                <h6 className="mb-0">Slim Fit</h6>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
                <label>Rise</label>
                <h6 className="mb-0">Mid Rise</h6>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
                <label>Pattern</label>
                <h6 className="mb-0">Solid</h6>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
                <label>Box Content</label>
                <h6 className="mb-0">A pair of Ankle Length Leggings</h6>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
                <label>Country Of Origin</label>
                <h6 className="mb-0">India</h6>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
                <label>Manufactured & Marketed By</label>
                <h6 className="mb-0">FLY BIRDS GARMENTS 423B, 4th St, Raja Nagar, Poyampalayam, Tiruppur, Tamil Nadu 641603.</h6>
            </div>
        </div>
        <hr />
        <h5 className="mb-3 text-main">Fabric & Care</h5>
        <div className="fabric-grid">
            {fabrics.map((item, index) => (
                <div className="fabric-div mb-3" key={index}>
                    <div className="fabric-img">
                        <img src={item.img} alt="" />
                    </div>
                    <h6 className="mb-0 text-center">{item.text}</h6>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
