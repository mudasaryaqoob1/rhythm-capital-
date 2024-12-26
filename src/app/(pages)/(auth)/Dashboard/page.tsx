"use client";
import React from "react";
import { TopBar } from "../components/topbar";
import Card from "../components/cards";
import Link from "next/link";
import { BottomBar } from "../components/bottomBar";
import { Inputs } from "../components/inputs";
import {  Table } from "antd";
import type { TableColumnsType } from "antd";
import Chart from "../components/graphChart";

interface DataType {
  key: React.Key;
  Date: string;
  Instrument: string;
  Entry: string;
  Exit: string;
  PL: string;
}
const Dashboard = () => {
  const cards = [
    {
      title: "Account Balance",
      value: "$30,000",
      icon: <img src="/dashbord/Icon.png" alt="" />,
      description: "↑ 3.2%",
      bgColor: "bg-[#FFFFB0]",
    },
    {
      title: "Profit Target",
      value: "$50,000",
      icon: <img src="/dashbord/trad.png" alt="" />,
      description: "↑ 3.2%",
      bgColor: "bg-[#F4C0C5]",
    },
    {
      title: "Progress",
      value: `$20,000 out of $50,000 `,
      icon: <img src="/dashbord/bar-chart-square-plus.png" alt="" />,
      bgColor: "bg-[#BCE4C5]",
    },
    {
      title: "Trailing Drawdown",
      value: "$2,000 out of $5,000",
      icon: <img src="/dashbord/line-chart-down-02.png" alt="" />,
      bgColor: "bg-[#8AFF8A]",
    },

  ];

  //   table data
  const columns: TableColumnsType<DataType> = [
    {
      title: "Date",
      dataIndex: "Date",
    },
    {
      title: "Instrument",
      dataIndex: "Instrument",
    },
    {
      title: "Entry",
      dataIndex: "Entry",
    },
    {
      title: "Exit",
      dataIndex: "Exit",
    },
    {
      title: "P/L",
      dataIndex: "PL",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      Date: "	09/25/2024",
      Instrument: "S&P 500 ",
      Entry: "$4500",
      Exit: "$4520",
      PL: "+$200",
    },
    {
      key: "2",
      Date: "J	09/25/2024",
      Instrument: "S&P 500 ",
      Entry: "$4500",
      Exit: "$4520",
      PL: "+$200",
    },
    {
      key: "3",
      Date: "	09/25/2024",
      Instrument: "S&P 500",
      Entry: "$4500",
      Exit: "$4520",
      PL: "+$200",
    },
  ];
  return (
    <div className="flex flex-col justify-between h-[100%]">
      {/* TopBar */}
      <div className=" w-full max-w-[1128px] ">
        <TopBar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 bg-gray-50">
        <h1 className="text-[24px] text-[#1F2A37] leading-[32px] font-bold">
          Dashboard
        </h1>
        <p className="font-normal text-[#9DA4AE] font-urbanist leading-[24px] text-[16px]">
          Lorem ipsum dolor sit amet consectetur. Diam adipiscing eget semper
          orci ultrices facilisis fermentum.{" "}
        </p>
        <div className="flex gap-4 ">
          <div className=" max-w-[441px] w-full bg-[url('/dashbord/bg.png')] relative bg-cover rounded-[12px] bg-no-repeat ">
            <div className="w-full ">
              <div className="">
                {/* Text Over Background */}
                <div className="flex pl-4 flex-col">
                  <p className=" pl-4 pt-5 text-[#18181B] font-bold font-urbanist leading-[30px] text-[20px]">
                    Good Afternoon, Hamza 👋
                  </p>
                  <p className="pl-4 font-normal text-[#9DA4AE] font-urbanist leading-[20px] text-[14px] w-full max-w-[262.36px] pt-[10px]">
                    Lorem ipsum dolor sit amet consectetur. Diam adipiscing eget
                    semper orci ultrices facilisis fermentum.{" "}
                  </p>
                  <Link href="/">
                    <button className="py-[8px] border-[1px] border-[#89AD28] bg-[#c1f338] hover:bg-[#9dc72c] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#2D3035] mt-10 mb-6 mx-4   rounded-[8px] px-[12px] md:px-[17px]">
                      View Notifications
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-2 gap-4">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                  description={card.description}
                  bgColor={card.bgColor}
                />
              ))}
            </div>
          </div>
        </div>
        {/* trading acount */}
        <div className=" flex gap-4">
          <div className="w-full max-w-[715px] bg-white shadow-md rounded-[8px] p-4 mt-9 h-[250px] ">
            <div className=" flex justify-between border-b-[1px] pb-4 items-center">
              <div className="">
                <h1 className=" font-urbanist font-bold text-[#000000] leading-[28px] text-[18px]">
                  Active Subscriptions
                </h1>
              </div>
              <div className="">
                <button className=" border-[1px] border-[#D0D5DD] bg-[#FFFFFF] hover:bg-[#efebeb] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#2D3035]  rounded-md py-[8px] px-[12px]">
                  View all
                </button>
              </div>
            </div>
            <div className=" h-[170px] overflow-y-auto scrollbar-hide pt-[10px]">
              <div className=" mb-3 flex justify-between items-center border-[1px] border-[#D0D5DD] rounded-[12px] p-3 bg-[#F9FEEB]">
                <div className="flex items-center gap-3">
                  <img src="/dashbord/Featured.png" alt="" />
                  <h1 className=" font-urbanist font-semibold text-[#2D3035] leading-[24px] text-[16px]">
                    25K Full
                    <span className=" text-[#626974] font-normal">
                      $100/ Month
                    </span>
                  </h1>
                </div>
                <div className="">
                  <button className=" border-[1px] border-[#D0D5DD] bg-[#FFFFFF] hover:bg-[#efebeb] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#3B3F46]  rounded-md py-[8px] px-[12px]">
                    View More
                  </button>
                </div>
              </div>
              <div className=" mb-3 flex justify-between items-center border-[1px] border-[#D0D5DD] rounded-[12px] p-3 bg-[#F9FEEB]">
                <div className="flex items-center gap-3  mb-[10px] ">
                  <img src="/dashbord/Featured.png" alt="" />
                  <h1 className=" font-urbanist font-semibold text-[#2D3035] leading-[24px] text-[16px]">
                    25K Full
                    <span className=" text-[#626974] font-normal">
                      $100/ Month
                    </span>
                  </h1>
                </div>
                <div className="">
                  <button className=" border-[1px] border-[#D0D5DD] bg-[#FFFFFF] hover:bg-[#efebeb] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#3B3F46]  rounded-md py-[8px] px-[12px]">
                    View More
                  </button>
                </div>
              </div>
              <div className=" flex justify-between items-center border-[1px] border-[#D0D5DD] rounded-[12px] p-3 bg-[#F9FEEB]">
                <div className="flex items-center gap-3">
                  <img src="/dashbord/Featured.png" alt="" />
                  <h1 className=" font-urbanist font-semibold text-[#2D3035] leading-[24px] text-[16px]">
                    25K Full
                    <span className=" text-[#626974] font-normal">
                      $100/ Month
                    </span>
                  </h1>
                </div>
                <div className="">
                  <button className=" border-[1px] border-[#D0D5DD] bg-[#FFFFFF] hover:bg-[#efebeb] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#3B3F46]  rounded-md py-[8px] px-[12px]">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[348px] bg-white shadow-md rounded-[8px] p-4 mt-9 h-[250px] ">
            <div className="">
              <h1 className=" font-urbanist font-bold text-[#000000] leading-[28px] text-[18px]">
                Trading View Account
              </h1>
            </div>
            <div className="pt-4">
              <div className="">
                <Inputs
                  type="text"
                  name="TRADING"
                  heading="User Name"
                  Placeholder="TRADING-1@243124"
                  svg={""}
                  svg2
                  className="w-full xl:max-w-[316px] text-[14px] leading-[20px] "
                />
              </div>
              <div className="">
                <Inputs
                  type="password"
                  name="Password"
                  heading="Password"
                  Placeholder="Password"
                  svg={""}
                  svg2={<img src="/visibility.svg" alt="" />}
                  className="mt-[5px] w-full xl:max-w-[316px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* trading table */}
        <div className="flex gap-4">
          .
          <div className="w-full max-w-[715px] bg-white shadow-md rounded-[8px] py-4 mt-9 ">
            <div className="">
              <div className="px-3 py-3">
                <h1 className=" font-urbanist font-bold text-[#000000] leading-[28px] text-[18px]">
                  Recent Trades
                </h1>
              </div>
              <div className="">
                <Table<DataType>
                  columns={columns}
                  dataSource={data}
                  size="middle"
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-[348px] bg-white shadow-md rounded-[8px] p-4 mt-9">
            <div className=" flex justify-between border-b-[1px] pb-4 items-center">
              <div className="">
                <h1 className=" font-urbanist font-bold text-[#000000] leading-[28px] text-[18px]">
                  Useful Links
                </h1>
              </div>
              <div className="">
                <button className=" border-[1px] border-[#D0D5DD] bg-[#FFFFFF] hover:bg-[#efebeb] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#2D3035]  rounded-md py-[8px] px-[14px]">
                  View all
                </button>
              </div>
            </div>
            <div className=" h-[204px] overflow-y-auto scrollbar-hide ">
              <div className="  flex justify-between items-center  p-2">
                <div className="flex items-center gap-1  ">
                  <div className="">
                    {" "}
                    <img src="/dashbord/Avatar2.png" alt="" />
                  </div>
                  <div className="">
                    <h1 className=" font-urbanist font-semibold text-[#2D3035] leading-[24px] text-[16px]">
                      Logout
                    </h1>
                    <h1 className="font-urbanist  leading-[20px] text-[14px] text-[#475467] font-medium">
                      Lorem ipsum dolor sit amet
                    </h1>
                  </div>
                </div>
                <div className="">
                  <button className="">
                    <img src="/dashbord/Button.png" alt="" />
                  </button>
                </div>
              </div>
              <div className="  flex justify-between items-center  p-2">
                <div className="flex items-center gap-1 ">
                  <div className="">
                    {" "}
                    <img src="/dashbord/Avatar.png" alt="" />
                  </div>
                  <div className="">
                    <h1 className=" font-urbanist font-semibold text-[#2D3035] leading-[24px] text-[16px]">
                      Change Your Password
                    </h1>
                    <h1 className="font-urbanist  leading-[20px] text-[14px] text-[#475467] font-medium">
                      Lorem ipsum dolor sit amet
                    </h1>
                  </div>
                </div>
                <div className="">
                  <button className="">
                    <img src="/dashbord/Button.png" alt="" />
                  </button>
                </div>
              </div>
              <div className="  flex justify-between items-center  p-2">
                <div className="flex items-center gap-1  ">
                  <div className="">
                    {" "}
                    <img src="/dashbord/Avatar3.png" alt="" />
                  </div>
                  <div className="">
                    <h1 className=" font-urbanist font-semibold text-[#2D3035] leading-[24px] text-[16px]">
                      Request for Payout
                    </h1>
                    <h1 className="font-urbanist  leading-[20px] text-[14px] text-[#475467] font-medium">
                      Lorem ipsum dolor sit amet
                    </h1>
                  </div>
                </div>
                <div className="">
                  <button className="">
                    <img src="/dashbord/Button.png" alt="" />
                  </button>
                </div>
              </div>
              <div className="  flex justify-between items-center  p-2">
                <div className="flex items-center gap-1  ">
                  <div className="">
                    {" "}
                    <img src="/dashbord/Avatar4.png" alt="" />
                  </div>
                  <div className="">
                    <h1 className=" font-urbanist font-semibold text-[#2D3035] leading-[24px] text-[16px]">
                      Payout Method
                    </h1>
                    <h1 className="font-urbanist  leading-[20px] text-[14px] text-[#475467] font-medium">
                      Lorem ipsum dolor sit amet
                    </h1>
                  </div>
                </div>
                <div className="">
                  <button className="">
                    <img src="/dashbord/Button.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* trading chart */}
        <div className="flex gap-4">
          
          <div className="w-full max-w-[715px] bg-white shadow-md rounded-[8px] py-4 mt-9 ">
            <div className="">
              <div className="px-3 py-3">
               <div className=""> <h1 className=" font-urbanist font-bold text-[#000000] leading-[28px] text-[18px]">
                  Profit & Loss Over Time
                </h1>
                </div>
                <div className="">
                  <Chart/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[348px] bg-white shadow-md rounded-[8px] p-4 mt-9">
            <div className=" flex justify-between border-b-[1px] pb-4 items-center">
              <div className="">
                <h1 className=" font-urbanist font-bold text-[#000000] leading-[28px] text-[18px]">
                  Helpful Articles
                </h1>
              </div>
              <div className="">
                <button className=" border-[1px] border-[#D0D5DD] bg-[#FFFFFF] hover:bg-[#efebeb] transition-all duration-1000 transform font-urbanist font-semibold text-[14px] leading-[20px] text-[#2D3035]  rounded-md py-[8px] px-[14px]">
                  View all
                </button>
              </div>
            </div>
            <div className=" h-[204px] overflow-y-auto scrollbar-hide pt-2 ">
              <img src="/dashbord/Image.png" alt="" />
              <div className="  flex justify-between pt-3  p-2">
                <div className="">
                  <h1 className=" font-urbanist font-semibold text-[#2D3035] leading-[24px] text-[16px]">
                    Can Traders Participate?
                  </h1>
                  <h1 className="font-urbanist w-full max-w-[300px]  leading-[20px] text-[14px] text-[#475467] font-medium">
                    Linear helps streamline software projects, sprints, tasks,
                    and bug tracking. Here’s how to get started.
                  </h1>
                </div>

                <div className="">
                  <button className="">
                    <img src="/dashbord/Icon2.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add more content here */}
      </div>
      {/* fotter  */}
      <BottomBar />
    </div>
  );
};
// npm run build 
export default Dashboard;
