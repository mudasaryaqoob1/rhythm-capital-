"use client";
import React from "react";
import { Select } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
}
export const TopBar = ({}) => {
  return (
    <>
      <div className="flex justify-between w-full pl-14    gap-2 md:gap-0 items-center px-2 lg:px-[30px] py-[15px]">
    
        <div className="  border-[1px] rounded-md  w-full px-[14px] py-[13px] md:flex hidden gap-2 max-w-[378px]">
          <img src="/topbar/search-lg.png" alt="" />
          <input
            className="outline-none w-full font-urbanist text-[#667085] font-medium leading-[20px] text-[14px]"
            type="text"
            placeholder="Search Now"
          />
        </div>
        <div className=" w-full max-w-[500px] flex justify-between md:justify-center items-center gap-0 lg:gap-3 ">
          <div className="">
            <img src="/topbar/ganti.png" alt="" />
          </div>
          <div className=" border-[1px] w-full max-w-[200px] hidden xl:flex lg:max-w-[150px] border-[#D0D5DD] rounded-md px-4 py-[10px]">
            <div className="font-urbanist text-center text-[#344054] font-semibold leading-[24px] text-[16px]">
              Balance : $ 320
            </div>
          </div>
          <Select className=" custom-select"
    defaultValue="lucy"
    style={{ width: 260 }}
    onChange={handleChange}
    options={[
      {
        value: "jack",
        label: (
          <div className="flex justify-between items-center">
            <div className="flex gap-1 lg:gap-3 items-center">
              <img src="/sidebar/Avatar.png" alt="Avatar" className="" />
              <div>
                <h1 className="font-semibold text-[#2D3035] text-sm">Muhammad Hamza</h1>
                <p className="text-xs text-[#898F99]">Designation</p>
              </div>
            </div>
            {/* <img src="/sidebar/Button.png" alt="Button" className="w-5 h-5" /> */}
          </div>
        ),
      },
      {
        value: "lucy",
        label: (
          <div className="flex gap-2 justify-between items-center">
            <div className="flex gap-1 lg:gap-4 items-center">
              <img src="/sidebar/Avatar.png" alt="Avatar" className="" />
              <div>
                <h1 className="font-semibold text-sm">Muhammad Hamza</h1>
                <p className="text-xs  text-[#898F99]">Designation</p>
              </div>
            </div>
            <div className="pl-2">
            {/* <img src="/sidebar/Button.png" alt="Button" className="" /> */}

            </div>
          </div>
        ),
      },
    ]}
  />

          {/* <div className="">
          <div className="flex bg-slate-600">
         <div className=" flex  border-t-[1px] border-[#D0D5DD] w-[280px]">
            <div className=" flex gap-3">
                <div className="">
                    <img src="/sidebar/Avatar.png" alt="" />
                </div>
                <div className="">
                    <h1 className="font-urbanist font-semibold leading-[20px] text-[14px]">Muhammad Hamza</h1>
                    <h1 className="font-urbanist font-normal text-[#BBBFC4] leading-[24px] text-[16px]">mhamza421@gmail.com</h1>
                </div>
            </div>
            <div className="">
                <img src="/sidebar/Button.png" alt="" />
            </div>
          </div>
         </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
