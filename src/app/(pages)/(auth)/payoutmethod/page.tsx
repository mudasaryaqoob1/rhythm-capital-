"use client";
import React from "react";
import { TopBar } from "../components/topbar";
import Link from "next/link";
import { BottomBar } from "../components/bottomBar";
import PayoutTabs from "../components/payoutTabs";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-between h-[100%]">
      {/* TopBar */}
      <div className=" w-full max-w-[1128px] ">
        <TopBar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
          <div className="">
            <h1 className="text-[24px] text-[#1F2A37] leading-[32px] font-bold">
            Payouts
            </h1>
            <p className="font-normal text-[#9DA4AE] font-urbanist leading-[24px] text-[16px]">
            You can View, manage and update the payout from here
            </p>
          </div>
          <div className=" flex gap-2">
            <Link href="/">
              <button className="py-[10px] border-[1px] border-[#D0D5DD] bg-[#FFFFFF] hover:bg-[#9dc72c] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#3B3F46] rounded-[8px] px-[10px] md:px-[14px]">
                Download CSV
              </button>
            </Link>{" "}
            <Link href="/">
              <button className="py-[10px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#2D3035]  rounded-[8px] px-[10px] md:px-[14px]">
              Request a Payout
              </button>
            </Link>
          </div>
        </div>

        {/* trading acount */}
        <div className="mt-5">
          <PayoutTabs/>
        </div>
        {/* trading table */}

        {/* trading chart */}

        {/* Add more content here */}
      </div>
      {/* fotter  */}
      <BottomBar />
    </div>
  );
};
// npm run build
export default Dashboard;
