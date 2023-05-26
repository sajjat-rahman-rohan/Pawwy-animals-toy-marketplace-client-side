import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link, useLoaderData } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AllToys.css";

const AllToys = () => {
  const [allyoys, setAllToys] = useState([]);
  const { totalToys } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Pawwy | Alltoys";
  }, []);

  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://b7-a11-toy-marketplace-server-side-two.vercel.app/addedtoy?page=${currentPage}&limit=${itemsPerPage}`
      );

      const data = await response.json();
      setAllToys(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(totalToys / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  const options = [5, 10, 15, 20];
  function handleSelectChange(event) {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  const handleNextBtn = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      setCurrentPage(nextPage);
    }
  };

  const handlePreviousBtn = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 0) {
      setCurrentPage(previousPage);
    }
  };

  const handleSearch = (allyoys) => {
    return allyoys.filter(
      (item) =>
        item.toy_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sub_category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.toy_name.toUpperCase().includes(searchQuery.toUpperCase()) ||
        item.sub_category.toUpperCase().includes(searchQuery.toUpperCase())
    );
  };

  return (
    <div className="container py-5">
      <h2 className="text-center">
        Total Toys on This Marketplace : {allyoys.length}
      </h2>

      <div className="text-center pb-3 my-4">
        <input
          type="text"
          placeholder="Search Toy Name or Sub Categody"
          className="search"
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "50%", padding: "12px" }}
        />
      </div>

      <MDBTable align="middle">
        <MDBTableHead>
          <tr>
            <th scope="col">Toy-Image</th>
            <th scope="col">Toy-Name</th>
            <th scope="col">Sub-Category</th>
            <th scope="col">Price</th>
            <th scope="col">Available-Quantity</th>
            <th scope="col">Rating</th>
            <th scope="col">View Details</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {handleSearch(allyoys).map((mytoy) => (
            <tr key={mytoy._id} mytoy={mytoy} data-aos="zoom-in">
              <td>
                <img
                  className="img-thumbnail"
                  src={mytoy.Picture_URL_of_Toy}
                  alt="Toy image"
                  width={150}
                />
              </td>
              <td>
                <h4>{mytoy.toy_name}</h4>
              </td>
              <td>
                <h6>{mytoy.sub_category}</h6>
              </td>
              <td>
                <p>{mytoy.price}</p>
              </td>
              <td>
                <p style={{}}>{mytoy.available_quantity}</p>
              </td>
              <td>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={mytoy.rating}
                  readOnly
                />
              </td>
              <td>
                <Link
                  to={`/singletoy/${mytoy._id}`}
                  className="btn btn-primary"
                >
                  View Details Toy
                </Link>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>

      <div className="pagination-btn">
        <p className="text-center">
          Current Page: <b>{currentPage}</b> and items per page:{" "}
          <b>{itemsPerPage}</b>
        </p>
        <div className="d-flex align-items-center justify-content-center py-4">
          <div>
            {pageNumbers.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
            <button onClick={handlePreviousBtn} disabled={currentPage <= 0}>
              Previous
            </button>
          </div>
          <div>
            {pageNumbers.map((number) => (
              <>
                <button
                  key={number}
                  className={currentPage === number ? "selected" : ""}
                  onClick={() => setCurrentPage(number)}
                >
                  {number}
                </button>
              </>
            ))}
          </div>
          <div>
            {pageNumbers.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
            <button
              onClick={handleNextBtn}
              disabled={currentPage >= totalPages}
            >
              Next
            </button>
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center justify-content-center">
          <p>
            <b>Set Per Page :</b>
          </p>
          <select value={itemsPerPage} onChange={handleSelectChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
