import React from "react";
import {
  ChevronDownIcon,
  Search,
  ShoppingCart,
  UserCircle,
} from "lucide-react";
import { Lilita_One } from "next/font/google";
const Lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});
const NavBar = () => {
  return (
    <div className="h-[48px] w-[1240px] mx-[100px] mt-[62px] bg-red-100 flex items-center justify-between text-black">
      <h1 className={`${Lilita.className} text-4xl`}>Shop.com</h1>
      <span className="w-[321px] h-[22px] flex justify-between items-center">
        <p className="flex">
          Shop <ChevronDownIcon />
        </p>
        <p>On sale</p>
        <p>New Arrivals</p>
        <p>Brands</p>
      </span>
      <div className="relative rounded-full bg-slate-100 h-full w-[40%] flex items-center px-2 ">
        <Search className="absolute " />
        <input
          type="text"
          placeholder="Search for Products.."
          className="w-[100%] -pl-6 h-full bg-transparent ml-8 focus:outline-none"
        />
      </div>
      <span className="w-[10%] flex items-center justify-evenly">
        <ShoppingCart />
        <UserCircle />
      </span>
    </div>
  );
};

export default NavBar;
