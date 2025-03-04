import React from "react";
import FooterList from "./FooterList";
import Image from "next/image";
import Link from "next/link";

const FooterContent = () => {
  return (
    <div className="flex justify-between bg-red-60">
      <div className="w-[33%]  flex flex-col justify-between">
        <h1 className="font-integral text-3xl">SHOP.COM</h1>
        <p className=" w-1/2">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <span className="flex justify-between w-[30%]">
          <Link href={""}>
            <Image alt="" src="/github.svg" height={35} width={35} />
          </Link>
          <Link href={""}>
            <Image alt="" src="/insta.svg" height={35} width={35} />
          </Link>
          <Link href={""}>
            <Image alt="" src="/twitter.svg" height={35} width={35} />
          </Link>
          <Link href={""}>
            <Image alt="" src="/fb.svg" height={35} width={35} />
          </Link>
        </span>
      </div>
      <span className="flex w-[33%] justify-around">
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
      </span>
      <span className="flex w-[33%]  justify-around">
        <FooterList
          title="FAQ"
          li1="Account"
          li2="Manage Delivery"
          li3="Order"
          li4="Payment"
        />
        <FooterList
          title="RESOURCES"
          li1="Free E-Book"
          li2="Development Tutorial"
          li3="How to Blog"
          li4="YouTube tutorial"
        />
      </span>
    </div>
  );
};

export default FooterContent;
