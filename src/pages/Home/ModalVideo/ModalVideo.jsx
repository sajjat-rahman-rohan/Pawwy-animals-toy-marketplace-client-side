import React from "react";
import "bootstrap/js/src/modal";
import { FaPlayCircle } from "react-icons/fa";
<link
  rel="stylesheet"
  href="https://video-react.github.io/assets/video-react.css"
/>;
import AOS from "aos";
import "aos/dist/aos.css";
import "./ModalVideo.css";
import { useEffect } from "react";

const ModalVideo = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="py-5">
      <div className="modal_video">
        <div className="video">
          <div className="modal_video_overlay" data-aos="zoom-in">
            <div className="d-flex justify-content-center">
              <a data-bs-toggle="modal" data-bs-target="#exampleModalv">
                Play Video Ad<FaPlayCircle></FaPlayCircle>
              </a>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModalv"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div>
                <video width="750" height="500" controls>
                  <source
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
