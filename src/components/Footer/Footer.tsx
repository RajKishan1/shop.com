import React from "react";
import FooterContent from "./FooterContent";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-[500px] bg-slate-300 text-black">
      <FooterContent />
      <hr className="w-[80%] bg-slate-800" />
      <span className=" w-full flex justify-between px-12 ">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <span className="flex justify-between">
          <Image alt="paymentIcon" src="/gpay.svg" width={60} height={30} />
          <Image alt="paymentIcon" src="/ipay.svg" width={60} height={30} />
          <Image alt="paymentIcon" src="/paypal.svg" width={60} height={30} />
          <Image alt="paymentIcon" src="/visa.svg" width={60} height={30} />
          <Image alt="paymentIcon" src="/master.svg" width={60} height={30} />
        </span>
      </span>
    </div>
  );
};

export default Footer;
