"use client";
import React from "react";
import Link from "next/link";
import { Alert } from "antd";
const plane = () => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, "I was closed.");
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className=" w-full  max-w-[1440px]">
          <div className="flex flex-col items-center justify-center mt-[100px] gap-[42px] mx-2 lg:mx-0">
            <div className="">
              <h1 className="text-[#1F2A37] font-bold text-center font-urbanist leading-[44px] tracking-[-2px] text-[36px]">
                Choose the $100 Plan
              </h1>
              <p className="text-[#9DA4AE] font-normal text-center font-urbanist leading-[24px] text-[16px]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore
              </p>
            </div>
            <div className="">
              <Alert
                className=" w-full max-w-[1081px] "
                message={
                  <>
                    <div className="flex items-center gap-3">
                      <div className="">
                        <img src="/plane/icon.png" alt="" />
                      </div>
                      <div className="">
                        <h1 className="text-[#475467] font-semibold font-urbanist leading-[28px] text-[18px]">
                          Note :
                        </h1>
                      </div>
                    </div>
                  </>
                }
                description={
                  <>
                    <div className="ml-9">
                      <h1 className="text-[#475467] font-normal font-urbanist leading-[24px] text-[16px]">
                        All of our plans include a one-time fee of $100. This
                        fee is required upon choosing any of the available
                        plans.
                      </h1>
                      <h1 className="text-[#475467] pt-2 font-normal font-urbanist leading-[24px] text-[16px]">
                        In the event that your evaluation is not successful, you
                        have the option to reset and retake it. A reset fee of
                        $35 will apply for each evaluation retake.
                      </h1>
                    </div>
                  </>
                }
                type="error"
                closable
                onClose={onClose}
              />
            </div>
            <div className="max-w-[1080px] w-full">
              <div className="flex justify-evenly gap-4 mb-2  flex-wrap ">
                <div className="plane-card w-full max-w-[349px] flex flex-col justify-center">
                  <div className="">
                
                    <button className=" px-[12px] py-[4px] text-[#28A745] bg-[#BCE4C5] font-urbanist text-[8.12px] leading-[12.18px] border-[0.68px] rounded-[6821.86px]">
                      $100
                    </button>
                    
                  </div>
                  <h2 className="text-[36px] tracking-[-2px] font-bold text-[#101828] font-urbanist leading-[44px] mt-4 space-x-1">
                    25K Full
                  </h2>
                  <p className="text-[16px] font-normal text-[#475467] leading-[24px]">
                    Starting Capital $25,000
                  </p>
                  <Link href="/acount">Login
                  <button className=" bg-[#C1F338] border-[#89AD28] mt-[16px] border-[0.68px] rounded-[5.46px] text-[#2D3035] px-[125px] py-[10px] text-[14px] leading-[20px] font-semibold">
                    Rithmic
                  </button>
                    </Link>
                  
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Contracts:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      4 (40 Micros)
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Profit Goal:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Trailing Threshold:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Daily Drawdown:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      None
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      NinjaTrader License:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Included
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Real-Time Fees:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      Included
                    </p>
                  </div>
                </div>
                <div className="plane-card w-full max-w-[349px] flex flex-col justify-center">
                  <div className="">
                    <button className=" px-[12px] py-[4px] text-[#28A745] bg-[#BCE4C5] font-urbanist text-[8.12px] leading-[12.18px] border-[0.68px] rounded-[6821.86px]">
                      $100
                    </button>
                  </div>
                  <h2 className="text-[36px] tracking-[-2px] font-bold text-[#101828] font-urbanist leading-[44px] mt-4 space-x-1">
                    25K Full
                  </h2>
                  <p className="text-[16px] font-normal text-[#475467] leading-[24px]">
                    Starting Capital $25,000
                  </p>
                  <button className=" bg-[#C1F338] border-[#89AD28] mt-[16px] border-[0.68px] rounded-[5.46px] text-[#2D3035] px-[125px] py-[10px] text-[14px] leading-[20px] font-semibold">
                    Rithmic
                  </button>
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Contracts:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      4 (40 Micros)
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Profit Goal:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Trailing Threshold:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Daily Drawdown:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      None
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      NinjaTrader License:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Included
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Real-Time Fees:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      Included
                    </p>
                  </div>
                </div>
                <div className="plane-card w-full max-w-[349px] flex flex-col justify-center">
                  <div className="">
                    <button className=" px-[12px] py-[4px] text-[#28A745] bg-[#BCE4C5] font-urbanist text-[8.12px] leading-[12.18px] border-[0.68px] rounded-[6821.86px]">
                      $100
                    </button>
                  </div>
                  <h2 className="text-[36px] tracking-[-2px] font-bold text-[#101828] font-urbanist leading-[44px] mt-4 space-x-1">
                    25K Full
                  </h2>
                  <p className="text-[16px] font-normal text-[#475467] leading-[24px]">
                    Starting Capital $25,000
                  </p>
                  <button className=" bg-[#C1F338] border-[#89AD28] mt-[16px] border-[0.68px] rounded-[5.46px] text-[#2D3035] px-[125px] py-[10px] text-[14px] leading-[20px] font-semibold">
                    Rithmic
                  </button>
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Contracts:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      4 (40 Micros)
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Profit Goal:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Trailing Threshold:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Daily Drawdown:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      None
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      NinjaTrader License:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Included
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Real-Time Fees:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      Included
                    </p>
                  </div>
                </div>
                <div className="plane-card w-full max-w-[349px] flex flex-col justify-center">
                  <div className="">
                    <button className=" px-[12px] py-[4px] text-[#28A745] bg-[#BCE4C5] font-urbanist text-[8.12px] leading-[12.18px] border-[0.68px] rounded-[6821.86px]">
                      $100
                    </button>
                  </div>
                  <h2 className="text-[36px] tracking-[-2px] font-bold text-[#101828] font-urbanist leading-[44px] mt-4 space-x-1">
                    25K Full
                  </h2>
                  <p className="text-[16px] font-normal text-[#475467] leading-[24px]">
                    Starting Capital $25,000
                  </p>
                  <button className=" bg-[#C1F338] border-[#89AD28] mt-[16px] border-[0.68px] rounded-[5.46px] text-[#2D3035] px-[125px] py-[10px] text-[14px] leading-[20px] font-semibold">
                    Rithmic
                  </button>
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Contracts:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      4 (40 Micros)
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Profit Goal:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Trailing Threshold:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Daily Drawdown:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      None
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      NinjaTrader License:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Included
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Real-Time Fees:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      Included
                    </p>
                  </div>
                </div>
                <div className="plane-card w-full max-w-[349px] flex flex-col justify-center">
                  <div className="">
                    <button className=" px-[12px] py-[4px] text-[#28A745] bg-[#BCE4C5] font-urbanist text-[8.12px] leading-[12.18px] border-[0.68px] rounded-[6821.86px]">
                      $100
                    </button>
                  </div>
                  <h2 className="text-[36px] tracking-[-2px] font-bold text-[#101828] font-urbanist leading-[44px] mt-4 space-x-1">
                    25K Full
                  </h2>
                  <p className="text-[16px] font-normal text-[#475467] leading-[24px]">
                    Starting Capital $25,000
                  </p>
                  <button className=" bg-[#C1F338] border-[#89AD28] mt-[16px] border-[0.68px] rounded-[5.46px] text-[#2D3035] px-[125px] py-[10px] text-[14px] leading-[20px] font-semibold">
                    Rithmic
                  </button>
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Contracts:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      4 (40 Micros)
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Profit Goal:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Trailing Threshold:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Daily Drawdown:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      None
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      NinjaTrader License:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Included
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Real-Time Fees:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      Included
                    </p>
                  </div>
                </div>
                <div className="plane-card w-full max-w-[349px] flex flex-col justify-center">
                  <div className="">
                    <button className=" px-[12px] py-[4px] text-[#28A745] bg-[#BCE4C5] font-urbanist text-[8.12px] leading-[12.18px] border-[0.68px] rounded-[6821.86px]">
                      $100
                    </button>
                  </div>
                  <h2 className="text-[36px] tracking-[-2px] font-bold text-[#101828] font-urbanist leading-[44px] mt-4 space-x-1">
                    25K Full
                  </h2>
                  <p className="text-[16px] font-normal text-[#475467] leading-[24px]">
                    Starting Capital $25,000
                  </p>
                  <button className=" bg-[#C1F338] border-[#89AD28] mt-[16px] border-[0.68px] rounded-[5.46px] text-[#2D3035] px-[125px] py-[10px] text-[14px] leading-[20px] font-semibold">
                    Rithmic
                  </button>
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Contracts:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      4 (40 Micros)
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Profit Goal:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Trailing Threshold:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      $1,500
                    </p>
                  </div>
                  <div className="flex justify-between   mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Daily Drawdown:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      None
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      NinjaTrader License:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Included
                    </p>
                  </div>{" "}
                  <div className="flex justify-between  mt-[16px]">
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      Real-Time Fees:{" "}
                    </p>
                    <p className="text-[16px] leading-[24px] font-normal font-urbanist text-[#475467]">
                      {" "}
                      Included
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default plane;
