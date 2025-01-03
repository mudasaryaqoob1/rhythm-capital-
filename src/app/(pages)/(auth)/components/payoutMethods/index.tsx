import React, { useState } from "react";
import Link from "next/link";
import { Inputs } from "@/app/(pages)/(auth)/components/inputs";
// import React, { useState } from 'react';
import { Modal } from "antd";
import { Select } from "antd";
export const PayoutMethods = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiry(e.target.value);
  };
  const handleCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvc(e.target.value);
  };
  const OPTIONS = [
    "1234-5678-9012-3456",
    "4242-5424-9012-3456",
    "1234-5678-9012-3456",
    "1234-5678-9012-3456",
  ];
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <div className="">
      <div className="">
        <div onClick={showModal}>
          <div className="">
            <div className="my-3">
              <h1 className="text-[18px] text-[#2D3035] leading-[28px] font-semibold">
                Current Payout Method
              </h1>
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
      </div>
      <div>
        <div className="">
          <div className="my-3">
            <h1 className="text-[18px] mt-5 text-[#2D3035] leading-[28px] font-semibold">
              Available Payout Method
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center  lg:grid-cols-3  gap-4">
            <div
              onClick={showModal}
              className="p-4 max-w-[351px] w-full  rounded-xl bg-white border-[1px] border-[#D0D5DD]"
            >
              <div className="">
                <img src="/payoutimges/Payaneer.png" alt="" />
              </div>
              <div className="pt-3">
                <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                  Payoneer
                </h1>
              </div>
            </div>
            <div
              onClick={showModal}
              className="w-full p-4 max-w-[351px] rounded-xl bg-white border-[1px] border-[#D0D5DD]"
            >
              <div className="">
                <img src="/payoutimges/Mastercard.png" alt="" />
              </div>
              <div className="pt-3">
                <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                  Mastercard
                </h1>
              </div>
            </div>
            <div
              onClick={showModal}
              className="w-full p-4 max-w-[351px] rounded-xl bg-white border-[1px] border-[#D0D5DD]"
            >
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
      <Modal
        title="Add Account Details"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Continue"
      >
        <div className="w-full xl:max-w-[454px]">
          <Inputs
            type="text"
            name="Name on Card*"
            heading="Name on Card*"
            Placeholder="Name on Card*"
            svg={""}
            svg2
            className="w-full xl:max-w-[454px] "
          />
        </div>
        <div className="my-4">
          <label className="font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
            Card Number*
          </label>
          <Select
            className="outline-none  focus:outline-none focus:ring-4 w-full xl:max-w-[454px] focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338]  border-[2px] rounded-[8px] bg-gray py-[24px]  mt-[9.7px]"
            placeholder="Enter Card Number"
            value={selectedItems}
            onChange={setSelectedItems}
            style={{ width: "454" }}
            options={filteredOptions.map((item) => ({
              value: item,
              label: item,
            }))}
          />
        </div>
        <div className=" flex ga gap-4 mb-6">
          {/* Expiry Date */}
          <div className="w-[84px]">
            <label className="font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px] ">
              Expiry Date
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={handleExpiryChange}
              className="block shadow-sm mt-3 p-2 text-gray-700 outline-none focus:outline-none focus:ring-4 w-full xl:max-w-[454px] focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338]  border-[2px] rounded-[8px] bg-gray"
            />
          </div>
          {/* CVC */}
          <div className="w-[84px]">
            <label className="font-normal font-urbanist text-[16px] text-[#4D525A] leading-[24px]">
              CVC
            </label>
            <input
              type="text"
              placeholder="•••"
              value={cvc}
              onChange={handleCVCChange}
              className="block shadow-sm mt-3 p-2 text-gray-700 outline-none focus:outline-none focus:ring-4 w-full xl:max-w-[454px] focus:ring-[#1018280D] focus:ring-offset-1 focus:ring-offset-[#c1f338]  border-[2px] rounded-[8px] bg-gray"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
