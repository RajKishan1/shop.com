import Filters from "@/components/category/FilterComponent";
import ItemsComponent from "@/components/category/itemsComponent";
import React from "react";

const Page = () => {
  return (
    <div className="flex">
      <Filters />
      <ItemsComponent />
    </div>
  );
};

export default Page;
