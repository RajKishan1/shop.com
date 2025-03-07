import React from "react";
import ImageSec from "./ImageSec";
import ProductProperty from "./ProductProperty";

const MainComponent = () => {
  return (
    <div className="w-full flex flex-col md:flex-row px-24 justify-around">
      <ImageSec />
      <ProductProperty />   
    </div>
  );
};

export default MainComponent;
