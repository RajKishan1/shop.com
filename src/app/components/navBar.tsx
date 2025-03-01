import React from "react";
import {
  ChevronDownIcon,
  Search,
  ShoppingCart,
  UserCircle,
} from "lucide-react";
const NavBar = () => {
  return (
    <div className="h-[48px] w-[1240px] mx-[100px] my-[62px] flex items-center justify-between text-black">
      <h1 className={`font-integral text-4xl`}>Shop.com</h1>
      <span className="w-[321px] h-[22px] flex justify-between items-center">
        <p className="flex">
          Shop <ChevronDownIcon />
        </p>
        <p>On sale</p>
        <p>New Arrivals</p>
        <p>Brands</p>
      </span>
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
  );
};

export default NavBar;
