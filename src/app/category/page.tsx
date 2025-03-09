import Filters from "@/components/category/FilterComponent";
import ItemsComponent from "@/components/category/itemsComponent";
import React from "react";

const Page = () => {
  return (
    <div className="flex gap-1 lg:gap-12 px-2 lg:px-24 ">
      <Filters />
      <ItemsComponent />
    </div>
  );
};

export default Page;
