import React from "react";
import FooterContent from "./FooterContent";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative w-full pb-12 bg-neutral-100 text-black px-24">
      <FooterContent />
      <hr className="w-full bg-neutral-300 text-black my-8 h-[2px]" />
      <span className=" w-full flex justify-between">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <span className="flex justify-between ">
          <Image alt="paymentIcon" src="/gpay.svg" width={80} height={60} />
          <Image alt="paymentIcon" src="/ipay.svg" width={80} height={60} />
          <Image alt="paymentIcon" src="/paypal.svg" width={80} height={30} />
          <Image alt="paymentIcon" src="/visa.svg" width={80} height={30} />
          <Image alt="paymentIcon" src="/master.svg" width={80} height={30} />
        </span>
      </span>
    </div>
  );
};

export default Footer;
