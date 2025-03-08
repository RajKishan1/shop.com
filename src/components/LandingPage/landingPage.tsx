import React from "react";
import BannerDiv from "./bannerDiv";
import BrandBar from "./BrandBar";
import ProductCard from "./productCard";
import Btn from "../btn";
import Category from "./category";
import Heading from "../heading";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FeedbackBar from "../feedbackBar";
const LandingPage = () => {
  return (
    <div className="h-auto w-full bg-[#FFFFFF] flex flex-col items-center font-satoshi">
      <BannerDiv />
      <BrandBar />
      <div className="w-full flex flex-col items-center justify-between">
        <Heading text="NEW ARRIVALS" />
        <div className="w-full flex items-center justify-around px-[80px] gap-[20px] overflow-hidden">
          <ProductCard
            src="/images/blackTshirt.png"
            newPrice="120"
            rating="3.5"
            productName="T-shirt with Tape Details"
            oldPrice="2.50"
            // discount="20"
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
      <hr className="w-full h-[1px] bg-slate-300 mt-[64px]" />
      <div className="w-full h-[700px] flex flex-col items-center justify-between overflow-hidden">
        <Heading text="TOP SELLING" />
        <div className="flex items-center justify-around px-[80px] gap-[20px]">
          <ProductCard
            src="/images/blackTshirt.png"
            newPrice="120"
            rating="3.5"
            productName="T-shirt with Tape Details"
            oldPrice="2.50"
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
      <div className="w-full h-[140px] flex justify-between my-20">
        <Heading text="OUR HAPPY CUSTOMERS" />{" "}
        <span className="flex mt-[85px] gap-4">
          <ArrowLeft className="text-black" />
          <ArrowRight className="text-black" />
        </span>
      </div>
      <FeedbackBar />
      {/* <Offer />
      <Footer /> */}
    </div>
  );
};

export default LandingPage;
