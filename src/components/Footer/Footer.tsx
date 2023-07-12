import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-20 bg-amazon_light text-gray-300 flex gap-3 items-center justify-center">
      <Image
        src="/images/logo.png"
        className="w-24 mt-3 object-contain"
        width={130}
        height={40}
        alt="logo"
      />
      <p className="text-sm ">
        All Rights reserved{" "}
        <a
          className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-200"
          target="_blank"
          href="https://www.linkedin.com/in/vikas-rajput-499041223/"
        >
          Vikas Rajput
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
