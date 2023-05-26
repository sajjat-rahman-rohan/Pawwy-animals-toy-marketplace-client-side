import React from "react";
import LazyLoad from "react-lazy-load";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SpecialToy.css";

const SpecialToy = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 " data-aos="flip-down">
            <LazyLoad>
              <img
                src="https://img.freepik.com/free-psd/happy-valentine-s-day-discount-sale-instagram-social-media-post-template_106176-1755.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                alt=""
                width="100%"
              />
            </LazyLoad>
          </div>
          <div className="col-lg-8">
            <h1 className="text-center mb-5">Valentine's Special Teddy</h1>
            <div className="row g-sm-4">
              <div className="col-md-6" data-aos="flip-down">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="d-flex align-items-center px-2">
                    <div className="img">
                      <LazyLoad>
                        <img
                          src="https://img.freepik.com/free-psd/happy-girl-sitting-reading-book-leaning-against-teddy-bear-isolated-background_1150-65065.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                          alt="..."
                        />
                      </LazyLoad>
                    </div>
                    <div className="info">
                      <div className="card-body">
                        <h5 className="card-title">High teddy bear</h5>
                        <p className="card-text mb-1">
                          vulputate mi tempus, porttitor est
                        </p>
                        <h5 className="card-text m-0">
                          <small className="text-body-secondary">
                            Add to card+
                          </small>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="d-flex align-items-center px-2">
                    <div className="img">
                      <LazyLoad>
                        <img
                          src="https://img.freepik.com/premium-psd/3d-rendering-cute-bear-sitting-planet-rocket-passing-by-illustration_52659-780.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=sph"
                          alt="..."
                        />
                      </LazyLoad>
                    </div>
                    <div className="info">
                      <div className="card-body">
                        <h5 className="card-title">bluis teddy </h5>
                        <p className="card-text mb-1">
                          This is a wider card with supporting text below
                        </p>
                        <h5 className="card-text m-0">
                          <small className="text-body-secondary">
                            Add to card+
                          </small>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6" data-aos="flip-down">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="d-flex align-items-center px-2">
                    <div className="img">
                      <LazyLoad>
                        <img
                          src="https://img.freepik.com/premium-psd/teddy-bear-mockup-3d-rendering_288804-150.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=sph"
                          alt="..."
                        />
                      </LazyLoad>
                    </div>
                    <div className="info">
                      <div className="card-body">
                        <h5 className="card-title">Hello bear</h5>
                        <p className="card-text mb-1">Canon EOS 5D</p>
                        <h5 className="card-text m-0">
                          <small className="text-body-secondary">
                            Add to card+
                          </small>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="d-flex align-items-center px-2">
                    <div className="img">
                      <LazyLoad>
                        <img
                          src="https://img.freepik.com/premium-psd/teddy-bear-ball-3d-rendering_288804-148.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=sph"
                          alt="..."
                        />
                      </LazyLoad>
                    </div>
                    <div className="info">
                      <div className="card-body">
                        <h5 className="card-title">Valentine teddy </h5>
                        <p className="card-text mb-1">
                          consectetur adipisicing elit. Doloribus, delectus!
                        </p>
                        <h5 className="card-text m-0">
                          <small className="text-body-secondary ">
                            Add to card+
                          </small>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialToy;
