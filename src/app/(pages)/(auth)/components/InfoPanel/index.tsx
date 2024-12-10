"use client";
import React from "react";
import SliderComponent from "../testimonialSlider";
import Image from "next/image";

const InfoPenal = () => {
  const images = [
    "/formimges/login-imges/Avatar5.png",
    "/formimges/login-imges/Avatar4.png",
    "/formimges/login-imges/Avatar3.png",
    "/formimges/login-imges/Avatar2.png",
    "/formimges/login-imges/Avatar.png",
  ];

  return (
    <div className="bg-[url('/bg-imges/bg3.png')] bg-cover bg-no-repeat w-full hidden xl:flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-[236px] mt-[80px]">
        <SliderComponent />
      </div>
      <div className="ml-[64px] mt-[30px]">
        <div className="mb-8">
            <img src="\formimges\login-imges\star.png" alt="" />
        </div>
        <div>
          <p className="text-[#FFFFFF] font-semibold font-urbanist leading-[62px] text-[50px] tracking-[-2px]">
            Start Getting Profit with <br />
            <span className="text-[#022213] font-semibold font-urbanist leading-[62px] text-[50px] tracking-[-2px]">
              Rhythm Capital
            </span>
          </p>
          <p className="text-[#FFFFFF] font-normal w-full max-w-[693px] font-urbanist leading-[28px] text-[18px]">
            Create a free account and get full access to all features for
            30-days. No credit card needed. Get started in 2 minutes.
          </p>
        </div>
        <div className="my-7">
          <div className="flex -space-x-4">
            {images.map((img, index) => (
              <div key={index} className="rounded-full shadow-lg border-2 border-white">
                <Image
                  src={img}
                  alt={`Avatar ${index + 1}`}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPenal;
