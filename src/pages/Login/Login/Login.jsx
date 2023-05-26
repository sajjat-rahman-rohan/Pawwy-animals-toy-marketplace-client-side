import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import "./Login.css";
import { useEffect } from "react";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub, signInWithFacebook } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    document.title = "Pawwy | Login";
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");
    setSuccess("");
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been Google login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGithubSingin = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been Github login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleFacebookSingin = () => {
    signInWithFacebook()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("User has been Facebook login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="login-form ">
      <Container>
        <Row>
          <Col lg={5} className="m-auto mt-2">
            <Form onSubmit={handleLogin} className="form">
              <p className="text-danger text-center">{error}</p>
              <Form.Group className="text-center">
                <h2>Pawwy Animal toy Marketplace</h2>
                <p style={{ fontSize: "14px" }}>
                  In the animal kingdom, we find creatures with remarkable
                  abilities.
                </p>
              </Form.Group>
              <Form.Group className=" login-social-btn text-center">
                <div>
                  <button
                    onClick={handleGithubSingin}
                    style={{
                      backgroundColor: "#171515",
                    }}
                  >
                    <FaGithub></FaGithub> Login with Github
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleGoogleSignIn}
                    style={{
                      backgroundColor: "#0F9D58",
                    }}
                  >
                    <FaGoogle></FaGoogle> Login with Google
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleFacebookSingin}
                    style={{
                      backgroundColor: "#4267B2",
                    }}
                  >
                    <FaFacebookF></FaFacebookF> Login with Facebook
                  </button>
                </div>
              </Form.Group>
              <Form.Group className="short text-center">
                <span>Have a password? Login with your email address</span>
                <div className="short-separator"></div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="pws-btn">
                  <Form.Control
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <Form.Label onClick={() => setShow(!show)}>
                    <small className="show-hide">
                      {show ? (
                        <FaRegEyeSlash></FaRegEyeSlash>
                      ) : (
                        <FaRegEye></FaRegEye>
                      )}
                    </small>
                  </Form.Label>
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  onClick={handleAccepted}
                  type="checkbox"
                  name="accept"
                  label={<>Remember me</>}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="py-2 mb-2 login-btn"
                type="submit"
              >
                Login
              </Button>
              <br />
              <Form.Text className="text-secondary">
                Don't Have an Account ? <Link to="/register">Register</Link>
              </Form.Text>
              <p className="text-success">{success}</p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
