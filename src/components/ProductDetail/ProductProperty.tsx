"use client";
import React, { useState } from "react";
import Btn from "../btn";
import { Minus, Plus } from "lucide-react";

const ProductProperty = () => {
  const [itemQuantity, setItemQuantity] = useState(1);
  return (
    <div className="h-full flex flex-col justify-between gap-4 text-neutral-800 px-8">
      <div className="h-2/5 w-full flex flex-col gap-3 py-4 border-b-[1px] ">
        <h1 className="font-integral text-4xl">One Life Graphic T Shirt</h1>
        <span className="flex text-2xl gap-4">
          ⭐⭐⭐⭐<p>4.5/5</p>
        </span>
        <span className="flex text-3xl gap-4">
          <h1 className="text-black">$260</h1>
          <h1 className="text-slate-600">$300</h1>
          {/* <span >-40%</span> */}
        </span>
        <p className="w-[70%]">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>
      <div className="h-1/5 w-full flex flex-col gap-2 py-4 border-b-[1px] ">
        <p>Select Colors</p>
        <span className="flex gap-4">
          <span className="h-10 w-10 rounded-full bg-green-900"></span>
          <span className="h-10 w-10 rounded-full bg-blue-900"></span>
          <span className="h-10 w-10 rounded-full bg-emerald-900"></span>
        </span>
      </div>
      <div className="h-1/5 w-full flex flex-col py-4 border-b-[1px] ">
        <p>Choose Size</p>
        <span className="flex w-[90%] gap-3">
          <button className="px-6 h-11 bg-neutral-200 rounded-3xl">
            Small
          </button>
          <button className="w-1/6  h-10 bg-neutral-200 rounded-3xl">
            Medium
          </button>
          <button className="w-1/6 h-10  bg-neutral-200 rounded-3xl">
            Large
          </button>
          <button className="w-1/6  h-10 bg-neutral-200 rounded-3xl ">
            X-Large
          </button>
        </span>
      </div>
      <div className="h-1/5 w-full flex gap-5">
        <div className=" px-5 bg-neutral-300 rounded-3xl flex items-center gap-4">
          <button
            onClick={() => {
              setItemQuantity((e) => e - 1);
            }}
          >
            <Minus />
          </button>
          <h1>{itemQuantity}</h1>
          <button
            onClick={() => {
              setItemQuantity((e) => e + 1);
            }}
          >
            <Plus />
          </button>
        </div>
        <Btn Btnclass="btnblack" text="Add to Cart" />
      </div>
    </div>
  );
};

export default ProductProperty;
