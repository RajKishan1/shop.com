import React from "react";
import NavBar from "./navBar";
import BannerDiv from "./bannerDiv";
import BrandBar from "./BrandBar";
import ProductCard from "./productCard";
import Btn from "./btn";
import Category from "./category";
import Heading from "./heading";
// const [offer, setOffer] = useState();
const LandingPage = () => {
  return (
    <div className="h-auto w-full bg-[#FFFFFF] flex flex-col items-center font-satoshi">
      <NavBar />
      <BannerDiv />
      <BrandBar />
      <div className="w-[1440px] h-[700px] flex flex-col items-center justify-between">
        <Heading text="NEW ARRIVALS" />
        <div className="flex items-center justify-around px-[80px] gap-[20px]">
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

      <div className="w-[1440px] h-[700px] flex flex-col items-center justify-between">
        <Heading text="TOP SELLING" />
        <div className="flex items-center justify-around px-[80px] gap-[20px]">
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
      <Category />
    </div>
  );
};

export default LandingPage;
