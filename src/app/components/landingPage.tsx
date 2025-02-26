import React from "react";
import NavBar from "./navBar";
import BannerDiv from "./bannerDiv";

const LandingPage = () => {
  return (
    <div className="h-screen w-full bg-[#FFFFFF] flex flex-col items-center">
      <NavBar />
      <BannerDiv />
    </div>
  );
};

export default LandingPage;
