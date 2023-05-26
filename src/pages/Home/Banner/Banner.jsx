import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "@smastrom/react-rating/style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner-con banner-bg-1 d-flex align-items-center">
            <div className="container">
              <div className=" row">
                <div className="col-lg-7 col-md-10 me-lg-auto banner-box">
                  <h5>
                    Unraveling the Mysteries and Charm of Feline Companions
                  </h5>
                  <h1>Cat: The Fascinating World of Cats</h1>
                  <p>
                    Discover the captivating world of cats with this insightful
                    exploration of our feline friends. From their enigmatic
                    behavior to their endearing companionship, cats have long
                    been cherished by humans and revered throughout history.
                    This comprehensive guide delves into the diverse aspects of
                    cat life, shedding light on their remarkable qualities,
                    unique characteristics, and the profound bond they share
                    with us.
                  </p>
                  <div className=" pt-3">
                    <button type="submit">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-2 d-flex align-items-center">
            <div className="container">
              <div className=" row ">
                <div className="col-lg-8 col-md-10 me-lg-auto  banner-box">
                  <h5>
                    A Heartwarming Exploration into the World of Teddy Bears
                  </h5>
                  <h1>Teddy Bears: Cuddly Companions of Comfort</h1>
                  <p>
                    Discover the origins of the Teddy Bear, tracing its roots
                    back to the early 20th century when it became an iconic
                    symbol of comfort and companionship. Learn about the
                    fascinating story of how President Theodore Roosevelt
                    inspired the creation of the Teddy Bear through a famous
                    hunting trip incident, leading to a toy revolution that
                    continues to this day.
                  </p>
                  <div className=" pt-3">
                    <button type="submit">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-con banner-bg-3 d-flex align-items-center">
            <div className="container">
              <div className=" row ">
                <div className="col-lg-8 col-md-10 me-lg-auto  banner-box">
                  <h5>Exploring the World of Canine Wonders</h5>
                  <h1>Dogs: Our Loyal Companions</h1>
                  <p>
                    Embark on a delightful journey into the enchanting world of
                    dogs, our faithful and cherished companions. This
                    comprehensive guide unveils the fascinating aspects of
                    canine life, celebrating their unwavering loyalty,
                    unwavering love, and their unique ability to bring joy and
                    happiness into our lives.Uncover the incredible feats of
                    dogs in various fields, such as search and rescue, therapy,
                    guide and assistance work, and police and military service.
                    Marvel at their acute
                  </p>
                  <div className=" pt-3">
                    <button type="submit">Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
