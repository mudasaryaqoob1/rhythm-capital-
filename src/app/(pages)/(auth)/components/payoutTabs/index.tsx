import React, { useState } from "react";
import { Tabs } from "antd";
import Link from "next/link";
const PayoutTabs: React.FC = () => {
  const [activeKey, setActiveKey] = useState("1"); // Default Active Tab

  const items = [
    {
      label: "Payout",
      key: "1",
      children: (
        <div>
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center  lg:grid-cols-4  gap-4">
              <div className="w-full p-4 max-w-[258.25px] rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className="">
                  <img src="/payoutimges/Payaneer.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                    Payoneer
                  </h1>
                </div>
              </div>
              <div className="w-full p-4 max-w-[258.25px] rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className="">
                  <img src="/payoutimges/Mastercard.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                  Mastercard 
                  </h1>
                </div>
              </div>
              <div className="w-full p-4 max-w-[258.25px] rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className="">
                  <img src="/payoutimges/Paypal.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                  Paypal 
                  </h1>
                </div>
              </div>
              <div className="w-full p-4 max-w-[258.25px] rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className="">
                  <img src="/payoutimges/Stripe.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                  Stripe
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Payout Method",
      key: "2",
      children:  <div>
      <div className="">
        <div className="">
            <div className="my-3">
                <h1 className="text-[18px] text-[#2D3035] leading-[28px] font-semibold">Current Payout Method</h1>
            </div>
        <div className="w-full flex justify-between items-end p-4 max-w-[351px] rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className=" ">
                <div className="">
                  <img src="/payoutimges/Stripe.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                  Stripe (Visa ending 1234)
                  </h1>
                </div>
                </div>
                <div className="">
                <Link href="/">
                  <h1 className="font-semibold text-[#89AD28] font-urbanist leading-[20px] text-[14px]">
                    Edit
                  </h1>
                </Link>
                {/* <h1  className="font-semibold text-[#89AD28] font-urbanist leading-[20px] text-[14px]">Edit</h1> */}
                </div>
              </div>
        </div>
      </div>
      <div>
          <div className="">
          <div className="my-3">
                <h1 className="text-[18px] text-[#2D3035] leading-[28px] font-semibold">Available Payout Method</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center  lg:grid-cols-3  gap-4">
              <div className="p-4 max-w-[351px] w-full  rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className="">
                  <img src="/payoutimges/Payaneer.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                    Payoneer
                  </h1>
                </div>
              </div>
              <div className="w-full p-4 max-w-[351px] rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className="">
                  <img src="/payoutimges/Mastercard.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                  Mastercard 
                  </h1>
                </div>
              </div>
              <div className="w-full p-4 max-w-[351px] rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className="">
                  <img src="/payoutimges/Paypal.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                  Paypal 
                  </h1>
                </div>
              </div>
            
            </div>
          </div>
        </div>
    </div>
    ,
    },
  ];

  const onTabChange = (key: string) => {
    setActiveKey(key);
  };

  return <Tabs activeKey={activeKey} onChange={onTabChange} items={items} />;
};

export default PayoutTabs;
