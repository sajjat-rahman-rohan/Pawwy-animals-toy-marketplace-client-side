import React, { useEffect } from "react";
import "bootstrap/js/src/modal";
import "./Gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="gallery_part">
      <div className="container">
        <div className="d-flex justify-content-center " data-aos="zoom-in">
          <div className="pb-4">
            <h1>Aminals Toy Gallery</h1>
          </div>
        </div>
        <div className="gallery_con_main">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/premium-vector/cute-cat-clambing-playing-ball-cartoon-icon-illustration-animal-icon-concept-isolated-flat-cartoon-style_138676-1392.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.1.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalfirst"
                    >
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalfirst"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/premium-vector/cute-cat-clambing-playing-ball-cartoon-icon-illustration-animal-icon-concept-isolated-flat-cartoon-style_138676-1392.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.1.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/free-photo/one-teddy-bear-hugs-another_144627-15245.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a data-bs-toggle="modal" data-bs-target="#exampleModaltow">
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModaltow"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/free-photo/one-teddy-bear-hugs-another_144627-15245.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/free-photo/pet-accessories-still-life-concept-set_23-2148949592.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.1.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalthree"
                    >
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalthree"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/free-photo/pet-accessories-still-life-concept-set_23-2148949592.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.1.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/free-photo/cat-red-basket_1339-707.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalfour"
                    >
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalfour"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/free-photo/cat-red-basket_1339-707.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 py-4">
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/premium-vector/dog-pet-design-elements_23-2147498916.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalfive"
                    >
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalfive"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/premium-vector/dog-pet-design-elements_23-2147498916.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/premium-vector/illustration-different-kind-toys_1308-1549.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a data-bs-toggle="modal" data-bs-target="#exampleModalsix">
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalsix"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/premium-vector/illustration-different-kind-toys_1308-1549.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/premium-vector/cute-cat-cartoon_33070-2754.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalseven"
                    >
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalseven"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/premium-vector/cute-cat-cartoon_33070-2754.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/free-vector/realistic-dog-items-concept-with-bone-balls-leash-soft-beds-pet-blue-icons_1284-51868.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModaleight"
                    >
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModaleight"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/free-vector/realistic-dog-items-concept-with-bone-balls-leash-soft-beds-pet-blue-icons_1284-51868.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/free-vector/different-types-toys-wooden-shelf_1308-29204.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.1.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalnine"
                    >
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalnine"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/free-vector/different-types-toys-wooden-shelf_1308-29204.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.1.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/free-vector/pet-dog-icons-collar-bowl-dog-illustration-dogs-kennel_1284-51486.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.1.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a data-bs-toggle="modal" data-bs-target="#exampleModalten">
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModalten"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/free-vector/pet-dog-icons-collar-bowl-dog-illustration-dogs-kennel_1284-51486.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.1.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/free-photo/cute-small-striped-bengal-kitten-sitting-playing-with-blue-toy_181624-14353.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.1.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModaleleven"
                    >
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModaleleven"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/free-photo/cute-small-striped-bengal-kitten-sitting-playing-with-blue-toy_181624-14353.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.1.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="gallery_con">
                <div className="gallery_img" data-aos="zoom-in">
                  <img
                    src="https://img.freepik.com/free-vector/hand-drawn-flat-christmas-toys-collection_23-2149158332.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                    className="w-100"
                    alt=""
                    height={300}
                  />
                  <div className="gallery_img_overlay">
                    <a
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModallast"
                    >
                      VIEW IMG
                    </a>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="exampleModallast"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                      <img
                        src="https://img.freepik.com/free-vector/hand-drawn-flat-christmas-toys-collection_23-2149158332.jpg?size=626&ext=jpg&uid=R101542575&ga=GA1.2.1175214580.1668228643&semt=ais"
                        alt=""
                        height={300}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
