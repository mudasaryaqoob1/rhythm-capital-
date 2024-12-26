"use client";
import React, { useState } from "react";

const TeamSelection = () => {
  const platforms = [
    { logo: "/tradingPlatform/logotrading1.png" },
    { logo: "/tradingPlatform/logotrading2.png" },
    { logo: "/tradingPlatform/logotrading3.png" },
    { logo: "/tradingPlatform/logotrading4.png" },
    { logo: "/tradingPlatform/logotrading5.png" },
    { logo: "/tradingPlatform/logotrading6.png" },
    { logo: "/tradingPlatform/logotrading7.png" },
    { logo: "/tradingPlatform/logotrading8.png" },
  ];

  const [selectedPlatform, setSelectedPlatform] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-between">
      {/* Header */}
      <div className="text-center mt-[100px] mb-[50px]">
        <h1 className="text-[#1F2A37] font-semibold font-urbanist leading-[44px] text-[36px] tracking-[-2px]">
          Choose the Trading Platform
        </h1>
        <p className="text-[#9DA4AE] text-center font-normal font-urbanist leading-[24px] text-[16px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore
        </p>
      </div>

      {/* Platforms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className={`flex items-center justify-between border-[1px] rounded-xl p-4 w-[310px] md:w-[346px] h-[102px] bg-white shadow-md cursor-pointer ${
              selectedPlatform === index ? "border-[#C1F338]" : "border-gray-300"
            }`}
            onClick={() => setSelectedPlatform(index)} // پورے div پر کلک سے انتخاب ہوگا
          >
            <img
              src={platform.logo}
              alt={`Platform ${index + 1}`}
              className="w-[120px]"
            />
            <div
              className={`relative w-6 h-6 rounded-full ${
                selectedPlatform === index
                  ? "bg-[#C1F338] border-2 border-[#C1F338]"
                  : "bg-white border-2 border-gray-400"
              }`}
            >
              <input
                type="radio"
                name="platform"
                className="appearance-none absolute w-full h-full cursor-pointer"
                checked={selectedPlatform === index}
                readOnly // ویلیو صرف state کے ذریعے سیٹ ہو رہی ہے
              />
              {selectedPlatform === index && (
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Selected Plan and Confirm Button */}
      <div className="w-full flex justify-center border-t-[1px] mt-[76px] px-3 py-8 md:px-0 border-[#D0D5DD]">
        <div className="flex justify-between w-full max-w-[1080px]">
          <div>
            <h1 className="text-[#2D3035] font-semibold font-urbanist leading-[28px] text-[18px]">
              Selected Plans : {selectedPlatform !== null ? "01" : "00"}
            </h1>
          </div>
          <div>
            <button className="bg-[#C1F338] hover:bg-lime-600 border-[1px] rounded-md border-[#89AD28] font-semibold font-urbanist leading-[24px] text-[16px] px-[56px] py-[10px]">
              Confirm
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#022213] w-full flex justify-center py-5 px-3 md:px-0">
        <div className="w-full max-w-[1140px] flex flex-col md:flex-row gap-2 sm:gap-0 justify-between">
          <div>
            <h1 className="text-[#FFFFFF] font-normal font-urbanist leading-[18px] text-[12px]">
              © 2022 Copyright Rythm Capital. All Rights Reserved.
            </h1>
          </div>
          <div className="flex gap-2">
            <img src="/tradingPlatform/facebook.png" alt="" />
            <img src="/tradingPlatform/insta.png" alt="" />
            <img src="/tradingPlatform/twitter.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSelection;
