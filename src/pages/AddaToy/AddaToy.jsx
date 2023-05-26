import React from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AddaToy.css";

const AddaToy = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    document.title = "Pawwy | Added A Toy";
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const toy_name = form.toy_name.value;
    const sub_category = form.sub_category.value;
    const Picture_URL_of_Toy = form.Picture_URL_of_Toy.value;
    const available_quantity = form.available_quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const seller_name = form.seller_name.value;
    const email = form.email.value;
    const detail_description = form.detail_description.value;

    const newToy = {
      toy_name,
      sub_category,
      Picture_URL_of_Toy,
      available_quantity,
      price,
      rating,
      seller_name,
      email,
      detail_description,
    };

    console.log(newToy);

    // send data to the server
    fetch(
      "https://b7-a11-toy-marketplace-server-side-two.vercel.app/addedtoy",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy Added Successfully",
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
          <h2>Add A TOY</h2>
          <p className="mt-2">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddToy}>
          <div className="row g-4 py-4 add-toy">
            <div className="col-md-4" data-aos="zoom-in">
              <label className="label">
                <h5>Toy Name</h5>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="toy_name"
                  placeholder="Toy Name"
                  className="input w-100"
                />
              </label>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <label className="label">
                <h5>Sub Category</h5>
              </label>
              <label className="input-group">
                <select name="sub_category">
                  <option value="0">Select Sub-category:</option>
                  <option value="dog">dog</option>
                  <option value="teddy-bear">teddy-bear</option>
                  <option value="cat">cat</option>
                </select>
              </label>
            </div>
            <div className="col-md-4" data-aos="zoom-in">
              <label className="label">
                <h5>Picture URL of Toy</h5>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  name="Picture_URL_of_Toy"
                  placeholder="Picture URL of Toy"
                  className="input w-100"
                />
              </label>
            </div>
          </div>
          <div className="row g-4 py-4 add-toy">
            <div className="col-md-4" data-aos="zoom-in">
              <label className="label">
                <h5>Available quantity</h5>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="available_quantity"
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
                  defaultValue={"$"}
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
                  defaultValue={user?.displayName}
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
                  defaultValue={user?.email}
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
                  placeholder="Detail description"
                  className="input w-100"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="d-flex py-4 mb-5 add-toy-btn gap-4">
            <button className="w-100" style={{ backgroundColor: "#82C3EC" }}>
              <input type="submit" value="Add A TOY" className="btn" />
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
