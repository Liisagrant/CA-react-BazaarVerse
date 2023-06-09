import React from "react";
import HeroBannerImg from "../../../../public/assets/heroimg.svg";

const HeroBanner = () => {
  return (
    <div className="bg-main p-4 md:p-20 w-full">
      <div className="flex flex-col max-w-7xl mx-auto md:flex-row lg:px-10">
        <div className="px-4 flex flex-col items-center justify-center">
          <h1
            className=" pt-16 md:pt-0 text-bold text-3xl font-black drop-shadow-lg md:text-4xl lg:text-7xl"
            style={{
              background: "linear-gradient(90deg, #F25F5C, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Discover a World of Wonders.
          </h1>
          <hr className="m-2 max-w-2xl text-background"></hr>
          <p class="mt-4 text-md lg:text-xl font-medium text-white opacity-80">
            Explore unique and handcrafted items from local artisans as well as
            the latest trends in electronics from the biggest companies.
          </p>
        </div>
        <img src={HeroBannerImg} className=" pb-12 h-60 md:h-70 lg:h-80 mt-6" />
      </div>
    </div>
  );
};

export default HeroBanner;
