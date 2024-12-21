"use client";
import React from "react";
import { TopBar } from "../components/topbar";
import Card from "../components/cards";
import { FaMoneyBillWave, FaChartLine, FaBullseye, FaArrowDown } from "react-icons/fa";


const Dashboard = () => {
   const cards = [
      {
        title: "Account Balance",
        value: "$30,000",
        icon:   <img src="/dashbord/Icon.png" alt="" />,
        description: "↑ 3.2%",
        bgColor: "bg-[#FFFFB0]",
      },
      {
        title: "Profit Target",
        value: "$50,000",
        icon: <FaBullseye className="text-red-500" size={24} />,
        description: "↑ 3.2%",
        bgColor: "bg-red-100",
      },
      {
        title: "Progress",
        value: "$20,000 out of $50,000",
        icon: <FaChartLine className="text-green-500" size={24} />,
        bgColor: "bg-green-100",
      },
      {
        title: "Trailing Drawdown",
        value: "$2,000 out of $5,000",
        icon: <FaArrowDown className="text-green-500" size={24} />,
        bgColor: "bg-green-100",
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
        <h1 className="text-xl font-bold">Dashboard Content</h1>
     <div className="flex gap-4">
     <div className="w-full max-w-[441px] bg-[url('/dashbord/bg.png')] bg-contain bg-no-repeat relative py-5 px-4 ">
     <div className="">
    {/* Text Over Background */}
    <div className="">
      <p className=" text-black">hkfks kdfl;f;lsdjfsjfkjsdjk fkdjf sjfkjf asjfkjwj j kfkjd skjfskjf dkfkesj fkjdsadffffffffffff</p>
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
        {/* Add more content here */}
      </div>
      {/* fotter  */}
      <div className="bg-[#022213] px-6 py-4">
         <div className=" flex justify-between">
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

export default Dashboard;
