import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../public/assets/images/Logo-White.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Disclaimer */}
      <div className="disclaimer">
        <div className="disclaimer-div">
          <i class="fas fa-circle-exclamation"></i>
          <div className="disclaimer-content">
            <h5 className="mb-3">Flybirds Leggings</h5>
            <h6 className="mb-0">
              At Flybirds, we pride ourselves on delivering unparalleled quality at a price that suits your budget. Our commitment to excellence has made us the biggest seller in Tirupur, earning the trust and loyalty of our customers.
            </h6>
          </div>
        </div>
      </div>

      <div className="shop-all">
        <div className="shop-all-div">
          <h3 className="mb-3">Shop All</h3>
          <ul className="nav ps-0 flex-row column-gap-1">
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Ankle Leggings
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <Link to="/all-products" className="nav-link">
                Full Length Leggings
              </Link>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Shimmer Leggings
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Capri Leggings
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Denim Leggings
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Kurti Pant
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Palazzo Pant
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Metallic Pant
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Yoga Shorts
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Saree Shaper
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Pyjama Set
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Capri Set
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Shimmer Dupatta
              </a>
            </li>
            <li className="nav-item mb-1">
              <a className="nav-link">|</a>
            </li>
            <li className="nav-item mb-1">
              <a href="" className="nav-link">
                Nazmin Dupatta
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-top">
            {/* Footer Logo / SM Links */}
            <div className="footer-item mb-2">
              <div className="d-flex justify-content-start align-items-start flex-column">
                <div className="footer-logo">
                  <img
                    src={Logo}
                    className="d-flex mx-auto"
                    height="80px"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="footer-item mb-2">
              <h5 className="mt-0">Get a Special Discount on your inbox</h5>
              <div className="input-group">
                <input
                  type="text"
                  name="subscribe"
                  id="subscribe"
                  className="form-control"
                  placeholder="Email Address"
                />
                <button type="button" className="subscribe-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <br />

          <div className="footer-middle">
            <div className="footer-item mb-2">
              <li className="nav-item mb-2 text-white">
                Follow Us on Social Media
              </li>
              <ul className="nav flex-row column-gap-2" id="brands">
                <li className="nav-item mb-3">
                  <a
                    href=""
                    target="_blank"
                    id="facebook"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-title="Facebook"
                  >
                    <div className="brand-icons">
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    href=""
                    target="_blank"
                    id="instagram"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-title="Instagram"
                  >
                    <div className="brand-icons">
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    href=""
                    target="_blank"
                    id="linkedin"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-title="LinkedIn"
                  >
                    <div className="brand-icons">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a
                    href=""
                    target="_blank"
                    id="youtube"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-title="YouTube"
                  >
                    <div className="brand-icons">
                      <i className="fa-brands fa-youtube"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-item mb-2">
              <h5>Quick Links</h5>
              <ul className={`nav flex-column`}>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Our Story</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">FAQ's</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Blogs</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Testimonals</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Contact Us</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-item mb-2">
              <h5>Help</h5>
              <ul className={`nav flex-column`}>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Track Your Order</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Customer Support</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Profile</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Returns & Exchange</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Size Guide</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-item mb-2">
              <h5>Shop</h5>
              <ul className={`nav flex-column`}>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Shimmer Leggings</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Saree Shapper</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Yoga Shorts</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Kurti Pants</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Chudithar Leggings</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Ankle Leggings</NavLink>
                </li>
              </ul>
            </div>

            <div className="footer-item mb-2">
              <h5>Policies</h5>
              <ul className={`nav flex-column`}>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Terms & Conditions</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Return Policy</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Support Policy</NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink className="p-0">Privacy Policy</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-3 mb-4" />

          <div className="footer-bottom">
            <div className="footer-item mb-2">
              <div className="footer-bottom-icon">
                <i className="bx bx-mail-open text-white"></i>
              </div>
              <div className="footer-bottom-content w-100">
                <h6 className="mb-1">Email ID</h6>
                <a href="mailto: info@flybirdsleggings.com">
                  <h5 className="mb-0">info@flybirdsleggings.com</h5>
                </a>
              </div>
            </div>
            <div className="footer-item mb-2">
              <div className="footer-bottom-icon">
                <i className="bx bx-phone-forwarding text-white" />
              </div>
              <div className="footer-bottom-content w-100">
                <h6 className="mb-1">Phone No</h6>
                <a href="tel:+918825522322">
                <h5 className="mb-0">+91 88255 22322</h5>
                </a>
              </div>
            </div>
            <div className="footer-item mb-2">
              <div className="footer-bottom-icon">
                <i className="bx bx-location text-white"></i>
              </div>
              <div className="footer-bottom-content">
                <h6 className="mb-1">Address</h6>
                <a href="">
                  <h5 className="mb-0">
                    423 B , 4th St, Raja Nagar, Poyampalayam, Tirupur, Tamil Nadu
                    641603
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyrights mt-3">
          <h6 className="text-center mb-0">
            © 2025 FLYBIRDS LEGGINGS All Rights Reserved.
          </h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
