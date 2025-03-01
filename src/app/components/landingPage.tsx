import React from "react";
import NavBar from "./navBar";
import BannerDiv from "./bannerDiv";
import BrandBar from "./BrandBar";
import ProductDisplay from "./productDisplay";
import ProductCard from "./productCard";

const LandingPage = () => {
  return (
    <div className="h-auto w-full bg-[#FFFFFF] flex flex-col items-center font-satoshi">
      <NavBar />
      <BannerDiv />
      <BrandBar />
      {/* <ProductDisplay text="NEW ARRIVAL" />
      <hr className="h-[1px] w-[1240px] bg-slate-300 " />
      <ProductDisplay text="TOP SELLING" /> */}
      <div className="w-[1440px] h-[700px] bg-pink-200">
        <h1 className="font-integral text-[48px] text-black text-center ">
       
        </h1>
        <div className="flex">
          <ProductCard
            src="/images/blackTshirt.png"
            newPrice=""
            rating=""
            productName=""
          />

          <ProductCard
            src="/images/bluejeans.png"
            newPrice=""
            rating=""
            productName=""
          />
          <ProductCard
            src="/images/checkedshirt.png"
            newPrice=""
            rating=""
            productName=""
          />
          <ProductCard
            src="/images/orangetshirt.png"
            newPrice=""
            rating=""
            productName=""
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
