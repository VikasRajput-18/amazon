import { StoreProduct } from "@/type";
import Image from "next/image";
import React from "react";

import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  descreaseQuantity,
  increaseQuantity,
} from "@/store/nextSlice";

interface CartProps {
  item: StoreProduct;
}

const CartProduct = ({ item }: CartProps) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    category,
    price,
    images,
    description,
    creationAt,
    updatedAt,
    quantity,
  } = item;

  const handleDelete = (itemId: number) => {
    dispatch(deleteProduct({ id }));
  };

  return (
    <div className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-lg flex items-center gap-4">
      <Image
        src={item.images[0]}
        width={150}
        height={150}
        alt={item.title}
        className="object-cover rounded-md"
      />
      <div className="flex items-end justify-between w-full px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-amazon_blue">{item.title}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-sm text-gray-600">
            Unit Price{" "}
            <span className="ml-2 mt-1 font-semibold text-amazon_blue bg-amazon_yellow px-5 py-1 rounded-sm">
              ${item.price}
            </span>{" "}
          </p>
          <div className="flex items-center  gap-6 mt-2 mb-3">
            <div className="flex items-center justify-between shadow-lg shadow-gray-300 gap-4 px-4 py-1 bg-white border border-gray-300 rounded-md mt-1">
              <span
                onClick={() => {
                  dispatch(
                    descreaseQuantity({
                      id,
                      title,
                      category,
                      price,
                      images,
                      description,
                      creationAt,
                      updatedAt,
                      quantity: 1,
                    })
                  );
                }}
                className="cursor-pointer border-r pr-2 border-gray-200"
              >
                <LuMinus />
              </span>
              <span>{item.quantity}</span>
              <span
                onClick={() => {
                  dispatch(
                    increaseQuantity({
                      id,
                      title,
                      category,
                      price,
                      images,
                      description,
                      creationAt,
                      updatedAt,
                      quantity: 1,
                    })
                  );
                }}
                className="cursor-pointer border-l pl-2 border-gray-200"
              >
                <LuPlus />
              </span>
            </div>
            <div
              onClick={() => handleDelete(id)}
              className="group cursor-pointer hover:border-gray-300 px-3 py-1 rounded-md border border-transparent flex items-center gap-2 hover:text-red-600 hover:text-lg duration-300 transition-all"
            >
              <IoMdClose />
              <p className="text-red-600 text-sm w-0 overflow-hidden group-hover:w-16 transition-all duration-300">
                Remove
              </p>
            </div>
          </div>
        </div>

        <div className="text-lg font-semibold text-amazon_blue">
          ${item.price * item.quantity}
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
