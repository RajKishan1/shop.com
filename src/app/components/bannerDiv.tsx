import React from "react";
import { Lilita_One } from "next/font/google";
const Lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});
const BannerDiv = () => {
  return (
    <div className="w-[1440px] h-[663px]">
      <div>
        <h1 className={`${Lilita.className}`}>
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p></p>
        
      </div>
      <div></div>
    </div>
  );
};

export default BannerDiv;
