import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  useEffect(() => {
    document.title = "Pawwy | Terms-Condition";
  }, []);
  return (
    <div
      className="container text-center w-50 d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <div>
        <h2>Terms and conditions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          ratione veritatis hic perferendis, mollitia non nostrum molestiae
          facere possimus autem fuga corrupti omnis rem voluptates veniam
          accusantium vero repudiandae ipsa.
        </p>
        <p>
          Go back to <Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Terms;
