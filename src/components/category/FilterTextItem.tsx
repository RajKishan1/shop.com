import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const FilterTextItem = ({ text, href }: { text: string; href?: string }) => {
  return (
    <Link href={`${href}`}>
      <span className="w-full flex justify-between text-slate-600 py-1">
        <h3> {text}</h3> <ChevronRight color="#636b74" />
      </span>
    </Link>
  );
};

export default FilterTextItem;
