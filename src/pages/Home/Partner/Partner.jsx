import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Partner.css";
import { useEffect } from "react";

const Partner = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-light partner my-5">
      <div className="container">
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
            },
            576: {
              width: 576,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
        >
          <div className="row g-2 text-center">
            <SwiperSlide>
              <div className="col-md-3 col-sm-4">
                <img
                  src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/4.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-3 col-sm-4" data-aos="zoom-in">
                <img
                  src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/1.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-3 col-sm-4" data-aos="zoom-in">
                <img
                  src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/2.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-3 col-sm-4" data-aos="zoom-in">
                <img
                  src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/3.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-3 col-sm-4" data-aos="zoom-in">
                <img
                  src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/6.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-3 col-sm-4" data-aos="zoom-in">
                <img
                  src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/4.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-3 col-sm-4" data-aos="zoom-in">
                <img
                  src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/5.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-3 col-sm-4" data-aos="zoom-in">
                <img
                  src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/2.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-3 col-sm-4" data-aos="zoom-in">
                <img
                  src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/6.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-md-3 col-sm-4" data-aos="zoom-in">
                <img
                  src="https://htmldemo.net/kidol/kidol/assets/img/brand-logo/6.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
