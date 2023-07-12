import CartPayment from "@/components/CartProduct/CartPayment";
import CartProduct from "@/components/CartProduct/CartProduct";
import ResetCart from "@/components/CartProduct/ResetCart";
import { StateProps, StoreProduct } from "@/type";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <section className="max-w-screen-2xl mx-auto px-6 grid grid-cols-5 gap-10 py-4">
      {productData.length > 0 ? (
        <>
          <div className="bg-white col-span-4 p-4 rounded-lg">
            <div className="flex items-center justify-between border-b border-b-gray-400 pb-1">
              <p className="text-2xl font-semibold text-amazon_blue">
                Shopping Cart
              </p>
              <p className="text-lg font-semibold text-amazon_blue">Subtitle</p>
            </div>
            <div>
              {productData.map((product: StoreProduct) => {
                return (
                  <div key={product.id} className="pt-2 flex flex-col gap-2 ">
                    <CartProduct item={product} />
                  </div>
                );
              })}

              <ResetCart />
            </div>
          </div>
          <div className="bg-white h-64 col-span-1 p-4 rounded-lg flex items-center justify-center">
            <CartPayment />
          </div>
        </>
      ) : (
        <div className="bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
          <h1 className="text-lg font-medium">Your cart is empty</h1>
          <Link href="/">
            <button className="w-52 h-10 bg-amazon_blue text-white rounded-md mt-4 hover:bg-amazon_yellow hover:text-amazon_blue duration-300 transition-all text-lg font-medium">
              Go to shopping
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
