import React from "react";
interface prop {
  title: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
}
const FooterList = ({ title, li1, li2, li3, li4 }: prop) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-xl my-2">{title}</h1>
      <p>{li1}</p>
      <p>{li2}</p>
      <p>{li3}</p>
      <p>{li4}</p>
    </div>
  );
};

export default FooterList;
