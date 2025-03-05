import Link from "next/link";
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
      <Link href={""}>
        <h1 className="font-bold text-xl my-2 tracking-widest">{title}</h1>
      </Link>
      <Link href={""}>
        <p>{li1}</p>
      </Link>
      <Link href={""}>
        <p>{li2}</p>
      </Link>
      <Link href={""}>
        <p>{li3}</p>
      </Link>
      <Link href={""}>
        <p>{li4}</p>
      </Link>
    </div>
  );
};

export default FooterList;
