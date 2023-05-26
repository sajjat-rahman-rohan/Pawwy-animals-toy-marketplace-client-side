import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SingleToy.css";

const SingleToy = () => {
  const singletoy = useLoaderData();

  const {
    _id,
    Picture_URL_of_Toy,
    toy_name,
    sub_category,
    price,
    available_quantity,
    rating,
    detail_description,
    seller_name,
  } = singletoy;

  console.log(singletoy);

  useEffect(() => {
    document.title = "Pawwy | Single-Toy-Details";
  }, []);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">
        {singletoy.toy_name} Details Information :
      </h2>

      <div className="row">
        <div className="col">
          <div className="card">
            <div className="row g-0" data-aos="zoom-in">
              <div className="col-md-4 m-auto">
                <img
                  className="img-fluid"
                  src={Picture_URL_of_Toy}
                  alt="Card image cap"
                />
              </div>
              <div className="col-md-8 m-auto">
                <div className="card-body">
                  <h4 className="card-title">
                    <b>Toy Name :</b> {toy_name}
                  </h4>
                  <h5>
                    <b>Sub-category Name :</b> {sub_category}
                  </h5>
                  <p className="m-0">
                    <b>Price :</b> {price}
                  </p>
                  <p className="m-0">
                    <b>Quantity :</b> {available_quantity}
                  </p>
                  <span className="d-flex gap-3">
                    <b> Rating :</b>
                    <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                  </span>
                  <p className="m-0">
                    <b>Seller Name :</b> {seller_name}
                  </p>
                  <p>
                    <b>Description :</b> {detail_description}
                  </p>

                  <div className="mt-4">
                    <Link to="/alltoys" className="btn btn-primary">
                      Back to All Toys
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
