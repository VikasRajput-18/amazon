import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, deleteFavorite } from "@/store/nextSlice";
import { StoreProduct } from "@/type";

interface cartProductProps {
  item: StoreProduct;
}

const FavoriteProduct = ({ item }: cartProductProps) => {
  const {
    _id,
    title,
    description,
    image,
    price,
    category,
  } = item;
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-100 rounded-lg flex flex-col md:flex-row py-2 items-center relative  gap-4 mb-2">
      <Image src={image} alt="Product image" width={150} height={150} />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-sm text-gray-600">
            Unit price:{" "}
            <span className="font-semibold text-amazon_blue">${price}</span>
          </p>
          <button
            onClick={() => {
              dispatch(
                addToCart({
                  _id,
                  title,
                  category,
                  price,
                  image,
                  description,
                  quantity: 1,
                })
              ) && dispatch(deleteFavorite(_id));
            }}
            className="w-44 h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow duration-300 hover:text-black mt-2"
          >
            Add to cart
          </button>
        </div>
        <p className="text-sm absolute right-4 bottom-3 animate-bounce font-bold text-amazon_blue bg-amazon_yellow w-max py-1 px-3 rounded-sm">
          ${item.price * item.quantity}
        </p>
      </div>
    </div>
  );
};

export default FavoriteProduct;
