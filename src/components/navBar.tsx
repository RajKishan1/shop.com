import React from "react";
import {
  ChevronDownIcon,
  LucideMenu,
  Search,
  ShoppingCart,
  UserCircle,
} from "lucide-react";


import Link from "next/link";
const NavBar = () => {
  return (
    <>
      {/* // mobile navbar */}
      <div className="md:hidden h-[64px] w-full bg-slate-00 text-black flex items-center justify-between px-[16px]">
        <LucideMenu />
        <h1 className="text-[25.2px] font-integral  max-2xl:-ml-[45px]">SHOP.CO</h1>
        <span className="w-[96px] flex justify-between">
          <Search />
          <ShoppingCart />
          <UserCircle />
        </span>
      </div>
      {/* // desktop navbar */}
      <div className="hidden md:h-[48px] w-[95%] max-2xl:w-full mx-auto   px-24 my-[24px] md:flex items-center justify-between text-black">
        <h1 className={`font-integral text-4xl`}>Shop.com</h1>
        <div className="w-[321px] gap-2 max-2xl:w-[280px] h-[22px] flex justify-between items-center">
          <span className="flex items-center">
            <p>Shop</p> <ChevronDownIcon height={16} width={16} />
          </span>
          <Link href={""}>
            {" "}
            <p>On sale</p>{" "}
          </Link>
          <Link href={""}>
            {" "}
            <p>New Arrivals</p>{" "}
          </Link>
          <Link href={""}>
            <p>Brands</p>
          </Link>
        </div>
        <div className="relative rounded-full bg-neutral-100 h-full w-[40%] flex items-center px-2 ">
          <Search className="absolute " />
          <input
            type="text"
            placeholder="Search for products.."
            className="w-[100%] -pl-6 h-full bg-transparent ml-8 focus:outline-none"
          />
        </div>
        <span className="w-[10%] flex items-center justify-evenly">
          <ShoppingCart />
          <UserCircle />
        </span>
      </div>
    </>
  );
};

export default NavBar;
