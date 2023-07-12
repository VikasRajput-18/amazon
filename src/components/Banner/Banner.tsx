import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <Image
            priority
            src="/images/slider/sliderImg_1.jpg"
            className="w-full h-full object-cover"
            width={900}
            height={500}
            alt="banenr"
          />
        </div>
        <div>
          <Image
            src="/images/slider/sliderImg_2.jpg"
            className="w-full h-full object-cover"
            width={900}
            height={500}
            alt="banenr"
          />
        </div>
        <div>
          <Image
            src="/images/slider/sliderImg_3.jpg"
            className="w-full h-full object-cover"
            width={900}
            height={500}
            alt="banenr"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/slider/sliderImg_4.jpg"
            className="w-full h-full object-cover"
            width={900}
            height={500}
            alt="banenr"
          />
        </div>
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-400 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default Banner;
