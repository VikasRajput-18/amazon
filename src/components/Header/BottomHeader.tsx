import { removeUser } from "@/store/nextSlice";
import { StateProps } from "@/type";
import { signOut } from "next-auth/react";
import React from "react";
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";

const BottomHeader = () => {
  const { userInfo } = useSelector((state: StateProps) => state.next);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut();
    dispatch(removeUser(null));
  };
  return (
    <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
      <p className="flex items-center gap-1 h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        <LuMenu className="text-xl" /> All
      </p>
      <p className="hidden md:inline-flex items-center gap-1 h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Today{"'"}s Deals
      </p>
      <p className="hidden md:inline-flex items-center gap-1 h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Customer Service
      </p>
      <p className="hidden md:inline-flex items-center gap-1 h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Registry
      </p>
      <p className="hidden md:inline-flex items-center gap-1 h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Gift Cards
      </p>
      <p className="hidden md:inline-flex items-center gap-1 h-8 border border-transparent hover:border-white cursor-pointer duration-300 px-2">
        Sell
      </p>
      {userInfo?.name && (
        <button
          onClick={() => handleSignout()}
          className="hidden md:inline-flex items-center gap-1 h-8 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300 px-2"
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default BottomHeader;
