import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { AuthContext } from "../../providers/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MyToys.css";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [mytoys, setmytoys] = useState([]);

  useEffect(() => {
    document.title = "Pawwy | My Toys";
  }, []);

  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  const url = `https://b7-a11-toy-marketplace-server-side-two.vercel.app/getMyToys?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setmytoys(data));
  }, [url]);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7-a11-toy-marketplace-server-side-two.vercel.app/addedtoy/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "This Toy has been deleted.", "success");

              const remaining = mytoys.filter((toyy) => toyy._id !== _id);
              setmytoys(remaining);
            }
          });
      }
    });
  };

  const handleSortByA = (Ascending) => {
    let sortedData = [...mytoys];
    sortedData.sort((a, b) => (a.price > b.price ? 1 : -1));
    setmytoys(sortedData);
    console.log(sortedData);
  };

  const handleSortByD = (Descending) => {
    let sortedData = [...mytoys];
    sortedData.sort((a, b) => (b.price > a.price ? 1 : -1));
    setmytoys(sortedData);
    console.log(sortedData);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center">
        {user.displayName} Your Added Toys : {mytoys.length}
      </h2>

      <div className="d-flex gap-4 align-items-center justify-content-center py-3 mb-3">
        <button
          className="btn btn-primary py-2 px-3"
          style={{ fontSize: "18px" }}
          onClick={() => handleSortByA()}
        >
          Sort by Price Ascending
        </button>
        <button
          className="btn btn-danger py-2 px-3"
          style={{ fontSize: "18px" }}
          onClick={() => handleSortByD()}
        >
          Sort by Price Descending
        </button>
      </div>

      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Toy-Image</th>
            <th scope="col">Toy-Name</th>
            <th scope="col">Sub-Category</th>
            <th scope="col">Rating</th>
            <th scope="col">Price</th>
            <th scope="col">Available-Quantity</th>
            <th scope="col">View Details</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {mytoys.map((mytoy) => (
            <tr key={mytoy._id} mytoy={mytoy} data-aos="zoom-in">
              <td>
                <img
                  src={mytoy.Picture_URL_of_Toy}
                  alt="Toy image"
                  width={150}
                  height={50}
                  className="img-thumbnail"
                />
              </td>
              <td>
                <h4>{mytoy.toy_name}</h4>
              </td>
              <td>
                <h6>{mytoy.sub_category}</h6>
              </td>
              <td>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={mytoy.rating}
                  readOnly
                />
              </td>
              <td>
                <p>{mytoy.price}</p>
              </td>
              <td>
                <p style={{}}>{mytoy.available_quantity}</p>
              </td>
              <td>
                <Link
                  to={`/singletoy/${mytoy._id}`}
                  className="btn btn-primary"
                >
                  View Details Toy
                </Link>
              </td>
              <td>
                <Link
                  to={`/updateToy/${mytoy._id}`}
                  className="btn btn-success"
                >
                  Info Update
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(mytoy._id)}
                  className="btn btn-danger"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};

export default MyToys;
