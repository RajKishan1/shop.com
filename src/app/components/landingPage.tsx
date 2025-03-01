import React from "react";
import NavBar from "./navBar";
import BannerDiv from "./bannerDiv";
import BrandBar from "./BrandBar";
import ProductCard from "./productCard";
import Btn from "./btn";
// const [offer, setOffer] = useState();
const LandingPage = () => {
  return (
    <div className="h-auto w-full bg-[#FFFFFF] flex flex-col items-center font-satoshi">
      <NavBar />
      <BannerDiv />
      <BrandBar />
      <div className="w-[1440px] h-[700px] bg-red-50 flex flex-col items-center justify-between">
        <h1 className="font-integral text-[48px] text-black text-center mt-[60px] ">
          NEW ARRIVALS
        </h1>
        <div className="flex items-center justify-around px-[80px]">
          <ProductCard
            src="/images/blackTshirt.png"
            newPrice="120"
            rating="3.5"
            productName="T-shirt with Tape Details"
            oldPrice="2.50"
            discount="20"
          />

          <ProductCard
            src="/images/bluejeans.png"
            newPrice="12"
            rating="4.2"
            productName="Skinny Fit Jeans"
          />
          <ProductCard
            src="/images/checkedshirt.png"
            newPrice="2.5"
            rating="3.5"
            productName="Checkered Shirt"
          />
          <ProductCard
            src="/images/orangetshirt.png"
            newPrice="6"
            rating="2.3"
            productName="Sleeve Striped T-Shirt"
          />
        </div>
        <Btn text="View All" Btnclass="btnwhite" />
      </div>
    </div>
  );
};

export default LandingPage;
