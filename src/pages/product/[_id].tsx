import { addToCart, addToFavourite } from "@/store/nextSlice";
import { StoreProduct } from "@/type";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch } from "react-redux";

import { BeatLoader } from "react-spinners";

const DynamicPage = () => {
  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setProduct(router.query);
  }, [router.query]);

  const handleAddToCart = () => {
    const storeProduct: StoreProduct = {
      _id: product._id,
      title: product.title,
      category: product.category,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: 1,
      brand: product.brand,
      isNew: product.isNew,
      oldPrice: product.oldPrice,
    };

    dispatch(addToCart(storeProduct));
  };
  const handleFavourite = () => {
    const storeProduct: StoreProduct = {
      _id: product._id,
      title: product.title,
      category: product.category,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: 1,
      brand: product.brand,
      isNew: product.isNew,
      oldPrice: product.oldPrice,
    };

    dispatch(addToFavourite(storeProduct));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4 md:py-10">
      {isLoading ? (
        <div className="w-full flex flex-col gap-6 items-center justify-center py-20">
          <p>Your Product is loading...</p>
          <BeatLoader color="#131921" size={40} />
        </div>
      ) : (
        <div className="w-full  grid md:grid-cols-3 gap-3 bg-gray-100 rounded-lg">
          <div className="flex relative overflow-hidden group p-10 pr-20 items-center justify-center  rounded-lg">
            <Image
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg"
            />
            <div className="w-10 h-20 bg-white absolute right-3 top-2/3 border border-gray-300 flex items-center flex-col justify-center rounded-sm translate-x-20 transition-all duration-300 group-hover:translate-x-0">
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
          <div className="md:col-span-2 flex flex-col gap-3 justify-center p-4">
            <p className="text-xs md:text-sm text-amazon_blue font-semibold -mb-3">
              {product.categoryName}
            </p>
            <h1 className="text-xl md:text-3xl tracking-wider font-semibold">
              {product.title}
            </h1>
            <p className="text-sm text-gray-600">{product.description}</p>
            <div>
              <p className="text-base text-gray-600 flex items-center gap-1">
                Price :{" "}
                <span className="text-lg text-amazon_blue font-semibold">
                  ${product.price}
                </span>
              </p>
              <button
                onClick={handleAddToCart}
                className="w-full md:w-96 h-12 bg-amazon_blue text-gray-200 hover:bg-amazon_yellow hover:text-amazon_blue rounded-lg duration-300 transition-all text-base font-semibold mt-10 hover:mt-12"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicPage;
