import { StoreProduct } from "@/type";
import Image from "next/image";
import React from "react";

interface SearchProductProps {
  item: StoreProduct;
}

const SearchProduct = ({ item }: SearchProductProps) => {
  return (
    <>
      <Image
        src={item.image}
        alt={item.title}
        width={150}
        height={100}
        className="w-32 rounded-md"
      />
      <div>
        <p className="text-xs -mb-1">{item.category}</p>
        <p className="text-lg mt-1 font-medium">{item.title}</p>
        <p className="text-sm mt-2 text-gray-500 line-clamp-2">
          {item.description}
        </p>
        <p className="text-sm absolute right-4 bottom-3 animate-bounce font-bold text-amazon_blue bg-amazon_yellow w-max py-1 px-3 rounded-sm">
          ${item.price}
        </p>
      </div>
    </>
  );
};

export default SearchProduct;
