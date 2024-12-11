"use client";
import React from "react";
import { Inputs } from "@/app/(pages)/(auth)/components/inputs"
import Image from "next/image";
import Link from "next/link";
import InfoPenal from "../components/InfoPanel";
import OTPComponent from "../components/OTPComponent"
const OtpRecovery = () => {

  return (
<div className=" xl:bg-[url('/bg-imges/ds.png')] 2xl:w-full flex lg:justify-center bg-cover ">
      <div className="flex xl:justify-center md:w-[1440px]">
        {" "}
        {/* Left container */}
        <div className="2xl:w-full">
          <div className="bg-[url('/bg-imges/bg.png')] xl:bg-none bg-cover md:max-w-[619px] 2xl:w-full">
            <div className=" h-screen  w-[619px] bg-no-repeat ">
              <div className="flex flex-col w-full xl:w-[619px] justify-evenly fixed h-screen">
              <div className="w-full flex flex-col items-center justify-center ">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="">
                <img src="/formimges/login-imges/logo-71.png" alt="" />
              </div>
              <div className="mb-8 xl:w-[381px]">
                <h1 className="text-[#2D3035] font-semibold text-center font-urbanist leading-[38px] text-[30px]">
                Account Recovery
                </h1>
                <h1 className="text-[#626974] font-normal text-center font-urbanist tracking-[0%] leading-[24px] text-[16px]">
                Reset your password to regain access to your account. 
                </h1>
              </div>
            </div>
            <div className="w-full px-6 lg:px-32 xl:p-0 xl:w-[360px]">
              <div className="w-full xl:max-w-[360px]">
                
              <OTPComponent />
              </div>
            
            </div>
            <div className="">
              <div className="flex justify-center mt-4">
                <h1 className="text-[#626974] font-normal text-center font-urbanist tracking-[0%] leading-[20px] text-[14px]">
                  Don’t have an account?
                </h1>
                <h1 className="text-[#2D3035] font-semibold text-center font-urbanist tracking-[0%] leading-[20px] text-[14px]">
                  Sign up
                </h1>
              </div>
            </div>
          </div>
          <div className=" ml-[32px] text-[#475467] font-urbanist text-[14px] leading-5">
            <h1>© Rythm Capital 2027</h1>
          </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right container */}
        <div className="w-full">
          <InfoPenal />
        </div>
      </div>
    </div>

















  
  );
};

export default OtpRecovery;
