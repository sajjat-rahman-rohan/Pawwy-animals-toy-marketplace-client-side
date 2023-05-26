import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SpecialToy from "../SpecialToy/SpecialToy";
import ModalVideo from "../ModalVideo/ModalVideo";
import ToyProduct from "../ToyProduct/ToyProduct";
import Partner from "../Partner/Partner";

const Home = () => {
  useEffect(() => {
    document.title = "Pawwy-Animals-Toy | Home";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <SpecialToy></SpecialToy>
      <ModalVideo></ModalVideo>
      <ToyProduct></ToyProduct>
      <Partner></Partner>
    </div>
  );
};

export default Home;
