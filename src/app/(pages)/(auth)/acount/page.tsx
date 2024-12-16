"use client";
import React, { useState } from "react";

import SliderComponent from "../components/testimonialSlider";
import CardInputForm from "../components/cardinput";
import Link from "next/link";
const Acount = () => {
  return (
    <div className=" xl:bg-[url('/bg-imges/acountbg.png')] h-scree  flex justify-center bg-cover ">
      <div className="flex justify-between xl:w-[1440px]">
        {" "}
        {/* Left container */}
        <div className="">
          <div className="w-full hidden xl:flex flex-col items-center justify-center">
            <div className="bg-[url('/bg-imges/bgslider.png')] bg-cover static bg-no-repeat h-[430.7px] w-[553.31px] max-w-full z-10  mt-[56px]">
              <div className=" pl-[200px] mt-[56px]">
                <SliderComponent />
              </div>
            </div>

            <div className="ml-[64px] mt-[100px] ">
              <div>
                <p className="text-[#FFFFFF] font-semibold font-urbanist leading-[44px] text-[36px] tracking-[-2px]">
                  Plan Details
                </p>
                <p className="text-[#FFFFFF] font-normal w-full max-w-[693px] font-urbanist leading-[24px] mt-1 text-[16px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy
                  <br /> nibh euismod tincidun.
                </p>
              </div>
              <div className="my-2">
                <div className="">
                  <div className="flex justify-between  mt-[8px]">
                    <p className="text-[18px] leading-[28px] font-normal text-[#FFFFFF] font-urbanist">
                      25K Full{" "}
                    </p>
                    <p className="text-[18px] text-[#FFFFFF] leading-[28px] font-normal font-urbanist">
                      $100/ Month
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[8px]">
                    <p className="text-[18px] leading-[28px] font-normal text-[#FFFFFF] font-urbanist">
                      Demo Account{" "}
                    </p>
                    <p className="text-[18px] text-[#FFFFFF] leading-[28px] font-normal font-urbanist">
                      $100/ Month
                    </p>
                  </div>

                  <div className="flex justify-between  mt-[8px] py-3 border-t-[1px] border-b-[1px] border-solid border-white">
                    <p className="text-[18px] leading-[28px] font-semibold text-[#FFFFFF] font-urbanist">
                      Total{" "}
                    </p>
                    <p className="text-[18px] text-[#FFFFFF] leading-[28px] font-semibold font-urbanist">
                      $100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right container */}
        <div className="">
          <div className="bg-[url('/bg-imges/bg.png')] xl:bg-none bg-cover">
            <div className="">
              <div className="flex flex-col justify-evenly md:px-0 w-full xl:w-[619px] px-4 sm:px-6">
                <div className="w-full flex flex-col items-center md:justify-center ">
                  <div className="flex flex-col justify-center items-center md:items-start w-full max-w-[456px] gap-6">
                    <div className="lg:mt-[100px]">
                      <img src="/formimges/login-imges/logo-71.png" alt="" />
                    </div>
                    <div className="mb-8">
                      <h1 className="text-[#2D3035] text-center md:text-left font-semibold font-urbanist leading-[38px] text-[30px]">
                        Pay with Card
                      </h1>
                      <h1 className="text-[#475467] text-center md:text-left font-normal font-urbanist tracking-[0%] leading-[24px] text-[16px]">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidun.
                      </h1>
                    </div>
                  </div>
                  <div className="w-full xl:max-w-[456px] max-w-[320px] sm:max-w-[400px]">
                    <div className="w-full">
                      <CardInputForm />
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                      <div className="">
                        <div className="flex items-center">
                          {/* Hidden Checkbox */}
                          <input
                            type="checkbox"
                            id="myCheckbox"
                            className="inputs peer hidden"
                          />
                          {/* Custom Checkbox Label */}
                          <label
                            htmlFor="myCheckbox"
                            className=" lanels relative w-6 h-6 border-2 border-gray-400 rounded-md cursor-pointer flex items-center justify-center peer-checked:bg-[#C1F338] peer-checked:border-[#C1F338]"
                          >
                            {/* Checkmark Icon */}
                            <svg
                              className="w-4 h-4 text-[#2D3035] opacity-0 peer-checked:opacity-100 transition-opacity duration-200 ease-in-out pointer-events-none"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="3"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </label>
                          {/* Text beside Checkbox */}
                          <span className="ml-2 text-gray-600 font-urbanist text-[14px] leading-[20px]">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit.
                          </span>
                        </div>
                        <button className="my-3 py-[10px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform rounded-[8px] px-[80px] sm:px-[120px] md:px-[160px]">
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acount;
