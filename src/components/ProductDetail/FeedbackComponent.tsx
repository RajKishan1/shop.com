import React from "react";
import DetailCard from "./DetailCard";
import Btn from "../btn";

const FeedbackComponent = () => {
  return (
    <div className="flex flex-col items-center px-4 lg:px-24 py-3 gap-4">
      <span className="flex flex-col md:flex-row items-center justify-center gap-4">
        <DetailCard
          username="Rex T."
          date="23 August, 2024"
          feedback=""
          star="⭐⭐⭐⭐⭐  "
        />
        <DetailCard
          username="Raju F."
          date="20 August, 2024"
          feedback=""
          star="⭐⭐⭐⭐"
        />
      </span>{" "}
      <span className="flex flex-col md:flex-row items-center justify-center gap-4">
        <DetailCard
          username="Rex T."
          date="23 August, 2024"
          feedback=""
          star="⭐⭐⭐"
        />
        <DetailCard
          username="Raju F."
          date="20 August, 2024"
          feedback=""
          star="⭐⭐⭐⭐"
        />
      </span>
      <span className="hidden lg:flex flex-col md:flex-row items-center justify-center gap-4">
        <DetailCard
          username="Rex T."
          date="23 August, 2024"
          feedback=""
          star="⭐⭐⭐"
        />
        <DetailCard
          username="Raju F."
          date="20 August, 2024"
          feedback=""
          star="⭐⭐⭐⭐"
        />
      </span>
      <Btn text="Load More Reviews" Btnclass="btnwhite mt-5" />
    </div>
  );
};

export default FeedbackComponent;
