import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LazyLoad from "react-lazy-load";
import { useEffect } from "react";

const ToyProduct = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container">
      <div className="text-center py-4">
        <h2> New Trending Toy </h2>
        <p>
          The animal kingdom is a vast and diverse realm teeming with
          fascinating creatures <br /> that inhabit every corner of our planet.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6">
          <div className="card" data-aos="fade-right">
            <LazyLoad>
              <img
                src="https://img.freepik.com/free-psd/happy-girl-sitting-reading-book-leaning-against-teddy-bear-isolated-background_1150-65065.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                className="card-img-top"
                height={300}
                alt="..."
              />
            </LazyLoad>
            <div className="card-body">
              <span className="card-text">
                <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
              </span>
              <h6 className="card-text py-1">Funskool Teddy Brown</h6>
              <h5>$190.12</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card" data-aos="fade-right">
            <LazyLoad>
              <img
                src="https://htmldemo.net/kidol/kidol/assets/img/shop/9.png"
                className="card-img-top"
                alt="..."
                height={300}
              />
            </LazyLoad>
            <div className="card-body">
              <span className="card-text">
                <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
              </span>
              <h6 className="card-text py-1">Sassy Crib and Floor Mirror</h6>
              <h5>$130.00</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card" data-aos="fade-left">
            <LazyLoad>
              <img
                src="https://img.freepik.com/premium-psd/funny-dogs-clipart-set_147671-16.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                className="card-img-top"
                height={300}
                alt="..."
              />
            </LazyLoad>
            <div className="card-body">
              <span className="card-text">
                <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
              </span>
              <h6 className="card-text py-1">Newborn Kit Set</h6>
              <h5>$120.16</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card" data-aos="fade-left">
            <LazyLoad>
              <img
                src="https://img.freepik.com/premium-psd/cat-ball-png-cat-ball-yarn-transparent-background-png-download_699917-214.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.1.1175214580.1668228643&semt=ais"
                className="card-img-top"
                height={300}
                alt="..."
              />
            </LazyLoad>
            <div className="card-body">
              <span className="card-text">
                <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
              </span>
              <h6 className="card-text py-1">Sassy Crib and Floor Mirror</h6>
              <h5>$70.12</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyProduct;
