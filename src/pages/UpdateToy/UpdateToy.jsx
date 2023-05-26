import React from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./UpdateToy.css";

const AddaToy = () => {
  const myToyUpdate = useLoaderData();
  console.log(myToyUpdate);

  const {
    _id,
    toy_name,
    available_quantity,
    price,
    rating,
    seller_name,
    email,
    detail_description,
  } = myToyUpdate;

  useEffect(() => {
    document.title = "Pawwy | Update-Toy";
  }, []);

  useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const available_quantity = form.available_quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const seller_name = form.seller_name.value;
    const email = form.email.value;
    const detail_description = form.detail_description.value;

    const updateToy = {
      available_quantity,
      price,
      rating,
      seller_name,
      email,
      detail_description,
    };

    console.log(updateToy);

    // send data to the server

    // fetch(`http://localhost:3000/addedtoy/${_id}`, {
    fetch(
      `https://b7-a11-toy-marketplace-server-side-two.vercel.app/addedtoy/${_id}`,
      {
        // fetch(`https://server-kappa-rosy.vercel.app/addedtoy/${_id}`, {

        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Information Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-light">
      <div className="container py-5">
        <div className=" m-auto text-center" style={{ width: "70%" }}>
          <h2>Update {toy_name} This TOY</h2>
          <p className="mt-2">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateToy}>
          <div className="row g-4 py-5 add-toy">
            <div className="col-md-4" data-aos="zoom-in">
              <label className="label">
                <h5>Available quantity</h5>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="available_quantity"
                  defaultValue={available_quantity}
                  placeholder="Available quantity"
                  className="input w-100"
                />
              </label>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <label className="label">
                <h5>Price</h5>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={"" + price}
                  placeholder="Price"
                  className="input w-100"
                />
              </label>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <label className="label">
                <h5>Rating</h5>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Rating"
                  className="input w-100"
                />
              </label>
            </div>
          </div>
          <div className="row g-4 py-4 add-toy">
            <div className="col-md-4" data-aos="zoom-in">
              <label className="label">
                <h5>Seller Name</h5>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="seller_name"
                  defaultValue={seller_name}
                  placeholder="Seller Name"
                  className="input w-100"
                />
              </label>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <label className="label">
                <h5>Seller Email</h5>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  defaultValue={email}
                  placeholder="Seller Email"
                  className="input w-100"
                />
              </label>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <label className="label">
                <h5>Detail description</h5>
              </label>
              <label className="input-group">
                <textarea
                  name="detail_description"
                  defaultValue={detail_description}
                  placeholder="Detail description"
                  className="input w-100"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="d-flex py-5 mb-5 add-toy-btn gap-4">
            <button className="w-100" style={{ backgroundColor: "#82C3EC" }}>
              <input type="submit" value="Update This TOY" className="btn" />
            </button>
            <button className="w-100" style={{ backgroundColor: "#B7B7B7" }}>
              <input type="reset" value="RESET" className="btn" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddaToy;
