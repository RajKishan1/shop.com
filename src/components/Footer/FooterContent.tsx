import React from "react";
import FooterList from "./FooterList";
import Image from "next/image";
import Link from "next/link";

const FooterContent = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-between items-center bg-red-60">
      <div className="w-[90%] lg:w-[33%] flex flex-col justify-between items-start mb-4 ">
        <h1 className="font-integral text-3xl">SHOP.COM</h1>
        <p className="w-full lg:w-1/2 my-3 text-neutral-600">
          We have clothes that suits your style and which you are proud to wear.
          From women to men.
        </p>
        <span className="flex justify-between w-1/2 lg:w-[30%] my-3">
          <Link href={"https://github.com"}>
            <Image alt="" src="/github.svg" height={35} width={35} />
          </Link>
          <Link href={"https://instagram.com"}>
            <Image alt="" src="/insta.svg" height={35} width={35} />
          </Link>
          <Link href={"https://x.com"}>
            <Image alt="" src="/twitter.svg" height={35} width={35} />
          </Link>
          <Link href={"https://fb.com"}>
            <Image alt="" src="/fb.svg" height={35} width={35} />
          </Link>
        </span>
      </div>
      <div className="flex w-full lg:w-[33%] justify-around mb-5">
        <FooterList
          title="COMPANY"
          li1="About"
          li2="Feature"
          li3="Work"
          li4="Career"
        />
        <FooterList
          title="HELP"
          li1="Customer Support"
          li2="Delivery Detail"
          li3="Terms & Condition"
          li4="Privacy Policy"
        />
      </div>
      <div className="flex flex-row w-full lg:w-[33%]  justify-around">
        <FooterList
          title="FAQ"
          li1="Account"
          li2="Manage Delivery"
          li3="Order"
          li4="Payment"
        />
        <FooterList
          title="RESOURCE"
          li1="Free E-Book"
          li2="Development "
          li3="How to Blog"
          li4="YouTube tutorial"
        />
      </div>
    </div>
  );
};

export default FooterContent;
