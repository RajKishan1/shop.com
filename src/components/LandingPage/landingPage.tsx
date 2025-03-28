import React from "react";
import BannerDiv from "./bannerDiv";
import BrandBar from "./BrandBar";
import ProductCard from "./productCard";
import Btn from "../btn";
import Category from "./category";
import Heading from "../heading";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FeedbackBar from "../feedbackBar";
import Link from "next/link";
const LandingPage = () => {
  return (
    <div className="h-auto w-full bg-[#FFFFFF] flex flex-col items-center font-satoshi overflow-hidden">
      <BannerDiv />
      <BrandBar />
      <div id="newArrival" className="w-full flex flex-col items-center justify-between py-8">
        <Heading text="NEW ARRIVALS" />
        <div className="w-full flex items-center justify-center px-24 gap-[20px] mt-16 overflow-x-auto overflow-y-hidden">
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
            productName="Striped T-Shirt"
          />
        </div>
        <Btn text="View All" Btnclass="btnwhite my-6" link="/category" />
      </div>
      <hr className="w-full h-[1px] bg-slate-300 px-24" />
      <div className="w-full flex flex-col items-center justify-between py-8">
        <Heading text="TOP SELLING" />
        <div className="w-full flex items-center justify-center px-24 gap-[20px] mt-16 overflow-x-auto overflow-y-hidden">
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
            productName="Striped T-Shirt"
          />
        </div>
        <Btn text="View All" Btnclass="btnwhite my-6" link="/category" />
      </div>
      <Category />
      <div className="w-full flex justify-between items-center px-4 md:px-24 my-8 ">
        <Heading text="OUR HAPPY CUSTOMERS" />
        <span className="flex gap-4">
          <Link href={""}>
            <ArrowLeft className="text-black" />
          </Link>
          <Link href={""}>
            <ArrowRight className="text-black" />
          </Link>
        </span>
      </div>
      <FeedbackBar />
      {/* <Offer />
      <Footer /> */}
    </div>
  );
};

export default LandingPage;
