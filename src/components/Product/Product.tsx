import { Products, StoreProduct } from "@/type";
import Image from "next/image";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavourite } from "@/store/nextSlice";

interface Props {
  productData: Products[];
}

const Product: React.FC<Props> = ({ productData }) => {
  const dispatch = useDispatch();
  const { productData: productList } = useSelector((state: any) => state.next);

  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {productData?.map((item: Products) => {
        const {
          id,
          title,
          description,
          images,
          price,
          category,
          creationAt,
          updatedAt,
        } = item;

        const handleAddToCart = () => {
          const storeProduct: StoreProduct = {
            id,
            title,
            category,
            price,
            images,
            description,
            creationAt,
            updatedAt,
            quantity: 1,
          };

          dispatch(addToCart(storeProduct));
        };
        const handleFavourite = () => {
          const storeProduct: StoreProduct = {
            id,
            title,
            category,
            price,
            images,
            description,
            creationAt,
            updatedAt,
            quantity: 1,
          };

          dispatch(addToFavourite(storeProduct));
        };

        return (
          <div
            key={id}
            className="w-full bg-white rounded-lg p-4 text-black border border-gray-300 group overflow-hidden"
          >
            <div className="w-full h-[320px] relative">
              <Image
                src={images[0]}
                alt={title}
                width={250}
                height={250}
                className="object-contain h-80 w-full scale-90 hover:scale-100 duration-200 transition-all"
              />
              <div className="w-10 h-20 bg-white absolute right-0 top-1/3 border border-gray-300 flex items-center flex-col justify-center rounded-sm translate-x-20 transition-all duration-300 group-hover:translate-x-0">
                <span
                  onClick={handleAddToCart}
                  className="w-full hover:bg-amazon_yellow cursor-pointer  h-full flex items-center justify-center"
                >
                  <HiShoppingCart
                    size={18}
                    className="hover:scale-125 transition-all duration-300"
                  />
                </span>
                <span
                  onClick={handleFavourite}
                  className="w-full border-t hover:bg-amazon_yellow border-gray-300 cursor-pointer  h-full flex items-center justify-center"
                >
                  <FaHeart
                    size={18}
                    className="hover:scale-125 transition-all duration-300"
                  />
                </span>
              </div>
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-xs text-gray-500 capitalize tracking-wide">
                {category.name}
              </p>
              <p className="text-base font-medium line-clamp-1">{title}</p>
              <p className="text-sm font-bold text-amazon_blue bg-amazon_yellow w-max py-1 px-3 rounded-sm">
                ${price}
              </p>
              <p className="line-clamp-3 mt-3 mb-3 text-xs text-gray-600 text-justify">
                {description}
              </p>

              <button
                onClick={handleAddToCart}
                className="h-10 font-medium bg-amazon_blue hover:bg-amazon_yellow hover:text-amazon_blue transition-all duration-300 text-white rounded-md py-2 w-full"
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
