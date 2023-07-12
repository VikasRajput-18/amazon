import { resetCart } from "@/store/nextSlice";
import React from "react";
import { useDispatch } from "react-redux";

const ResetCart = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure to reset your items from the cart?"
    );
    if (confirmReset) {
      dispatch(resetCart([]));
    }
  };

  return (
    <button
      className="w-44 h-10 mt-6 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
      onClick={handleReset}
    >
      Reset Cart
    </button>
  );
};

export default ResetCart;
