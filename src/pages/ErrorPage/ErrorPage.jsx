import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/error.png";
import { useEffect } from "react";

const ErrorPage = () => {
  const error_para = { width: "50%", margin: "auto" };

  useEffect(() => {
    document.title = "Pawwy | Error";
  }, []);

  return (
    <div
      className="container d-flex align-items-center justify-content-center text-center"
      style={{ height: "100vh" }}
    >
      <div>
        <img src={errorImg} className="img-fluid" alt="" />
        <h1 className="error py-3">We Are Sorry, Page Not Found</h1>
        <p style={error_para}>
          Unfortunately the page you were looking for could not be found. It may
          be temporarily unavailable, moved or no longer exist. Check the Url
          you entered for any mistakes and try again.
          <Link to="/" className="ms-2">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
