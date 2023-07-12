import Image from "next/image";
import React, { useEffect } from "react";

import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "@/type";
import { signIn, useSession } from "next-auth/react";
import { addUser } from "@/store/nextSlice";

const Header = () => {
  const { favouriteData, productData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

  return (
    <header className="w-full h-20 flex items-center bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="w-full h-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        <Link
          href="/"
          className="border-transparent px-2 border hover:border-white cursor-pointer duration-200 flex items-center justify-center h-[70%]"
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            className="w-28 object-cover mt-2"
            width={130}
            height={40}
          />
        </Link>
        {/* delivery  */}
        <div className="border-transparent px-2 border hover:border-white cursor-pointer duration-200  items-center justify-center gap-3 h-[70%] hidden xl:inline-flex">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">India</p>
          </div>
        </div>
        {/* searchbar  */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            type="text"
            placeholder="Search Amazon Products"
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-white"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black absolute right-0 flex items-center justify-center rounded-tr-md rounded-br-md cursor-pointer text-2xl">
            <HiOutlineSearch />
          </span>
        </div>
        {/* signin */}
        {userInfo ? (
          <div className="text-xs text-gray-100 flex items-center gap-3 justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
            <Image
              src={userInfo.image}
              alt={userInfo.name}
              width={30}
              height={30}
              className="w-8 h-8 rounded-full cover"
            />
            <div className="text-xs text-gray-100 flex flex-col ">
              <p className="text-white font-bold">{userInfo.name}</p>
              <p className="truncate">{userInfo.email}</p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
          >
            <p>Hello, Sign in</p>
            <p className="flex items-center font-bold gap-1">
              Account & Lists{" "}
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        )}
        {/* favouriye  */}
        <div className="relative text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
          {favouriteData.length > 0 && (
            <span className="absolute right-1 top-2 w-5 h-5 p-1 rounded-full border border-gray-400 flex items-center justify-center text-xs text-amazon_yellow">
              {favouriteData.length}
            </span>
          )}
        </div>
        {/* cart  */}
        <Link
          href="/cart"
          className="relative cursor-pointer px-2 flex items-center justify-center border border-transparent hover:border-white"
        >
          <Image
            src="/images/cartIcon.png"
            alt="logo"
            className=" object-contain mt-2 cursor-pointer"
            width={40}
            height={40}
          />
          <p className="text-xs text-white font-bold mt-3 ml-2">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-1 left-[28px] font-semibold">
            {productData.length}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
