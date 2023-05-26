import React from "react";
import logo from "../../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="container ">
        <div className="row py-4 text-center">
          <div className="col-lg-4">
            <h3>Download App</h3>
            <div className="d-flex align-items-center justify-content-center gap-3 py-4">
              <img
                src="https://opencart.dostguru.com/PT01/petshop_02/image/catalog/app1.png"
                alt=""
              />
              <img
                src="https://opencart.dostguru.com/PT01/petshop_02/image/catalog/app2.png"
                alt=""
              />
            </div>
            <div className="d-flex align-items-center justify-content-center social-icon gap-3">
              <Link to="https://www.facebook.com/">
                <FaFacebookF
                  style={{ fontSize: "2rem", color: "#4267B2" }}
                ></FaFacebookF>
              </Link>
              <Link to="https://www.instagram.com/">
                <FaInstagram
                  style={{ fontSize: "2rem", color: "#E1306C" }}
                ></FaInstagram>
              </Link>
              <Link to="https://www.twitter.com/">
                <FaTwitter
                  style={{ fontSize: "2rem", color: "#1DA1F2" }}
                ></FaTwitter>
              </Link>
              <Link to="https://www.pinterest.com/">
                <FaPinterest
                  style={{ fontSize: "2rem", color: "#E60023" }}
                ></FaPinterest>
              </Link>
              <Link to="https://www.youtube.com/">
                <FaYoutube
                  style={{ fontSize: "2rem", color: "#FF0000" }}
                ></FaYoutube>
              </Link>
            </div>
          </div>
          <div
            className="col-lg-4"
            style={{
              borderRight: "1px solid #e4e4e4",
              borderLeft: "1px solid #e4e4e4",
            }}
          >
            <img src={logo} height={"60px"} alt="" />
            <p className="w-80 mt-2">
              Allows you to listing your products in tabs by variety criteria,
              increasing the usability of your business.Import any demo from the
              live preview with the one-click demo importer. Quickly & Eeasily.
            </p>
          </div>
          <div className="col-lg-4">
            <h3>Store Information</h3>
            <p>
              1093 Marigold Lane, <br />
              Coral Way, Miami, <br />
              Florida, 33169 <br />
              610-403-403 <br />
              pawwy.toyshop@gmail.com
            </p>
          </div>
        </div>
        <hr />
        <div className="text-center py-4">
          <ul className="d-md-flex justify-content-center align-items-center">
            <li>
              <NavLink to="/terms">Privacy Policy </NavLink>
            </li>
            <li className="borderboth">
              <NavLink to="/terms">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/alltoys">Delivery Information</NavLink>
            </li>
            <li className="borderboth">
              <NavLink to="/blog">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Manufacturer</NavLink>
            </li>
            <li className="borderone">
              <NavLink to="/login">Contact Us</NavLink>
            </li>
          </ul>
          <p className="py-3 m-0">Powered By Pawwy animals toy shop © 2023</p>
          <div className="d-flex gap-4 align-items-center justify-content-center">
            <FaCcVisa style={{ fontSize: "2rem", color: "#FF9900" }}></FaCcVisa>
            <FaRegCreditCard
              style={{ fontSize: "2rem", color: "#3b556e" }}
            ></FaRegCreditCard>
            <FaCcAmazonPay
              style={{ fontSize: "2rem", color: "#000000" }}
            ></FaCcAmazonPay>
            <FaCcMastercard
              style={{ fontSize: "2rem", color: "#eb001b" }}
            ></FaCcMastercard>
            <FaCcPaypal
              style={{ fontSize: "2rem", color: "#003087" }}
            ></FaCcPaypal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
