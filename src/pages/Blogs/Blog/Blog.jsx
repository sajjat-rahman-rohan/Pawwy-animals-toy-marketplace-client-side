import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Blog.css";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Pawwy | Blogs";
  }, []);

  return (
    <div className="blog">
      <div className="text-center mt-5">
        <h2>Blog F&Q :</h2>
      </div>

      <div className="container ">
        <Accordion
          defaultActiveKey="0"
          flush
          className="my-container mt-5 mb-5 pb-5"
        >
          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>
              1. What is an access token and refresh token? How do they work and
              where should we store them on the client-side ?
            </Accordion.Header>
            <Accordion.Body>
              Refresh tokens provide a way to bypass the temporary nature of
              access tokens. Normally, a user with an access token can only
              access protected resources or perform specific actions for a set
              period of time, which reduces the risk of the token being
              compromised. A refresh token allows the user to get a new access
              token without needing to log in again. Though these tokens can be
              extremely helpful, they should be used properly. This guide will
              give an in-depth explanation of refresh tokens and discuss some
              best practices for creating and handling them.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>
              2. Compare SQL and NoSQL databases ?
            </Accordion.Header>
            <Accordion.Body>
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables, with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="item">
            <Accordion.Header>
              3. What is express js? What is Nest JS ?
            </Accordion.Header>
            <Accordion.Body>
              Express is a minimalist and flexible framework that is easy to use
              and has a large community of developers. NestJS, on the other
              hand, is a newer framework that provides additional features such
              as dependency injection, a modular architecture, and an intuitive
              CLI.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="item">
            <Accordion.Header>
              4. What is MongoDB aggregate and how does it work ?
            </Accordion.Header>
            <Accordion.Body>
              What is Aggregation in MongoDB? Aggregation is a way of processing
              a large number of documents in a collection by means of passing
              them through different stages. The stages make up what is known as
              a pipeline. The stages in a pipeline can filter, sort, group,
              reshape and modify documents that pass through the pipeline.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;
