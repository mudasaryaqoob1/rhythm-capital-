"use client";
import React from "react";
import { TopBar } from "../components/topbar";
import Link from "next/link";
import { BottomBar } from "../components/bottomBar";
import { Alert } from "antd";
import FlattenTable from "../components/flattenAccount";

const FlattenAccount = () => {
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, "I was closed.");
  };
  return (
    <div className="flex flex-col justify-between h-[100%]">
      {/* TopBar */}
      <div className=" w-full max-w-[1128px] ">
        <TopBar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between md:items-center">
          <div className="">
            <h1 className="text-[24px] text-[#1F2A37] leading-[32px] font-bold">
              Request Payout
            </h1>
            <p className="font-normal text-[#9DA4AE] font-urbanist leading-[24px] text-[16px]">
              You can View, manage and request the payout from here
            </p>
          </div>
          <div className=" flex gap-2">
            <Link href="/">
              <button className="py-[10px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#2D3035]  rounded-[8px] px-[10px] md:px-[14px]">
                View Payouts
              </button>
            </Link>
          </div>
        </div>
        {/* alert note */}
        <div className="mt-5">
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
                      In case of emergencies click on (Flatten Accounts) button
                      to close everything
                    </h1>
                  </div>
                </div>
              </>
            }
            description={
              <>
                <div className="ml-9">
                  <h1 className="text-[#475467] font-normal font-urbanist leading-[24px] text-[16px]">
                    If you're a Tradovate user{" "}
                    <a
                      className="text-[#DC3545]  font-semibold underline"
                      href=""
                    >
                      Click here
                    </a>{" "}
                    to login to the tradovate web platform to close positions
                  </h1>
                  <h1 className="text-[#475467] pt-2 font-normal font-urbanist leading-[24px] text-[16px]">
                    All accounts under (RYTHM-248556) will be flatten out
                    including current orders and open positions. This tool is to
                    be used as a last resort (like when you lose internet
                    connection or electricity and have no power). Please do not
                    use this tool when you're already connected with charts open
                    as you might trigger multiple orders
                  </h1>
                </div>
              </>
            }
            type="error"
            closable
            onClose={onClose}
          />
        </div>
        <div className="mt-5">
          <Alert
            message={
              <>
                <div className="flex items-center gap-3">
                  <div className="">
                    <img src="/flattenAccount/anaonce.png" alt="" />
                  </div>
                  <div className="">
                    <h1 className="text-[#475467] font-semibold font-urbanist leading-[30px] text-[20px]">
                      Announcement{" "}
                    </h1>
                  </div>
                </div>
              </>
            }
            description={
              <>
                <div className="ml-9">
                  <h1 className="text-[#475467] font-normal font-urbanist leading-[24px] text-[16px]">
                  The Flatten button has been temporarily disabled due to technical issues.Please use an alternative method that can be found here:
                  <a href="" className=" underline">https://support.atf.com/hc/en-us/articles/4406419325723-Do-I-Contact-Rythm-or-NinjaTrader-If-I-Need-to-Flatten-Because-of-Technical-Issues</a>
                  </h1>
                 
                </div>
              </>
            }
            type="warning"
            closable
            onClose={onClose}
          />
        </div>

        {/* request a payouts div start */}
        <div className="p mt-4 rounded-xl border-[1px] bg-white border-[#D0D5DD]">
          <div className="">
            <FlattenTable/>
          </div>
        </div>
        {/*  taable content start */}
      </div>
      {/* fotter  */}
      <BottomBar />
    </div>
  );
};
export default FlattenAccount;
