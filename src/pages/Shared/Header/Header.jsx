import React, { useContext, useState } from "react";
import logo from "../../../assets/logo.png";
import { Button, Nav } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user.displayName);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="header-bg">
      <nav className="container text-center d-lg-flex justify-content-between align-items-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          <img src={logo} height={60} alt="" />
        </NavLink>

        <ul className="d-md-flex gap-4 justify-content-center align-items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alltoys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              All Toys
            </NavLink>
          </li>
          {user?.email ? (
            <li>
              <NavLink
                to="/mytoys"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                My Toys
              </NavLink>
            </li>
          ) : (
            <></>
          )}

          {user?.email ? (
            <li>
              <NavLink
                to="/addatoy"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Add A Toy
              </NavLink>
            </li>
          ) : (
            <></>
          )}

          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Conatct
            </NavLink>
          </li>
        </ul>

        <div>
          <Nav className="d-flex justify-content-center align-items-center">
            {user && (
              <div className="text-light me-2 d-flex align-items-center gap-2 ">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id="tooltip">
                      <strong>{user.displayName}</strong>
                    </Tooltip>
                  }
                  className="ml-5"
                >
                  <div>
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        style={{
                          height: "40px",
                          width: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    ) : (
                      <FaUserCircle
                        style={{
                          fontSize: "2.5rem",
                          color: "white",
                        }}
                      ></FaUserCircle>
                    )}
                  </div>
                </OverlayTrigger>
              </div>
            )}
            {user ? (
              <Button
                onClick={handleLogOut}
                variant="secondary"
                className="px-4 py-2"
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </div>
      </nav>
    </div>
  );
};

export default Header;
