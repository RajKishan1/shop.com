import React from "react";
import NavBar from "./navBar";
import BannerDiv from "./bannerDiv";
import BrandBar from "./BrandBar";

const LandingPage = () => {
  return (
    <div className="h-screen w-full bg-[#FFFFFF] flex flex-col items-center">
      <NavBar />
      <BannerDiv />
      <BrandBar />
    </div>
  );
};

export default LandingPage;
