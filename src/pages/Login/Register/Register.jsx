import React, { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import "./Register.css";
import { useEffect } from "react";

const Register = () => {
  const { createUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = "Pawwy | Register";
  }, []);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    // validate
    setError("");
    setSuccess("");
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setError("Please add at least one lowercase");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two numbers");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add a special character.");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setSuccess("User has been created successfully");
        updateUserName(result.user, name);
        updateUserPhoto(result.user, photo);
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
        setSuccess("User has been login successfully");
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
        setSuccess("User has been login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const updateUserName = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const updateUserPhoto = (user, photo) => {
    updateProfile(user, {
      photoURL: photo,
    })
      .then(() => {
        console.log("user photo updated");
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
    <div className="reg-form">
      <Container>
        <Row>
          <Col lg={5} className="m-auto mt-2">
            <Form onSubmit={handleRegister} className="form">
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
                    <FaGithub></FaGithub> Register with Github
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleGoogleSignIn}
                    style={{
                      backgroundColor: "#0F9D58",
                    }}
                  >
                    <FaGoogle></FaGoogle> Register with Google
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleGithubSingin}
                    style={{
                      backgroundColor: "#4267B2",
                    }}
                  >
                    <FaFacebookF></FaFacebookF> Register with Facebook
                  </button>
                </div>
              </Form.Group>
              <Form.Group className="short text-center">
                <span>Please Register Create Account and Login!</span>
                <div className="short-separator"></div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control
                  type="file"
                  name="photo"
                  placeholder="Photo URL"
                  required
                />
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
                  label={
                    <>
                      Accept <Link to="/terms">Terms and Conditions</Link>
                    </>
                  }
                />
              </Form.Group>
              <Button
                variant="primary"
                className="py-3 reg-btn mb-2"
                disabled={!accepted}
                type="submit"
              >
                Register
              </Button>
              <br />
              <Form.Text className="text-secondary">
                Already Have an Account ? <Link to="/login">Login</Link>
              </Form.Text>
              <p className="text-success">{success}</p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
